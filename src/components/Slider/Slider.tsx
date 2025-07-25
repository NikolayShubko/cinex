import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

import { FreeMode, Pagination } from "swiper/modules";
import mockdata, { Film } from "./mockdata";

import s from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setFilm } from "../../store/selectedFilm/slice";
import { useRef } from "react";

const Slider = () => {
  const swiperParams: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 11,
    modules: [Pagination, FreeMode],
    freeMode: true,
    direction: "horizontal",
  };

  function useDebouncedHover(delay = 300) {
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const dispatch = useAppDispatch();

    return (film: Film) => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        dispatch(setFilm(film));
      }, delay);
    };
  }
  const handleMouseOver = useDebouncedHover();
  return (
    <div className={`${s.sliderholder}`}>
      <Swiper {...swiperParams} className={s.slider}>
        {mockdata.map((film) => {
          return (
            <SwiperSlide
              className={s.swiperSlide}
              style={{ backgroundColor: film.colorSmall }}
              id={`${film.id}`}
              onMouseOver={() => {
                handleMouseOver(film);
              }}
            >
              {film.colorSmall}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
