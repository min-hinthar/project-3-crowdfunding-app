import React from 'react';
import "../styles/Dashboard.css";


const Dashboard = () => {
  return (
    <div>
      <div className="profileCard">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="profile">
          <img src="img.jpg" alt="John" style={{ width: "100%" }} />
          <h1>John Doe</h1>
          <p className="username">Username</p>
          <p className="email">Email Address</p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
      
      <div className="projectCard">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="projectName">
          <img src="img.jpg" alt="John" style={{ width: "100%" }} />
          <h1>John Doe</h1>
          <p className="projectDesc">Description</p>
          <p className="projectGoal">Pledge Goal</p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </div>

    );
  };
  export default Dashboard;