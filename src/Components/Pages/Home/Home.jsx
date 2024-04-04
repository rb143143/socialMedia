

import React from 'react'
import Leftbar from './Leftbar'
import Middle from './Middle'
import Right from './Right'
import { Grid,Box, Toolbar } from '@mui/material'
import Header from '../../Layouts/Header'
import responsive from '../Home/responsive.css'

export default function Home() {
  return (
    <>
    
    <Header />

  
        <Grid container spacing={3}>

        <Grid item xl={2} lg={2} className='lft-g'>
            <Leftbar></Leftbar>
        </Grid>

      
        <Grid item xl={8} lg={7} className='mid-g'>
          <Middle />
        </Grid>

        {/* <Toolbar className='home-gap-2'></Toolbar> */}

        <Grid item xl={2} lg={3}  className='right-g'>
          <Right />
        </Grid>


        </Grid>
   
    
    </>
  )
}
