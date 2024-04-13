import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    console.log(id)

    const property = properties.find(p => p.id === id);
    return (
        <div>
            <h3>here:{id}</h3>
        </div>
    );
};

export default PropertyDetails;