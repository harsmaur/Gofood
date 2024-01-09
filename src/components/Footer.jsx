import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  
  <div className="">
      <footer class=" d-flex mt-auto flex-column min-vh-100  p bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright GoFood:
          <Link class="text-body" to="harsmaur@gmail.com ">harsmaur@gmail.com</Link>
        </div>

      </footer>
      </div>
   
  )
}
