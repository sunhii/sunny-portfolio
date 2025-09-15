import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>안녕하세요, Sunny입니다.</h3>
            <p>
              신입 클라우드 엔지니어로서 AWS 클라우드 플랫폼을 기반으로 
              확장 가능하고 안정적인 인프라를 구축하는 것에 열정을 가지고 있습니다.
            </p>
            <p>
              클라우드 네이티브 기술과 DevOps 문화에 깊은 관심을 가지고 있으며,
              Grafana, Prometheus 등 모니터링 도구를 활용한 시스템 최적화에 
              집중하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;