
import React from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import img4 from'./assets/hotel.jpg';
import img5 from'./assets/food.jpg';
import img6 from'./assets/place.jpg';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import { useFormik } from 'formik'
import Nav2 from './Nav2';
 
 
 
const Home2 = () => {
  const navigate = useNavigate()
   const formik = useFormik({
    initialValues:{
      search:""
    },
    onSubmit: values =>{
      const ct  = values.search //mysore
      navigate(`/Show/${ct}`)
     
    }
  })
  return (
    <div className='home1'>
            <div>
       <Nav2/>
            </div>
                <h1 className='h2'>A TEAM OF PROFESSIONAL TRAVEL EXPERT</h1>
                <h1 className='h3'>TRUST OUR EXPERIENCE</h1>

                <form onSubmit={formik.handleSubmit}>
                <div className='d'>
                <input className='i1' type="search" name='search' value={formik.values.search}  onChange={formik.handleChange} placeholder='                                    Enter City'/>
                <IconButton type="submit" aria-label="search">
                      <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
                </div>
                </form>
                <div className='t'>
                  <h2>Hotels</h2>
                  <h2>Places</h2>
                  <h2>Restaurants</h2>
                </div>
                <a href='/Loc'> <img className='img5' src={img4}  alt="img"/></a>
                <a href='/Ploc'><img className='img6' src={img6}  alt="img"/> </a>
                <a href='/Rloc'> <img className='img7' src={img5}  alt="img"/> </a>
  </div>
  )
}
 
export default Home2