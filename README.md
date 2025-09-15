# Alex Kim Portfolio

디지털 경험을 혁신하는 풀스택 개발자 Alex Kim의 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 환경
- **Framer Motion** - 애니메이션
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **TypeScript** - 타입 안전성
- **MongoDB** - 데이터베이스
- **JWT** - 인증
- **Nodemailer** - 이메일 전송

### DevOps & 배포
- **Docker** - 컨테이너화
- **Docker Compose** - 로컬 개발 환경
- **AWS ECS** - 클라우드 배포
- **Terraform** - 인프라 관리
- **Nginx** - 리버스 프록시

## 📁 프로젝트 구조

```
portfolio/
├── frontend/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/      # React 컴포넌트
│   │   ├── hooks/          # 커스텀 훅
│   │   ├── utils/          # 유틸리티 함수
│   │   ├── types/          # TypeScript 타입 정의
│   │   └── App.tsx         # 메인 앱 컴포넌트
│   ├── public/             # 정적 파일
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/                 # Node.js 백엔드
│   ├── src/
│   │   ├── routes/         # API 라우트
│   │   ├── middleware/     # 미들웨어
│   │   ├── utils/          # 유틸리티 함수
│   │   ├── types/          # TypeScript 타입 정의
│   │   └── index.ts        # 서버 진입점
│   ├── package.json
│   ├── tsconfig.json
│   └── env.example         # 환경 변수 예시
├── terraform/              # 인프라 코드
│   └── main.tf
├── docker-compose.yml      # 로컬 개발 환경
├── Dockerfile             # 프로덕션 이미지
├── Dockerfile.frontend    # 프론트엔드 이미지
├── Dockerfile.backend     # 백엔드 이미지
├── nginx-frontend.conf    # Nginx 설정
└── README.md
```

## 🛠️ 설치 및 실행

### 사전 요구사항
- Node.js 18+
- Docker & Docker Compose
- Git

### 1. 저장소 클론
```bash
git clone https://github.com/alexkim/portfolio.git
cd portfolio
```

### 2. 의존성 설치
```bash
# 모든 패키지 설치
npm run install:all

# 또는 개별 설치
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 3. 환경 변수 설정
```bash
# 백엔드 환경 변수 설정
cd backend
cp env.example .env
# .env 파일을 편집하여 필요한 값들을 설정하세요
```

### 4. 개발 서버 실행

#### 옵션 1: 개별 실행
```bash
# 프론트엔드 (포트 5173)
npm run dev:frontend

# 백엔드 (포트 5000)
npm run dev:backend
```

#### 옵션 2: 동시 실행
```bash
# 프론트엔드와 백엔드를 동시에 실행
npm run dev
```

#### 옵션 3: Docker Compose 사용
```bash
# 모든 서비스 실행 (프론트엔드, 백엔드, MongoDB, Redis)
docker-compose up -d

# 로그 확인
docker-compose logs -f
```

## 🐳 Docker 배포

### 프로덕션 빌드
```bash
# 전체 애플리케이션 빌드
docker build -t portfolio:latest .

# 개별 서비스 빌드
docker build -f Dockerfile.frontend -t portfolio-frontend:latest .
docker build -f Dockerfile.backend -t portfolio-backend:latest .
```

### Docker Compose로 배포
```bash
# 프로덕션 환경 실행
docker-compose --profile production up -d
```

## ☁️ AWS 배포 (Terraform)

### 1. AWS CLI 설정
```bash
aws configure
```

### 2. Terraform 초기화 및 배포
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### 3. ECR에 이미지 푸시
```bash
# ECR 로그인
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.ap-northeast-2.amazonaws.com

# 이미지 빌드 및 푸시
docker build -t portfolio:latest .
docker tag portfolio:latest <account-id>.dkr.ecr.ap-northeast-2.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.ap-northeast-2.amazonaws.com/portfolio:latest
```

## 📡 API 엔드포인트

### 연락처
- `POST /api/contact` - 연락 메시지 전송

### 프로젝트
- `GET /api/projects` - 프로젝트 목록 조회
- `GET /api/projects/:id` - 특정 프로젝트 조회
- `POST /api/projects` - 프로젝트 추가 (인증 필요)

### 인증
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/auth/me` - 사용자 정보 조회

### 헬스 체크
- `GET /api/health` - 서버 상태 확인

## 🎨 주요 기능

- **반응형 디자인** - 모든 디바이스에서 최적화된 경험
- **다크 테마** - 현대적이고 세련된 UI
- **애니메이션** - Framer Motion을 활용한 부드러운 전환
- **커스텀 커서** - 인터랙티브한 사용자 경험
- **이메일 연락** - Nodemailer를 통한 연락 폼
- **프로젝트 관리** - 동적 프로젝트 데이터 관리
- **인증 시스템** - JWT 기반 사용자 인증

## 🔧 개발 스크립트

```bash
# 개발
npm run dev              # 프론트엔드 + 백엔드 동시 실행
npm run dev:frontend     # 프론트엔드만 실행
npm run dev:backend      # 백엔드만 실행

# 빌드
npm run build            # 전체 빌드
npm run build:frontend   # 프론트엔드 빌드
npm run build:backend    # 백엔드 빌드

# 프로덕션
npm run start            # 프로덕션 실행
npm run start:frontend   # 프론트엔드 프로덕션
npm run start:backend    # 백엔드 프로덕션
```

## 📝 환경 변수

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@alexkim.dev
```

### Frontend (Vite)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: alex@example.com
- **LinkedIn**: [linkedin.com/in/alexkim](https://linkedin.com/in/alexkim)
- **GitHub**: [github.com/alexkim](https://github.com/alexkim)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
