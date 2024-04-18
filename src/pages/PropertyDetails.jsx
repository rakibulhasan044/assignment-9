import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import PageTitle from "./PageTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  const property = properties.find((p) => p.id === id);
  const {
    propertyImages,
    estateTitle,
    segmentName,
    description,
    price,
    status,
    area,
    facilities,
    bedrooms,
    baths,
    kitchen,
    livingRooms,
    location,
    views,
  } = property;
  return (
    <div className="card bg-base-100 shadow-xl my-5 md:my-10" data-aos="zoom-in">
      <PageTitle title={"Property details"} />
      <figure className="max-h-[600px] p-4">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCoverflow,
          ]}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          effect="coverflow"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {propertyImages?.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img className="w-full" src={imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estateTitle}</h2>
        <p className="text-gray-500 font-semibold">
          Property type: {segmentName}
        </p>
        <div className="flex gap-14 text-gray-500">
          <div className="flex items-center font-bold text-green-600">
            <FaDollarSign />
            {status === "rent" ? <p> {price} /month</p> : <p>{price}</p>}
          </div>
          <div className="flex items-center font-bold gap-1">
            <FaLocationDot />
            <p>Location: {location}</p>
          </div>
        </div>
        <div className="flex text-gray-500 gap-10 md:gap-36 font-bold">
          <div>
            For <span className="text-red-600">{status}</span>
          </div>
          <div>Area: {area} sqrft</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/4 lg:w-3/5 text-gray-500 font-semibold">
          <p>Bedrooms: {bedrooms}</p>
          <p>Baths: {baths}</p>
          <p>Kitchen: {kitchen}</p>
          <p>Livingrooms: {livingRooms}</p>
        </div>
        <div>
          <p className="text-gray-500">Facilities:</p>
          <ul className="flex gap-2 md:gap-10 flex-col md:flex-row list-disc list-inside text-gray-500">
            {facilities.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-gray-500">View:</p>
          <ul className="flex gap-10 list-disc list-inside text-gray-500">
            {views.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
