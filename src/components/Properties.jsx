import { useLoaderData } from "react-router-dom";
import SingleProperty from "./SingleProperty";

const Properties = () => {
  const properties = useLoaderData();
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center py-5">
        Choose your dream home
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.slice(0, 9).map((property) => (
          <SingleProperty
            key={property.id}
            properties={property}
          ></SingleProperty>
        ))}
      </div>
    </div>
  );
};

export default Properties;
