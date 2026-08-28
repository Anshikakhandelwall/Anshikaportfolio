export type ExperimentStatus = 'EXPLORING' | 'BUILDING' | 'PAUSED' | 'COMPLETE';

export interface Experiment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: ExperimentStatus;
  why: string;
  learning: string;
  built?: string;
  next: string;
}

export const experiments: Experiment[] = [
  {
    id: 'neuromorphic',
    number: '01',
    title: 'Neuromorphic Computing',
    subtitle: 'Brain-inspired spiking neural networks',
    tags: ['SNN', 'STDP', 'Surrogate Gradient', 'PyTorch'],
    status: 'EXPLORING',
    why: 'Conventional deep learning is energy-hungry and fundamentally different from biological neural computation. Spiking networks process information in time, not just space.',
    learning: 'Spike-timing-dependent plasticity (STDP), surrogate gradient methods, temporal coding schemes, and the SpikingJelly framework.',
    next: 'Build a small SNN classifier on MNIST to benchmark energy efficiency against a standard MLP.',
  },
  {
    id: 'xai-vision',
    number: '02',
    title: 'Explainable Vision AI',
    subtitle: 'Making computer vision models accountable',
    tags: ['Grad-CAM', 'LIME', 'SHAP', 'CNN', 'PyTorch'],
    status: 'BUILDING',
    why: 'Vision models are powerful but opaque. In high-stakes domains like medical imaging, "trust the model" is not acceptable.',
    learning: 'Gradient-weighted Class Activation Mapping (Grad-CAM), attention visualization, saliency maps and how to integrate them into real inference pipelines.',
    built: 'A Grad-CAM visualization tool overlaid on a ResNet classifier, highlighting the spatial regions that drive each prediction.',
    next: 'Apply to medical image datasets and measure how explanation quality varies with model architecture.',
  },
  {
    id: 'realtime-data',
    number: '03',
    title: 'Real-Time Data Pipelines',
    subtitle: 'Streaming analytics at the edge',
    tags: ['Kafka', 'Apache Spark', 'Python', 'Websockets'],
    status: 'EXPLORING',
    why: 'Most data projects work on static datasets. Real applications generate continuous streams. I want to understand how to reason about data in motion.',
    learning: 'Event-driven architecture, stream processing concepts, windowing functions, exactly-once delivery semantics.',
    next: 'Build a small real-time dashboard ingesting a live data source via WebSocket.',
  },
  {
    id: 'llm-agents',
    number: '04',
    title: 'Autonomous LLM Agents',
    subtitle: 'LLMs that plan, use tools and self-correct',
    tags: ['LangChain', 'ReAct', 'Tool Use', 'OpenAI'],
    status: 'BUILDING',
    why: 'The next step beyond chatbots is agents — systems that decompose goals, use external tools, and course-correct when they fail.',
    learning: 'ReAct prompting, tool-calling APIs, agent memory architectures, evaluation frameworks for autonomous systems.',
    built: 'A research assistant agent that searches the web, reads PDFs, and summarizes findings with citations.',
    next: 'Add persistent memory and multi-step planning to handle complex research tasks autonomously.',
  },
  {
    id: 'generative-ui',
    number: '05',
    title: 'Generative UI Experiments',
    subtitle: 'Interfaces that build themselves',
    tags: ['React', 'Framer Motion', 'Canvas API', 'GSAP'],
    status: 'EXPLORING',
    why: 'The boundary between design and code is dissolving. I want to understand how to generate UI from constraints rather than hand-crafting every pixel.',
    learning: 'Procedural layout generation, constraint-based design systems, animation curves and physics-based motion.',
    next: 'Build a component that generates its own layout from a data schema.',
  },
];
