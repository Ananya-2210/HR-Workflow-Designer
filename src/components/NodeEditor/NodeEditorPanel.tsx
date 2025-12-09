import React from 'react';
import { useWorkflow } from '../../context/WorkflowContext';
import { StartNodeForm } from './StartNodeForm';
import { TaskNodeForm } from './TaskNodeForm';
import { ApprovalNodeForm } from './ApprovalNodeForm';
import { AutomatedStepNodeForm } from './AutomatedStepNodeForm';
import { EndNodeForm } from './EndNodeForm';

export const NodeEditorPanel: React.FC = () => {
  const { nodes, selectedNode, updateNodeData } = useWorkflow();

  const currentNode = nodes.find((n) => n.id === selectedNode);

  if (!currentNode) {
    return (
      <div style={{ width: '300px', padding: '20px', borderLeft: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
        <p style={{ color: '#666' }}>Select a node to edit</p>
      </div>
    );
  }

  const handleChange = (data: any) => {
    updateNodeData(currentNode.id, data);
  };

  const renderForm = () => {
    switch (currentNode.data.type) {
      case 'start':
        return <StartNodeForm data={currentNode.data} onChange={handleChange} />;
      case 'task':
        return <TaskNodeForm data={currentNode.data} onChange={handleChange} />;
      case 'approval':
        return <ApprovalNodeForm data={currentNode.data} onChange={handleChange} />;
      case 'automated':
        return <AutomatedStepNodeForm data={currentNode.data} onChange={handleChange} />;
      case 'end':
        return <EndNodeForm data={currentNode.data} onChange={handleChange} />;
      default:
        return <p>Unknown node type</p>;
    }
  };

  return (
    <div style={{ width: '300px', padding: '20px', borderLeft: '1px solid #ddd', overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
      {renderForm()}
    </div>
  );
};
