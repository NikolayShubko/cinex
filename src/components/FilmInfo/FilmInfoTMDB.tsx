import s from "./FilmInfo.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { FC, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../Button/Button";
import {
  useGetTMDBMovieGenresQuery,
  useGetTMDBTvGenresQuery,
} from "../../store/apiTMDB/api";

type props = {
  isLoading: boolean;
  content?: object;
  children?: React.ReactNode;
};

const FilmInfoTMDB: FC<props> = ({ isLoading, content, children }) => {
  const selectedFilm = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm
  );
  useEffect(() => console.log(content?.genre_ids), [content]);
  const film = content || selectedFilm;

  const { data: movieGenres, isLoading: movieLoading } =
    useGetTMDBMovieGenresQuery("movie");
  const { data: tvGenres, isLoading: tvLoading } =
    useGetTMDBTvGenresQuery("tv");

  const filmGenres = film?.genre_ids
    ?.map((id) =>
      film?.title
        ? movieGenres.genres.find((g) => g.id === id)
        : tvGenres.genres.find((g) => g.id === id)
    )
    ?.map((g) => g.name)
    .join(", ");

  if (isLoading) {
    return (
      <>
        <div className={`${s.film} `}>
          <Skeleton
            baseColor="#1f1f1f"
            highlightColor="#d32f2f"
            height={16}
            count={7}
            duration={1.5}
            style={{ margin: "10px" }}
          />
        </div>
      </>
    );
  }
  return (
    <div className={`${s.film} `}>
      <h1 className={s.film_header}>{film?.name || film?.title}</h1>
      <ul className={s.film_info}>
        <li className={s.film_info_rating}>
          {Number(film?.vote_average).toFixed(1)}
        </li>
        <li>{film?.release_date || film?.first_air_date}</li>
      </ul>
      <p className={s.film_descr}>{film?.overview}</p>

      <p className={s.film_descr}>Genres: {filmGenres}</p>
      {children}
    </div>
  );
};

export default FilmInfoTMDB;
