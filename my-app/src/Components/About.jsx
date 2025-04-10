import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='About-container'>
          <nav>
                <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
                <ul>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/events'>EVENTS</Link></li>
                  <li>   <Link to='/join'>JOIN OUR TEAM</Link></li>
                  <li><Link to='/connect'>CONTACT</Link></li>
                </ul>
              </nav>
      
      <div className='header'>
        <h1>About Us</h1>
                 <img src="Pasta.jpg" alt="" />
         <p>At Chef Spot, we believe that every meal should be a memorable experience. Our mission is to bring the luxury of fine dining right into your home or event space. Whether it's an intimate dinner, a family celebration, or a corporate gathering, we connect you with top-tier private chefs who craft personalized menus tailored to your tastes and preferences.

We work exclusively with experienced, passionate chefs who not only love cooking but also enjoy creating meaningful moments through food. From gourmet meals to global cuisines, our chefs deliver exceptional quality, professionalism, and creativity—right on the spot.

Let us turn your next meal into something unforgettable.

</p>
      </div>
    
    </div>
  )
}

export default About