import * as React from 'react';
import './Nav.css'
import {useNavigate} from 'react-router-dom'

export default function HomeNav() {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
    <div id="trapezoid">
      <a href="/" className="expandHome">Home</a>
       <div className="subnav">
       <button className="subnavbtn"><i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button className="subnavbtn"><i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button className="subnavbtn"><i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button className="subnavbtn"><i className="fa fa-caret-down"></i></button>
      </div>
      <div className="subnav">
       <button className="subnavbtn"><i className="fa fa-caret-down"></i></button>
      </div>
       <div className="subnav">
       <button onClick={()=>navigate("/Login")} className="subnavbtn">Login<i className="fa fa-caret-down"></i></button>
        </div>
       <div className="subnav">
        <button onClick={()=>navigate("/Signup")} className="subnavbtn">Signup<i className="fa fa-caret-down"></i></button>
        </div>
    </div>
  </nav> 
  );
}