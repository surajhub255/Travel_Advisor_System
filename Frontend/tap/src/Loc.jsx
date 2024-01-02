import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Nav2 from './Nav2'
import img9 from './assets/h2.jpg';
import img10 from './assets/h3.jpg';
import img11 from './assets/h1.jpg';



const Loc = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      search:""
    },
    onSubmit: values =>{
      const ct  = values.search  //mysore
      navigate(`/Hdata/${ct}`)
     
    }
  })
  return (
  <div className='loc'>
    <Nav2/>
    <form  onSubmit={formik.handleSubmit}>
    <div>
            <div className="search-container">
                <input className="search1" name='search' type="text" placeholder="Search By Location..." value={formik.values.search}  onChange={formik.handleChange}/>
                <button className="sub" >Search</button>
            </div>
      </div>
    </form>
    <img className='himg' src={img9}  alt="img"/>
    <img className='himg' src={img10}  alt="img"/>
    <img className='himg' src={img11}  alt="img"/>

</div>
  )
}

export default Loc