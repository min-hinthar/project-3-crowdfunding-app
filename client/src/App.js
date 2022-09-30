import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/login" element={Login} />
          <Route path="/signup" element={Signup} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
