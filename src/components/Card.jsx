import React from 'react'
import { useState, useEffect } from 'react'


export default function Card() {
    
    const [foodCat, setfoodCat] = useState([])
    const [foodItem, setfoodItem] = useState([])

    const loadData = async()=>{

        let response = await fetch("http://localhost:5000/display_food_items", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        response = await response.json();
        // console.log(response[0], response[1]);
        setfoodItem(response[0]);
        setfoodCat(response[1]);
    }
    useEffect(() => {
      loadData();
    
      
      
    }, []) // we write dependecy when we need it to reload again for some changes in other components if empty it means it will ru nthe inside content of useeffect when page loads
    

    return (
        <div>



            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src="https://source.unsplash.com/random//?burger" className="card-img-top" alt="..." style={{ width: "70px", Height: "70px" }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quictent.</p>
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
