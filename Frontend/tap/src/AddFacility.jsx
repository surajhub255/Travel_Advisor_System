import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const validate = (values) => {
    const result = {};
    if(!values.fname){
      result.fname = "Please enter facility name"
    }
    if(!values.category){
        result.category = "Please enter category"
      }
      if(!values.contact){
        result.contact = "Please enter contact number"
      }
      if(!values.city){
        result.city = "Please enter city"
      }
      if(!values.location){
        result.location = "Please enter location"
      }
      if(!values.address){
        result.address = "Please enter address"
      }
      if(!values.details){
        result.details = "Please enter details"
      }
      if(!values.ratings){
        result.ratings = "Please enter ratings"
      }
      if(!values.image){
        result.image = "Please upload image"
      }
return result
}

const Addfacility = ()=> {
  const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            fid:"",
            fname:"",
            category:"",
            contact:"",
            city:"",
            location:"",
            address:"",
            details:"",
            ratings:"",
            image:""
        },validate,
        onSubmit: async (values) => {
          await axios.post("http://localhost:8080/users/add/facility",values).then((response) => {
            if(response.data == "registered successfully")
            {
              navigate('/Admin')
            }
            else{
              console.log("incorrect")
            }
            console.log(values)
          
        });
    }
  })
    return(
  
            
      <form className='aform' onSubmit={formik.handleSubmit}>
            <h3>Add Facility</h3>
            <label htmlFor='fname'>
             Facility Name:</label>
        <input type="text"  id='fname' name='fname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname}/>
        {formik.touched.fname && formik.errors.fname ? <div>{formik.errors.fname}</div>:null}
        <br />
    
        <label htmlFor='category'>
             Category:</label>
             <select name="category" id="category" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.category}>
            <option value="place">place</option>
            <option value="hotel">hotel</option>
            <option value="resturant">resturant</option>  
            </select>
        {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div>:null}
        <br />
        <label htmlFor='contact'>
          Contact</label>
        <input type="number"  name='contact' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contact}/>
       
        {formik.touched.contact && formik.errors.contact  ? <div>{formik.errors.contact}</div>:null}
        <br />
 

        <label htmlFor='city'>
             City:</label>
             <select name="city" id="city" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city}>
            <option value="Mysore">Mysore</option>
            <option value="Mussoorie">Mussoorie</option>
            <option value="Manali">Manali</option>  
            </select>
        {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div>:null}
        <br />

        <label htmlFor='location'>
        Location:</label>
        <input type="text"  id='location' name='location' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.location}/>
  
        {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div>:null}
        <br />

        <label htmlFor='address'>
        Address:</label>
        <input type="text"  id='address' name='address' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address}/>
      
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div>:null}
        <br />

        <label htmlFor='details'>
        Details:</label>
        <textarea className='tarea' type="text"  id='details' name='details' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details}/>
   
        {formik.touched.details && formik.errors.details ? <div>{formik.errors.details}</div>:null}
        <br />

        <label htmlFor='ratings'>
        Ratings:</label>
             <select name="ratings" id="ratings" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.ratings}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>  
            <option value="4">4</option>  
            <option value="5">5</option>  
            </select>
        {formik.touched.ratings && formik.errors.ratings ? <div>{formik.errors.ratings}</div>:null}
        <br />

        <label htmlFor='image'>
        Image:</label>
        <img id="target" />
        <input type="file" id="image" name="image"  onBlur={formik.handleBlur} value={formik.values.image} onChange={formik.handleChange}/>
  
        {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div>:null}
        <br /> 
        <button className='button1' type='submit'>Submit</button>       
            </form>
    )
}
export default Addfacility