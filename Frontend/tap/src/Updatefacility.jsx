import React ,{useState , useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom'
 
const validate = (values) => {
    const result = {};
      
return result
}
 
const Updatefacility = ()=> {
    const {fid}=useParams();
  const navigate = useNavigate()
  const [error,setError]=useState('')
  const[facility,setFacility]=useState(true);
  useEffect(()=>{  
    const asyncall= async()=>{
          await axios.get(`http://localhost:8080/users/showbyfid/${fid}`)
          .then(res=>{setFacility(res.data)})  
     }
     const timer=setTimeout(()=>{asyncall()},100)
     return ()=>clearTimeout(timer)
  },[facility])
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
          try{
            await axios.put(`http://localhost:8080/users/edit/${fid}`,values).then((response) => {
            if(response.data == "updated successfully")
            {
              alert('updated sucessfully')
              navigate('/ListFacility')
 
            }
            else{
              console.log("invalid")
            }
            });
          }
          catch(error){
            alert('not updated')
     
          }
         
    }
  })
    return(
 
           
      <form className='sform' onSubmit={formik.handleSubmit}>
            <h3>Update Facility</h3>
 
         {/* <label htmlFor='fid'>
          Fid</label>
        <input type="number"  id='fid' name='fid' placeholder={facility.fid} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fid} readOnly/>
        {formik.touched.fid && formik.errors.fid  ? <div>{formik.errors.fid}</div>:null}
        <br /> */}
 
        <label htmlFor='fname'>
          Name</label>
        <input type="text"  id='fname' name='fname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname}  placeholder={facility.fname} readOnly/>
        
        {formik.touched.fname && formik.errors.fname  ? <div>{formik.errors.fname}</div>:null}
        <br />
        <label htmlFor='category'>
          Category</label>
        <input type="text"  id='category' name='category' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.category}  placeholder={facility.category} readOnly/>
        
        {formik.touched.category && formik.errors.category  ? <div>{formik.errors.category}</div>:null}
        <br />  
           
        <label htmlFor='contact'>
          Contact</label>
          <input type="number"  name='contact' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contact} placeholder={facility.contact} />
        
        {formik.touched.contact && formik.errors.contact  ? <div>{formik.errors.contact}</div>:null}
        <br />
 
        <label htmlFor='city'>
          City</label>
        <input type="text"  id='city' name='city' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} placeholder={facility.city} readOnly/>
        
        {formik.touched.city && formik.errors.city  ? <div>{formik.errors.city}</div>:null}
        <br />
 
        <label htmlFor='location'>
          Location</label>
        <input type="text"  id='location' name='location' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.location} placeholder={facility.location} readOnly/>
   
        {formik.touched.location && formik.errors.location  ? <div>{formik.errors.location}</div>:null}
        <br />
 
        <label htmlFor='address'>
        Address:</label>
        <input type="text"  id='address' name='address' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address} placeholder={facility.address} />
    
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div>:null}
        <br />
 
        <label htmlFor='details'>
        Details:</label>
        <input type="text"  id='details' name='details' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} placeholder={facility.details} />
  
        {formik.touched.details && formik.errors.details ? <div>{formik.errors.details}</div>:null}
        <br />
 
        <label htmlFor='ratings'>
        Ratings:</label>
        <input type="number"  id='ratings' name='ratings' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.ratings} placeholder={facility.ratings} />
     
        {formik.touched.ratings && formik.errors.ratings ? <div>{formik.errors.ratings}</div>:null}
        <br />
 
        <label htmlFor='image'>
        Image:</label>
        <img id="target" />
        <input type="file" id="image" name="image"  onBlur={formik.handleBlur} value={formik.values.image} onChange={formik.handleChange} placeholder={facility.image} />
       
        {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div>:null}
        <br />
        <button className='button1' type='submit'>Update</button>      
            </form>
    )
}
export default Updatefacility