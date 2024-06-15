// New code
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://billing-app-mern.onrender.com/login', { email, password });
            const { message, token } = response.data;
            if (message === 'Success') {
                localStorage.setItem('token', token);
                setMessage('Login successful!');
                navigate('/');
            } else {
                setMessage(message);
            }
        } catch (err) {
            console.error(err);
            setMessage('Login failed!');
        }
    };

    return (
        <div className=''>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container bg-white p-3 rounded w-25 justify-content-center">
                <h2>Login</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-success w-100 rounder-0">Login</button>
                </form>
                <p>Already have an account? <Link to='/signup' className="text-decoration-none">Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;