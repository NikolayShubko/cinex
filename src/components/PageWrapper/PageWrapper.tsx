import { FC, useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import s from "./PageWrapper.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Film } from "../Slider/mockdata";
const PageWrapper: FC = () => {
  const selectedFilm: Film | null = useAppSelector(
    (state) => state.selectedFilmReducer?.currentFilm
  );

  const [delayedFilm, setDelayedFilm] = useState<Film | null>(null);

  useEffect(() => {
    if (!selectedFilm) {
      setDelayedFilm(null);
      return;
    }

    const timeout = setTimeout(() => {
      setDelayedFilm(selectedFilm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [selectedFilm]);
  return (
    <>
      <div>nav</div>
      <div className={`${s.film} ${delayedFilm ? s.visible : ""}`}>
        <ul className={s.film_info}>
          <li>{delayedFilm?.year}</li>
          <li>{delayedFilm?.ageRating}</li>
          <li>{delayedFilm?.duration}</li>
          <li>{delayedFilm?.rating}</li>
        </ul>
        <p className={s.film_descr}>{delayedFilm?.description}</p>
        <p className={s.film_descr}>Cast: {delayedFilm?.actors}</p>
        <p className={s.film_descr}>Genres: {delayedFilm?.genres}</p>
      </div>
      <Slider />
    </>
  );
};

export default PageWrapper;
