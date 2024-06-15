// Frontend (React)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://billing-app-mern.onrender.com/signup', { name, email, password })
            .then(result => {
                console.log(result);
                setMessage('Registration successful!');
                navigate('/login')
            })
            .catch(err => {
                console.error(err);
                setMessage('Registration failed!');
            });
    }

    return (
        <div className=''>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container bg-white p-3 rounded w-25 justify-content-center">
                <h2>Register</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name:</strong></label>
                        <input type="text" className="form-control rounded-0" id="name"
                            onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="text" className="form-control rounded-0" id="email"
                            onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" className="form-control rounded-0" id="password"
                            onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-success w-100 rounder-0">Register</button>
                </form>
                <p>Already have an account? <Link to='/login' className="text-decoration-none">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
