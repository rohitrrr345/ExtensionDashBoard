import React from 'react'
import { FaGoogle, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaReddit } from 'react-icons/fa';

const Table = () => {
    const visitData = [
        { name: 'Google', icon: <FaGoogle />, visits: 15, time: '10:00 AM' },
        { name: 'Facebook', icon: <FaFacebook />, visits: 8, time: '11:30 AM' },
        { name: 'Twitter', icon: <FaTwitter />, visits: 12, time: '01:00 PM' },
        { name: 'GitHub', icon: <FaGithub />, visits: 20, time: '03:45 PM' },
        { name: 'LinkedIn', icon: <FaLinkedin />, visits: 7, time: '02:00 PM' },
        { name: 'YouTube', icon: <FaYoutube />, visits: 25, time: '05:00 PM' },
        { name: 'Reddit', icon: <FaReddit />, visits: 9, time: '06:30 PM' },
      ];
      
  return (
    <div> <table className="visit-table">
    <thead>
      <tr>
        <th> job Site Icon</th>
        <th> job Site Name</th>
        <th>Visits</th>
        <th>Visit Time</th>
      </tr>
    </thead>
    <tbody>
      {visitData.map((site, index) => (
        <tr key={index}>
          <td>{site.icon}</td>
          <td>{site.name}</td>
          <td>{site.visits}</td>
          <td>{site.time}</td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default Table