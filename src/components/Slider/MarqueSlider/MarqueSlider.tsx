import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/autoplay";
import s from "./MarqueSlider.module.scss";
import { FC } from "react";

import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
type Props = { images: string[]; variant: "small" | "big" };
const MarqueSlider: FC<Props> = ({ images, variant }) => {
  const swiperParams: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: "24",
    loop: true,
    speed: variant === "small" ? 1125 : 1400,
    allowTouchMove: false,
    modules: [Autoplay],

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: variant === "small" ? true : false,
    },
    wrapperClass: `${s.scroll_holder}`,
  };

  return (
    <div className={s.scroll}>
      <Swiper {...swiperParams} className={s[`scroll_${variant}`]}>
        {images?.map((film) => (
          <SwiperSlide className={s[`scroll_${variant}_slide`]}>
            <img src={film} className={s.scroll_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueSlider;
