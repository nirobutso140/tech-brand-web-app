import { Link, useLoaderData } from "react-router-dom";
import './Details.css'
import swal from "sweetalert";

const Details = () => {

    const details = useLoaderData()
    console.log(details);

    //    const name = details[0].name



    const handleAddToCard = () => {
        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    swal("Good job!", "Your product added successfully", "success");
                }
            })
    }

    return (
       <div className="details">
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
                        <Link><button className="btn btn-primary" onClick={handleAddToCard}>Add to Cart</button></Link>
                    </div>
                </div>
            </div>
            <p className="details_desc">{details.description}</p>
        </div>
       </div>

    );
};

export default Details;