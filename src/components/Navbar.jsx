
import React from 'react';
import { Link } from 'react-router-dom';


// Navbar component displays the top navigation bar with links and night mode toggle
// Props:
//   showNavbar: boolean - controls visibility (sticky behavior)
//   nightMode: boolean - current night mode state
//   setNightMode: function - toggles night mode
function Navbar({ showNavbar, nightMode, setNightMode }) {
  // Navigation links config for DRY
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/new-stories', label: 'New Stories' },
    { to: '/top-weekly-stories', label: 'Top Weekly Stories' },
  ];

  // Auth buttons config for DRY (use CSS classes for consistent color)
  const authButtons = [
    { to: '/login', label: 'Login', className: 'login-btn' },
    { to: '/register', label: 'Register', className: 'register-btn' },
  ];

  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar-hidden'}`}>
      <span style={{ fontWeight: 700, fontSize: '1.7em', letterSpacing: '2px' }}>Zen</span>
      {/* Navigation links */}
      <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', flex: 1 }}>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="navbar-link"
          >
            {label}
          </Link>
        ))}
      </div>
      {/* Night mode toggle and auth buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
        <button
          aria-label="Toggle Night Mode"
          style={{ background: 'none', border: 'none', fontSize: '1.3em', cursor: 'pointer', color: '#ffd700' }}
          onClick={() => setNightMode((m) => !m)}
        >
          {nightMode ? '☀️' : '🌙'}
        </button>
        {authButtons.map(({ to, label, className }) => (
          <Link key={to} to={to}>
            <button className={className}>
              {label}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}


export default Navbar;
