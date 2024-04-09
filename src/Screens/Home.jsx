import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import { useState, useEffect } from 'react'


export default function Home() {
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([])
  const [search, setSearch] = useState('');
  
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

  const images = [
    "https://source.unsplash.com/random/1000x400/?samosa",
    "https://source.unsplash.com/random/1000x400/?rasgulla",
    "https://source.unsplash.com/random/1000x400/?pizza"
];

  useEffect(() => {
    loadData();
    
  }, []) // we write dependecy when we need it to reload again for some changes in other components if empty it means it will ru nthe inside content of useeffect when page loads
  return (
    <div>

      <div> <Navbar /> </div>
      
      {/* carousal  */}
      <div>
         <div id="carouselExample" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }} data-bs-ride="carousel">
               
               <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                  <div className=" d-flex justify-content-center   ">
                      <input className="form-control me-2 w-75 bg-white text-dark btn-outline-success p-3" type="search" placeholder="Gulab Jamun..." aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                      {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
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
{/* caroausal end  */}


      <div className="">
        {
           foodCat.length !== 0 ? foodCat.map((category, key)=>{
              return (
                <div className='row mb-3'>
                <div  key={category._id} className='fs-3 m-3 '>{category.CategoryName
                }
                </div>
                <hr/>
                {foodItem.length !== 0 
                ? 
                foodItem.filter((item)=> (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((filterItems, key)=>{
                  return (
                   <div key={filterItems._id} className='col-12 col-sm-6 col-md-4 col-lg-3 '>
                        <Card 
                         foodItem = {filterItems}
                         options = {filterItems.options[0]} />
                   </div>
                  )
                }) 
                : 
                <div> <h3>Oh Snap.. no data available!</h3></div>}
                </div>
              )
                
           }) : ""
        }
         
   
      </div>
      
      <Footer />


    </div>
  )
}
