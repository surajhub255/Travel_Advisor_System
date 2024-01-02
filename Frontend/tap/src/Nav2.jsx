import * as React from 'react';
import './Nav.css'
import {useParams,useNavigate} from 'react-router-dom'

export default function Nav2() {
  const navigate = useNavigate()
  const {eid}=useParams();

  return (
    <nav className="navbar">
    <div id="trapezoid">
    <div className="subnav">
       <button onClick={()=>navigate(`/Home2/${eid}`)} className="subnavbtn">Home<i className="fa fa-caret-down"></i></button>
      </div>
       <div className="subnav">
       <button onClick={()=>navigate('/AboutUs/')} className="subnavbtn">AboutUs<i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button onClick={()=>navigate('/ContactUs')} className="subnavbtn">ContactUs<i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button onClick={()=>navigate(`/Edituser/${eid}`)} className="subnavbtn">Me<i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button onClick={()=>navigate('/')} className="subnavbtn">Logout<i className="fa fa-caret-down"></i></button>
      </div>
    </div>
  </nav> 
  );
}