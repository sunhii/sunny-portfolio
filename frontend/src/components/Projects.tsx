import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Multi-Cloud Infrastructure Migration",
      description: "온프레미스 환경을 클라우드로 마이그레이션",
      longDescription: "기존 온프레미스 환경을 AWS와 Azure로 마이그레이션하여 비용을 40% 절감하고 가용성을 99.9%로 향상시킨 프로젝트입니다. 마이크로서비스 아키텍처를 도입하여 확장성과 유지보수성을 크게 개선했습니다.",
      technologies: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
      features: [
        "비용 40% 절감 달성",
        "가용성 99.9% 향상",
        "마이크로서비스 아키텍처 도입",
        "자동화된 배포 파이프라인 구축",
        "모니터링 및 알림 시스템 구축"
      ],
      githubUrl: "https://github.com/sunnydev/multi-cloud-migration",
      liveUrl: "https://demo.sunnydev.com"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "자동화된 배포 파이프라인 구축",
      longDescription: "Jenkins와 GitLab을 활용한 자동화된 배포 파이프라인을 구축하여 배포 시간을 80% 단축하고 인적 오류를 최소화했습니다. Blue-Green 배포 전략을 도입하여 무중단 배포를 실현했습니다.",
      technologies: ["Jenkins", "GitLab CI/CD", "Kubernetes", "Docker", "Helm"],
      features: [
        "배포 시간 80% 단축",
        "Blue-Green 배포 전략 도입",
        "자동화된 테스트 실행",
        "롤백 기능 구현",
        "배포 상태 모니터링"
      ],
      githubUrl: "https://github.com/sunnydev/cicd-pipeline"
    },
    {
      title: "Cloud Monitoring & Alerting System",
      description: "종합 모니터링 시스템 구축",
      longDescription: "Prometheus, Grafana를 활용한 종합 모니터링 시스템을 구축하여 시스템 장애를 사전에 감지하고 대응 시간을 50% 단축했습니다. 커스텀 대시보드와 알림 규칙을 설정하여 실시간 모니터링을 구현했습니다.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "AlertManager"],
      features: [
        "실시간 시스템 모니터링",
        "커스텀 대시보드 구축",
        "알림 규칙 설정",
        "로그 분석 및 시각화",
        "대응 시간 50% 단축"
      ],
      githubUrl: "https://github.com/sunnydev/monitoring-system"
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => handleProjectClick(project)}>
              <div className="project-image">
                <div className="project-placeholder">{project.title.split(' ')[0]}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;