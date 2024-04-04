

import React from 'react'
import {  Toolbar } from '@mui/material'
import style from '../Home/style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { fetchEdit,fetchUpdate } from '../../../Redux/Slice/PostSlice'
import Header from '../../Layouts/Header'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
export default function Edit() {

let signUser = JSON.parse(localStorage.getItem('signup_details')); 
  // console.log('signup user details is:',signUser);

let {eid} = useParams()
console.log('edit post id is:',eid);

let dispatch = useDispatch()
let navigate = useNavigate()


const [data,setData] = useState({
    name:'',
    desc:''
})

const [img, setImg] = useState([]);

const handleUpdateImage = (file)=>{
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
      setImg(fileReader.result);
  });
  fileReader.readAsDataURL(file);
}


useEffect(() => {
    dispatch(fetchEdit(eid))
    .then((res)=> {
      // console.log('edit response is:',res.payload)
      setData(res.payload)
      // setData({...data,name:res.payload.name,desc:res.payload.desc});
    // setImg(res.payload.img)
    
}) 

.catch((err)=> console.log('error in edit is : ', err));
},[dispatch, eid]);

// console.log('data',data);

  const submitHandler = (event) => {
    event.preventDefault();
    
    let sendValue = {
      eid: eid,
      name: data.name,
      desc: data.desc,
      img:img

      // eid:eid,
      // data: data,
      // img:img
    }
    dispatch(fetchUpdate(sendValue))
    .then((res)=>{
      console.log('update  response is:',res.payload);
      navigate('/home')
    })
    .catch((err)=>console.log('update err is:',err))
    console.log("Submitted Edited Values: ",data,img);
  };

  return (
    <>

    <Header />

    <Toolbar></Toolbar><Toolbar></Toolbar>
    
    <section className='edit-post-main'>
  <div className="contact_top">
    <div className="get_in_touch">
      <h2>YOUR LOGIN DATA</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque numquam tenetur necessitatibus corporis non nihil corrupti quisquam soluta animi quia.</p>
    </div>
    <div className="address">
      <ul>
        <li>
          <div className="icon">
           <PersonIcon />
          </div>
          <div className="text">{signUser.name}</div>
        </li>

        <li>
          <div className="icon">
            <EmailIcon />
          </div>
          <div className="text">{signUser.email}</div>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  </div>
  <div className="contact_form">


    <form action="" onSubmit={submitHandler}>
      <h2>EDIT POST DATA</h2>
      <div class="input_field">
        <input type="text" placeholder="Your Post Title" value={data.name} 
            onChange={(event) => setData((prev) => ({ ...prev, name: event.target.value }))}  />
      </div>
      <div class="input_field">
        <input type="text" placeholder="Your Post Description"   value={data.desc} 
            onChange={(event) =>setData((prev) => ({ ...prev, desc: event.target.value }))}/>
      </div>
      <div class="input_field">
      <input type="file" onChange={(event) => handleUpdateImage(event.target.files[0])}/>
      </div>
      <div class="input_field">
        <button type='submit'>SEND</button>
      </div>
    </form>


  </div>
  <div className="contact_bottom">
    <div className="info">
      <div className="about">
        <h2>YOUR ACTIVITIES</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, asperiores unde sint ex iste id fugiat dignissimos quaerat animi itaque dolor velit placeat, maxime officiis deleniti repellendus labore dolores culpa.</p>
      </div>
      <div className="subscribe">
        <h2>YOUR PREFRENCE</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus exercitationem, accusantium, earum reprehenderit culpa autem eos neque dolor officia pariatur laudantium optio enim quaerat impedit nobis necessitatibus omnis animi vitae.</p>
      </div>
    </div>
    
  </div>
</section>
    
  
    
    </>
  )
}
