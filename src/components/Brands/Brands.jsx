
import { useEffect, useState } from "react";
import './Brands.css'
import { Link } from "react-router-dom";
const Brands = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        fetch('/phone.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])


    return (
        <>
            <p className="text-center heading">Some Technology Brand</p>
            <div className="phone_container">
                {

                    phones.map(phone => <>

                      <Link to={`brands/${phone.title}`}>
                      <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={phone.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{phone.title}</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                      </Link>
                       

                    </>)

                }
            </div>

        </>
    );
};

export default Brands;