import React from 'react';
import '../style/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
const Navbars = () => {
  const user= JSON.parse(localStorage.getItem("users"));
  const navigate=useNavigate();

  const handleLogout=()=>{
    alert("Are you sure that you want to logout?");
    localStorage.removeItem("users");
    localStorage.removeItem("token")
    navigate("/home")
  }


  return (
    <>
      <nav style={{ position: "fixed", zIndex: "99", top: "0", left: "0" }}>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label for="" className="logo text-danger">BloodBank</label>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Donate Blood</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Be a Donor</a></li>
          <li id="btn1">
            {user ?(
            <button onClick={handleLogout} className='btn btn-dark rounded m-2'>{user.fullName}</button>
            ):(
              <>
              <Link to={"/register"} className='btn btn-dark rounded m-2'>Register</Link>
            <Link to={"/login"} className='btn btn-dark rounded m-2'>Login</Link>
              </>
            )}
            
          </li>
        </ul>

        <div>

        </div>
      </nav>

    </>
  );
};

export default Navbars;
