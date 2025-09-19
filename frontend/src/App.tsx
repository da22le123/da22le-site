import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage'
// import ResumePage from './pages/resumePage/ResumePage';
import "./App.css"

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      {/* <Route path='/resume' element={<ResumePage />} /> */}
      {/* 
        Add more routes here if needed, e.g.:
        <Route path='/about' element={<AboutPage />} />
      */}
    </Routes>
  </BrowserRouter>
);

export default App;
