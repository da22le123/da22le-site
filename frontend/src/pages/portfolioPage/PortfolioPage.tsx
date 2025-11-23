import "./PortfolioPage.css"
import { ArrowDown, ExternalLink, Github, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}

// Sample projects - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web application with real-time features",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Machine learning powered analytics dashboard",
    technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Mobile-first e-commerce platform",
    technologies: ["React Native", "Stripe", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Project Delta",
    description: "DevOps automation toolkit",
    technologies: ["Go", "Docker", "Kubernetes", "Terraform"],
    githubUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Project Epsilon",
    description: "Real-time collaboration workspace",
    technologies: ["TypeScript", "Yjs", "WebRTC", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Project Zeta",
    description: "API gateway and monitoring system",
    technologies: ["Rust", "Redis", "Prometheus", "Grafana"],
    githubUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
  }
];

// Santa Hat SVG Component
const SantaHat: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`santa-hat ${className || ''}`} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hat body */}
    <path d="M10 70 Q15 30 50 15 Q85 30 90 70" fill="#c41e3a" />
    {/* White trim */}
    <ellipse cx="50" cy="70" rx="45" ry="10" fill="#fff" />
    {/* Pompom */}
    <circle cx="50" cy="10" r="10" fill="#fff" />
    {/* Hat tip curve */}
    <path d="M50 15 Q70 5 75 20" stroke="#c41e3a" strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="75" cy="22" r="8" fill="#fff" />
  </svg>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCornerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`project-card-container ${isFlipped ? 'flipped' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-card-inner">
        {/* Front of card */}
        <div className={`project-card front ${project.featured ? 'featured' : ''}`}>
          {project.featured && <SantaHat className="card-santa-hat" />}
          <div className="card-glow" />
          <div className="card-content">
            <div className="card-header">
              <h3 className="project-title">{project.title}</h3>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span
                  key={tech}
                  className="tech-tag"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="card-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="project-link live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="project-link github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                  <span>Source</span>
                </a>
              )}
            </div>
          </div>
          <div className="card-border" />

          {/* Corner peel */}
          <div className="corner-peel" onClick={handleCornerClick}>
            <div className="corner-peel-front" />
            <div className="corner-peel-back" />
            <span className="corner-hint">Flip</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card back">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="image-overlay">
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
          <div className="card-border" />

          {/* Corner peel on back */}
          <div className="corner-peel" onClick={handleCornerClick}>
            <div className="corner-peel-front" />
            <div className="corner-peel-back" />
            <span className="corner-hint">Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowBackToTop(container.scrollTop > window.innerHeight * 0.5);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="background">
      <div ref={containerRef} className="portfolio-page">
        {/* Hero Section */}
        <section className="scroll-section portfolio-hero">
          <header>
            <h2 className="line-1 anim-typewriter">Portfolio</h2>
            <Link className="home-link" to={{ pathname: "/" }}>
              <span className="home-link-text">Home</span>
            </Link>
          </header>

          <div className="hero-content">
            <div className="hero-badge">
              <SantaHat className="badge-santa-hat" />
              Pet Projects
            </div>
            <h1 className="hero-title">
              Crafting Digital
              <span className="gradient-text"> Experiences</span>
            </h1>
            <p className="hero-subtitle">
              A collection of my personal projects and experiments.
              Each one represents a unique idea brought to life through code.
            </p>

            <div className="hero-stats">
              <SantaHat className="stats-santa-hat" />
              <div className="stat">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">{projects.filter(p => p.featured).length}</span>
                <span className="stat-label">Featured</span>
              </div>
            </div>
          </div>

          <div className="button-wrapper">
            <button className="view-projects-button" onClick={scrollToProjects}>
              <span>Explore Projects</span>
              <ArrowDown className="bounce-arrow" />
            </button>
          </div>

          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-section projects-section">
          <div className="section-header">
            <SantaHat className="section-santa-hat" />
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Click the corner to flip and see project preview</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>

      {/* Back to top button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default PortfolioPage;
