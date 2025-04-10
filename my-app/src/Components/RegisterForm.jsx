import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

function RegisterForm({ startDate, people }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
    phone: '',
    eventType: '',
    specialRequest: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const completeData = {
      ...formData,
      startDate,
      people
    };

    try {
      await axios.post("http://localhost:3000/reservations", completeData);
      alert("Reservation Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="register-form">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName:</label>
          <input type="text" name="firstName" placeholder="Enter your name" onChange={handleChange} />
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" name="lastName" placeholder="Enter your name" onChange={handleChange} />
        </div>
        <div>
          <label>ZipCode:</label>
          <input type="number" name="zipCode" placeholder="Enter your number" onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="choices">Choose an option:</label>
          <select id="choices" name="eventType" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Private Event">Private Event</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Food Show">Food Show</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Special Request:</label>
          <textarea name="specialRequest" placeholder="Any special request?" onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
