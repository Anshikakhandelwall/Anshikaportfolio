export type CreativeCategory = 'UI Design' | 'Poster' | 'Visual' | 'Typography' | 'Branding';

export interface CreativeItem {
  id: string;
  title: string;
  category: CreativeCategory;
  description: string;
  aspect: 'square' | 'portrait' | 'landscape';
  placeholder: string; // color for placeholder
}

export const creativeItems: CreativeItem[] = [
  {
    id: 'c1',
    title: 'MediGuard Interface',
    category: 'UI Design',
    description: 'Dashboard design for the MediGuard drug safety assistant.',
    aspect: 'landscape',
    placeholder: '#1a2535',
  },
  {
    id: 'c2',
    title: 'Data Flow Typography',
    category: 'Typography',
    description: 'Experimental typographic poster exploring the concept of data movement.',
    aspect: 'portrait',
    placeholder: '#0f1923',
  },
  {
    id: 'c3',
    title: 'CardioXAI Visual',
    category: 'Visual',
    description: 'Data visualization design for cardiac risk factor analysis.',
    aspect: 'square',
    placeholder: '#1a1525',
  },
  {
    id: 'c4',
    title: 'AI × Human Poster',
    category: 'Poster',
    description: 'Conceptual poster on the intersection of artificial and human intelligence.',
    aspect: 'portrait',
    placeholder: '#1a2020',
  },
  {
    id: 'c5',
    title: 'SkillBridge Branding',
    category: 'Branding',
    description: 'Visual identity system for the SkillBridge AI platform.',
    aspect: 'square',
    placeholder: '#1f1a35',
  },
  {
    id: 'c6',
    title: 'Neural Network Art',
    category: 'Visual',
    description: 'Generative visual exploring neural network topology as art.',
    aspect: 'landscape',
    placeholder: '#1a1a2e',
  },
];
