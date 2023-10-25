import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
const MyCart = () => {

    const addedProducts = useLoaderData()
    const [products, setProducts] = useState(addedProducts)
    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0)
        swal("Good job!", "Deleted Product Successfully", "success");
        const remainding = products.filter(item => item._id !== id)
        setProducts(remainding)
      });
    }

    return (
        <>
            <div className="product">
                {
                    products.map(product => <>
                        <div className="card  card-side bg-base-100 w-[500px]">
                            <figure><img src={product.photo} className='w-[200px] h-full' alt="Movie" /></figure>
                            <div className="card-body">
                                <p>Brand: {product.brand}</p>
                                <p>Name: {product.name}</p>
                                <p>Type: {product.type}</p>
                                <p>Price: {product.price}</p>
                                <p>Rating: {product.rating}</p>
                                <div className="card-actions justify-end">
                                    <Link><button onClick={()=>handleDelete(product._id)} className="btn btn-primary">Delete</button></Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default MyCart;