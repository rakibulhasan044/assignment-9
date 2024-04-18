import slider1 from "/assets/slid1.webp";
import slider2 from "/assets/slid2.webp";
import slider3 from "/assets/slider3.webp";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[520px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full opacity-85" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">Find Your Dream Home with Us</p>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
        <div className="absolute flex gap-7 md:gap-16 lg:gap-24 items-center text-xl md:text-3xl font-bold bottom-3 md:bottom-12 left-[24%] sm:left-[29%] md:left-[26%] lg:left-[32%]">
          <div>
            <p className="text-base-200">Experience</p>
            <p className="text-green-500">32 years +</p>
          </div>
          <div>
          <p className="text-base-200">Projects</p>
            <p className="text-green-500">27000 +</p>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slider2}
          className="w-full opacity-85"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">Find the most morden and comfy property in NewHome.</p>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
        <div className="absolute flex gap-7 md:gap-16 lg:gap-24 items-center text-xl md:text-3xl font-bold bottom-3 md:bottom-12 left-[24%] sm:left-[29%] md:left-[26%] lg:left-[32%]">
          <div>
            <p className="text-base-200">Experience</p>
            <p className="text-green-500">32 years +</p>
          </div>
          <div>
          <p className="text-base-200">Projects</p>
            <p className="text-green-500">27000 +</p>
          </div>
        </div>
        
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slider3}
          className="w-full opacity-85"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <p className=" text-xl md:text-3xl lg:text-5xl font-semibold text-gray-100 text-center">We have properties over 60 countries</p>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
        <div className="absolute flex gap-7 md:gap-16 lg:gap-24 items-center text-xl md:text-3xl font-bold bottom-3 md:bottom-12 left-[24%] sm:left-[29%] md:left-[26%] lg:left-[32%]">
          <div>
            <p className="text-base-200">Experience</p>
            <p className="text-green-500">32 years +</p>
          </div>
          <div>
          <p className="text-base-200">Projects</p>
            <p className="text-green-500">27000 +</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
