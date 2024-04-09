import React from 'react'
import { useDispatchCart, useCart } from '../components/ContextReducer'
import { useState } from 'react';






export default function Card(props) {
    

    let options = props.options;
    let priceOptions = Object.keys(options);

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");

    const handleAddToCart = ()=>{

    }
    return (
        <div className=' mt-3 m-2'>



            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..."  style={{height:"130px", objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title"> {props.foodItem.name} </h5>
                    {/* <p className="card-text">Some quictent.</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100  bg-success rounded bg-outline-success text-white">
                            {
                                Array.from(Array(5), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} > {i + 1}</option>
                                    )

                                })
                            }
                        </select>

                        <select className="m-2 h-100  bg-success rounded text-white bg-outline-success">
                            {
                            priceOptions.map((data, key)=>{
                                return(
                                    <option key={data} value={data}>{data}</option>
                                )
                            })
                            }
                        </select>

                        <div className="d-block h-100 fs-5">
                            Total Price
                        </div>
                    <hr/>
                   
                    </div>
                   
                    <button className="btn btn-success justify-center ms-1 " onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}



// Object.keys(options): This part uses the Object.keys method to extract the keys of the options object and returns them as an array. The array is then assigned to the variable priceOptions.

// Now, priceOptions will be an array containing the keys of the options object.