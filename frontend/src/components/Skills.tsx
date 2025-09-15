import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">Cloud Platforms</h3>
            <div className="skill-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag featured">Azure</span>
              <span className="skill-tag">Google Cloud</span>
              <span className="skill-tag">Oracle Cloud</span>
              <span className="skill-tag">DigitalOcean</span>
              <span className="skill-tag">Linode</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">DevOps & Automation</h3>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Terraform</span>
              <span className="skill-tag">Ansible</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">GitLab CI/CD</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Infrastructure & Monitoring</h3>
            <div className="skill-tags">
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