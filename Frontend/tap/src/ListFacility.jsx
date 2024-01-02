import React, {useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';


export const ListFacility=() =>{
    const navigate=useNavigate();
    const [facility,setFacilities]=useState([])
    useEffect(()=>{
         
             const asyncall=async()=>{
                   await Axios.get("http://localhost:8080/users/show")
                   .then(res=>setFacilities(res.data))
              }
              const timer=setTimeout(()=>{asyncall()},100)
              return ()=>clearTimeout(timer)
       },[facility])


     //  const [data, setData] = useState([]); // Assuming data is an array of records
 
       const handleDelete = async (fid) => {
         const shouldDelete = window.confirm('Are you sure you want to delete this record?');
     
         if (shouldDelete) {
           
             // Make Axios API call to delete the record
             await Axios.delete(`http://localhost:8080/users/delete/${fid}`);
             
             // Update state or perform any necessary actions
    
           
         }
       };


    return (
      <div >
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
         <h1 className='my-3 text-center text-decoration-underline text-uppercase'>Facility List</h1>
         
         <table className='my-2 table table-hover border-primary '>
           <thead>
                <tr className='text-center'>
                   <th scope="col-sm" className='bg-primary text-light'>ID</th>
                   <th scope="col" className='bg-primary text-light'>Faclity Name</th>
                   <th scope="col" className='bg-primary text-light'>Category</th>
                   <th scope="col" className='bg-primary text-light'>Contact</th>
                   <th scope="col" className='bg-primary text-light'>City</th>
                   <th scope="col" className='bg-primary text-light'>Location</th>
                   <th scope="col" className='bg-primary text-light'>Address</th>
                   <th scope="col" className='bg-primary text-light'>Details</th>
                   <th scope="col" className='bg-primary text-light'>Ratings</th>
                   <th scope="col" className='bg-primary text-light'>Image</th>
                   <th scope="col" className='bg-primary text-light'>Edit</th>
                </tr>
           </thead>
           <tbody>
               {
                 facility.map( f=>
                     <tr key={f.fid} className='text-center'>
                        <td>{f.fid}</td>
                        <td>{f.fname}</td>
                        <td>{f.category}</td>
                        <td>{f.contact}</td>
                        <td>{f.city}</td>
                        <td>{f.location}</td>
                        <td>{f.address}</td>
                        <td>{f.details}</td>
                        <td>{f.ratings}</td>
                        <td> <img src={f.image} width="50px" height="50px"/></td>
                        <td>
                            <button className='btn btn-success'  onClick={()=>{navigate(`/Updatefacility/${f.fid}`)}} >Update</button>
                            <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={()=>handleDelete(f.fid)}>Delete</button>
                        </td>
                     </tr>
                    )
               }
           </tbody>
        </table>
      </div>
    )
  }
 
export default ListFacility;