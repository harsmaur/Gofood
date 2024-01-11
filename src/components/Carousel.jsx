import React from 'react';

export default function Carousel() {
    return (
        <div className="container">
            <div id="carouselExample" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }} data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">
                            <input className="form-control me-2 w-75 bg-white text-dark btn-outline-success p-3" type="search" placeholder="Gulab Jamun..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">

                        <img src="https://source.unsplash.com/random/1000x400/?burger" className="d-block w-100 " alt="Burger" style={{ filter: "brightness(100%" }} />


                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1000x400/?fries" className="d-block w-100 " alt="Fries" style={{ filter: "brightness(100%" }} />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1000x400/?pizza" className="d-block w-100 " alt="Pizza" style={{ filter: "brightness(100%" }} />
                    </div>
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
