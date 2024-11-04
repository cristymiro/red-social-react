import React from 'react';
import { FaHome, FaClock, FaUserFriends, FaCog, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Red Social</div>
        <div className="navbar-item">
          <FaHome className="icon" />
          <span>Inicio</span>
        </div>
        <div className="navbar-item">
          <FaClock className="icon" />
          <span>Timeline</span>
        </div>
        <div className="navbar-item">
          <FaUserFriends className="icon" />
          <span>Gente</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item">
          <FaUserCircle className="icon" />
          <span>Nick</span>
        </div>
        <div className="navbar-item">
          <FaCog className="icon" />
          <span>Ajustes</span>
        </div>
        <div className="navbar-item" onClick={() => navigate('/login')}>
          <FaSignOutAlt className="icon" />
          <span>Iniciar Sesión</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
