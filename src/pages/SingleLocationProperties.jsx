import { useLoaderData, useParams } from "react-router-dom";
import SingleProperty from "../components/SingleProperty";

const SingleLocationProperties = () => {
  const properties = useLoaderData();
  const { state } = useParams();
  const propertiesByLocation = properties.filter((p) => p.state === state);
  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-semibold">Choose your dream home</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {propertiesByLocation.map((property) => (
            <SingleProperty
              key={property.id}
              properties={property}
            ></SingleProperty>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleLocationProperties;