import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Events.css';

function Events() {
  const [startDate, setStartDate] = useState('');
  const [people, setPeople] = useState('');
  const navigate = useNavigate();

  const handleReserveClick = () => {
    if (startDate && people) {
      navigate('/explorechef', {
        state: {
          startDate,
          peopleCount: people,
        },
      });
    } else {
      alert("Please fill in Start Date and People count before proceeding.");
    }
  };

  return (
    <div>
       <nav>
        <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
        <ul>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/events'>EVENTS</Link></li>
          <li><Link to='/join'>JOIN OUR TEAM</Link></li>
          <li><Link to='/connect'>CONTACT</Link></li>
        </ul>
      </nav>
   
    <div className='Event-container'>
     
      <h2 style={{color:"darkblue"}}>Book a Chef</h2>
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label>People Count:</label>
      <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
      <button onClick={handleReserveClick}>Reserve</button>
    </div>
    </div>
  );
}

export default Events;
