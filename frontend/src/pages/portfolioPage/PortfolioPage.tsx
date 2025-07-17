import "./PortfolioPage.css"
import { ArrowDown } from "lucide-react"
import { Link } from "react-router-dom";
import {  useRef } from 'react';

// const projects = [
//   {
//     id: 1,
//     title: "WebShop",
//     logoSrc: "https://www.finalwebsites.nl/wp-content/uploads/2016/01/Webshop-beginnen-thumb.png",
//     linkTo: "http://web-shop.da22le.org", 
//     description: "Example description of the project"
//   },
//   {
//     id: 2,
//     title: "draw io",
//     logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlvVqBf-Nd43CSDaEvz_HB8mTpLt4sTZYeg&s",
//     linkTo: "https://draw.io", 
//     description: "Tool to create diagrams, available in online and offline mode"
//   }

//]

const PortfolioPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <div className="background">
    <div ref={containerRef} className="portfolio-page">

      {/* First screen */}
      <section className="scroll-section portfolio-hero">
        
      
            <header>
              <h2 className="line-1 anim-typewriter">Portfolio</h2>
              <Link className="home-link" to={{pathname: "/"}}>Home</Link>
            </header>
            <div className="introduction">
              <h1>Pet Projects</h1>
              <h3>A collection of my personal projects and experiments. Each one represents a unique idea brought to life.</h3>
            </div>
            <div className="button-wrapper">
              <button className="view-projects-button" onClick={scrollToProjects}>
                View Projects 
                <ArrowDown/>
              </button>
            </div>



      </section>

        {/* Second screen (placeholder) */}
      <section id="projects" className="scroll-section project-grid">
        {/* Placeholder for project cards */}
        <div className="placeholder">
          <h2>Projects Coming Soon</h2>
        </div>
      </section>


    </div>
  </div>
)



}

export default PortfolioPage;