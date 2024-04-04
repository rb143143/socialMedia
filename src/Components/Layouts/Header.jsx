



import { AppBar, Toolbar, Typography,Grid } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import style from '../Pages/Home/style.css'
import { Link } from 'react-router-dom';
// import Body from '../Body/Body';

export default function Header() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  let signUser = JSON.parse(localStorage.getItem('signup_details')); 
  // console.log('signup user details is:',signUser);
  
  let logUser = JSON.parse(localStorage.getItem('login_details')); 
  // console.log('login user details is:',logUser);

  return (
    <>
    <AppBar component={'nav'} className='navbar'>
      <Toolbar>

        <Grid container>

         <Grid item lg={1} md={1}>
          <Typography variant='h6'>Social</Typography>
          </Grid>

          <Grid item lg={1} md={1} className='nav-lft-icon nav-lf'>
            <Link to='/home'><button><HomeIcon></HomeIcon> </button></Link>
            <DarkModeIcon></DarkModeIcon> 
            <AppsIcon></AppsIcon>
          </Grid>

          <Grid item lg={3} md={3} className='nav-search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>

          <Grid item lg={5} md={4}>
          </Grid>

          <Grid item lg={1} md={2} className='nav-lft-icon'>
            <Link to='/profile'><PersonIcon sx={{color:'#fff'}}></PersonIcon> </Link>
            <EmailIcon></EmailIcon> <Link to='/home'><button><HomeIcon></HomeIcon> </button></Link>
          </Grid>

          <Grid item lg={1} md={2} sx={{display:"flex",gap:'10px'}}>
          
          <img src={signUser.my_image} alt="" />
          <h1>{signUser.name}</h1>
          
          </Grid>

        </Grid>

      </Toolbar>
    </AppBar>

    
    </>
  )
}
