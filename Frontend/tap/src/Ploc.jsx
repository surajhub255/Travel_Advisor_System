import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Nav2 from './Nav2';
import img21 from './assets/pl3.jpg';
import img22 from './assets/pl2.jpg';
import img23 from './assets/pl4.jpg';




const Loc = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      search:""
    },
    onSubmit: values =>{
      const ct  = values.search
      navigate(`/Pdata/${ct}`)
     
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
    <img className='himg' src={img21}  alt="img"/>
    <img className='himg' src={img22}  alt="img"/>
    <img className='himg' src={img23}  alt="img"/>
   

</div>
  )
}

export default Loc