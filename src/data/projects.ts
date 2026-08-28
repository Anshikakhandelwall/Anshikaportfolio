export type ProjectCategory = 'AI/ML' | 'Data' | 'Web' | 'Product' | 'Creative';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  category: ProjectCategory[];
  year: string;
  technologies: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'mediguard',
    number: '01',
    title: 'MediGuard',
    tagline: 'Smart Medicine Safety & Drug Interaction Assistant',
    description:
      'An AI-powered healthcare assistant that analyzes drug interactions, flags unsafe combinations, and provides safety guidance — putting critical pharmaceutical knowledge in everyone\'s hands.',
    problem:
      'Patients and caregivers often unknowingly combine drugs with dangerous interactions. Existing tools are fragmented, technical, and inaccessible.',
    solution:
      'Built a conversational AI assistant backed by pharmaceutical APIs, a PostgreSQL drug database, and a Django REST backend. Users input medications and receive instant, plain-language safety analysis.',
    result: 'Flags dangerous interactions across 10,000+ drug combinations with sub-second response time.',
    category: ['AI/ML', 'Web', 'Product'],
    year: '2024',
    technologies: ['Django', 'PostgreSQL', 'Supabase', 'Python', 'REST APIs', 'React'],
    features: [
      'Real-time drug interaction analysis',
      'Natural language safety explanations',
      'Multi-drug combination checking',
      'Severity classification system',
      'Dosage guidance and warnings',
    ],
    github: 'https://github.com/anshikakhandelwal',
    liveDemo: '[ADD LIVE DEMO URL]',
    featured: true,
    accentColor: '#3b82d4',
  },
  {
    id: 'cardioxai',
    number: '02',
    title: 'CardioXAI',
    tagline: 'Explainable AI for Heart Disease Prediction',
    description:
      'A machine learning system that predicts cardiovascular risk and — crucially — explains why. Using SHAP values and LIME, the model\'s reasoning is made transparent to both clinicians and patients.',
    problem:
      'Black-box medical AI creates distrust. Doctors cannot act on a prediction they cannot understand.',
    solution:
      'Trained an ensemble classifier on clinical datasets and layered SHAP/LIME explanations over every prediction, generating human-readable factor importance summaries.',
    result: 'Achieved 91%+ prediction accuracy with fully interpretable per-patient explanations.',
    category: ['AI/ML', 'Data'],
    year: '2024',
    technologies: ['Python', 'Scikit-learn', 'SHAP', 'LIME', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Ensemble ML model (RF + XGBoost)',
      'SHAP feature importance visualization',
      'LIME local explanation generator',
      'Risk factor breakdown per patient',
      'Clinical data preprocessing pipeline',
    ],
    github: 'https://github.com/anshikakhandelwal',
    liveDemo: '[ADD LIVE DEMO URL]',
    featured: true,
    accentColor: '#e05c5c',
  },
  {
    id: 'skillbridge',
    number: '03',
    title: 'SkillBridge AI',
    tagline: 'AI-Powered Career Development Platform',
    description:
      'An intelligent platform that maps skill gaps between where a user is and where they want to be — then builds a personalized, adaptive learning roadmap.',
    problem:
      'Most career platforms tell you what jobs exist. None tell you precisely how to bridge the gap between your current skills and your target role.',
    solution:
      'Combined LLM-based skill extraction from resumes/JDs with a graph-based gap analysis engine, surfacing ranked learning paths with timeline estimates.',
    result: 'Generates personalized skill roadmaps in under 3 seconds from resume upload.',
    category: ['AI/ML', 'Web', 'Product'],
    year: '2025',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Python', 'OpenAI API', 'PostgreSQL'],
    features: [
      'Resume parsing and skill extraction',
      'Job description skill mapping',
      'Gap analysis with priority ranking',
      'Adaptive learning path generation',
      'Progress tracking dashboard',
    ],
    github: 'https://github.com/anshikakhandelwal',
    liveDemo: '[ADD LIVE DEMO URL]',
    featured: true,
    accentColor: '#7c5cd8',
  },
];
