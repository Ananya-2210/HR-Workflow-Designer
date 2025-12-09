import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AutomatedStepNodeData } from '../../types/nodes';
import { AutomationAction } from '../../api/types';

interface Props {
  data: AutomatedStepNodeData;
  onChange: (data: Partial<AutomatedStepNodeData>) => void;
}

export const AutomatedStepNodeForm: React.FC<Props> = ({ data, onChange }) => {
  const [actions, setActions] = useState<AutomationAction[]>([]);
  const [selectedAction, setSelectedAction] = useState<AutomationAction | null>(null);

  useEffect(() => {
    // Fetch automation actions from mock API
    axios.get('/api/automations')
      .then(response => {
        setActions(response.data);
        if (data.actionId) {
          const action = response.data.find((a: AutomationAction) => a.id === data.actionId);
          setSelectedAction(action || null);
        }
      })
      .catch(error => console.error('Failed to load automations:', error));
  }, [data.actionId]);

  const handleActionChange = (actionId: string) => {
    const action = actions.find(a => a.id === actionId);
    setSelectedAction(action || null);
    onChange({ 
      actionId, 
      parameters: {} // Reset parameters when action changes
    });
  };

  const handleParameterChange = (paramName: string, value: string) => {
    onChange({
      parameters: {
        ...data.parameters,
        [paramName]: value
      }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit Automated Step</h3>
      
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
          Action Type
        </label>
        <select
          value={data.actionId || ''}
          onChange={(e) => handleActionChange(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Select Action</option>
          {actions.map(action => (
            <option key={action.id} value={action.id}>
              {action.label}
            </option>
          ))}
        </select>
      </div>

      {selectedAction && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Action Parameters
          </label>
          {selectedAction.params.map(param => (
            <div key={param} style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                {param}
              </label>
              <input
                type="text"
                value={data.parameters?.[param] || ''}
                onChange={(e) => handleParameterChange(param, e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                placeholder={`Enter ${param}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
