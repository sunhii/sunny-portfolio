import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title fade-in">기술 스택</h2>
      <div className="skills-container fade-in">
        <div className="skills-grid">
          <div className="skill-card glow-effect">
            <h3 className="skill-category">Cloud Platforms</h3>
            <div className="skill-list">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Google Cloud</span>
              <span className="skill-tag">Oracle Cloud</span>
              <span className="skill-tag">DigitalOcean</span>
              <span className="skill-tag">Linode</span>
            </div>
          </div>
          
          <div className="skill-card glow-effect">
            <h3 className="skill-category">DevOps & Automation</h3>
            <div className="skill-list">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Terraform</span>
              <span className="skill-tag">Ansible</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">GitLab CI/CD</span>
            </div>
          </div>
          
          <div className="skill-card glow-effect">
            <h3 className="skill-category">Infrastructure & Monitoring</h3>
            <div className="skill-list">
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">ELK Stack</span>
              <span className="skill-tag">Datadog</span>
              <span className="skill-tag">New Relic</span>
              <span className="skill-tag">CloudWatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
