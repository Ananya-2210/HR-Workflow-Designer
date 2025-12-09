import React from 'react';
import { StartNodeData } from '../../types/nodes';

interface Props {
  data: StartNodeData;
  onChange: (data: Partial<StartNodeData>) => void;
}

export const StartNodeForm: React.FC<Props> = ({ data, onChange }) => {
  const [metadataKey, setMetadataKey] = React.useState('');
  const [metadataValue, setMetadataValue] = React.useState('');

  const addMetadata = () => {
    if (metadataKey && metadataValue) {
      onChange({
        metadata: {
          ...data.metadata,
          [metadataKey]: metadataValue
        }
      });
      setMetadataKey('');
      setMetadataValue('');
    }
  };

  const removeMetadata = (key: string) => {
    const newMetadata = { ...data.metadata };
    delete newMetadata[key];
    onChange({ metadata: newMetadata });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit Start Node</h3>
      
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
          Metadata (Optional)
        </label>
        
        {data.metadata && Object.entries(data.metadata).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
            <span style={{ flex: 1, padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
              {key}: {value}
            </span>
            <button onClick={() => removeMetadata(key)} style={{ padding: '5px 10px' }}>
              ✕
            </button>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Key"
            value={metadataKey}
            onChange={(e) => setMetadataKey(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            placeholder="Value"
            value={metadataValue}
            onChange={(e) => setMetadataValue(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button onClick={addMetadata} style={{ padding: '5px 10px' }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
