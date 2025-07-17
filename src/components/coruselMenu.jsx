import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// imglar
import slide3 from "../img/iphone1.jpg";
import slide4 from "../img/keyboard.jpg";
import slide5 from "../img/keyboard1.jpg";
import slide6 from "../img/mackbook.jpg";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="slide6" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
