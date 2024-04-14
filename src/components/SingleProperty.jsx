import PropTypes from 'prop-types'


import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom'
const SingleProperty = ({ properties }) => {
    const { propertyImages, estateTitle, id, segmentName, description, price, status, location} = properties;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className='p-2 rounded-2xl' src={propertyImages} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estateTitle}</h2>
        <div className='text-gray-500 font-medium'>
          <p>Property Type: {segmentName}</p>
          <p>For {status}</p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center font-bold'>
              <BsCurrencyDollar/>
              <p>{price}</p>
            </div>
            <div className='flex gap-1 items-center'>
              <FaLocationDot/>
              <p>{location}</p>
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

