// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//     const [name, setName] = useState()
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         axios.post('http://localhost:3002/signup', {name, email, password})
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
//     }

//     return (
//         <div className=''>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>

//             <div className="continer bg-white p-3 rounded w-25 justify-content-center">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit} >
//                     <div className="mb-3">
//                         <label for="name" className="name"><strong> Name : </strong></label>
//                         <input type="text" className="name form-control rounded-0" id="name" 
//                         onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required />
//                     </div>

//                     <div className="mb-3">
//                         <label for="email" className="email"><strong> Email : </strong></label>
//                         <input type="text" className="email form-control rounded-0" id="email" 
//                         onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
//                     </div>

//                     <div className="mb-3">
//                         <label for="email" className="email"><strong> Password : </strong></label>
//                         <input type="password" className="email form-control rounded-0" id="password" 
//                         onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
//                     </div>
//                     <br></br>
//                 </form>


//                 <button type="submit" className="btn btn-success w-100 rounder-0">Register</button>
//                 <p>Already Have an Account</p>
//                 <Link to='/login' type="submit" className="btn btn-default w-100 bg-light rounder-0 text-decoration-none">Login</Link>

//             </div >
//         </div >
//     );
// }

// export default Signup;

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
        axios.post('http://localhost:3005/signup', { name, email, password })
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
