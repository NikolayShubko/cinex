import { FC, useEffect, useState } from "react";
import Slider from "../Slider/Slider";

import { useAppSelector } from "../../hooks/reduxHooks";
import { Film } from "../Slider/mockdata";
import FilmInfo from "../FilmInfo/FilmInfo";
const PageWrapper: FC = () => {
  const selectedFilm: Film | null = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm
  );

  const [delayedFilm, setDelayedFilm] = useState<Film | null>(null);
  console.log(delayedFilm);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedFilm(selectedFilm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [selectedFilm]);
  return (
    <>
      <div>nav</div>
      {delayedFilm && <FilmInfo delayed={delayedFilm} />}
      <Slider />
    </>
  );
};

export default PageWrapper;
