import { FC } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

type endpoint = { endpoint: string };

const Home: FC<endpoint> = ({ endpoint }) => {
  return <PageWrapper basePath="/" endpoint={endpoint} />;
};

export default Home;
