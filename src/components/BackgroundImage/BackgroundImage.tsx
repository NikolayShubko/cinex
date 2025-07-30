import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import s from "./BackgroundImage.module.scss";
const BackgroundImage: FC = () => {
  const filmImage: string | undefined = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm?.filmImageUrl
  );
  const style = useMemo(() => {
    return filmImage ? { backgroundImage: `url(${filmImage})` } : {};
  }, [filmImage]);
  return <div className={s.backgroundContainer} style={style} />;
};

export default BackgroundImage;
