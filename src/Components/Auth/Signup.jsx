

import React, { useState } from 'react'
import style from '../Pages/Home/style.css'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { fetchReg } from '../../Redux/Slice/PostSlice'
// import { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Swal from 'sweetalert2'

export default function Signup() {

	const sweetAlert = ()=>{
		Swal.fire('User has been registered successfully')
	}

	let navigate = useNavigate()

	const [data,setData] = useState({
		name:'',
		email:'',
		password:''
	})

	const [img,setImg] = useState()

	const handleChange = (event)=>{
		let {name,value} = event.target;
		setData({...data,[name]: value});
	}

	const handleImage = (file)=>{
		let fileReader = new FileReader();
		fileReader.addEventListener("load", ()=>{
			setImg(fileReader.result)
		})
		fileReader.readAsDataURL(file)
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		console.log('submitted registration form data is:',data,img);
		let user = {
			name: data.name,
			email: data.email,
			password: data.password,
			my_image: img
		}
		dispatch(fetchReg(user))
		sweetAlert();
		navigate('/login')
	}

let dispatch = useDispatch()

  return (
    <>
    
    <Box className="container">
		<Box className="forms-container">
			<Box className="signin-signup">

				<form action="#" className="sign-up-form" onSubmit={handleSubmit}>
					<h2 className="title">Sign up</h2>
					<div className="input-field">
						<PersonIcon></PersonIcon>
						<TextField type="text" placeholder="Username" name='name' onChange={handleChange} />
					</div>
					<div className="input-field">
						<EmailIcon></EmailIcon>
						<TextField  type="email" placeholder="Email" name='email' onChange={handleChange} />
					</div>
					<div className="input-field">
						<PasswordIcon></PasswordIcon>
						<TextField  type="password" placeholder="Password" name='password' onChange={handleChange} />
					</div>

					<div className="input-field">
						<AddAPhotoIcon></AddAPhotoIcon>
						<TextField  type="file"  onChange={(event)=>handleImage(event.target.files[0])} />
					</div>

					<TextField  type="submit" sx={{color:'#fff'}} className="btn" value="Sign up" />

					
				</form>
			</Box>
		</Box>

		<Box className="panels-container">
			<Box className="panel left-panel">
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
			</Box>

		</Box>
	</Box>

    
    </>
  )
}
