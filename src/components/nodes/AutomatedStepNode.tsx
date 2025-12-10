import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import type { AutomatedStepNodeData } from '../../types/nodes';

interface Props {
  data: AutomatedStepNodeData;
  selected?: boolean;
}

export const AutomatedStepNode: React.FC<Props> = ({ data, selected }) => {
  const [hovered, setHovered] = useState(false);
  const elevate = selected || hovered;
  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: '18px',
      border: '2.5px solid #a855f7',
      background: 'linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%)',
      minWidth: '220px',
      boxShadow: elevate ? '0 20px 48px 0 rgba(168,85,247,0.18), 0 1.2px 16px #a855f748' : '0 7px 21px rgba(168,85,247,0.13)',
      position: 'relative',
      transition: 'transform 0.23s cubic-bezier(0.44,0,0.56,1), box-shadow 0.20s',
      transform: elevate ? 'translateY(-3px) scale(1.017)' : 'translateY(0) scale(1)',
      borderColor: elevate ? '#9333ea' : '#a855f7',
      animation: 'fadeGrow 0.38s cubic-bezier(.32,0,.67,0) 1',
      outline: selected ? '2.5px solid #d8b4fe' : undefined,
      zIndex: elevate ? 3 : 2
    }}
    aria-label={data.title}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <Handle 
        type="target" 
        position={Position.Top}
        id="target"
        style={{ 
          background: '#9C27B0',
          width: '16px',
          height: '16px',
          border: '3px solid white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          cursor: 'crosshair'
        }} 
      />
      
      <div style={{ fontWeight: 'bold', color: '#6A1B9A', marginBottom: '8px', fontSize: '14px' }}>
        ⚙️ {data.title}
      </div>
      
      {data.actionId && (
        <div style={{ fontSize: '12px', color: '#555', marginBottom: '5px' }}>
          <strong>Action:</strong> {data.actionId.replace(/_/g, ' ')}
        </div>
      )}
      
      {data.parameters && Object.keys(data.parameters).length > 0 && (
        <div style={{ fontSize: '11px', color: '#666', backgroundColor: '#E1BEE7', padding: '4px 8px', borderRadius: '4px', marginTop: '5px' }}>
          {Object.keys(data.parameters).length} parameter(s) set
        </div>
      )}
      
      <Handle 
        type="source" 
        position={Position.Bottom}
        id="source"
        style={{ 
          background: '#9C27B0',
          width: '16px',
          height: '16px',
          border: '3px solid white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          cursor: 'crosshair'
        }} 
      />
    </div>
  );
};
