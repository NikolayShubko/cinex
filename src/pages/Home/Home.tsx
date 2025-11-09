import { FC } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import PageWrapperTMDB from "../../components/PageWrapperTMDB/PageWrapperTMDB";

type endpoint = { endpoint: string };

const Home: FC<endpoint> = ({ endpoint }) => {
  return <PageWrapperTMDB basePath="/" endpoint={endpoint} />;
};

export default Home;
