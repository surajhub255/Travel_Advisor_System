import HomeNav from './Nav1';
import img from './assets/OIP.jpg';
import img1 from './assets/th.jpg';
import * as React from 'react';


const Home = () => {
  return (
    <div className='home-container'>
        <HomeNav/>
        <h1 className='head'>Travel Advisor</h1>
        <h1 className='h1'>Discover, Save big, Travel more</h1>
        <img className='img1' src={img1}  alt="img"  />
        <img className='img' src={img}  alt="img"/>
      </div>
  )};
export default Home