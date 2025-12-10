import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import type { StartNodeData } from '../../types/nodes';

interface Props {
  data: StartNodeData;
  selected?: boolean;
}

export const StartNode: React.FC<Props> = ({ data, selected }) => {
  const [hovered, setHovered] = useState(false);
  const elevate = selected || hovered;
  return (
    <div style={{
      padding: '16px 26px',
      borderRadius: '50px',
      border: '2.5px solid #22c55e',
      background: 'linear-gradient(135deg, #ecfdf3 0%, #dcfce7 100%)',
      minWidth: '140px',
      textAlign: 'center',
      boxShadow: elevate ? '0 18px 42px 0 rgba(34,197,94,0.19), 0 1.2px 14px #22c55e48' : '0 7px 21px rgba(34,197,94,0.11)',
      position: 'relative',
      transition: 'transform 0.23s cubic-bezier(0.44,0,0.56,1), box-shadow 0.20s',
      transform: elevate ? 'translateY(-2px) scale(1.019)' : 'translateY(0) scale(1)',
      borderColor: elevate ? '#16a34a' : '#22c55e',
      animation: 'fadeGrow 0.38s cubic-bezier(.32,0,.67,0) 1',
      outline: selected ? '2.5px solid #6ee7b7' : undefined,
      zIndex: elevate ? 3 : 2
    }}
    aria-label={data.title}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontWeight: 'bold', color: '#166534', fontSize: '14px' }}>
        {data.title}
      </div>
      {data.metadata && Object.keys(data.metadata).length > 0 && (
        <div style={{ fontSize: '11px', color: '#666', marginTop: '5px' }}>
          {Object.keys(data.metadata).length} metadata fields
        </div>
      )}
      
      {/* Source Handle at Bottom */}
      <Handle 
        type="source" 
        position={Position.Bottom} 
        id="source"
        style={{ 
          background: '#4CAF50',
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
