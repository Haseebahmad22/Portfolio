// Centralized project data
export const projects = [
  {
    id: 1,
    title: 'GameExplorer',
    description: 'GameExplorer is a comprehensive gaming platform where players can explore an extensive database of games, read and write reviews, watch trailers, and browse screenshots. Designed for gamers by gamers.',
    longDescription: 'A full-stack gaming platform that combines the best features of game discovery, review systems, and community engagement. Built with modern technologies to deliver a seamless user experience across all devices.',
    category: 'Full Stack',
    featured: true,
    difficulty: 'Advanced',
    duration: '3 months',
    status: 'Live',
    features: [
      'Extensive Game Database',
      'User Reviews & Ratings',
      'Trailers & Screenshots',
      'Advanced Search',
      'User authentication',
      'Responsive design'
    ],
    technologies: ['React', 'Express', 'SQL', 'Tailwind CSS', 'Next.js'],
    githubUrl: 'https://github.com/AmarWaqar-TSKLI/GameStore2.0',
    liveUrl: 'https://gamestore-rw.vercel.app/',
    images: ['/g1.png'],
    video: '/gameexplorer.mp4',
    stats: { views: 1250, stars: 45, commits: 127 }
  },
  {
    id: 2,
    title: 'Rentinel',
    description: 'Rentinel is a full-stack property management platform designed to streamline rental operations for Admins, Property Owners, and Tenants with automated billing and real-time tracking.',
    longDescription: 'A comprehensive property management solution that revolutionizes how rental properties are managed. Features role-based dashboards, automated billing, and real-time notifications.',
    category: 'Full Stack',
    featured: true,
    difficulty: 'Advanced',
    duration: '4 months',
    status: 'In Development',
    features: [
      'Multi-role dashboards',
      'Online payment processing',
      'Lease and property tracking',
      'Real-time notifications',
      'Secure authentication',
      'Financial analytics'
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'SQL', 'JWT'],
    githubUrl: 'https://github.com/Haseebahmad22/Rentinel',
    liveUrl: '#',
    images: ['/r1.png', '/r2.png', '/r3.png'],
    video: '/rentinel.mp4',
    stats: { views: 890, stars: 32, commits: 203 }
  },
  {
    id: 3,
    title: 'Journez',
    description: 'A travel planning platform that helps users discover destinations, plan itineraries, and share their travel experiences with a community of fellow travelers.',
    longDescription: 'An innovative travel companion that combines destination discovery with community-driven content. Perfect for travelers looking to plan their next adventure.',
    category: 'Frontend',
    featured: false,
    difficulty: 'Intermediate',
    duration: '2 months',
    status: 'Complete',
    features: [
      'Destination discovery',
      'Itinerary planning',
      'Community sharing',
      'Photo galleries',
      'Travel reviews',
      'Mobile responsive'
    ],
    technologies: ['C++','C#','Winforms'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/j1.jpg', '/j2.jpg', '/j3.jpg', '/j4.jpg', '/j5.jpg', '/j6.jpg'],
    video: '/journez.mp4',
    stats: { views: 654, stars: 28, commits: 89 }
  },
  {
    id: 4,
    title: 'QuestRunner',
    description: 'An innovative task management application with gamification elements that makes productivity fun through quests, achievements, and progress tracking.',
    longDescription: 'Gamified productivity at its finest. Transform your daily tasks into engaging quests with rewards, achievements, and team collaboration features.',
    category: 'Frontend',
    featured: false,
    difficulty: 'Intermediate',
    duration: '2.5 months',
    status: 'Complete',
    features: [
      'Gamified tasks',
      'Achievement system',
      'Progress tracking',
      'Team collaboration',
      'Custom rewards',
      'Analytics dashboard'
    ],
    technologies: ['C++','SFML'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/q1.png', '/q2.png', '/q3.png', '/q4.png', '/q5.png'],
    video: '/questrunner.mp4',
    stats: { views: 423, stars: 19, commits: 156 }
  },
  {
    id: 5,
    title: 'VoltMaster',
    description: 'An advanced electrical management system for monitoring and controlling power distribution with real-time analytics and safety features.',
    longDescription: 'IoT-powered electrical management system that provides real-time monitoring, predictive analytics, and automated safety protocols for industrial applications.',
    category: 'IoT',
    featured: true,
    difficulty: 'Expert',
    duration: '5 months',
    status: 'In Development',
    features: [
      'Real-time monitoring',
      'Power analytics',
      'Safety alerts',
      'Remote control',
      'Energy optimization',
      'Maintenance scheduling'
    ],
    technologies: ['Winforms', 'C++', 'C#'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/v1.jpg', '/v2.jpg', '/v3.jpg'],
    video: '/voltmaster.mp4',
    stats: { views: 312, stars: 15, commits: 78 }
  }
];

export const categories = ['All', 'Featured', 'Full Stack', 'Frontend', 'Backend', 'IoT'];
