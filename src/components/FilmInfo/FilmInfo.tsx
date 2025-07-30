import { FC } from "react";
import { Film } from "../Slider/mockdata";

import s from "./FilmInfo.module.scss";

interface Props {
  delayed: Film;
}
const FilmInfo: FC<Props> = ({ delayed }) => {
  return (
    <div className={`${s.film} `}>
      <ul className={s.film_info}>
        <li>{delayed.releaseYear}</li>
        <li>{delayed.ageRating}</li>
        <li>{delayed.durationMinutes}</li>
        <li>{delayed.rating}</li>
      </ul>
      <p className={s.film_descr}>{delayed.description}</p>
      <p className={s.film_descr}>Cast: {delayed.cast}</p>
      <p className={s.film_descr}>Genres: {delayed.genres}</p>
    </div>
  );
};

export default FilmInfo;
