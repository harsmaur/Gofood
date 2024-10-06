import React from 'react'
import { useState } from 'react'
import '../components/signup.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

  let navigate = useNavigate();


  const [credentials, setcredentials] = useState({  email: "", password: "" })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/loginUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email,  password:credentials.password, })
    })
    
    const json = await response.json()
    console.log(json);
    if(json.success){
        toast.success('User logged successfully');  
        navigate('/');
        localStorage.setItem('authToken', json.authToken)
        console.log(localStorage.getItem('authToken'))
    }else{
        toast.error('Invalid credentials');
    }
}



  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value.toString() })
}


  return (
    <>
       <section className="vh-100 bg-image"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')" }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-50">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card m-4" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 m-5">
                                        <h2 className="text-uppercase text-center mb-5">Login</h2>

                                        <form onSubmit={handleSubmit}>

                                          

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' value={credentials.email} onChange={onChange} />
                                                <label className="form-label" htmlFor="email">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' value={credentials.password} onChange={onChange} />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">login</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Or create an account <Link to="/signup"
                                                className="fw-bold text-body"><u>Register here</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ToastContainer />
    </>
  )
}
