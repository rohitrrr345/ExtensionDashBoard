import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';
import { FaGoogle, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaReddit } from 'react-icons/fa';

import Table from './Components/Table';
const visitData = [
  { name: 'Google', icon: <FaGoogle />, visits: 15, time: '10:00 AM' },
  { name: 'Facebook', icon: <FaFacebook />, visits: 8, time: '11:30 AM' },
  { name: 'Twitter', icon: <FaTwitter />, visits: 12, time: '01:00 PM' },
  { name: 'GitHub', icon: <FaGithub />, visits: 20, time: '03:45 PM' },
  { name: 'LinkedIn', icon: <FaLinkedin />, visits: 7, time: '02:00 PM' },
  { name: 'YouTube', icon: <FaYoutube />, visits: 25, time: '05:00 PM' },
  { name: 'Reddit', icon: <FaReddit />, visits: 9, time: '06:30 PM' },
];

function App() {
  const [reminderTime, setReminderTime] = useState('');
  const [reminderSite, setReminderSite] = useState('');

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const handleTimeChange = (e) => {
    setReminderTime(e.target.value);
  };

  const handleSiteChange = (e) => {
    setReminderSite(e.target.value);
  };

  const handleSetReminder = () => {
    if (reminderSite && reminderTime) {
      const now = new Date();
      const targetTime = new Date(`${now.toDateString()} ${reminderTime}`);
      const timeDiff = targetTime - now;

      if (timeDiff > 0) {
        setTimeout(() => {
          new Notification(`Reminder: Visit ${reminderSite}`, {
            body: `It's time to visit ${reminderSite}!`,
            icon: '/path/to/icon.png', 
          });
        }, timeDiff);

        alert(`Reminder set for ${reminderSite} at ${reminderTime}`);
      } else {
        alert('Please choose a future time.');
      }
    }
  };

  return (
    <div className="App">
      <h1>Application tracker</h1>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={visitData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#7757bd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

     <Table/>

      <div className="reminder-section">
        <h2>Set a Reminder to Visit a Site</h2>
        <div className="input-group">
          <select value={reminderSite} style={{
            padding:"10px",
          }}  onChange={handleSiteChange}>
            <option value="">Select a Site</option>
            {visitData.map((site, index) => (
              <option key={index} value={site.name}>
                {site.name}
              </option>
            ))}
          </select>

          <input type="time" style={{
            padding:"20px",
          }} value={reminderTime} onChange={handleTimeChange} />
        </div>

        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>
    </div>
  );
}

export default App;
