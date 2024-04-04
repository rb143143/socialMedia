

import React, { useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import style from '../Home/style.css'
import { Box, Toolbar, Typography } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAdd } from '../../../Redux/Slice/PostSlice';
import { useNavigate } from 'react-router-dom';


export default function Add() {

    let dispatch = useDispatch()
    // useSelector(state => console.log(state))
  
 const {isLoading,error} = useSelector(state=> state.posts)

 const [data,setData] = useState({
    name:'',
    desc:''
  })

  const [img,setImg] = useState()
  let navigate = useNavigate()

  const changeHandler=(event)=>{
    let{name,value} = event.target;
    setData({...data,[name]:value})
  }

  const handleImage = (file)=>{
    let fileReader = new FileReader();
    fileReader.addEventListener('load',()=>{
        setImg(fileReader.result);
    })
    fileReader.readAsDataURL(file)
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    console.log('submitted data is:',data,img);

    let product = {
      name: data.name,
      desc: data.desc,
      img:img
    }
    dispatch(fetchAdd(product))
    navigate('/home')
  }

  return (
    <>
    {isLoading && <h1>...Loading</h1>}
    {error && {error}}

    <Typography variant='h4' sx={{paddingTop:'15px',textTransform:'capitalize',fontSize:'26px'}}>share an idea...</Typography>

    <Box className='profile-post'>
                  
    <Box className='post-main'>

    <div className='post-icon'>
        <PeopleAltIcon></PeopleAltIcon> <br></br> <br></br>
        <PsychologyIcon></PsychologyIcon>
        </div> 
    
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Write Your Topic..." onChange={changeHandler} maxLength={20}/>
        <input type="file" name="file" id="file" className="inputfile" onChange={(event)=>handleImage(event.target.files[0])} />
        <textarea name="desc"  cols="30" rows="10" placeholder='Yours Thought...'onChange={changeHandler} maxLength={35}></textarea> 

        <button type='submit'><SendIcon></SendIcon></button>
    </form>
    
    </Box>
</Box>

<Toolbar></Toolbar>

    </>
  )
}
