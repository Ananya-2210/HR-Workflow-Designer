import React from 'react';
import { ApprovalNodeData } from '../../types/nodes';

interface Props {
  data: ApprovalNodeData;
  onChange: (data: Partial<ApprovalNodeData>) => void;
}

export const ApprovalNodeForm: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit Approval Node</h3>
      
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
          Approver Role
        </label>
        <select
          value={data.approverRole || ''}
          onChange={(e) => onChange({ approverRole: e.target.value })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="HRBP">HRBP</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
          <option value="CEO">CEO</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Auto-Approve Threshold
        </label>
        <input
          type="number"
          value={data.autoApproveThreshold || ''}
          onChange={(e) => onChange({ autoApproveThreshold: parseInt(e.target.value) })}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="e.g., 5000"
        />
        <small style={{ color: '#666', fontSize: '12px' }}>
          Auto-approve if amount is below this threshold
        </small>
      </div>
    </div>
  );
};
