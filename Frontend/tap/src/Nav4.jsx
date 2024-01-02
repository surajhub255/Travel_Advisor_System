import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const Nav4 = () => {
  const navigate = useNavigate()
  return (
  
        <Box>
          <h1>Admin Page</h1>
          <Button onClick={()=>navigate('/AddFacility')} color="inherit">AddFacility</Button>
          <Button onClick={()=>navigate('/ListFacility')} color="inherit">EditFacility</Button>
          <Button onClick={()=>navigate('/Login')} color="inherit">Logout</Button>
        </Box>
  )
}

export default Nav4