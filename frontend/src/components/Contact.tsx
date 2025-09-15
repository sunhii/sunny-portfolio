import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container fade-in">
        <h2 className="contact-title">함께 만들어요 ✨</h2>
        <p className="contact-subtitle">흥미로운 프로젝트나 협업 제안이 있으시다면 언제든 연락주세요.</p>
        <div className="contact-links">
          <a href="mailto:sunny@example.com" className="contact-link glow-effect">이메일 보내기</a>
          <a href="https://linkedin.com/in/sunnydev" className="contact-link glow-effect">LinkedIn</a>
          <a href="https://github.com/sunnydev" className="contact-link glow-effect">GitHub</a>
          <a href="tel:+82-10-1234-5678" className="contact-link glow-effect">전화하기</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
