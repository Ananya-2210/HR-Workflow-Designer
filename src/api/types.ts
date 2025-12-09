export interface AutomationAction {
  id: string;
  label: string;
  params: string[];
}

export interface SimulationStep {
  nodeId: string;
  nodeType: string;
  title: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface SimulationResult {
  success: boolean;
  steps: SimulationStep[];
  errors?: string[];
}
