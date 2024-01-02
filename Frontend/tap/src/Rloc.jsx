import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Nav2 from './Nav2';
import img18 from './assets/r2.jpg';
import img19 from './assets/r5.jpg';
import img20 from './assets/r1.jpg';


const Loc = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      search:""
    },
    onSubmit: values =>{
      const ct  = values.search
      navigate(`/Rdata/${ct}`)
     
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
    
    <img className='himg' src={img18}  alt="img"/>
    <img className='himg' src={img19}  alt="img"/>
    <img className='himg' src={img20}  alt="img"/>
</div>
  )
}

export default Loc