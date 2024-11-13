import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import React from 'react';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React page
      </header>
      <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DetailsPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    </Router>
    </div>
  );
}

export default App;
