
import './Feature.css'
import { useEffect, useState } from "react";

const Feature = () => {

    const [feature, setFeature] = useState([])

    useEffect(()=>{
        fetch('/feature.json')
        .then(res => res.json())
        .then(data=> setFeature(data))
    }, [])

    return (
        <>
            <p className='text-center gallery_title'>Our latest featured product</p><br />
             <div className="our_gallery ">
                 {
                    feature.map(item =>(
                   
                        <div key={item.id}  className="gallery_img">
                                <img src={item.image} alt="" />
                        </div>
                     
                       
                    ))
                 }
             </div>
        </>
    );
};

export default Feature;