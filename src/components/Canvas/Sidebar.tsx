import React from 'react';
import { useWorkflow } from '../../context/WorkflowContext';

const nodeTypes = [
  { type: 'start', label: 'Start Node', color: '#4CAF50' },
  { type: 'task', label: 'Task Node', color: '#2196F3' },
  { type: 'approval', label: 'Approval Node', color: '#FF9800' },
  { type: 'automated', label: 'Automated Step', color: '#9C27B0' },
  { type: 'end', label: 'End Node', color: '#F44336' }
];

export const Sidebar: React.FC = () => {
  const { addNode } = useWorkflow();

  const handleAddNode = (type: string) => {
    console.log('Adding node:', type); // For debugging
    addNode(type);
  };

  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd', backgroundColor: '#2c2c2c' }}>
      <h3 style={{ color: 'white', marginBottom: '20px' }}>Node Types</h3>
      {nodeTypes.map((node) => (
        <div
          key={node.type}
          onClick={() => handleAddNode(node.type)}
          style={{
            padding: '12px',
            margin: '10px 0',
            backgroundColor: node.color,
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'transform 0.2s',
            userSelect: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
};
