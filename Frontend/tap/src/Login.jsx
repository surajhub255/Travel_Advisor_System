import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'


 const validate = (values) => {
  const result = {};
  if(!values.emailid){
    result.emailid = "Please enter email Id"
  }

  if(!values.pass){
    result.pass = "Please enter password"
  }
  return result;
 }

 const Login = () => {
  const [error,setError]=useState('')
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      emailid:"",
      pass:""
    },validate,

    onSubmit: async (values) => {
    try{
      await axios.post("http://localhost:8080/users/login", values)
      .then((response) => {
        if(response.data == "admin")
        {
          navigate('/Admin')
        }else
        {
          if(response.data == "password matched")
          {
            const eid=values.emailid
            console.log(eid)
            navigate(`/Home2/${eid}`)
          }
          else{
           alert('invalid EmailId or Password');
          }
        }
      }
      )
    } catch (error){
          alert('Invalid EmailId or Password')
  
        } 
      }
    });
  return (
    <div>
      <form className='lform' onSubmit={formik.handleSubmit}>
      <h3>Log In</h3>
        <label htmlFor="emailId">
          Email Id : 
        </label>
        <input type="email" placeholder="Email Id" id="emailid" name="emailid" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.emailid}/>
       
        {formik.touched.emailid && formik.errors.emailid ? <div>{formik.errors.emailid}</div>:null}
        <br />
        <label htmlFor="pass">
          Password :
        </label>
        <input type="password" placeholder="Password" id="pass" name="pass" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.pass} />
     
        {formik.touched.pass && formik.errors.pass ? <div>{formik.errors.pass}</div>:null}
        <br />
        <button className='button1' type='submit'>Log in</button>
        
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
         </div>
      </form>
     
      </div>
  )
}

export default Login