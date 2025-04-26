function ExperienceTile({ pointName, index, isActive, onClick }) {
  return (
    <div className="experience-tile-wrapper">
      <div className="experience-tile-content">
        <div className={`experience-tile-dot ${isActive ? 'active' : ''}`} onClick={() => onClick(index)}></div>
        {pointName && <span className="experience-tile-label">{pointName}</span>}
      </div>
      <div className="experience-timeline-line"></div>
    </div>
  );
}

export default ExperienceTile;