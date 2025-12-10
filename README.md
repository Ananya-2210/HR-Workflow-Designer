# HR Workflow Designer

An enterprise-grade workflow design and simulation platform for human resources processes including onboarding, approvals, document verification, and compliance workflows. Built with React, TypeScript, React Flow, and Vite, featuring an intuitive interface with sophisticated visual design.

---

## Key Features

- **Interactive Workflow Canvas:** Design workflows using drag-and-drop functionality with Start, Task, Approval, Automated, and End nodes. Real-time visual feedback ensures intuitive workflow construction.
- **Component Library:** Streamlined sidebar with iconography for quick access to workflow building blocks. Supports both click-to-add and drag-and-drop interactions.
- **Dynamic Configuration Panel:** Context-sensitive editor for configuring node properties and metadata. All modifications apply in real-time.
- **Validation & Testing Suite:** Comprehensive structural validation, mock execution capabilities, and detailed logging for workflow verification.
- **Extensible Data Model:** Supports custom fields, metadata attributes, dynamic automation actions, and flexible workflow parameters.
- **Modern User Interface:** Professional design system with fluid animations and WCAG-compliant accessibility standards.

---

## Quick Start

### Installation
npm install

### Development Server
npm run dev


The application launches at `http://localhost:5173` with integrated API mocking via MSW.

### Optional: Standalone Mock Server
npm run api

Launches json-server on port 3001 for additional test data endpoints.

---

## User Guide

### Building Workflows

Add workflow components by dragging from the sidebar or clicking to place nodes directly on the canvas. Available node types include Start, Task, Approval, Automated, and End.

### Configuring Nodes

Select any node to access its configuration panel. Modify properties, add custom fields, and define automation rules with immediate visual feedback.

### Connecting Components

Create workflow sequences by drawing edges between nodes. The canvas provides intelligent connection points and validation.

### Testing & Validation

Access the Test Workflow panel to perform structural analysis, detect potential issues (cycles, disconnected nodes, missing termination points), and simulate execution with detailed logs.

---

## Architecture

### Core Components

- `src/components/Canvas` — Primary workspace and component palette
- `src/components/NodeEditor` — Configuration interfaces for all node types
- `src/components/nodes` — Visual node implementations
- `src/context/WorkflowContext.tsx` — Centralized state management
- `src/api` — Type definitions, mock handlers, and testing utilities

### Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Workflow Engine:** React Flow
- **API Mocking:** Mock Service Worker (MSW)
- **Icons:** react-icons
- **Styling:** Custom CSS with theming support

---

## Roadmap

### Planned Enhancements

- Workflow serialization with JSON import/export
- Backend integration for persistent storage
- Advanced node types supporting conditional logic and parallel execution
- Complex edge routing with custom conditions
- Integration adapters for enterprise HR platforms
- Collaborative editing capabilities
- Workflow versioning and audit trails

---

