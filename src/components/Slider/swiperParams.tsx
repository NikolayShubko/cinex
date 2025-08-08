import type { SwiperOptions } from "swiper/types";

import { FreeMode, Pagination } from "swiper/modules";
export const swiperParams: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 24,
  modules: [Pagination, FreeMode],
  freeMode: true,
  direction: "horizontal",
};
