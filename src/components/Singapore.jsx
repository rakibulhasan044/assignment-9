

import { useLoaderData } from "react-router-dom";
import SpecificLocation from "../pages/SpecificLocation";

const Singapore = () => {
  const properties = useLoaderData();
  console.log(properties);
  const singaporePropeties = properties.filter((p) => p.location === "Singapore");
  console.log(singaporePropeties);
  return (
    <div>
      {singaporePropeties.map((property, indx) => (
        <SpecificLocation key={indx} property={property}></SpecificLocation>
      ))}
    </div>
  );
};

export default Singapore;
