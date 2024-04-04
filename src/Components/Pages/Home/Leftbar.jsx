

import { Box, Divider, Toolbar } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.css'

export default function Leftbar() {


  return (
    <>
    
    <section className='left-side-main'>
      <Box className='leftbar'>
   
              <Box className='lft-content'>
                <img src='./assets/friend.png' alt="" />
                <h4>Friends</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/2.png' alt="" />
                <h4>Group</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/3.png' alt="" />
                <h4>Market Place</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/4.png' alt="" />
                <h4>Watch</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/5.png' alt="" />
                <h4>Memories</h4>
              </Box>

              <br></br>

              <Divider></Divider>

              <h5>Your Shortcuts</h5>

              <br></br>

              <Box className='lft-content'>
                <img src='./assets/6.png' alt="" />
                <h4>Events</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/7.png' alt="" />
                <h4>Gamming</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/8.png' alt="" />
                <h4>Videos</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/9.png' alt="" />
                <h4>Message</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/10.png' alt="" />
                <h4>Fundraiser</h4>
              </Box>

              <Divider></Divider>

              <h5>Others</h5>
              <br></br>

              <Box className='lft-content'>
                <img src='./assets/11.png' alt="" />
                <h4>Fundraiser</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/12.png' alt="" />
                <h4>Tutorials</h4>
              </Box>

              <Box className='lft-content'>
                <img src='./assets/13.png' alt="" />
                <h4>Courses</h4>
              </Box>



      </Box>
    </section>
    
    </>
  )
}
