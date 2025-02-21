import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Elections from './components/Elections';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
