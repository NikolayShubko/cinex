import React, { FC, useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Film } from "../Slider/mockdata";
import FilmInfo from "../FilmInfo/FilmInfo";
import Navigation from "../Navigation/Navigation";
import { categoryRoutes } from "../../router/ROUTES";
import useGetFilms from "../../hooks/useGetFilms";

interface PageWrapperProps {
  basePath: string;
  endpoint: string;
}

const PageWrapper: FC<PageWrapperProps> = React.memo(
  ({ basePath, endpoint }) => {
    const selectedFilm: Film | null = useAppSelector(
      (state) => state.selectedFilmReducer.currentFilm
    );
    const [delayedFilm, setDelayedFilm] = useState<Film | null>(null);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDelayedFilm(selectedFilm);
      }, 300);
      return () => clearTimeout(timeout);
    }, [selectedFilm]);
    const [films, isLoading] = useGetFilms(endpoint);
    return (
      <>
        <Navigation
          links={categoryRoutes}
          variant={"secondary"}
          basePath={basePath}
        />
        {delayedFilm && <FilmInfo delayed={delayedFilm} />}
        {<Slider filmData={films} isLoading={isLoading} />}
      </>
    );
  }
);

export default PageWrapper;
