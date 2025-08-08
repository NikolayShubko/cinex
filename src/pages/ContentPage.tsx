import { useParams } from "react-router";

const ContentPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>ContentPage</div>;
};

export default ContentPage;
