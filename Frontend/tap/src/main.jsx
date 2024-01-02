import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './index.css'
import Home from './home'
import Login from './Login'
import Signup from './Signup'
import Home2 from './Home2'
import Addfacility from './AddFacility'
import AboutUs from './AboutUs'
import Edituser from './Edituser'
import ContactUs from './ContactUs'
import ListFacility from './ListFacility'
import Updatefacility from './Updatefacility'
import Loc from './Loc'
import Hdata from './Hdata'
import Ploc from './Ploc'
import Rloc from './Rloc'
import Pdata from './Pdata'
import Rdata from './Rdata'
import Show from './Show'
import Admin from './Admin'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Home2/:eid' element={<Home2/>}/>
    <Route path='/AddFacility' element={<Addfacility/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    <Route path='/edituser/:eid' element={<Edituser/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/ListFacility' element={<ListFacility/>}/>
    <Route path='/UpdateFacility/:fid' element={<Updatefacility/>}/>
    <Route path='/Loc' element={<Loc/>}/>
    <Route path='/Hdata/:ct' element={<Hdata/>}/>
    <Route path='/Ploc' element={<Ploc/>}/>
    <Route path='/Rloc' element={<Rloc/>}/>
    <Route path='/Pdata/:ct' element={<Pdata/>}/>
    <Route path='/Rdata/:ct' element={<Rdata/>}/>
    <Route path='/Show/:ct' element={<Show/>}/>
    <Route path='Admin' element={<Admin/>}/>



  </Routes>
</Router>






{/* <Show/> */}
{/* <Hotel/> */}
{/* <Admin/> */}
{/* <Edituser/> */}
{/* <AboutUs/> */}
{/* <Addfacility/> */}
{/* <ContactUs/> */}

  </React.StrictMode>
)
