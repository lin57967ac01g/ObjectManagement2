export type View = 'scenario' | 'flow' | 'intention' | 'script' | 'case';

export interface Case {
  id: string;
  caseId: string;
  scenario: string;
  subScenario: string;
  status: 'Complete' | 'Processing';
}

export interface IntentionResult {
  id: string; // Intention ID
  name: string;
  description: string;
  summaryPoints: string[];
  resultSummary: string;
}


export interface Scenario {
  id: string;
  name: string; // Scenario
  subScenario: string;
  description: string;
  triggerConditions: string;
  permissions: string;
  commonKnowledge: string[];
  owner: string;
}

export interface FlowNode {
  id: string;
  type: 'dataSource' | 'dataProcess' | 'judgment' | 'charting' | 'report';
  label: string;
  x: number;
  y: number;
  data?: any; // Configuration data
}

export interface FlowEdge {
  source: string;
  target: string;
}

export interface Flow {
  id: string;
  name: string;
  description: string;
  owner: string;
  scenarioId?: string;
  subScenarioId?: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}

export interface Intention {
  id: string;
  name: string;
  description: string; // This maps to "Intention" column in design? Design has "Intention" column which seems to be description.
  flowId: string;
  dataSubject: string;
  owner: string;
}

export interface Script {
  id: string;
  chartGroup: string;
  patternType: string;
  toolType: string;
  owner: string;
  intentionIds: string[];
}
