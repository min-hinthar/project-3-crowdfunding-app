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
      <div className="headerContainer">
        <div>
          <Link className="headerTitle" to="/">
            <h1 className="headerName">Burma Freedom Fund</h1>
          </Link>
        </div>
        <div className="linkContainer">
          {Auth.loggedIn() ? (
            <>
              <Link className="profileLink" to="/me">My Profile</Link>
              <Link className="logoutBtn" to="/" onClick={logout}>
                Logout
              </Link>
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
