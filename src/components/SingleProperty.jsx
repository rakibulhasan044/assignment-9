import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper styles
import 'swiper/css';
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom'
const SingleProperty = ({ properties }) => {
    const { propertyImages, estateTitle, id, segmentName, description, price, status, area, location, facilities} = properties;
  return (
    <div className="card bg-base-100 shadow-xl">
      {/* <figure>
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
    >
      {propertyImages.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
      </figure> */}
      <figure>
        <img className='p-2 rounded-2xl' src={propertyImages} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estateTitle}</h2>
        <div className='text-gray-500 font-medium'>
          <p>Property Type: {segmentName}</p>
          <p>For {status}</p>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <BsCurrencyDollar></BsCurrencyDollar>
              <p>price: {price}</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaLocationDot/>
              <p>Location: {location}</p>
            </div>
            
          </div>
        </div>
        <p>{description.slice(0,100)}</p>
        <div className="card-actions">
          <Link to={`/propertydetails/${id}`} className="btn btn-primary">View property</Link>
        </div>
      </div>
    </div>
  );
};

SingleProperty.propTypes = {
    properties: PropTypes.object
}

export default SingleProperty;
