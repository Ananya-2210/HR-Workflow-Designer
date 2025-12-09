import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { WorkflowProvider } from './context/WorkflowContext';
import { WorkflowCanvas } from './components/Canvas/WorkflowCanvas';
import { Sidebar } from './components/Canvas/Sidebar';
import { NodeEditorPanel } from './components/NodeEditor/NodeEditorPanel';
import './App.css';

function App() {
  return (
    <ReactFlowProvider>
      <WorkflowProvider>
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Sidebar />
          <div style={{ flex: 1, height: '100%', position: 'relative' }}>
            <WorkflowCanvas />
          </div>
          <NodeEditorPanel />
        </div>
      </WorkflowProvider>
    </ReactFlowProvider>
  );
}

export default App;
