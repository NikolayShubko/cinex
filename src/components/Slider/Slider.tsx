import { Swiper, SwiperSlide } from "swiper/react";
import { Film } from "./mockdata";
import s from "./Slider.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilm } from "../../store/selectedFilm/slice";
import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router";
import { swiperParams } from "./swiperParams";
import Skeleton from "react-loading-skeleton";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/free-mode";
interface SliderProps {
  filmData: Film[] | null;
  isLoading: boolean;
}

const Slider: FC<SliderProps> = React.memo(({ filmData, isLoading }) => {
  const selectedFilmId = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm?.id
  );
  const dispatch = useAppDispatch();
  const useDebouncedHover = (delay = 300) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (film: Film) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        dispatch(setFilm(film));
      }, delay);
    };
  };
  const handleMouseOver = useDebouncedHover();
  const emptyArray = Array.from({ length: 7 });
  useEffect(() => {
    if (filmData) dispatch(setFilm(filmData[0]));
  }, [filmData]);
  return (
    <div className={`${s.sliderholder}`}>
      {isLoading ? (
        <Swiper {...swiperParams} className={s.slider}>
          {emptyArray.map(() => {
            return (
              <SwiperSlide className={s.swiperSlide}>
                <Skeleton
                  count={1}
                  style={{ width: "100%", height: "100%" }}
                  baseColor="#1f1f1f"
                  highlightColor="#d32f2f"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper {...swiperParams} className={s.slider}>
          {filmData?.map((film) => {
            return (
              <SwiperSlide
                className={s.swiperSlide}
                id={`${film.id}`}
                onMouseOver={() => {
                  handleMouseOver(film);
                }}
              >
                <div className={s.swiperSlide_buttons}>
                  <button
                    className={s.swiperSlide_action}
                    onClick={() => console.log("click 1")}
                  >
                    ❤️
                  </button>
                  <button
                    className={s.swiperSlide_action}
                    onClick={() => console.log("click 2")}
                  >
                    ❤️
                  </button>
                </div>
                <Link to={`/${film.type.toLowerCase()}/${film.id}`}>
                  <img
                    className={`${s.swiperSlide_image} ${
                      film.id === selectedFilmId ? s.active : ""
                    }`}
                    src={film.filmImageUrl}
                    alt={film.title}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
});

export default Slider;
