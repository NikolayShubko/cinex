import { Swiper, SwiperSlide } from "swiper/react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilm } from "../../store/selectedFilm/slice";
import React, { FC, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { swiperParams } from "./swiperParams";
import Skeleton from "react-loading-skeleton";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/free-mode";
import s from "./Slider.module.scss";
import { Film } from "../../types/films";
// interface SliderProps {
//   filmData: Film[];
//   isLoading: boolean;
//   variant?: "content-page";
// }

const SliderTMDB: FC<SliderProps> = React.memo(
  ({ filmData, isLoading, variant }) => {
    const location = useLocation();
    const selectedFilmId = useAppSelector(
      (state) => state.selectedFilmReducer.currentFilm?.id
    );
    const dispatch = useAppDispatch();
    const useDebouncedHover = (delay = 400) => {
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
      if (filmData && variant !== "content-page")
        dispatch(setFilm(filmData[0]));
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
          <Swiper
            {...swiperParams}
            className={s.slider}
            key={location.pathname}
            freeMode={{ momentumRatio: 0.4 }}
          >
            {filmData?.map((film) => {
              return (
                <SwiperSlide
                  className={s.swiperSlide}
                  id={`${film.id}`}
                  onMouseOver={() => {
                    variant === "content-page" ? null : handleMouseOver(film);
                  }}
                  key={film.id}
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
                  <Link to={`/${film.title ? "movies" : "series"}/${film.id}`}>
                    <img
                      className={`${s.swiperSlide_image} ${
                        film.id === selectedFilmId ? s.active : ""
                      }`}
                      src={
                        "https://image.tmdb.org/t/p/w780/" + film.backdrop_path
                      }
                      alt={film.title}
                      loading="lazy"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    );
  }
);

export default SliderTMDB;
