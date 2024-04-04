

import React, { useState } from 'react'
import style from '../Pages/Home/style.css'
import responsive from '../Pages/Home/responsive.css'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import { useDispatch} from 'react-redux'
import { fetchLog } from '../../Redux/Slice/PostSlice'
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Swal from 'sweetalert2'

export default function Login() {

let dispatch = useDispatch()
// useSelector(state=> console.log(state))
  
// const {isLoading,error,postValue} = useSelector(state=> state.posts)

const sweetAlert = ()=>{
    Swal.fire('Please SignUp First')
}

const [data,setData] = useState({
    email:'',
    password:''
})

let signUser = JSON.parse(localStorage.getItem('signup_details')); 
console.log('user details is:',signUser);

let navigate = useNavigate()
const handleChange = (event)=>{
    let {name,value} = event.target;
    setData({...data,[name]: value});
}

const handleSubmit = (event)=>{
    event.preventDefault();
	console.log('submitted lo form data is:',data);
    
    if(!signUser){
        sweetAlert()
    }else if(data.email !== signUser.email){
        Swal.fire('Please Check User Email Id')
    }else if(data.password !== signUser.password){
        Swal.fire('Please Check User Password')
    }else if(data.email === signUser.email && data.password === signUser.password){
        Swal.fire('Login Successfull')
        navigate('/home')
    }
    else{
        Swal.fire('Please Register Yourself First')
    }
      dispatch(fetchLog(data))
      
}

  return (
    <>
      <Box className="container-two">

    <div className="forms-container">
    <div className="signin-signup-two">
        
        <form action=" " className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            
            <div className="input-field">
                <EmailIcon></EmailIcon>
                <TextField type="email" placeholder="Email" name='email' onChange={handleChange} />
            </div>
            <div className="input-field">
                <PasswordIcon></PasswordIcon>
                <TextField type="password" placeholder="Password" name='password'  onChange={handleChange}/>
            </div>
            <TextField type="submit" className="btn" value="Sign in" />
        </form>
    </div>
</div>

<div className="panels-container">
    <div className="panel right-panel">
        <div className="content">
            <h3>New to our community ?</h3>
            <p>
                Discover a world of possibilities! Join us and explore a vibrant
  community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" id="sign-up-btn">
                <Link to='/login'>Sign in</Link>
            </button>
        </div>
        <img  src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
    </div>


    

</div>

</Box>
    </>
  )
}



