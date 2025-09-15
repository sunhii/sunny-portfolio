import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Sample projects data (in real app, this would come from database)
const projects = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    year: 2024,
    description: '머신러닝 알고리즘을 활용한 실시간 데이터 분석 플랫폼. 대규모 데이터셋을 처리하고 인사이트를 시각화하여 비즈니스 의사결정을 지원합니다.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/alexkim/ai-analytics',
    liveUrl: 'https://ai-analytics-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Real-time Collaboration Tool',
    year: 2023,
    description: '팀 협업을 위한 실시간 화이트보드 및 프로젝트 관리 도구. WebSocket을 활용한 동시 편집과 화상 회의 기능을 제공합니다.',
    technologies: ['Next.js', 'Socket.io', 'WebRTC', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/alexkim/collab-tool',
    liveUrl: 'https://collab-tool-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Microservices',
    year: 2023,
    description: '마이크로서비스 아키텍처 기반의 대규모 이커머스 플랫폼. 높은 가용성과 확장성을 보장하며 일일 10만+ 트랜잭션을 처리합니다.',
    technologies: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/alexkim/ecommerce-ms',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true
  }
];

// GET /api/projects
router.get('/', (req, res) => {
  try {
    const { featured, limit } = req.query;
    
    let filteredProjects = projects;
    
    if (featured === 'true') {
      filteredProjects = projects.filter(project => project.featured);
    }
    
    if (limit) {
      const limitNum = parseInt(limit as string);
      filteredProjects = filteredProjects.slice(0, limitNum);
    }
    
    res.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length
    });
  } catch (error) {
    console.error('Projects fetch error:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트를 불러오는 중 오류가 발생했습니다'
    });
  }
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: '프로젝트를 찾을 수 없습니다'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Project fetch error:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트를 불러오는 중 오류가 발생했습니다'
    });
  }
});

// POST /api/projects (Admin only - would need authentication)
router.post('/', [
  body('title').trim().isLength({ min: 5, max: 100 }).withMessage('제목은 5-100자 사이여야 합니다'),
  body('description').trim().isLength({ min: 20, max: 1000 }).withMessage('설명은 20-1000자 사이여야 합니다'),
  body('technologies').isArray().withMessage('기술 스택은 배열이어야 합니다'),
  body('year').isInt({ min: 2020, max: new Date().getFullYear() }).withMessage('올바른 연도를 입력해주세요')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: '입력 데이터가 유효하지 않습니다',
        errors: errors.array()
      });
    }

    // In real app, save to database
    const newProject = {
      id: projects.length + 1,
      ...req.body,
      createdAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: '프로젝트가 성공적으로 추가되었습니다',
      data: newProject
    });
  } catch (error) {
    console.error('Project creation error:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트 추가 중 오류가 발생했습니다'
    });
  }
});

export default router;
