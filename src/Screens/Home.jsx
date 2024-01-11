import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>

      <div> <Navbar /> </div>
      <div><Carousel/></div>

      <div className="mt-3 container   d-flex justify-content-around">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
   
      </div>
      
      <div><Footer /></div>


    </div>
  )
}
