import React, { FC } from "react";

import Navigation from "../Navigation/Navigation";
import { categoryRoutes } from "../../router/ROUTES";
import { useGetTMDBContentQuery } from "../../store/apiTMDB/api";
import SliderTMDB from "../Slider/SliderTMDB";
import FilmInfoTMDB from "../FilmInfo/FilmInfoTMDB";

interface PageWrapperProps {
  basePath: string;
  endpoint: string;
}

const PageWrapperTMDB: FC<PageWrapperProps> = React.memo(
  ({ basePath, endpoint }) => {
    const {
      data: films,
      isLoading,
      isFetching,
    } = useGetTMDBContentQuery(endpoint);

    return (
      <>
        <Navigation
          links={categoryRoutes}
          variant={"secondary"}
          basePath={basePath}
        />
        <FilmInfoTMDB isLoading={isLoading} />
        <SliderTMDB
          filmData={films === undefined ? [] : films.results}
          isLoading={isFetching}
        />
      </>
    );
  }
);

export default PageWrapperTMDB;
