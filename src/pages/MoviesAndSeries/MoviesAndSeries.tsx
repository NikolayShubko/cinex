import { FC } from "react";
import { PageWrapper } from "../../components";

type endpoint = { endpoint: string };

const MoviesAndSeriesPage: FC<endpoint> = ({ endpoint }) => {
  return (
    <PageWrapper
      basePath={endpoint.includes("onlySeries") ? "/series" : "/movies"}
      endpoint={endpoint}
    />
  );
};

export default MoviesAndSeriesPage;
