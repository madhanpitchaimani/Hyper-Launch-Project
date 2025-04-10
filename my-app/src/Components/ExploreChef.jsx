import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChefDetailin from './ChefDetailin';
import ChefDetailit from './ChefDetailit';
import ChefDetailger from './ChefDetailger';
import './ExploreChef.css';

function ExploreChef() {
  const [images, setImages] = useState([]);
  const [activeChef, setActiveChef] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const reservationInfo = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    specialRequest: '',
  });

  useEffect(() => {
    fetch('http://localhost:7000/images')
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    if (!activeChef) {
      alert("Please choose a cuisine style.");
      return;
    }

    const finalReservation = {
      ...reservationInfo,
      ...formData,
      selectedChefStyle: activeChef,
    };

    navigate('/store', { state: finalReservation });
  };

  const renderChefDetails = () => {
    switch (activeChef) {
      case 'Indian': return <ChefDetailin />;
      case 'Italian': return <ChefDetailit />;
      case 'German': return <ChefDetailger />;
      default: return null;
    }
  };

  return (
    <div className='ingredients-image'>
      <h1>Choose Your Chef</h1>
      {images.map((img, index) => (
        <React.Fragment key={img.id}>
          <img src={img.url} alt={`chef-${img.id}`} />
          {(index + 1) % 3 === 0 && (
            <div className='button-container'>
              <button onClick={() => setActiveChef('Indian')}>Indian Style</button>
              <button onClick={() => setActiveChef('Italian')}>Italian Style</button>
              <button onClick={() => setActiveChef('German')}>German Style</button>
            </div>
          )}
        </React.Fragment>
      ))}

      {renderChefDetails()}

      <div className="reservation-form">
        <h2>Reservation Details</h2>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
        <select name="eventType" onChange={handleChange}>
          <option value="">Select Event</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Private Event">Private Event</option>
        </select>
        <textarea name="specialRequest" placeholder="Special Request" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ExploreChef;

