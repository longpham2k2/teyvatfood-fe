import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function FeaturedSection() {
  let windowHeight = Math.min(
    window.innerHeight,
    document.documentElement.clientWidth
  );
  let windowWidth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth
  );
  /**
   * windowWidth > windowHeight: landscape mode => use full height possible
   * windowWidth <= windowHeight: portrait mode => calculate height based on 16:9 to fit slideshow images
   */
  let compatibleHeight = Math.min(windowHeight, (windowWidth * 9) / 16);

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
        style={{
          height: compatibleHeight ? compatibleHeight : "calc(100vw * 9 / 16)",
        }}
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
        <SwiperSlide>
          <img src="/assets/Kiminami_Restaurant.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FeaturedSection;
