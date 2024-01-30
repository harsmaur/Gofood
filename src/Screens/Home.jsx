import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useState, useEffect } from 'react'


export default function Home() {
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

      <div> <Navbar /> </div>
      <div><Carousel/></div>

      <div className="">
        {
           foodCat.length !== 0 ? foodCat.map((category, key)=>{
              return (
                <div className='row mb-3'>
                <div  key={category._id} className='fs-3 m-3 '>{category.CategoryName
                }
                </div>
                <hr/>
                {foodItem.length !== 0 ? foodItem.filter((item)=> item.CategoryName === category.CategoryName).map((filterItems, key)=>{
                  return (
                   <div key={filterItems._id} className='col-12 col-sm-6 col-md-4 col-lg-3 '>
                        <Card foodName ={filterItems.name} imgSrc ={filterItems.img} options = {filterItems.options[0]} description = {filterItems.description}/>
                   </div>
                  )
                }) 


                : <div> <h3>Oh Snap.. no data available!</h3></div>}
                </div>
              )
                
           }) : ""
        }
         
   
      </div>
      
      <div><Footer /></div>


    </div>
  )
}
