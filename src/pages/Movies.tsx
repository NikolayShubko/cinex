import { FC } from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
type endpoint = { endpoint: string };

const Movies: FC<endpoint> = ({ endpoint }) => {
  console.log(endpoint);
  return <PageWrapper basePath="/movies" endpoint={endpoint} />;
};

export default Movies;
