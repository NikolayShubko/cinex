import { useParams } from "react-router";

import FilmInfo from "../../components/FilmInfo/FilmInfo";
import {
  useGetContentByIdQuery,
  useGetContentQuery,
} from "../../store/api/getContentAPi/getContentApiSlice";
import Button from "../../components/Button/Button";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";
import Icon from "../../components/Icon/Icon";
import Slider from "../../components/Slider/Slider";

const ContentPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data, isLoading } = useGetContentByIdQuery(movieId ?? "", {
    skip: !movieId,
  });
  const genre = data?.genres.split(",");
  const { data: filmData, isLoading: sliderLoading } = useGetContentQuery(
    "/api/v1/films/search/genres/" + genre?.[0]
  );
  return (
    <>
      <FilmInfo isLoading={isLoading} content={data}>
        <ButtonBlock>
          <Button size="large">play</Button>
          <Button size="small" variant="list">
            <Icon iconName="like" />
          </Button>
          <Button size="small" variant="list">
            <Icon iconName="add" />
          </Button>
          <Button size="small" variant="list">
            <Icon iconName="star" />
          </Button>
        </ButtonBlock>
      </FilmInfo>
      {filmData && <Slider filmData={filmData} isLoading={sliderLoading} />}
    </>
  );
};

export default ContentPage;
