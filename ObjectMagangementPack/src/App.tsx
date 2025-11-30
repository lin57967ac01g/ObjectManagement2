import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FlowList } from './components/FlowList';
import { FlowBuilderCanvas } from './components/FlowBuilderCanvas';
import { ReportConfiguration } from './components/ReportConfiguration';
import { ScenarioManager } from './components/ScenarioManager';
import { IntentionManager } from './components/IntentionManager';
import { ScriptManager } from './components/ScriptManager';
import { CaseHistory } from './components/CaseHistory';
import { CaseAnalysisView } from './components/CaseAnalysisView';
import { TestRunModal } from './components/IntentionModals';
import { Flow, FlowNode, FlowEdge, View, Intention, Case, IntentionResult, Scenario, Script } from './components/types';
import { api } from './services/api';

const dummyIntentionResults: IntentionResult[] = [
    { 
        id: '1', 
        name: 'Intention001', 
        description: 'Intention 1 Description',
        summaryPoints: ['No issues found.', 'Performance stable.'],
        resultSummary: 'Intention001 result',
        tableData: [],
        chartData: []
    },
    { 
        id: '2', 
        name: 'Intention002',
        description: 'Business KPI summary',
        resultSummary: 'Intention002 result',
        summaryPoints: ['summary point1', 'summary point2', 'summary point3'],
        tableData: [
            { metric: 'Revenue', value: '$10,000', change: '+5%' },
            { metric: 'Cost', value: '$5,000', change: '-2%' },
            { metric: 'Profit', value: '$5,000', change: '+12%' }
        ],
        chartData: [
            { name: 'Jan', value: 400 },
            { name: 'Feb', value: 300 },
            { name: 'Mar', value: 600 },
            { name: 'Apr', value: 800 },
            { name: 'May', value: 500 }
        ]
    },
    { 
        id: '3', 
        name: 'Intention003',
        description: 'Intention 3 Description',
        summaryPoints: ['Data processing complete.'],
        resultSummary: 'Intention003 result',
        tableData: [],
        chartData: []
    }
];

export default function App() {
  const [currentView, setCurrentView] = useState<string>('flow'); 
  
  // Data States
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [intentions, setIntentions] = useState<Intention[]>([]);
  const [flows, setFlows] = useState<Flow[]>([]);
  const [scripts, setScripts] = useState<Script[]>([]);
  const [cases, setCases] = useState<Case[]>([]);
  const [caseResults, setCaseResults] = useState<Record<string, IntentionResult[]>>({});

  const [editingFlowId, setEditingFlowId] = useState<string | null>(null);
  const [showReportConfig, setShowReportConfig] = useState(false);
  const [selectedReportNode, setSelectedReportNode] = useState<FlowNode | null>(null);
  const [showTestRunModal, setShowTestRunModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [lastModified, setLastModified] = useState<Record<string, number>>({});

  // Derived state
  const currentFlow = flows.find(f => f.id === editingFlowId);

  // Data Refresh Logic
  useEffect(() => {
      const checkForUpdates = async () => {
          try {
              const times = await api.getLastModified();
              let hasChanges = false;
              const resources = ['scenarios', 'intentions', 'flows', 'scripts', 'cases', 'case_results'];

              for (const r of resources) {
                  if (times[r] !== lastModified[r]) {
                      const data = await api.getAll(r);
                      switch(r) {
                          case 'scenarios': setScenarios(data); break;
                          case 'intentions': setIntentions(data); break;
                          case 'flows': setFlows(data); break;
                          case 'scripts': setScripts(data); break;
                          case 'cases': setCases(data); break;
                          case 'case_results': setCaseResults(data); break;
                      }
                      hasChanges = true;
                  }
              }
              
              if (hasChanges) {
                  setLastModified(times);
              }
          } catch (error) {
              console.error("Auto-refresh failed", error);
          }
      };

      // Initial load
      if (Object.keys(lastModified).length === 0) {
          checkForUpdates();
      }

      const interval = setInterval(checkForUpdates, 2000);
      return () => clearInterval(interval);
  }, [lastModified]);

  // Data Sync Handlers
  const handleSaveScenario = async (item: Scenario) => {
      const exists = scenarios.find(s => s.id === item.id);
      const newScenarios = exists 
          ? scenarios.map(s => s.id === item.id ? item : s)
          : [...scenarios, item];
      setScenarios(newScenarios);
      await api.saveAll('scenarios', newScenarios);
  };

  const handleSaveIntention = async (item: Intention) => {
      const exists = intentions.find(i => i.id === item.id);
      const newIntentions = exists
          ? intentions.map(i => i.id === item.id ? item : i)
          : [...intentions, item];
      setIntentions(newIntentions);
      await api.saveAll('intentions', newIntentions);
  };

  const handleSaveScript = async (item: Script) => {
      const exists = scripts.find(s => s.id === item.id);
      const newScripts = exists
          ? scripts.map(s => s.id === item.id ? item : s)
          : [...scripts, item];
      setScripts(newScripts);
      await api.saveAll('scripts', newScripts);
  };

  const updateFlow = async (id: string, updates: Partial<Flow>) => {
      const newFlows = flows.map(f => f.id === id ? { ...f, ...updates } : f);
      setFlows(newFlows);
      await api.saveAll('flows', newFlows);
  };

  // Handlers
  const handleViewChange = (view: View) => {
    if (view === 'flow') {
        setCurrentView('flow');
        setEditingFlowId(null);
    } else {
        setCurrentView(view);
    }
    setSelectedCase(null); 
  };

  const handleEditFlow = (id: string) => {
    setEditingFlowId(id);
    setCurrentView('flow-editor');
  };

  const handleRunFlow = (id: string) => {
    console.log('Running flow', id);
    setShowTestRunModal(true);
  };

  const handleCreateFlow = async () => {
    const newFlow: Flow = {
        id: Date.now().toString(),
        name: 'New Flow',
        description: 'New Description',
        owner: 'Me',
        nodes: [],
        edges: []
    };
    const newFlows = [...flows, newFlow];
    setFlows(newFlows);
    await api.saveAll('flows', newFlows);

    setEditingFlowId(newFlow.id);
    setCurrentView('flow-editor');
  };

  const handleAddNode = (type: string) => {
      if (!currentFlow) return;
      
      if (type === 'report' && currentFlow.nodes.some(n => n.type === 'report')) {
          alert('A flow can only have one Report block.');
          return;
      }

      const newNode: FlowNode = {
          id: Date.now().toString(),
          type: type as any,
          label: `${type} Block`,
          x: 100 + Math.random() * 50,
          y: 300 + Math.random() * 50
      };
      
      updateFlow(currentFlow.id, {
          nodes: [...currentFlow.nodes, newNode]
      });
  };

  const handleAddEdge = (sourceId: string, targetId: string) => {
      if (!currentFlow) return;
      // Prevent duplicate edges
      if (currentFlow.edges.some(e => e.source === sourceId && e.target === targetId)) return;
      // Prevent self-loops
      if (sourceId === targetId) return;

      const newEdges = [...currentFlow.edges, { source: sourceId, target: targetId }];
      updateFlow(currentFlow.id, { edges: newEdges });
  };

  const handleDeleteNode = (nodeId: string) => {
      if (!currentFlow) return;
      const newNodes = currentFlow.nodes.filter(n => n.id !== nodeId);
      const newEdges = currentFlow.edges.filter(e => e.source !== nodeId && e.target !== nodeId);
      updateFlow(currentFlow.id, { nodes: newNodes, edges: newEdges });
  };

  const handleDeleteEdge = (sourceId: string, targetId: string) => {
      if (!currentFlow) return;
      const newEdges = currentFlow.edges.filter(e => !(e.source === sourceId && e.target === targetId));
      updateFlow(currentFlow.id, { edges: newEdges });
  };

  const handleUpdateNodePosition = (nodeId: string, x: number, y: number) => {
      if (!currentFlow) return;
      const newNodes = currentFlow.nodes.map(n => n.id === nodeId ? { ...n, x, y } : n);
      updateFlow(currentFlow.id, { nodes: newNodes });
  };

  const handleSelectNode = (node: FlowNode) => {
      // No-op or just selection logic, handled by canvas state
  };

  const handleConfigureNode = (node: FlowNode) => {
      if (node.type === 'report') {
          setSelectedReportNode(node);
          setShowReportConfig(true);
      }
  };

  const handleSaveReportConfig = (data: any) => {
      if (!currentFlow || !selectedReportNode) return;
      
      const newNodes = currentFlow.nodes.map(n => 
          n.id === selectedReportNode.id ? { ...n, data } : n
      );
      updateFlow(currentFlow.id, { 
          nodes: newNodes,
          description: data.description 
      });
      setShowReportConfig(false);
      setSelectedReportNode(null);
  };

  const renderContent = () => {
      switch(currentView) {
          case 'scenario':
              return <ScenarioManager scenarios={scenarios} onSave={handleSaveScenario} />;
          case 'intention':
              return <IntentionManager intentions={intentions} flows={flows} onSave={handleSaveIntention} />;
          case 'script':
              return <ScriptManager intentions={intentions} flows={flows} scripts={scripts} onSave={handleSaveScript} />;
          case 'case':
              if (selectedCase) {
                  return <CaseAnalysisView 
                    caseId={selectedCase.caseId}
                    intentions={caseResults[selectedCase.id] || []}
                    onBack={() => setSelectedCase(null)}
                    initialMessages={[
                        { id: '0', sender: 'user', text: 'I want to know more about Intention002' }
                    ]}
                  />;
              }
              return <CaseHistory cases={cases} onViewCase={(c) => setSelectedCase(c)} />;
          case 'flow':
              return <FlowList 
                  flows={flows} 
                  onEdit={handleEditFlow} 
                  onRun={handleRunFlow}
                  onCreate={handleCreateFlow}
              />;
          case 'flow-editor':
              if (!currentFlow) return <div>Flow not found</div>;
              return <FlowBuilderCanvas 
                  nodes={currentFlow.nodes}
                  edges={currentFlow.edges}
                  onAddNode={handleAddNode}
                  onSelectNode={handleSelectNode}
                  onConfigureNode={handleConfigureNode}
                  onUpdateNodePosition={handleUpdateNodePosition}
                  onAddEdge={handleAddEdge}
                  onDeleteNode={handleDeleteNode}
                  onDeleteEdge={handleDeleteEdge}
                  onSave={() => setCurrentView('flow')}
                  onRun={() => alert('Running flow in editor')}
                  onBack={() => setCurrentView('flow')}
                  flowName={currentFlow.name}
                  onRenameFlow={(newName) => updateFlow(currentFlow.id, { name: newName })}
              />;
          default:
              return <div className="p-8 ml-[320px] mt-[60px]">Select a view</div>;
      }
  };

  return (
    <div className="w-full h-screen bg-gray-100 overflow-hidden relative font-sans">
      <Header />
      <Sidebar 
        currentView={currentView.startsWith('flow') ? 'flow' : currentView as View} 
        onChangeView={handleViewChange} 
      />
      
      {renderContent()}

      {showReportConfig && selectedReportNode && (
          <ReportConfiguration 
            initialData={selectedReportNode.data}
            availableSources={
                currentFlow 
                ? currentFlow.edges
                    .filter(e => e.target === selectedReportNode.id)
                    .map(e => currentFlow.nodes.find(n => n.id === e.source))
                    .filter((n): n is FlowNode => !!n)
                    .map(n => ({ id: n.id, label: n.label }))
                : []
            }
            onSave={handleSaveReportConfig}
            onCancel={() => setShowReportConfig(false)}
          />
      )}

      {showTestRunModal && (
          <TestRunModal 
            intentions={intentions}
            flows={flows}
            onRun={(data) => {
                console.log('Running flow with data:', data);
                alert('Test run started!');
                setShowTestRunModal(false);
            }}
            onCancel={() => setShowTestRunModal(false)}
          />
      )}
    </div>
  );
}
