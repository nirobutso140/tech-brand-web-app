

import {  Link, useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './SingleBrand.css'

const SingleBrand = () => {

    const product = useLoaderData()
    console.log(product);
    //   const {name, brand, type, price, rating, photo, _id} = product

    return (
        <>

            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img src="/image/1.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/image/2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/image/3.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/image/4.jpg" alt="Burger" />
                </div>
            </div>


           <div className='product our_gallery'>
           {
                product.map(item => <>

                    <div className="card  card-side bg-base-100 shadow-xl w-[500px]">
                        <figure><img src={item.photo} className='w-[200px] h-full' alt="Movie" /></figure>
                        <div className="card-body">
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>Price: {item.price}</p>
                            <p>Rating: {item.rating}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${item._id}`}><button className="btn btn-primary">Details</button></Link>
                                <Link to={`/update/${item._id}`}><button className="btn btn-primary">Update</button></Link> 
                            </div>
                        </div>
                    </div>
                </>)

                // <p>{product.brand}</p>
              }
           </div>
            
         
     

        </>
    );
};

export default SingleBrand;


   