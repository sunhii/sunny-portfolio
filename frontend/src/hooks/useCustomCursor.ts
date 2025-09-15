import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    
    cursor.className = 'cursor';
    follower.className = 'cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      
      setTimeout(() => {
        follower.style.left = e.clientX - 4 + 'px';
        follower.style.top = e.clientY - 4 + 'px';
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
    };
  }, []);
};
