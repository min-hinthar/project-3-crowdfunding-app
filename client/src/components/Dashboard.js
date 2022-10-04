import React from 'react';
import Auth from '../utils/auth';




const Dashboard = () => {
  return (
    <div>
      <div className="profileCard">
        <div className="profile">
          <h1>{Auth.getProfile().data.email}</h1>
          <p>My Projects:</p>
          <p>
          </p>
        </div>
      </div>
      
      <div className="projectCard">
        <div className="projectName">
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