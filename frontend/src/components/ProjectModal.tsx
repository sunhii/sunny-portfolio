import React from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3>프로젝트 개요</h3>
            <p>{project.longDescription}</p>
          </div>
          
          <div className="modal-section">
            <h3>주요 기능</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-section">
            <h3>사용 기술</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub 보기
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              라이브 데모
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
