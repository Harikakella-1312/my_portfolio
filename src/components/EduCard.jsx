function EduCard({ title, description, link, image }) {
  return (
    <div className="edu-card">
      <div className="edu-image">
        <img src={image} alt={title} />
      </div>
      <div className="edu-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="edu-link">Learn More</a>
      </div>
    </div>
  );
}

export default EduCard;