
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewStories from './pages/NewStories';
import TopWeeklyStories from './pages/TopWeeklyStories';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useRef, useState } from 'react';

// Main App component sets up routing, navbar, night mode, and sticky navbar logic
// - showNavbar: controls navbar visibility based on scroll
// - nightMode: toggles dark theme
// - Uses React Router for navigation
// - All page components are rendered via <Routes>

function App() {
  // State for navbar visibility (sticky on scroll)
  const [showNavbar, setShowNavbar] = useState(true);
  // State for night mode (dark theme)
  const [nightMode, setNightMode] = useState(false);
  // Ref to track last scroll position
  const lastScrollY = useRef(window.scrollY);

  // Effect: Show/hide navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect: Apply night mode class to body
  useEffect(() => {
    document.body.className = nightMode ? 'night-mode' : '';
  }, [nightMode]);

  return (
    <Router>
      <main id="zen-app">
        {/* Navbar with sticky and night mode props */}
        <Navbar showNavbar={showNavbar} nightMode={nightMode} setNightMode={setNightMode} />
        <div className="container">
          {/* App routes for navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-stories" element={<NewStories />} />
            <Route path="/top-weekly-stories" element={<TopWeeklyStories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <footer>
            <p>Created by Zlat Antonio Florian</p>
          </footer>
        </div>
      </main>
    </Router>
  );
}

export default App;
