import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

const NewLocation = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => {
        const citiesArray = [];

        data.forEach(property => {
          const existingLocation = citiesArray.find(city => city.property.location === property.location);
          if (!existingLocation) {
            citiesArray.push({
              property: property
            });
          }
        });
        setCities(citiesArray);
      });
  }, []);

  return (
    <div>
      <h2>Unique Locations:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {cities.map(({ property }, index) => (
          <li key={index}>
            <Link to={`/locationprop/${property.state}`} className={`relative animate__animated animate__backInLeft`} >
              <img
                className="rounded-xl"
                src={property.locationImage}
              />
              <h3 className="text-4xl font-bold text-white absolute top-[45%] left-[37%]">
            {property.state}
          </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewLocation;
