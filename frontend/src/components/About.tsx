import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="about-grid fade-in">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop&crop=face" alt="Alex Kim" className="profile-img" />
        </div>
        <div className="about-text">
          <h3>안녕하세요, Sunny입니다.</h3>
          <p>신입 클라우드 엔지니어로, 안정적이고 확장 가능한 클라우드 인프라를 구축하고자 합니다. AWS 클라우드 플랫폼을 활용해 비즈니스 요구사항에 맞는 최적의 솔루션을 제공합니다.</p>
          
          <p>현재 DevOps와 클라우드 네이티브 기술, Grafana, Frometheus 등 모니터링에 깊이 관심을 가지고 있으며, 마이크로서비스 아키텍처와 컨테이너 오케스트레이션을 통한 현대적인 인프라 구축을 전문으로 합니다.</p>
          
          <p>안정성과 성능을 최우선으로 하며, 자동화와 모니터링을 통한 지속적인 개선을 추구합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
