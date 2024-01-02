import React,{useState ,useEffect} from 'react';
import {useFormik} from "formik";
import { useNavigate ,useParams} from "react-router-dom";
import axios from 'axios'
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
  else if(values.mobile.length>10){
    result.mobile = "Length should not exceed 10 charachters"
  }

  if(!values.pass){
    result.pass = "Please enter the password"
  }
  if(values.address.length>50){
    result.uname = "Length should not exceed 50 charachters"
  }
  if(!values.cpass){
    result.cpass = "Please re-enter the password"
}else if(values.pass != values.cpass){
    result.cpass = "Password does not match"
}
  return result;
}
 
 
 
const Edituser = () => {
    const navigate=useNavigate()
    const {eid}=useParams();
    const [error,setError]=useState('')
  const[users,setUsers]=useState(true);
  useEffect(()=>{  
    const asyncall= async()=>{
          await axios.get(`http://localhost:8080/users/showby/${eid}`)
          .then(res=>{setUsers(res.data)})  
     }
     const timer=setTimeout(()=>{asyncall()},100)
     return ()=>clearTimeout(timer)
  },[users])
    const formik=useFormik({
        initialValues:{
         
            uname:"",
            pass:"",
            cpass:"",
            mobile:"",
            address:""
        },validate,
        onSubmit:async (values) =>{
          const {uname,pass,mobile,address} =values
          try{
            await axios.put(`http://localhost:8080/users/editby/${eid}`,{uname,pass,mobile,address})
            .then((response) =>{
              if(response.data== "updated successfully")
              {
                alert('updated sucessfully')
                navigate(`/Home2/${eid}`)
              }
                     
              else
              setError('not updated');
            })
          }
          catch(error){
                  alert('not updated')
           
                } 
        }
    })
  return (
    <div>
            <h1 className='eh2'>EDIT USER</h1>
            <form className='sform' onSubmit={formik.handleSubmit}>
                <label htmlFor="uname">user name:</label>
                <input type="text"
                name="uname"
                placeholder={users.uname}
                value={formik.values.uname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <br/>
                {formik.touched.uname && formik.errors.uname ? <div>{ formik.errors.uname}</div>:null }
                <label htmlFor="pass">password :</label>
                <input type="password"
                name="pass"
               
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 and at most 10 characters"
                value={formik.values.pass}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <br />
                {formik.touched.pass && formik.errors.pass ? <div>{ formik.errors.pass}</div>:null }
 
                <label htmlFor="cpass"> Re-type password :</label>
                <input type="password"
                name="cpass"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 and at most 10 characters"
                value={formik.values.cpass}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <br />
                {formik.touched.cpass && formik.errors.cpass ? <div>{ formik.errors.cpass}</div>:null }
                <label htmlFor="mobile">Mobile no:</label>
                <input type="number"
                name="mobile"
                placeholder={users.mobile}
 
                value={formik.values.mobile}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}/>
                {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile}</div>:null }
                <br />
                <label htmlFor="address">Address:</label>
                <input type="text"
                name="address"
                placeholder={users.address}
 
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}/>
                {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div>:null }
                <br />
                <button className='button1' type="submit">Enter</button>
                </form>
    </div>
 
  )
}
 
export default Edituser