

import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from '../Auth/Signup'
import Home from '../Pages/Home/Home'
import Login from '../Auth/Login'
import User from '../Pages/User/User'
import Edit from '../Pages/User/Edit'
import User_Profile from '../Auth/User_Profile'
// import ViewComment from '../Pages/Home/ViewComment'
import ShowCom from '../Pages/Home/ShowCom'

export default function Routing() {
  return (
    <>
    <Router>
        
        <Routes>
            <Route path='' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='home' element={<Home />} />
            <Route path='home/edit/:eid' element={<Edit />} />
            <Route path='com' element={<ShowCom />} />
            <Route path='profile' element={<User />} />
            <Route path='pro' element={<User_Profile />} />
            
        </Routes>
    </Router>
    
    </>
  )
}


// update jsonserver image using input type file reactjs


// import React, { useState } from 'react';
// import axios from 'axios';

// function UpdateImage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageData, setImageData] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpdateImage = () => {
//     if (!selectedFile) {
//       console.error('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     // Upload the new image file to the server
//     axios.post('http://localhost:3000/upload', formData)
//       .then(response => {
//         const newImageUrl = response.data.imageUrl;

//         // Update the image URL in the existing data
//         const updatedImageData = { ...imageData, imageUrl: newImageUrl };

//         // Send PUT request to update the image data in JSON Server
//         axios.put('http://localhost:3000/images/1', updatedImageData) // Assuming your image ID is 1
//           .then(response => {
//             console.log('Image updated successfully:', response.data);
//             setImageData(response.data); // Update local state with the updated image data
//           })
//           .catch(error => {
//             console.error('Error updating image:', error);
//           });
//       })
//       .catch(error => {
//         console.error('Error uploading image:', error);
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpdateImage}>Update Image</button>
//     </div>
//   );
// }

// export default UpdateImage;
