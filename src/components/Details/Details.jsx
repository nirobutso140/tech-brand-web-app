import {  useLoaderData } from "react-router-dom";
import './Details.css'

const Details = () => {
  
   const details = useLoaderData()
  

    return (
        <div className="details">
            {
                details.map(details => <>
                    <div>
                    <div className="card  card-side bg-base-100 w-[500px]">
                        <figure><img src={details.photo} className='w-[200px] h-full' alt="Movie" /></figure>
                        <div className="card-body">
                            <p>Brand: {details.brand}</p>
                            <p>Name: {details.name}</p>
                            <p>Type: {details.type}</p>
                            <p>Price: {details.price}</p>
                            <p>Rating: {details.rating}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                         <p className="details_desc">{details.description}</p>
                    </div>
                    
                </>)
            }
        </div>
    );
};

export default Details;