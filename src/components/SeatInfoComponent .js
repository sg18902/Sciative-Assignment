import React, { useEffect, useState } from 'react';
import './SeatInfoComponent.css'; // Import the CSS file
import aa from '../assets/aa.png';
import circle2 from '../assets/Purple_Circle.png';

const SeatInfoComponent = () => {
  const [seatData, setSeatData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://viaje.ai/seatinfo_api/');
        const data = await response.json();
        setSeatData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="seat-info-container">
      <h2 className="heading">How it works</h2>
      <div className="content">
        <div className="left-side">
          <div className="instructions">
            <h3>Enter your post’s title & keyword</h3>
            <p>
              Simply provide our AI writer with 1-2 sentences on what to write,
              and it'll understand and start writing for you.
            </p>
            <ul>
              <li className="nav-list">Include any SEO keywords you want to rank for</li>
              <li className="nav-list">Customize your copy with tone and perspective options</li>
              <li className="nav-list">Choose from 25+ languages</li>
            </ul>
          </div>
          <div className="ccontainer">
            <img src={aa} alt="Description" className="image" />
            <img src={circle2} alt="circle" className="cir" />
          </div>
        </div>
        <div className="seat-info">
          <table>
            <thead>
              <tr>
                <th>SEAT</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {seatData.map((seat, index) => (
                <tr key={index}>
                  <td>{seat.seat_no}</td>
                  <td>{seat.price}</td>
                  <td>{seat.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeatInfoComponent;
