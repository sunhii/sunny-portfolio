import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Sunny. 모든 권리 보유.</p>
          <div className="footer-links">
            <a href="mailto:sunny@example.com">이메일</a>
            <a href="https://linkedin.com/in/sunnydev">LinkedIn</a>
            <a href="https://github.com/sunnydev">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;