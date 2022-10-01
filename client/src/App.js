import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

	return (
		<>
			<BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        <Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
