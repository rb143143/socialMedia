



import React, { useEffect } from 'react'
import style from './style.css'
import { Box,Card, Toolbar} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Post from './Post'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Middle() {

  const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    loop:true,
    dots:false,
    responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 4,
      },
      1000: {
          items: 3,
      },
      1600:{
        items:3,
      }
    },
  };



  return (
    <>
   
    <section className='middle-main'>

        <Box className='timeline-main'>
        
              <Card className='time-p'><button><AddIcon></AddIcon></button><img src='./assets/b1.webp' alt="" /></Card>
              {/* <OwlCarousel className='owl-theme' {...options}> */}

         
              <Card className='time-p'><h5>Timeline</h5><img src='./assets/b2.webp' alt="" /></Card>
        

              <div className='item item-d2'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b3.webp' alt="" /></Card>
              </div>

              <div className='item item-d2'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b4.webp' alt="" /></Card>
              </div>

              <div className='item item-d'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b5.webp' alt="" /></Card>
              </div>

              <div className='item item-d'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b6.webp' alt="" /></Card>
              </div>

              <div className='item item-d'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b2.webp' alt="" /></Card>
              </div>
              
              <div className  ='item item-d'>
                <Card className='time-p'><h5>Timeline</h5><img src='./assets/b3.webp' alt="" /></Card>
              </div>
              

              {/* </OwlCarousel> */}
        
        </Box>


    </section>

    <Toolbar></Toolbar>

    <Post />

    
       

    </>
  )
}
