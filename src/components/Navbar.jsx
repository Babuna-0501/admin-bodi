import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onLogout }) {
  return (
    <nav className="text-white p-3" style={{ minHeight: '100vh', backgroundColor: '#5c6ac4' }}>
      <div className="d-flex flex-column align-items-start">
        <Link className="navbar-brand text-white mb-4" to="/dashboard">
          Bodios dashboard
        </Link>
        <ul className="nav flex-column w-100">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/products">Бүтээгдэхүүн</Link>
          </li>
        </ul>
        <button onClick={onLogout} className="btn btn-outline-light mt-4">
          Гарах
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
