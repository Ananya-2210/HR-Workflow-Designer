import React from 'react';
import { TaskNodeData } from '../../types/nodes';

interface Props {
  data: TaskNodeData;
  onChange: (data: Partial<TaskNodeData>) => void;
}

export const TaskNodeForm: React.FC<Props> = ({ data, onChange }) => {
  const [customKey, setCustomKey] = React.useState('');
  const [customValue, setCustomValue] = React.useState('');

  const addCustomField = () => {
    if (customKey && customValue) {
      onChange({
        customFields: {
          ...data.customFields,
          [customKey]: customValue
        }
      });
      setCustomKey('');
      setCustomValue('');
    }
  };

  const removeCustomField = (key: string) => {
    const newFields = { ...data.customFields };
    delete newFields[key];
    onChange({ customFields: newFields });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit Task Node</h3>
      
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
          Description
        </label>
        <textarea
          value={data.description || ''}
          onChange={(e) => onChange({ description: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Assignee
        </label>
        <input
          type="text"
          value={data.assignee || ''}
          onChange={(e) => onChange({ assignee: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="e.g., HR Executive"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Due Date
        </label>
        <input
          type="date"
          value={data.dueDate || ''}
          onChange={(e) => onChange({ dueDate: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Custom Fields (Optional)
        </label>
        
        {data.customFields && Object.entries(data.customFields).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
            <span style={{ flex: 1, padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
              {key}: {value}
            </span>
            <button onClick={() => removeCustomField(key)} style={{ padding: '5px 10px' }}>
              ✕
            </button>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Key"
            value={customKey}
            onChange={(e) => setCustomKey(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            placeholder="Value"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button onClick={addCustomField} style={{ padding: '5px 10px' }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
