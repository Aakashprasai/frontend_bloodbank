import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/api";


const Register = () => {

  // useState (setting input value)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // function for changing input value

  const changeFirstName = (e) => { // e is event that is typed by the user
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => { // e is event that is typed by the user
    setLastName(e.target.value)
  }

  const changeEmail = (e) => { // e is event that is typed by the user
    setEmail(e.target.value)
  }

  const changePassword = (e) => { // e is event that is typed by the user
    setPassword(e.target.value)
  }


  // function for button 
  const handleSubmit = (e) => {
    // check if input value is available
    e.preventDefault(); // prevents browser to reload
    console.log(firstName, lastName, email, password);

    // making json data object
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    // making API call
    createUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }

    }).catch((err) => {
      toast.error("Server Error")
      console.log(err.message)
    })


  }

  return (
    <>
      <h4 className='p-4'> Create Your Account</h4>
      <form className='m-4 w-25'>
        <label>Firstname</label>
        <input onChange={changeFirstName} type="text" className='form-control mb-2' placeholder='Enter your First name' />
        <label>Lastname</label>
        <input onChange={changeLastName} type="text" className='form-control mb-2' placeholder='Enter your Last name' />
        <label>Email</label>
        <input onChange={changeEmail} type="email" className='form-control mb-2' placeholder='Enter your Email' />
        <label>Password</label>
        <input onChange={changePassword} type="password" className='form-control mb-3' placeholder='Enter your Password' />
        <Link onClick={handleSubmit} className="btn btn-success w-100" to={"/login"}>Create an Account</Link>
        <a href="" className='text-black text-decoration-none'>Already have an account?</a>
      </form>
    </>
  );
};

export default Register;
