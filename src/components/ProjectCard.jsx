// Project card
function ProjectCard({ title, description, link, image }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>View Project</a>
      </div>
    );
  }
  
  export default ProjectCard;