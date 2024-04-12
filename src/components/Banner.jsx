// import { Swiper, SwiperSlide } from "swiper/react";
// import slider1 from "/assets/slid1.webp";
// import slider2 from "/assets/slid2.webp";
// import slider3 from "/assets/slider3.webp";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const Banner = () => {
//   return (
//      <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <img src={slider1} style={{ height: "100%", width: "100%" }} />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src={slider2} style={{ height: "100%", width: "100%" }} />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={slider3} style={{ height: "100%", width: "100%" }} />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default Banner;

import slider1 from "/assets/slid1.webp";
import slider2 from "/assets/slid2.webp";
import slider3 from "/assets/slider3.webp";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full opacity-85" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">Find Your Dream Home with Us</p>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slider2}
          className="w-full opacity-85"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">Find the most morden and comfy property in NewHome</p>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slider3}
          className="w-full opacity-85"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">We have properties over 60 countries</p>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
