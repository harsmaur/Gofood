import React from 'react';
import { useEffect, useState } from 'react';


export default function Carousel(props) {

    const [search, setsearch] = useState('');

    const images = [
        "https://source.unsplash.com/random/1000x400/?tacos",
        "https://source.unsplash.com/random/1000x400/?ramen",
        "https://source.unsplash.com/random/1000x400/?pizza"
    ];

    useEffect(() => {
      const preLoadImages = () =>{
       

        images.forEach((image)=>{
            const img = new Image();
            img.src = image;
            img.loading = "eager"; // Set loading attribute
            img.crossOrigin = "anonymous"; // Set crossOrigin attribute
        })

    }
    preLoadImages();
   
 }, [])
    
    return (
        <div className="container">
            <div id="carouselExample" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }} data-bs-ride="carousel">
               
                     <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <div className=" d-flex justify-content-center   ">
                            <input className="form-control me-2 w-75 bg-white text-dark btn-outline-success p-3" type="search" placeholder="Gulab Jamun..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="carousel-inner">
                    {/* Mapping through images to create carousel items */}
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            {/* Use the image URL as the source */}
                            <img src={image} className="d-block w-100" alt={` ${image.src}`} style={{ filter: "brightness(100%" }} />
                        </div>
                    ))}
                  </div>
               

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}
