import React, { useState } from 'react';
import axios from 'axios';
import { SimulationResult } from '../../api/types';

export const WorkflowTestPanel: React.FC<{ nodes: any[]; edges: any[] }> = ({ nodes, edges }) => {
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/simulate', { nodes, edges });
      setResult(response.data);
    } catch (error) {
      console.error('Simulation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', borderTop: '1px solid #ddd' }}>
      <h3>Test Workflow</h3>
      <button onClick={handleTest} disabled={loading}>
        {loading ? 'Running...' : 'Run Simulation'}
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h4>Execution Log:</h4>
          {result.steps.map((step, index) => (
            <div key={index} style={{ padding: '5px', margin: '5px 0', backgroundColor: '#f0f0f0' }}>
              Step {index + 1}: {step.title} - {step.status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
