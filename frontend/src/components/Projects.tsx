import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title fade-in">선택된 작업</h2>
      <div className="projects-grid">
        <div className="project-card fade-in glow-effect">
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">Multi-Cloud Infrastructure Migration</h3>
              <span className="project-year">2024</span>
            </div>
            <p className="project-description">
              기존 온프레미스 인프라를 AWS, Azure, GCP로 마이그레이션하는 프로젝트. 
              Terraform을 활용한 Infrastructure as Code로 안정적이고 확장 가능한 클라우드 환경을 구축했습니다.
            </p>
            <div className="project-tech">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Azure</span>
              <span className="tech-tag">GCP</span>
              <span className="tech-tag">Terraform</span>
              <span className="tech-tag">Kubernetes</span>
            </div>
            <a href="#" className="project-link">프로젝트 보기 →</a>
          </div>
        </div>

        <div className="project-card fade-in glow-effect">
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">CI/CD Pipeline Automation</h3>
              <span className="project-year">2023</span>
            </div>
            <p className="project-description">
              GitLab CI/CD와 Jenkins를 활용한 자동화된 배포 파이프라인 구축. 
              Docker 컨테이너화와 Kubernetes 오케스트레이션으로 개발 생산성을 크게 향상시켰습니다.
            </p>
            <div className="project-tech">
              <span className="tech-tag">GitLab CI/CD</span>
              <span className="tech-tag">Jenkins</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">Helm</span>
            </div>
            <a href="#" className="project-link">프로젝트 보기 →</a>
          </div>
        </div>

        <div className="project-card fade-in glow-effect">
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">Cloud Monitoring & Alerting System</h3>
              <span className="project-year">2023</span>
            </div>
            <p className="project-description">
              Prometheus, Grafana, ELK Stack을 활용한 종합 모니터링 시스템 구축. 
              실시간 메트릭 수집과 알림 시스템으로 시스템 안정성을 보장합니다.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Prometheus</span>
              <span className="tech-tag">Grafana</span>
              <span className="tech-tag">ELK Stack</span>
              <span className="tech-tag">AlertManager</span>
              <span className="tech-tag">AWS CloudWatch</span>
            </div>
            <a href="#" className="project-link">프로젝트 보기 →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
