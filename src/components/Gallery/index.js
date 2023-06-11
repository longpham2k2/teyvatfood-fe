import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

function Gallery() {
  return (
    <div
      id="gallerySection"
      style={
        {
          // height: compatibleHeight ? compatibleHeight : "calc(100vw * 9 / 16)",
        }
      }
      className="bg-[#F1C892] py-40 font-['Montserrat']"
    >
      <p className="uppercase text-sm text-[#18465E]"> Our moments </p>
      <p className="uppercase text-5xl text-[#406BA0]"> Gallery </p>
      <div className="w-16 h-px border-t border-[#18465E] mx-auto mt-2 mb-8 content-['']"></div>
      <Swiper
        className="mt-20"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides
        autoplay
        loop
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => 0}
      >
        <SwiperSlide className="block">
          <div>
            <img src="/assets/Lantern_Rite_2.webp" alt="" />
          </div>
          <p className="pt-3 text-3xl"> Khách hàng của chúng tôi </p>
        </SwiperSlide>
        <SwiperSlide className="block">
          <div>
            <img src="/assets/Jade_Chamber.webp" alt="" />
          </div>
          <p className="pt-3 text-3xl"> Bầu không khí của chúng tôi </p>
        </SwiperSlide>
        <SwiperSlide className="block">
          <div>
            <img src="/assets/Xiangling_Food.webp" alt="" />
          </div>
          <p className="pt-3 text-3xl"> Ẩm thực của chúng tôi </p>
        </SwiperSlide>
        <SwiperSlide className="block">
          <div>
            <img src="/assets/Yanxiaos_Kitchen.webp" alt="" />
          </div>
          <p className="pt-3 text-3xl"> Không gian bếp của chúng tôi </p>
        </SwiperSlide>
        <SwiperSlide className="block">
          <div>
          <img src="/assets/Kirara_Delivery.webp" alt="" />
          </div>
          <p className="pt-3 text-3xl"> Dịch vụ giao hàng của chúng tôi </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
