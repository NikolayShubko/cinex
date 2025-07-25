import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import s from "./BackgroundImage.module.scss";
const BackgroundImage: FC = () => {
  const filmColor: string | undefined = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm?.colorLarge
  );
  const style = useMemo(() => {
    console.log(filmColor);
    return filmColor ? { backgroundImage: `url(${filmColor})` } : {};
  }, [filmColor]);
  return <div className={s.backgroundContainer} style={style} />;
};

export default BackgroundImage;
