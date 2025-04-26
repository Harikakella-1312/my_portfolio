function ProjectCard({ title, description, link, image }) {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} className="project-link">View Project</a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;