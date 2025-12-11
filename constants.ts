import { User, Briefcase, Link as LinkIcon, Mail, Instagram, Twitter, Linkedin, Youtube, Layout } from 'lucide-react';
import { PageRoute, NavItem, WorkItem, LinkItem, TimelineItem, SkillItem } from './types';

// Image Assets
export const IMAGES = {
  PROFILE: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Clean professional portrait
  WORK_1: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=800&auto=format&fit=crop", // UI Design
  WORK_2: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=800&auto=format&fit=crop", // Branding
  WORK_3: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", // Mobile App
};

// Profile Info
export const PROFILE_INFO = {
  name: "Alex Kim",
  role: "Product Designer & Creator",
  tagline: "Create, Connect, Inspire.",
  bio: "디자인과 기술의 경계에서 사용자 경험을 혁신합니다. 미니멀리즘을 추구하며 브랜드의 이야기를 시각적 언어로 번역합니다.",
  email: "contact@alexkim.design"
};

// Navigation Links (Main Menu)
export const NAV_ITEMS: NavItem[] = [
  {
    id: 'profile',
    label: '상세 프로필 (Profile)',
    path: PageRoute.PROFILE,
    icon: User,
    description: '경력, 가치관, 스킬셋'
  },
  {
    id: 'links',
    label: '추천 리소스 (Links)',
    path: PageRoute.LINKS,
    icon: LinkIcon,
    description: '뉴스레터, 디자인 도구, 추천 아티클'
  },
  {
    id: 'work',
    label: '포트폴리오 (Work)',
    path: PageRoute.WORK,
    icon: Layout,
    description: '주요 프로젝트 및 성과'
  },
  {
    id: 'ask',
    label: '문의하기 (Ask me)',
    path: PageRoute.ASK,
    icon: Mail,
    description: '비즈니스 협업 및 커피챗'
  }
];

// Data: Work
export const WORK_ITEMS: WorkItem[] = [
  {
    id: '1',
    title: 'Fintech Mobile App',
    category: 'UI/UX Design',
    image: IMAGES.WORK_1,
    description: '2030 세대를 위한 직관적인 자산 관리 앱 리디자인 프로젝트'
  },
  {
    id: '2',
    title: 'Eco-Friendly Brand',
    category: 'Brand Identity',
    image: IMAGES.WORK_2,
    description: '지속 가능한 라이프스타일 브랜드의 로고 및 패키지 디자인'
  },
  {
    id: '3',
    title: 'Creator Dashboard',
    category: 'Web Design',
    image: IMAGES.WORK_3,
    description: '유튜버를 위한 올인원 분석 대시보드 SaaS 플랫폼'
  }
];

// Data: Links
export const LINK_ITEMS: LinkItem[] = [
  { id: '1', title: 'Weekly Design Newsletter', url: '#', category: 'Newsletter' },
  { id: '2', title: 'Figma 3D Plugin Pack', url: '#', category: 'Tools' },
  { id: '3', title: 'My Notion Template', url: '#', category: 'Store' },
  { id: '4', title: 'Dribbble Portfolio', url: '#', category: 'Portfolio' },
];

// Data: Timeline
export const TIMELINE_ITEMS: TimelineItem[] = [
  { year: '2023 - Present', role: 'Freelance Product Designer', company: 'Self-employed' },
  { year: '2021 - 2023', role: 'Senior UI Designer', company: 'Tech Startup A' },
  { year: '2019 - 2021', role: 'Junior Web Designer', company: 'Digital Agency B' },
];

// Data: Skills
export const SKILLS: SkillItem[] = [
  { name: 'Figma', level: 5 },
  { name: 'React Basic', level: 3 },
  { name: 'ProtoPie', level: 4 },
  { name: 'Blender', level: 3 },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, url: '#' },
  { icon: Twitter, url: '#' },
  { icon: Linkedin, url: '#' },
  { icon: Youtube, url: '#' },
];