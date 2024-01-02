import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const validate = (values) => {
  const result = {};
  if(!values.uname){
    result.uname = "Please enter user name"
  }else if(values.uname.length>20){
    result.uname = "Length should not exceed 20 charachters"
  }
  if(!values.mobile){
    result.mobile="Enter mobile"
  }
  if(!values.emailid){
    result.emailid = "Please enter email Id"
  }
  if(!values.pass){
    result.pass = "Please enter the password"
  }

  if(!values.cpass){
      result.cpass = "Please re-enter the password"
  }else if(values.pass != values.cpass){
      result.cpass = "Password does not match"
  }
  if(values.address.length>50){
    result.uname = "Length should not exceed 50 charachters"
  }
  return result;
}

 const Signup = () => {
 const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      emailid:"",
      uname:"",
      pass:"",
      cpass:"",
      address:"",
      mobile:""
    },validate,

    onSubmit:async (values) => {
     const {emailid,uname,pass,address,mobile} =values
    await axios.post("http://localhost:8080/users/signup" ,{emailid,uname,pass,address,mobile})
      .then((response) => {
        console.log(response);
      });
     navigate('/Login')
    }
  })
  return (
    <div>
      
      <form className='sform' onSubmit={formik.handleSubmit}>
      <h3>Signup</h3>
        <label htmlFor='uname'>
            Name :
        </label>
        <input type="text" placeholder="UserName" id='uname' name='uname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.uname}/>
      
        {formik.touched.uname && formik.errors.uname ? <div>{formik.errors.uname}</div>:null}
        <br />

        <label htmlFor='address'>
        Address :
        </label>
        <input type="text"  placeholder="Address" id='address' name='address' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address}/>
       
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div>:null}
        <br />

        <label htmlFor='mobile'>
          Mobile No:-
        </label>
        <input type="number" placeholder="Mobile Number" id='mobile' name='mobile' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mobile}/>
      
        {formik.touched.mobile&& formik.errors.mobile? <div>{formik.error.mobile}</div>:null}
        <br />
        <label htmlFor="emailid">
          Email Id : 
        </label>
        <input type="email" id="emailid" placeholder="Email Id" name="emailid" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.emailid}/>
      
        {formik.touched.emailid && formik.errors.emailid ? <div>{formik.errors.emailid}</div>:null}
        <br />
        <label htmlFor="pass">
          Password :
        </label>
        <input type="password" placeholder="Password" id="pass" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.pass} title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 and at most 10 characters" required/>
        
        {formik.touched.pass && formik.errors.pass ? <div>{formik.errors.pass}</div>:null}
        <br />
        <label htmlFor="cpass">
          Re-type Password :
        </label>
        <input type="password" placeholder="Re-Type Password" id="cpass" name="cpass" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.cpass} />
      
        {formik.touched.cpass && formik.errors.cpass ? <div>{formik.errors.cpass}</div>:null}
        <br />
        <button className='button1' type='submit'>Sign Up</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
         </div>
      </form>
    </div>
  )
}

export default Signup