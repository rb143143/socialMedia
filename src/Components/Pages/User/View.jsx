

import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComment, fetchDelete, fetchView } from '../../../Redux/Slice/PostSlice'
import { Box, Toolbar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import style from '../Home/style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import Swal from 'sweetalert2'

export default function View() {

let navigate = useNavigate()

let dispatch = useDispatch()

const {isLoading,error} = useSelector(state =>state.posts)
let [postValue, setPostValue] = useState([])

const deleteItem = (id) => {
    console.log("User post to be deleted: ", id);
    dispatch(fetchDelete(id))
    .then((res)=>fetchAllProduct())
    .catch((err)=>console.log("Error: ", err))
}

const fetchAllProduct=()=>{
    dispatch(fetchView())
    .then((res) => {
        console.log("Get data: ", res);
        setPostValue(res.payload)
    })
    .catch((err) => {
        console.log("Get Error: ", err);
    })
}

useEffect(() => {
    fetchAllProduct()
}, [])


const [like,setLike] = useState(101)
const [islike,setIsLike] = useState(false)

const handleLike = ()=>{
    setLike(like + (islike ? -1 : 1))
    setIsLike(!islike)
}


const [show,setShow] = useState(false)

const handleShow = (event)=>{
    if(show === true){
        setShow(false)
    }else{
        setShow(true)
    }
}

// comments start

const [data,setData] = useState({
    comment:''
})

const changeHandler=(event)=>{
    let{name,value} = event.target;
    setData({...data,[name]:value})
}

const submitHandler=(event)=>{
    event.preventDefault();
    console.log('submitted comment is:',data);
    let socialpost = {
      comment: data.comment
    }
    dispatch(fetchComment(socialpost))
    Swal.fire('your  comment has been submitted!')
    navigate('/com')
}

let signUser = JSON.parse(localStorage.getItem('signup_details')); 
// console.log('signup user details is:',signUser);

const [date, setDate] = useState(new Date());


  return (
    <>
    
    {isLoading && <h1>...Loading</h1>}
    {error && {error}}
   

    <Toolbar></Toolbar>

        {
            postValue.map((pst)=>(
                <React.Fragment key={pst.id}>

                    <Card sx={{marginBottom:'50px',height:'auto'}}>

                    <CardHeader align='left' avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        </Avatar>
                    }
                    
                    title={signUser.name}
                    subheader= {date.toLocaleString()} 
                    />


                    {/* <CardMedia sx={{ height: 140 }} image={pst.my_img} title="green iguana"/> */}
                    <CardMedia sx={{height:'500px'}} className='view_img'>{<img src={pst.img} alt="" />}</CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align='left'>{pst.name}</Typography>
                    <Typography variant="body2" color="text.secondary" align='left' >{pst.desc}</Typography>
                    </CardContent>

                    <Box className='oth-btn' sx={{display:'flex',gap:'15px',justifyContent:'end',marginBottom:'20px',paddingRight:'15px'}}>
                        <button onClick={()=>{deleteItem(pst.id)}}>Delete</button>
                        <button><Link to={`edit/${pst.id}`} className='edit-btn'>Edit</Link></button>
                </Box> 

                    
                    <Box className='like-button' align='left' sx={{paddingLeft:'15px',display:'flex',gap:'20px'}}>
                        <button onClick={handleLike} className={setLike ? 'active-like' : ''} >
                            <FavoriteIcon sx={{fontSize:'25px'}} ></FavoriteIcon></button>
                        <h5>like {like}</h5>

                        <Box className='post-comment'>
                        <button onClick={handleShow}><CommentIcon></CommentIcon></button> <br></br> <br></br>
                        
                        </Box>
                    </Box>


                
                    {/* <button><Link to={`com/${pst.id}`} className='edit-btn'>Edit</Link></button> */}

                    { show && (
                            <>
                    
                            <Box className='comment-post'>
                                <Box className='com-box'>
                                <form onSubmit={submitHandler}>
                                    <input type='text' name='comment' onChange={changeHandler} maxLength={30}></input>
                                    <button type='submit'>sumbit</button>
                                    {/* <button><Link to={`com/${pst.id}`} className='edit-btn'>Edit</Link></button> */}
                                </form>
                                  
                                </Box>

                            </Box>
                            </>
                         )
                    }


                    </Card>

                </React.Fragment>
            ))
        }



    </>
  )
}
