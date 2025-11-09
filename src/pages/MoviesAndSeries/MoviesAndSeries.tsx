import { FC } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import PageWrapperTMDB from "../../components/PageWrapperTMDB/PageWrapperTMDB";
type endpoint = { endpoint: string };

const MoviesAndSeriesPage: FC<endpoint> = ({ endpoint }) => {
  return (
    <PageWrapperTMDB
      basePath={endpoint.includes("tv") ? "/series" : "/movies"}
      endpoint={endpoint}
    />
  );
};

export default MoviesAndSeriesPage;
