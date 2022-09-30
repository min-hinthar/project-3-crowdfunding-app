import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
				<div>
					<div>
						<NavLink to="/">
							Crowdfunding
						</NavLink>
					</div>
					<div>
						<NavLink to="/login">
							Login
						</NavLink>
					</div>
					<div>
						<NavLink to="/signup">
							Signup
						</NavLink>
					</div>
				</div>
  );
}

export default Navbar;
