



import { Card,Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ModeIcon from '@mui/icons-material/Mode';

export default function Right() {
  return (
    <>

  

    <section className='message'>
      <Card className='mes-main'>

        <Box className="mes-one">
          <h4>Message</h4>
          <ModeIcon></ModeIcon>
        </Box>

        <Box className="mes-two">
          <input type="text" name="" id="" placeholder='Search Message' />
          <SearchIcon></SearchIcon>
        </Box>

        <br></br>

        <div className='divi'></div>

        

        <Box className='mes-three'>
          <img src="./assets/user.png" alt="" />
          <h5>Nazaret Bhavana</h5>
          <p>Lorem ipsum dolor. </p>
          <h6>1 minutes ago</h6>
          <div className='online'></div>
        </Box>

        <Box className='mes-three'>
          <img src="./assets/user.png" alt="" />
          <h5>Vahan Jeetendra</h5>
          <p>Lorem ipsum dolor. </p>
          <h6>10 minutes ago</h6>
          <div className='online'></div>
        </Box>

        <Box className='mes-three'>
          <img src="./assets/user.png" alt="" />
          <h5>Ramdas Shivali</h5>
          <p>Lorem ipsum dolor. </p>
          <h6>8 minutes ago</h6>
          <div className='online'></div>
        </Box>

        <Box className='mes-three m-lst'>
          <img src="./assets/user.png" alt="" />
          <h5>Jirair Aleksandr</h5>
          <p>Lorem ipsum dolor sit amet  elit. </p>
          <h6>23 minutes ago</h6>
          <div className='online'></div>
        </Box>

        

      </Card>

      <Card className='suggestion'>
        <h5>Suggested For You</h5>

        <Box className='sug-main'>
          <img src="./assets/user.png" alt="" />
          <h5>Lucineh Jyoti</h5>
          <button>Follow</button>
          <button>Unfllow</button>
        </Box>

        <Box className='sug-main'>
          <img src="./assets/user.png" alt="" />
          <h5>Nikitha Marine</h5>
          <button>Follow</button>
          <button>Unfllow</button>
        </Box>

        <Box className='sug-main'>
          <img src="./assets/user.png" alt="" />
          <h5>Narinder Gupta</h5>
          <button>Follow</button>
          <button>Unfllow</button>
        </Box>

      </Card>

    </section>

    </>
  )
}
