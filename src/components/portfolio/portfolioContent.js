export const profileImageSrc = '/porfile.png';

export const sectionIds = ['hero', 'profile', 'about', 'signature', 'projects', 'skills', 'experience', 'contact'];

export const revealDelayBySection = {
  hero: '0ms',
  profile: '40ms',
  about: '60ms',
  signature: '80ms',
  projects: '70ms',
  skills: '50ms',
  experience: '70ms',
  contact: '40ms'
};

export const designLenses = [
  {
    id: 'product',
    label: 'Product Lens',
    heading: 'I shape engineering around outcomes, not output volume.',
    body: 'Decisions are tied to user behavior, friction reduction, and measurable product movement.',
    traits: ['Journey-first implementation', 'Feature-to-metric mapping', 'Experience quality checkpoints'],
    marker: 'North Star: clarity + adoption'
  },
  {
    id: 'systems',
    label: 'Systems Lens',
    heading: 'I build codebases that stay fast under growth.',
    body: 'Architecture is designed for reusability, safe iteration, and reduced maintenance drag.',
    traits: ['Clear component boundaries', 'Predictable data flow', 'Refactor-safe structure'],
    marker: 'North Star: scale without entropy'
  },
  {
    id: 'delivery',
    label: 'Delivery Lens',
    heading: 'I optimize for stable, repeatable shipping.',
    body: 'Execution balances speed and quality with realistic scope, testing discipline, and communication.',
    traits: ['Short feedback loops', 'Incremental rollout mindset', 'Release-readiness habits'],
    marker: 'North Star: momentum with reliability'
  }
];

export const workJourney = [
  {
    year: 'Now',
    role: 'Independent Software Engineer',
    note: 'Shipping full-stack products and AI-enabled developer tools with product-grade polish.'
  },
  {
    year: '2024',
    role: 'Full Stack Product Builder',
    note: 'Built practical React and backend systems focused on performance, maintainability, and UX quality.'
  },
  {
    year: '2023',
    role: 'Engineer Across Web + ML',
    note: 'Expanded from frontend depth into explainable ML workflows and developer-focused applications.'
  }
];

const average = (items) => Math.round(items.reduce((sum, item) => sum + item.level, 0) / items.length);

export const mapSkillsToBands = (skillsData) => {
  const frontTop = skillsData.frontend.slice(0, 5);
  const backTop = skillsData.backend.slice(0, 5);
  const toolsTop = skillsData.tools.slice(0, 5);

  return [
    {
      id: 'frontend',
      title: 'Interface Engineering',
      score: average(frontTop),
      chips: frontTop.map((item) => item.name)
    },
    {
      id: 'backend',
      title: 'Service + API Engineering',
      score: average(backTop),
      chips: backTop.map((item) => item.name)
    },
    {
      id: 'tooling',
      title: 'Tooling and Delivery',
      score: average(toolsTop),
      chips: toolsTop.map((item) => item.name)
    }
  ];
};
