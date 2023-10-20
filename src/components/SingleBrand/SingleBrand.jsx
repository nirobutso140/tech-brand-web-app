

import { useLoaderData } from 'react-router-dom';
import './SingleBrand.css'

const SingleBrand = () => {

    const product = useLoaderData()
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
            
            <div className='grid md:grid-cols-2 gap-4'>
              {
                product.map(item => <>

                    <div className="card card-side bg-base-100 shadow-xl w-[500px]">
                        <figure><img src={item.photo} className='w-[200px] h-full' alt="Movie" /></figure>
                        <div className="card-body">
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </>)
              }
            </div>
     

        </>
    );
};

export default SingleBrand;