import { useLoaderData, useParams } from "react-router-dom";
import SingleProperty from "../components/SingleProperty";
import PageTitle from "./PageTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SingleLocationProperties = () => {
  const properties = useLoaderData();
  const { state } = useParams();
  const propertiesByLocation = properties.filter((p) => p.state === state);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:min-h-[calc(100vh-116px)] mt-5
    " data-aos="fade-left">
      <PageTitle title={"Properties-by-location"}/>
      <div className="">
        <h2 className="text-xl font-semibold text-center">Here is Our top properties of {state}</h2>
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
