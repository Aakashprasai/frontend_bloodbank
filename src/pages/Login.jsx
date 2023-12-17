import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUserApi } from '../apis/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const changeEmail = (e) => { // e is event that is typed by the user
        setEmail(e.target.value)
    }

    const changePassword = (e) => { // e is event that is typed by the user
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // prevents browser to reload
        console.log(email, password);

        // making json data object
        const data = {
            email: email, // agaadi ko backend ko ho paxadi ko maathi ko use state ko
            password: password
        }

        // making API call
        loginUserApi(data).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
                localStorage.setItem('token', res.data.userData);

                const jsonDecode = JSON.stringify(res.data.userData)
                localStorage.setItem('users', jsonDecode);

            }

        }).catch((err) => {
            toast.error("Server Error")
            console.log(err.message)
        })
    }

    return (
        <>
            <h4 className='p-4'> Login to Your Account</h4>
            <form className='m-4 w-25'>
                <label>Email</label>
                <input onChange={changeEmail} type="email" className='form-control mb-2' placeholder='Enter your Email' />
                <label>Password</label>
                <input onChange={changePassword} type="password" className='form-control mb-3' placeholder='Enter your Password' />
                <button onClick={handleSubmit} className="btn btn-success  w-100">Log In</button>
                <Link className='text-black text-decoration-none' to={'login'}>Already have an account?</Link>
            </form>
        </>
    )
}

export default Login;
