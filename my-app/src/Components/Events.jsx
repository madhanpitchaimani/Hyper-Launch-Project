import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className='Event-container'>
      <h2>Book a Chef</h2>
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label>People Count:</label>
      <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
      <button onClick={handleReserveClick}>Reserve</button>
    </div>
  );
}

export default Events;
