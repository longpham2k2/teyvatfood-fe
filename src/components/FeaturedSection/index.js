import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function FeaturedSection() {

  /**
   * TODO: find window's height to specifically set it to swiper or #featuredSection. make the web looks section-wise
   */
  
  return (
    <div id="featuredSection" className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        // navigation
        loop
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => 0}
        style={{ height: "calc(100vw * 9 / 16)" }}
      >
        <SwiperSlide>
          <img src="/assets/Uyuu_Restaurant_Interior.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Xinyue_Kiosk_Interior.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Liuli_Pavilion_Interior_Nighttime.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Wanmin_Restaurant.webp" alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default FeaturedSection;
