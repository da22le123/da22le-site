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
    featured: true
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Machine learning powered analytics dashboard",
    technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Mobile-first e-commerce platform",
    technologies: ["React Native", "Stripe", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Project Delta",
    description: "DevOps automation toolkit",
    technologies: ["Go", "Docker", "Kubernetes", "Terraform"],
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Project Epsilon",
    description: "Real-time collaboration workspace",
    technologies: ["TypeScript", "Yjs", "WebRTC", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Project Zeta",
    description: "API gateway and monitoring system",
    technologies: ["Rust", "Redis", "Prometheus", "Grafana"],
    githubUrl: "#",
    featured: false
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${project.featured ? 'featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
            >
              <Github size={18} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
      <div className="card-border" />
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
            <div className="hero-badge">Pet Projects</div>
            <h1 className="hero-title">
              Crafting Digital
              <span className="gradient-text"> Experiences</span>
            </h1>
            <p className="hero-subtitle">
              A collection of my personal projects and experiments.
              Each one represents a unique idea brought to life through code.
            </p>

            <div className="hero-stats">
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
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Click on any project to explore more</p>
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
