import React, {useState ,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import Axios from 'axios';
const Hdata = () => {
    const navigate=useNavigate();
    const [facility,setFacilities]=useState([])
    const {ct}=useParams();
    useEffect(()=>{
             const asyncall=async()=>{
                   await Axios.get(`http://localhost:8080/users/showby/place/${ct}`)
                   .then(res=>setFacilities(res.data))
              }
              const timer=setTimeout(()=>{asyncall()},100)
              return ()=>clearTimeout(timer)
       },[facility])
 
       return (
  <div className='sh'>
<h1 className='hotelh'> Places</h1>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <button className='btn btn-success'  onClick={()=>{navigate('/Loc')}} >Back</button>

  
     <div className='outer'>
      
      {
        facility.map( f=>
          <div className='flex' key={f.fid} >
            <img className='icurve' src={f.image} width="500px" height="350px"/>
            <br />{f.fname} <br /> {f.contact} <br /> {f.city} <br />
                         {f.location}<br />{f.address}<br />
                           {f.details}<br /> {f.ratings}
            </div>
        )
      }
      
      </div>
      </div>

       )
                }

export default Hdata