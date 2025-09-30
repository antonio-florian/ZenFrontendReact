import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewStories from './pages/NewStories';
import TopWeeklyStories from './pages/TopWeeklyStories';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [nightMode, setNightMode] = useState(false);
  const lastScrollY = useRef(window.scrollY);

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

  useEffect(() => {
    document.body.className = nightMode ? 'night-mode' : '';
  }, [nightMode]);

  return (
    <Router>
      <main id="zen-app">
        <Navbar showNavbar={showNavbar} nightMode={nightMode} setNightMode={setNightMode} />
        <div className="container">
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
