

import React from 'react'
import Header from '../../Layouts/Header'
import Leftbar from '../Home/Leftbar'
import Right from '../Home/Right'
import { Grid,Box, Toolbar } from '@mui/material'
import style from '../Home/style.css'
import Add from './Add'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function User() {

  let loguser = JSON.parse(localStorage.getItem('signup_details')); 
// console.log('signup user details is:',loguser);


const handleLogout = ()=>{
  window.localStorage.removeItem("signup_details");
  window.localStorage.removeItem("login_user")  
  Swal.fire('You have logged out successfully!')
 }
  return (
    <>
    
    <Header />
        <Box>
        <Grid container spacing={3}>
        <Grid item lg={2} md={1} className='user-left'>
            <Leftbar></Leftbar>
        </Grid>

    
        <Grid item lg={7} md={10} sm={10} className='user-mid'>
          <Toolbar></Toolbar>
      
          <Box className='profile'>
            <Box component={'div'} className='profile-top'>
              <Box className='profile-pic'>
                <img src={loguser.my_image} alt="" />
              </Box>

              <Box className='profile-info'>
                <h1>{loguser.name}</h1>
                <Box className='logout-btn'>
                  <Link to='/'><button onClick={handleLogout}>logout</button></Link>
                </Box>

                  <Box className='sub-info'>
                   <div className='sub-divider'></div>
                   <ul>
                    <li><h5><strong>1234</strong></h5></li>
                    <li><p>Followers</p></li>
                    <li><h5><strong>12</strong></h5></li>
                    <li><p>Following</p></li>
                    <li><h5><strong>78</strong></h5></li>
                    <li><p>Post</p></li>
                   </ul>
                   <div className='sub-divider'></div>
                </Box>

            
                <Add />
              </Box>

              

            </Box>

            
            
          </Box>
        </Grid>

        

        <Grid item lg={3} className='user-right'><Right /></Grid>


        </Grid>
    </Box>
    
    </>
  )
}
