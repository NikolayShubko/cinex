import { useParams } from "react-router";
import {
  useGetByGenreQuery,
  useGetContentByIdQuery,
} from "../../store/api/getContentAPi/getContentApiSlice";
import { Button, ButtonBlock, FilmInfo, Icon, Slider } from "../../components";

const ContentPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data, isLoading } = useGetContentByIdQuery(movieId ?? "", {
    skip: !movieId,
    refetchOnMountOrArgChange: true,
  });

  const genre = data?.genres.split(",");
  const { data: genreFiltered, isFetching } = useGetByGenreQuery(
    genre ? genre[0] : "",
    {
      skip: !genre,
      refetchOnMountOrArgChange: true,
    }
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
      <Slider
        filmData={genreFiltered ? genreFiltered : []}
        isLoading={isFetching}
        variant="content-page"
      />
    </>
  );
};

export default ContentPage;
