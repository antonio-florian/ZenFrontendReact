import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ showNavbar, nightMode, setNightMode }) {
  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar-hidden'}`}>
      <span style={{ fontWeight: 700, fontSize: '1.7em', letterSpacing: '2px' }}>Zen</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new-stories">New Stories</Link>
        <Link to="/top-weekly-stories">Top Weekly Stories</Link>
      </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2em', height: '100%' }}>
        <button
          aria-label="Toggle Night Mode"
          style={{ background: 'none', border: 'none', fontSize: '1.3em', cursor: 'pointer', marginRight: '0.5em' }}
          onClick={() => setNightMode((m) => !m)}
        >
          {nightMode ? '☀️' : '🌙'}
        </button>
  <Link to="/login"><button style={{marginRight: '0'}}>Login</button></Link>
  <Link to="/register"><button style={{marginRight: '1.5em'}}>Register</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
