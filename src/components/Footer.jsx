import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  
  <div className="">
      <footer className=" d-flex mt-auto flex-column bg-success  p bg-body-tertiary text-center text-lg-start">
        <div className="text-center p-4 bg-success text-white"  >
          © 2023 Copyright GoFood:
          <Link className="text-body text-white " to="harsmaur@gmail.com ">harsmaur@gmail.com</Link>
        </div>

      </footer>
      </div>
   
  )
}
