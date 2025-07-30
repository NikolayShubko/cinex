import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

import { FreeMode, Pagination } from "swiper/modules";
import { Film } from "./mockdata";

import s from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilm } from "../../store/selectedFilm/slice";
import React, { FC, useRef } from "react";

interface SliderProps {
  filmData: Film[] | null;
  isLoading: boolean;
}

const Slider: FC<SliderProps> = React.memo(({ filmData, isLoading }) => {
  const swiperParams: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 11,
    modules: [Pagination, FreeMode],
    freeMode: true,
    direction: "horizontal",
  };
  const selectedFilmId = useAppSelector(
    (state) => state.selectedFilmReducer.currentFilm?.id
  );
  const useDebouncedHover = (delay = 300) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const dispatch = useAppDispatch();

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
  return (
    <div className={`${s.sliderholder}`}>
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
              <img
                className={`${s.swiperSlide_image} ${
                  film.id === selectedFilmId ? s.active : ""
                }`}
                src={film.filmImageUrl}
                alt={film.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default Slider;
