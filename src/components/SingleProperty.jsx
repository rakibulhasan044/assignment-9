import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper styles
import 'swiper/css';
const SingleProperty = ({ properties }) => {
    const { propertyImages, estateTitle, id, segmentName, description, price, status, area, location, facilities} = properties;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
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
      </figure>
      {/* <figure>
        <img src={propertyImages} />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

SingleProperty.propTypes = {
    properties: PropTypes.object
}

export default SingleProperty;

