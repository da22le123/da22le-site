import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import "./App.css"

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* 
        Add more routes here if needed, e.g.:
        <Route path='/about' element={<AboutPage />} />
      */}
    </Routes>
  </BrowserRouter>
);

export default App;
