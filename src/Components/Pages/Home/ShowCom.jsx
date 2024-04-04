

import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommentDelete, fetchCommentView } from '../../../Redux/Slice/PostSlice'
import { Card, Container,Box, Toolbar, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


export default function ShowCom() {

    let userpost = JSON.parse(localStorage.getItem('user-post'));
    console.log('postaaaaaaaaaa',userpost);

    let signUser = JSON.parse(localStorage.getItem('signup_details')); 
    console.log('signup user details is:',signUser);

    let dispatch = useDispatch()

    const {isLoading,error} = useSelector(state =>state.posts)
    let [postValue, setPostValue] = useState([])
    
    const deleteItem = (id) => {
        console.log("User post to be deleted: ", id);
        dispatch(fetchCommentDelete(id))
        .then((res)=>fetchAllProduct())
        .catch((err)=>console.log("Error: ", err))
    }
    
    const fetchAllProduct=()=>{
        dispatch(fetchCommentView())
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



  return (
    <>
    
    <Toolbar></Toolbar>

    <Container className='com-main'>
        <Link to='/home'><button>Go To Home</button></Link>
        <Grid  item lg={12}>
            <div className='user-info'>
                <p><strong className='user-in'>Logged_User:</strong>{signUser.name} &nbsp; &nbsp;{signUser.email}</p>
                <img src={signUser.my_image} alt="" />
            </div>
        </Grid>
       
    </Container>

    <Container>
        <Grid container>

        <Grid item lg={6}>

            <Box className='comment-post'>
            <Box className='com-box'>

            {
            userpost.map((us)=>(
            <React.Fragment key={us.id}>
                <section className='view-comment'>
                    <Container >
                        <Card>
                        <Box className='com-text'>
                            <h4>Post Title:-</h4>
                            <Box className='com-main usr-pst'>
                                <p>{us.name}</p>
                                {/* <p>{us.desc}</p> */}
                                <img src={us.img} alt="profile" />
                            </Box>
                        </Box>
                        </Card>
                    </Container>
                </section>
            </React.Fragment>
            ))
            }

</Box>

            </Box>

        </Grid>

            <Grid item lg={6} className='user-cmt'>

            <Box className='comment-post'>
            <Box className='com-box'>

        {
      postValue &&  postValue?.map((com)=>(
            <React.Fragment key={com.id}>
                 <section className='view-comment'>
                    <Container >
                        <Card>
                        <Box className='com-text'>
                            <h4>post comment:-</h4> 
                            <Box className='com-main com-usr'>
                                <p>{com.comment}</p>
                                <DeleteIcon onClick={()=>{deleteItem(com.id)}}></DeleteIcon>
                            </Box>
                        </Box>
                        </Card>
                    </Container>
                </section>
            </React.Fragment>
        ))
   }
            
        </Box>

            </Box>

            </Grid>

           

        </Grid>
    </Container>

    <h1></h1>



   


    

                                

    </>
  )
}
