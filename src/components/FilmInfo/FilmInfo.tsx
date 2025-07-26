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
        <li>{delayed.year}</li>
        <li>{delayed.ageRating}</li>
        <li>{delayed.duration}</li>
        <li>{delayed.rating}</li>
      </ul>
      <p className={s.film_descr}>{delayed.description}</p>
      <p className={s.film_descr}>Cast: {delayed.actors.join(", ")}</p>
      <p className={s.film_descr}>Genres: {delayed.genres.join(", ")}</p>
    </div>
  );
};

export default FilmInfo;
