import type { CardProps } from "../types";
import { Link } from 'react-router-dom';

const ProjectCard: React.FC<CardProps> = ({ title, logoSrc, linkTo, description }) => (
  <Link to={linkTo} className="card-link">
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <img src={logoSrc} alt={`${title} icon`} className="card-logo" />
      <span>{description}</span>
    </div>
  </Link> 
)

export default ProjectCard;