import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="mainHeader">
      <div className="Headercontainer">
        <div>
          <Link className="headerTitle" to="/">
            <h1 className="m-0">Crowdfunding</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="profileLink" to={"/me/" + Auth.getProfile().data.email}>
                {Auth.getProfile().data.email}'s profile
              </Link>
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="loginBtn" to="/login">
                Login
              </Link>
              <Link className="signupBtn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
