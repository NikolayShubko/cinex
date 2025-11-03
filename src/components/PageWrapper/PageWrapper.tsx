import React, { FC } from "react";
import Slider from "../Slider/Slider";

import FilmInfo from "../FilmInfo/FilmInfo";
import Navigation from "../Navigation/Navigation";
import { categoryRoutes } from "../../router/ROUTES";
import { useGetContentQuery } from "../../store/api/getContentAPi/getContentApiSlice";

interface PageWrapperProps {
  basePath: string;
  endpoint: string;
}

const PageWrapper: FC<PageWrapperProps> = React.memo(
  ({ basePath, endpoint }) => {
    const { data: films, isLoading, isFetching } = useGetContentQuery(endpoint);
    return (
      <>
        <Navigation
          links={categoryRoutes}
          variant={"secondary"}
          basePath={basePath}
        />
        <FilmInfo isLoading={isLoading} />
        <Slider
          filmData={films === undefined ? [] : films}
          isLoading={isFetching}
        />
      </>
    );
  }
);

export default PageWrapper;
