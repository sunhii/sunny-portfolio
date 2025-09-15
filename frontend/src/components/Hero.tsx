import React from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const Hero: React.FC = () => {
  const typingTexts = [
    'CLOUD ENGINEER',
    'DEVOPS SPECIALIST', 
    'INFRASTRUCTURE BUILDER',
    'AWS EXPERT'
  ];
  
  const displayText = useTypingAnimation(typingTexts, 150, 3000);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="floating-elements">
        <div className="floating-el"></div>
        <div className="floating-el"></div>
        <div className="floating-el"></div>
      </div>
      
      <div className="hero-content fade-in">
        <h1 className="hero-title">
          {displayText}
          <span className="typing-cursor">|</span>
        </h1>
        <p className="hero-subtitle">클라우드 인프라를 구축하는 클라우드 엔지니어</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary glow-effect" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            <span>작업 보기</span>
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            <span>연락하기</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
