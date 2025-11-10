// Minimal featured projects dataset (extend or replace with actual project data)
// Keeping consistent shape with expected fields in ProjectsShowcase
export const projectsData = [
  
 
  
  {
    id: 'proj-zarqais',
    title: 'Zarqais',
    description: 'Design reference implementation inspired by www.zarqais.com — polished visuals and compact tech showcase.',
    category: 'Design / Reference',
    tech: ['HTML', 'TailwindCSS', 'Next.js', 'Responsive', 'React'],
  images: ['/t1.png','/t2.png','/t3.png','/t4.png'], // using provided public root images
    githubUrl: 'https://github.com/Haseebahmad22/Zarqais',
    liveUrl: 'https://www.zarqais.com',
    keyFeatures: [
      'Complete e-commerce functionality',
      'Product catalog with filtering and search',
      'Shopping cart and checkout system',
      'Responsive design for all devices',
      'Product detail pages with images',
      'User-friendly navigation and UI'
    ]
  },
  {
    id: 'proj-xplainml',
    title: 'XplainML',
    description: 'Interpretable ML toolkit for tabular data — trains models, produces global & local explanations and interactive explanation dashboards.',
    category: 'Machine Learning',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'XGBoost', 'PyTorch', 'SHAP', 'LIME', 'React'],
    images: ['/x1.png','/x2.png'],
    githubUrl: 'https://github.com/Haseebahmad22/Xplainml',
    keyFeatures: [
      'Automated model training pipeline',
      'Global & local explainability (SHAP / LIME)',
      'Interactive explanation dashboards',
      'Model comparison & performance metrics',
      'Exportable insight & report generation'
    ]
  },
  {
    id: 'proj-codescribe',
    title: 'CodeScribe',
    description: 'AI-powered documentation assistant that auto-generates docstrings, module docs and interactive documentation from source code.',
    category: 'Developer Tools',
    tech: ['Python', 'FastAPI', 'LLM Adapters', 'React', 'TypeScript', 'Tailwind'],
    images: ['/cd1.png','/cd2.png','/cd3.png'],
    githubUrl: 'https://github.com/Haseebahmad22/codescribe',
    keyFeatures: [
      'AI docstring & comment generation',
      'Module / package summary synthesis',
      'Interactive searchable docs site',
      'Language‑agnostic parsing core',
      'Configurable style & quality rules'
    ]
   
  },
  {
    id: 'proj-finsight',
    title: 'FinSight',
    description: 'End-to-end toolkit for fetching market data, computing indicators, training baseline models and producing interactive Plotly visualizations.',
    category: 'Data & Visualization',
    tech: ['Python', 'pandas', 'scikit-learn', 'yfinance', 'Plotly', 'Streamlit'],
    images: ['/placeholders/finsight.svg'],
    githubUrl: '#',
    liveUrl: '#',
    keyFeatures: [
      'Live market data ingestion (yfinance)',
      'Technical indicators computation engine',
      'Baseline ML forecasting models',
      'Interactive Plotly dashboards',
      'Strategy backtesting sandbox'
    ]
  },

];

export default projectsData;
