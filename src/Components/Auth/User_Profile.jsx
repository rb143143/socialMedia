

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function User_Profile() {

let signUser = JSON.parse(localStorage.getItem('signup_details')); 
// console.log('signup user details is:',signUser);

let logUser = JSON.parse(localStorage.getItem('login_details')); 
// console.log('login user details is:',logUser);

let navigate = useNavigate()

const handleLogout = ()=>{
 window.localStorage.removeItem("signup_details");
 window.localStorage.removeItem("login_details")
 Swal.fire('You have logged out successfully!')  
 navigate('/')
}

  return (
    <>
    
    <h1>User_Profile</h1>

    <br></br><br></br>

    <h3>{signUser.name}</h3>

    <br></br><br></br>

    <img src={signUser.my_image} alt="" />

    <br></br><br></br>

    <button onClick={handleLogout}>logout</button>

    <br></br><br></br>

    <input type="file" name="" id="" />

    </>
  )
}
