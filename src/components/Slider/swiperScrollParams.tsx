import { Autoplay } from "swiper/modules";
import s from "./LoginScrollBig/LoginScrollBig.module.scss";
import { SwiperOptions } from "swiper/types";
export const swiperParams: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: "24",
  loop: true,
  speed: 1500,
  allowTouchMove: false,
  modules: [Autoplay],
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  wrapperClass: `${s.scroll_holder}`,
};
