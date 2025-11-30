import { Swiper, SwiperSlide } from "swiper/react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setBackgroundImage, setFilm } from "../../store/selectedFilm/slice";
import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/free-mode";
import s from "./Slider.module.scss";

import { Film, SliderProps } from "../../types";
import { SwiperOptions } from "swiper/types";
import { FreeMode, Pagination } from "swiper/modules";

const Slider: FC<SliderProps> = React.memo(
  ({ filmData, isLoading, variant }) => {
    const swiperParams: SwiperOptions = {
      slidesPerView: "auto",
      spaceBetween: 24,
      modules: [Pagination, FreeMode],
      freeMode: true,
      direction: "horizontal",
      wrapperClass: `${s.slider}`,
      lazyPreloadPrevNext: 9,
    };

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
          dispatch(setBackgroundImage(film.filmImageUrl));
        }, delay);
      };
    };
    useEffect(() => {
      if (filmData && variant !== "content-page") {
        dispatch(setFilm(filmData[0]));
        dispatch(setBackgroundImage(filmData[0]?.filmImageUrl));
      }
    }, [filmData, variant, dispatch]);
    const handleMouseOver = useDebouncedHover();
    const emptyArray = Array.from({ length: 7 });
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
            freeMode={{ momentumRatio: 0.4 }}
          >
            {filmData?.map((film) => {
              return (
                <SwiperSlide
                  className={s.swiperSlide}
                  id={`${film.id}`}
                  onMouseOver={() => {
                    if (variant !== "content-page") handleMouseOver(film);
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
                  <Link to={`/${film.type.toLowerCase()}/${film.id}`}>
                    <img
                      className={`${s.swiperSlide_image} ${
                        film.id === selectedFilmId ? s.active : ""
                      }`}
                      src={film.filmImageUrl}
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

export default Slider;
