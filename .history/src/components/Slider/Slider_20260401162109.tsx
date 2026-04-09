import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Breakpoints = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type SliderProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;

  slidesPerView?: Breakpoints;

  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
};

export default function Slider<T>({
  data,
  renderItem,
  slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  spaceBetween = 16,
  loop = false,
  autoplay = false,
  navigation = true,
  pagination = false,
}: SliderProps<T>) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      loop={loop}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={
        autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : false
      }
      breakpoints={{
        0: {
          slidesPerView: slidesPerView.mobile || 1,
        },
        640: {
          slidesPerView: slidesPerView.tablet || 2,
        },
        1024: {
          slidesPerView: slidesPerView.desktop || 3,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
