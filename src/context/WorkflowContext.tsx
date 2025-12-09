import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useWorkflowStore } from '../hooks/useWorkflowStore';

type WorkflowContextType = ReturnType<typeof useWorkflowStore>;

const WorkflowContext = createContext<WorkflowContextType | null>(null);

export const WorkflowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const store = useWorkflowStore();
  return <WorkflowContext.Provider value={store}>{children}</WorkflowContext.Provider>;
};

export const useWorkflow = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within WorkflowProvider');
  }
  return context;
};
