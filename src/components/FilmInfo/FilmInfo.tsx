import s from "./FilmInfo.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Film } from "../../types";
type props = {
  isLoading: boolean;
  content?: Film;
  children?: React.ReactNode;
};

const FilmInfo: FC<props> = ({ isLoading, content, children }) => {
  const selectFilm = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm
  );
  const film = content || selectFilm;
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
      <ul className={s.film_info}>
        <li>{film?.releaseYear}</li>
        <li>{film?.ageRating}</li>
        <li>{film?.durationMinutes}</li>
        <li className={s.film_info_rating}>{film?.rating}</li>
      </ul>
      <p className={s.film_descr}>{film?.description}</p>
      <p className={s.film_descr}>Cast: {film?.cast}</p>
      <p className={s.film_descr}>Genres: {film?.genres}</p>
      {children}
    </div>
  );
};

export default FilmInfo;
