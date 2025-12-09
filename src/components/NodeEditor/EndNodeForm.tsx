import React from 'react';
import { EndNodeData } from '../../types/nodes';

interface Props {
  data: EndNodeData;
  onChange: (data: Partial<EndNodeData>) => void;
}

export const EndNodeForm: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit End Node</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Title *
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          End Message
        </label>
        <textarea
          value={data.endMessage || ''}
          onChange={(e) => onChange({ endMessage: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
          placeholder="e.g., Workflow completed successfully!"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            checked={data.summaryFlag || false}
            onChange={(e) => onChange({ summaryFlag: e.target.checked })}
            style={{ width: '20px', height: '20px' }}
          />
          <span style={{ fontWeight: 'bold' }}>Show Summary</span>
        </label>
        <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>
          Enable to display workflow summary at completion
        </small>
      </div>
    </div>
  );
};
