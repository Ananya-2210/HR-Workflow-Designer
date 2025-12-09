import { http, HttpResponse } from 'msw';
import { AutomationAction, SimulationResult } from './types';

const automations: AutomationAction[] = [
  { id: 'send_email', label: 'Send Email', params: ['to', 'subject', 'body'] },
  { id: 'generate_doc', label: 'Generate Document', params: ['template', 'recipient'] },
  { id: 'send_slack', label: 'Send Slack Message', params: ['channel', 'message'] },
  { id: 'create_ticket', label: 'Create Ticket', params: ['priority', 'description'] }
];

export const handlers = [
  http.get('/api/automations', () => {
    return HttpResponse.json(automations);
  }),

  http.post('/api/simulate', async ({ request }) => {
    const workflow = await request.json();
    
    // Simple simulation logic
    const result: SimulationResult = {
      success: true,
      steps: workflow.nodes.map((node: any, index: number) => ({
        nodeId: node.id,
        nodeType: node.type,
        title: node.data.title,
        status: 'completed'
      }))
    };
    
    return HttpResponse.json(result);
  })
];
