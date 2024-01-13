import React, { useState } from 'react'
import './signup.css';
import { Link } from 'react-router-dom';


export default function SignUp() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email,  password:credentials.password, geolocation:credentials.geolocation})
        })
        
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert('Invalid credentials')
        }
    }

    // here below name is the parameter in html tag and value also
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: [e.target.value] })
    }

    return (
        <>
            <section className="vh-80 bg-image"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/1000x1000/?burger')" }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-50">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card m-4" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 m-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' value={credentials.name} onChange={onChange} />
                                                <label className="form-label" htmlFor="name">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' value={credentials.email} onChange={onChange} />
                                                <label className="form-label" htmlFor="email">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' value={credentials.password} onChange={onChange} />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                                                <label className="form-label" htmlFor="geolocation">location</label>
                                            </div>



                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Sign Up</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                                                className="fw-bold text-body"><u>Login here</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
