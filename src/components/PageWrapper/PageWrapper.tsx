import React, { FC } from "react";

import { categoryRoutes } from "../../router/ROUTES";
import { useGetContentQuery } from "../../store/api/getContentAPi/getContentApiSlice";
import { PageWrapperProps } from "../../types";
import { FilmInfo, Navigation, Slider } from "../index";
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
        <Slider filmData={films ?? []} isLoading={isFetching} />
      </>
    );
  }
);

export default PageWrapper;
