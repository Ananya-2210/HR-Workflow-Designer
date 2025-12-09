import { useState, useCallback } from 'react';
import { addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import type { Node, Edge, Connection, NodeChange, EdgeChange } from 'reactflow';
import type { WorkflowNodeData } from '../types/nodes';
export const useWorkflowStore = () => {
  const [nodes, setNodes] = useState<Node<WorkflowNodeData>[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const addNode = useCallback((type: string, position: { x: number; y: number } = { x: 250, y: 250 }) => {
    const nodeId = `${type}-${Date.now()}`;
    let nodeData: WorkflowNodeData;

    // Create proper typed data based on node type
    switch (type) {
      case 'start':
        nodeData = { id: nodeId, type: 'start', title: 'Start Node', metadata: {} };
        break;
      case 'task':
        nodeData = { id: nodeId, type: 'task', title: 'Task Node' };
        break;
      case 'approval':
        nodeData = { id: nodeId, type: 'approval', title: 'Approval Node' };
        break;
      case 'automated':
        nodeData = { id: nodeId, type: 'automated', title: 'Automated Step' };
        break;
      case 'end':
        nodeData = { id: nodeId, type: 'end', title: 'End Node' };
        break;
      default:
        nodeData = { id: nodeId, type: 'task', title: 'Task Node' };
    }

    const newNode: Node<WorkflowNodeData> = {
      id: nodeId,
      type,
      position,
      data: nodeData
    };
    
    setNodes((nds) => [...nds, newNode]);
  }, []);

  const updateNodeData = useCallback((nodeId: string, data: Partial<WorkflowNodeData>) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      )
    );
  }, []);

  const deleteNode = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  }, []);

  return {
    nodes,
    edges,
    selectedNode,
    setSelectedNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    updateNodeData,
    deleteNode
  };
};
