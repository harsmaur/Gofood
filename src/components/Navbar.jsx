import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    setTimeout(()=>{
      localStorage.removeItem("authToken");
        toast.success('Logged Out Successfully ');
        navigate("/")
    }, 3000)
  
  }
  return (
    <div>


      <nav className="navbar navbar-expand-lg bg-body-success bg-success navbar-dark ">

        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic h1" to="/">GoFood</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">

              <li className="nav-item">
                <Link className="nav-link active fs-5  " to="/">Home</Link>
              </li>

              {/* check if logged user then show my order  */}
              {
                (localStorage.getItem("authToken")) ? 
                <li className="nav-item">
                <Link className="nav-link active fs-5  " to="/">My Orders</Link>
                </li>
                : ""
              }
              

            </ul>

             {/* check if not logged user then show login and signup and show cart logout  */}
             {
                (!localStorage.getItem("authToken")) ? 
                <div className='d-flex '>
                <Link className="btn text-success bg-white mx-1 " to="/login">Login</Link>

                <Link className="btn text-success bg-white mx-1" to="/signup">SignUp</Link>
              </div>
                : 
                
                <div className='d-flex '>
                  <Link className="btn text-success bg-white mx-1 " to="/">Cart</Link>

                  <Link className="btn text-danger bg-white mx-1 " to="/" onClick={handleLogout}>Logout</Link>
                </div>
              }
             
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  )
}
