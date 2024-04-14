
import slider1 from "/assets/slid1.webp";
import slider2 from "/assets/slid2.webp";
import slider3 from "/assets/slider3.webp";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[650px]">
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
