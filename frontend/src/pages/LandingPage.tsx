import React from 'react';
import '../styles/LandingPage.css';
import Card from '../components/Card';

import portfolioLogo from '../assets/portfolio.png';
import resumeLogo from '../assets/resume.png';
import blogLogo from '../assets/blog.png';

const LandingPage: React.FC = () => (
  <div className="landing-background">
    <div className="pattern-container" />

    <div className="content">
      <h1 className="logo">da22le</h1>
      <div className="card-row">
        <Card title="portfolio" logoSrc={portfolioLogo} linkTo="/portfolio" />
        <Card title="resume"    logoSrc={resumeLogo}   linkTo="/resume"    />
        <Card title="my-blog"   logoSrc={blogLogo}     linkTo="/blog"      />
      </div>
    </div>
  </div>
);

export default LandingPage;
