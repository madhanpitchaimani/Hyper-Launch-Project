import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home'>
       <nav>
             <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
             <ul>
               <li><Link to='/about'>ABOUT</Link></li>
               <li><Link to='/events'>EVENTS</Link></li>
               <li>   <Link to='/join'>JOIN OUR TEAM</Link></li>
             <li><Link to='/connect'>CONTACT</Link></li>
             </ul>
           </nav>

      <div className='home-logo'> 
         <img src="home.jpg" alt="logo" />
         </div>
         <div className='title'>
             <h1>Looking to organize a memorable private chef experience or event?</h1>
             <p>We work with best-in-class private chefs.</p>

         </div>

         <div className='footer'>
             <h1>CHEF SPOT</h1>
             <img src="cook.jpg" alt="" />
              <p>​"Chef On Spot" is a service that brings professional chefs directly to your <br />kitchen, offering customized culinary experiences for special events. They <br /> tailor menus to individual preferences, providing a personalized <br />dining experience in the comfort of your home.</p>
         </div>
       
    </div>
  )
}

export default Home
