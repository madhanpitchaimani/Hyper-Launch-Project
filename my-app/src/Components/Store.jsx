import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Store.css';

function Store() {
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      const reservationData = {
        ...state,
        id: Math.random().toString(36).substr(2, 4),
      };

      fetch('http://localhost:7000/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      })
      .then(res => res.json())
      .then(data => console.log('Reservation stored:', data))
      .catch(err => console.error('Error saving reservation:', err));
    }
  }, [state]);

  return (
    <div className="store-container">
      <h2>🎉 Final Reservation Summary</h2>
      <div className="summary-card">
        <p><strong>First Name:</strong> {state?.firstName}</p>
        <p><strong>Last Name:</strong> {state?.lastName}</p>
        <p><strong>Email:</strong> {state?.email}</p>
        <p><strong>Phone:</strong> {state?.phone}</p>
        <p><strong>Event Type:</strong> {state?.eventType}</p>
        <p><strong>Special Request:</strong> {state?.specialRequest}</p>
        <p><strong>Start Date:</strong> {state?.startDate}</p>
        <p><strong>People Count:</strong> {state?.peopleCount}</p>
        <p><strong>Cuisine Style:</strong> {state?.selectedChefStyle}</p>
      </div>
    </div>
  );
}

export default Store;
