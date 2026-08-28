export interface JourneyItem {
  id: string;
  year: string;
  month?: string;
  title: string;
  type: 'project' | 'hackathon' | 'research' | 'milestone' | 'experiment';
  description: string;
  tags: string[];
  highlight?: string;
}

export const journeyItems: JourneyItem[] = [
  {
    id: 'j1',
    year: '2022',
    title: 'First line of real code',
    type: 'milestone',
    description:
      'Moved from tutorials to building — wrote a Python script that automated something I was doing manually every day. The moment I realized code was a tool, not a subject.',
    tags: ['Python', 'Automation'],
    highlight: 'The beginning.',
  },
  {
    id: 'j2',
    year: '2023',
    month: 'Mar',
    title: 'First ML model in production',
    type: 'project',
    description:
      'Trained a text classifier on real data, deployed it, and watched it make predictions on things it had never seen. The model working felt almost magical.',
    tags: ['Scikit-learn', 'Python', 'ML'],
  },
  {
    id: 'j3',
    year: '2023',
    month: 'Aug',
    title: 'First hackathon',
    type: 'hackathon',
    description:
      'Built something from nothing in 24 hours. The experience of shipping under pressure changed how I think about development — constraints create clarity.',
    tags: ['Hackathon', '24hrs', 'Teamwork'],
    highlight: 'Shipped.',
  },
  {
    id: 'j4',
    year: '2024',
    month: 'Jan',
    title: 'CardioXAI — Explainable AI research',
    type: 'research',
    description:
      'Dove deep into XAI. Learned that a model that cannot explain itself is a model you cannot trust. Built SHAP/LIME explanation layers over a cardiac risk classifier.',
    tags: ['XAI', 'SHAP', 'LIME', 'Healthcare AI'],
  },
  {
    id: 'j5',
    year: '2024',
    month: 'Jun',
    title: 'MediGuard — First full-stack AI product',
    type: 'project',
    description:
      'Designed and built a complete product: backend, database, API layer, and frontend. First time all the pieces connected into something a non-technical person could actually use.',
    tags: ['Django', 'PostgreSQL', 'React', 'AI', 'Healthcare'],
    highlight: 'End-to-end.',
  },
  {
    id: 'j6',
    year: '2024',
    month: 'Nov',
    title: 'Started exploring neuromorphic computing',
    type: 'experiment',
    description:
      'Fell into a rabbit hole about spiking neural networks. Still in it. The intersection of neuroscience and computing is one of the most interesting places in technology.',
    tags: ['SNN', 'Neuroscience', 'Deep Research'],
  },
  {
    id: 'j7',
    year: '2025',
    month: 'Feb',
    title: 'SkillBridge AI — Product thinking meets AI',
    type: 'project',
    description:
      'Moved from building ML models to building products with ML at the core. This project forced me to think about user problems first and technology second.',
    tags: ['Next.js', 'LLM', 'Product', 'TypeScript'],
    highlight: 'Product mindset.',
  },
  {
    id: 'j8',
    year: '2025',
    title: 'Now',
    type: 'milestone',
    description:
      'Building, experimenting, learning. Looking for interesting problems worth solving.',
    tags: ['Present'],
    highlight: '→',
  },
];
