import { useParams } from "react-router";

import FilmInfo from "../../components/FilmInfo/FilmInfo";
import {
  useGetByGenreQuery,
  useGetContentByIdQuery,
} from "../../store/api/getContentAPi/getContentApiSlice";
import Button from "../../components/Button/Button";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";
import Icon from "../../components/Icon/Icon";
import Slider from "../../components/Slider/Slider";
import { useGetContentDataQuery } from "../../store/apiTMDB/api";
import FilmInfoTMDB from "../../components/FilmInfo/FilmInfoTMDB";
import SliderTMDB from "../../components/Slider/SliderTMDB";

const ContentPage = () => {
  const { type, movieId } = useParams();

  // const { data, isLoading } = useGetContentByIdQuery(movieId ?? "", {
  //   skip: !movieId,
  //   refetchOnMountOrArgChange: true,
  // });

  // const genre = data?.genres.split(",");
  // const {
  //   data: genreFiltered,
  //   isLoading: genreLoading,
  //   isFetching,
  // } = useGetByGenreQuery(genre ? genre[0] : "", {
  //   skip: !genre,
  //   refetchOnMountOrArgChange: true,
  // });
  // if (!genreLoading) console.log(genreFiltered);
  // console.log(isFetching, " is Fetching");
  const { data, isLoading } = useGetContentDataQuery({
    type: type === "movies" ? "movie" : "tv",
    id: movieId,
  });
  console.log(data);
  return (
    <>
      <FilmInfoTMDB isLoading={isLoading} content={data}>
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
      </FilmInfoTMDB>
      {/* <SliderTMDB
        filmData={genreFiltered ? genreFiltered : []}
        isLoading={isFetching}
        variant="content-page"
      /> */}
    </>
  );
};

export default ContentPage;
