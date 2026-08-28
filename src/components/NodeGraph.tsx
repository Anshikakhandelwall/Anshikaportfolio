'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'AI', x: 50, y: 10, desc: ['Machine Learning', 'Computer Vision', 'Explainable AI', 'LLM Agents'] },
  { id: 'DATA', x: 8, y: 55, desc: ['Analytics', 'Pipelines', 'Visualization', 'PostgreSQL'] },
  { id: 'PRODUCT', x: 92, y: 55, desc: ['User Flows', 'Systems Thinking', 'Next.js', 'API Design'] },
  { id: 'DESIGN', x: 50, y: 92, desc: ['Typography', 'UI/UX', 'Motion', 'Visual Systems'] },
];

const CENTER = { x: 50, y: 52 };

export default function NodeGraph() {
  const containerRef = useRef<SVGSVGElement>(null);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '1', margin: '0 auto' }}>
      <svg
        ref={containerRef}
        viewBox="0 0 100 100"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        {/* Connection lines */}
        {nodes.map(node => (
          <motion.line
            key={node.id}
            x1={CENTER.x} y1={CENTER.y}
            x2={node.x} y2={node.y}
            stroke="var(--border-light)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        ))}

        {/* Center node */}
        <motion.circle
          cx={CENTER.x} cy={CENTER.y} r="3"
          fill="var(--accent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.text
          x={CENTER.x} y={CENTER.y + 5.5}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize="2.2"
          fontFamily="var(--font-mono)"
          letterSpacing="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          AK
        </motion.text>

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <g key={node.id} className="graph-node" style={{ cursor: 'none' }}>
            <motion.circle
              cx={node.x} cy={node.y} r="4"
              fill="var(--surface-2)"
              stroke="var(--border-light)"
              strokeWidth="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.3, stroke: 'var(--accent)', strokeWidth: 0.6 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            />
            <motion.text
              x={node.x}
              y={node.id === 'AI' ? node.y - 6 : node.id === 'DESIGN' ? node.y + 8 : node.y + 0.8}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="2.8"
              fontFamily="var(--font-mono)"
              letterSpacing="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              {node.id}
            </motion.text>
          </g>
        ))}

        {/* Orbital ring */}
        <motion.circle
          cx={CENTER.x} cy={CENTER.y} r="20"
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.2"
          strokeDasharray="1 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ opacity: { delay: 1 }, rotate: { duration: 60, repeat: Infinity, ease: 'linear' } }}
          style={{ transformOrigin: `${CENTER.x}% ${CENTER.y}%` }}
        />
      </svg>
    </div>
  );
}
