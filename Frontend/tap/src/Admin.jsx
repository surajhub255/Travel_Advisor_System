import React from 'react'
import Stack from '@mui/system/Stack';
import img10 from'../src/assets/c3.jpg';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './index.css'
import { useNavigate} from "react-router-dom";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Admin=()=> {
  const navigate=useNavigate()

  return (
    <div>
   <Box  sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:0}}>
        <Grid item xs={12}  >
          <Item >
          <Stack direction="row" spacing={30} >
          <img className='img10' src={img10} alt="admin" width='700px' height='750px' />
         
          <Box >
         <h1 className='h' >Admin Page</h1> 
          <br />
          <br />
          <Stack direction="row" spacing={8} >
          
          <Button onClick={()=>navigate('/AddFacility')} variant="contained" >AddFacility</Button>
          <Button onClick={()=>navigate('/ListFacility')} variant="contained" >EditFacility</Button>
          <Button onClick={()=>navigate('/Login')} variant="contained" >Logout</Button>
          </Stack>
          </Box>
          </Stack>
          
          </Item>
        
        </Grid>
      </Grid>
    </Box> 
    </div>
  )
}

export default Admin
