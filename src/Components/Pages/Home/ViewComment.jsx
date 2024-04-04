

// import React, { useEffect,useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCommentDelete, fetchCommentView, fetchView } from '../../../Redux/Slice/PostSlice'
// import { Card, Container,Box, Toolbar, Grid } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';




// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// export default function ViewComment() {

// let post_details = JSON.parse(localStorage.getItem('user-post'));
// console.log('post_details',post_details);

// let comm_detail = JSON.parse(localStorage.getItem('user-comment'));
// console.log('comm_detail',comm_detail);

// let dispatch = useDispatch()

// const {isLoading,error} = useSelector(state =>state.posts)
// let [postValue, setPostValue] = useState([])

// const deleteItem = (id) => {
//     console.log("User post to be deleted: ", id);
//     dispatch(fetchCommentDelete(id))
//     .then((res)=>fetchAllProduct())
//     .catch((err)=>console.log("Error: ", err))
// }

// const fetchAllProduct=()=>{
//     dispatch(fetchCommentView())
//     .then((res) => {
//         console.log("Get data: ", res);
//         setPostValue(res.payload)
//     })
//     .catch((err) => {
//         console.log("Get Error: ", err);
//     })
// }

// useEffect(() => {
//     fetchAllProduct()
// }, [])




//   return (
    
//     <>
   

//     {isLoading && <h1>...Loading</h1>}
//     {error && {error}}

//     ddddddddddddddddd

   

//    {
//       postValue &&  postValue?.map((com)=>(
//             <React.Fragment key={com.id}>
//                  <section className='view-comment'>
//                     <Container >
//                         <Card>
//                         <Box className='com-text'>
//                             <h4>Comments:-</h4>
//                             <Box className='com-main'>
//                                 <p>{com.comment}</p>
//                                 <DeleteIcon onClick={()=>{deleteItem(com.id)}}></DeleteIcon>
//                             </Box>
//                         </Box>
//                         </Card>
//                     </Container>
//                 </section>
//             </React.Fragment>
//         ))
//    }

//    <Toolbar></Toolbar>

   

   
    

//     </>

    
//   )
// }
