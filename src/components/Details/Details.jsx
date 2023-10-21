import { useLoaderData } from "react-router-dom";


const Details = () => {

   const details = useLoaderData()
   const {brand} = details

    return (
        <div>
            <p>{brand}</p>
        </div>
    );
};

export default Details;