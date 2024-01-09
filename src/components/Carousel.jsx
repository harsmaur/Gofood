import React from 'react';

export default function Carousel() {
    return (
        <div className="container">
            <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/1000x400/?burger" className="d-block w-100 img-fluid" alt="Burger" />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1000x400/?fries" className="d-block w-100 img-fluid" alt="Fries" />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1000x400/?pizza" className="d-block w-100 img-fluid" alt="Pizza" />
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
