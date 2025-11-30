import React, { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-5mr071d2b2";
import { FlowNode, FlowEdge } from './types';

// --- Icons ---

function AddCircleOutline({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add_circle_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p10425500} fill="var(--fill-0, #323232)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SidebarBlock({ label, onClick }: { label: string, onClick: () => void }) {
    return (
        <div className="content-stretch flex items-center relative shrink-0 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={onClick}>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black w-[200px]">
                <p className="leading-[normal]">{label}</p>
            </div>
            <AddCircleOutline className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
    )
}

function EditIcon({ onClick, className }: { onClick: () => void, className?: string }) {
    return (
        <button onClick={(e) => { e.stopPropagation(); onClick(); }} className={`hover:opacity-70 p-1 bg-white rounded-full shadow-sm border border-gray-200 ${className}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
        </button>
    );
}

// --- Node Component ---

interface NodeBlockProps {
    node: FlowNode;
    isSelected: boolean;
    onClick: () => void;
    onConfigure: () => void;
    onMouseDown: (e: React.MouseEvent) => void;
    onHandleMouseDown: (e: React.MouseEvent, nodeId: string, type: 'source' | 'target') => void;
    onHandleMouseUp: (e: React.MouseEvent, nodeId: string, type: 'source' | 'target') => void;
}

const NodeBlock = ({ node, isSelected, onClick, onConfigure, onMouseDown, onHandleMouseDown, onHandleMouseUp }: NodeBlockProps) => {
    const isReport = node.type === 'report';
    const bgClass = isReport ? 'bg-[#ffec9e]' : 'bg-[#e8e8e8]';
    
    return (
        <div 
            className={`absolute ${bgClass} box-border flex gap-[10px] h-[108px] items-center justify-center px-[22px] py-[39px] rounded-[20px] w-[200px] cursor-move select-none ${isSelected ? 'border-2 border-blue-500' : 'border border-[#cfcfcf]'}`}
            style={{ left: node.x, top: node.y }}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            onMouseDown={onMouseDown}
        >
            <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">
                {node.type === 'report' ? (
                    <>
                        <p className="mb-0">Report</p>
                        <p className="text-sm">(only one)</p>
                    </>
                ) : (
                    node.label
                )}
            </div>

            {/* Configure Button (Report Only) */}
            {isReport && (
                <div className="absolute top-[-10px] right-[-10px]">
                    <EditIcon onClick={onConfigure} />
                </div>
            )}

            {/* Handles */}
            {/* Input Handle (Left) */}
            <div 
                className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 cursor-crosshair"
                onMouseDown={(e) => onHandleMouseDown(e, node.id, 'target')}
                onMouseUp={(e) => onHandleMouseUp(e, node.id, 'target')}
            />
            
            {/* Output Handle (Right) */}
            <div 
                className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 cursor-crosshair"
                onMouseDown={(e) => onHandleMouseDown(e, node.id, 'source')}
                onMouseUp={(e) => onHandleMouseUp(e, node.id, 'source')}
            />
        </div>
    );
}

// --- Main Component ---

interface FlowBuilderCanvasProps {
    nodes: FlowNode[];
    edges: FlowEdge[];
    onAddNode: (type: string) => void;
    onSelectNode: (node: FlowNode) => void;
    onConfigureNode: (node: FlowNode) => void;
    onUpdateNodePosition: (id: string, x: number, y: number) => void;
    onAddEdge: (source: string, target: string) => void;
    onDeleteNode: (id: string) => void;
    onDeleteEdge: (source: string, target: string) => void;
    onSave: () => void;
    onRun: () => void;
    onBack: () => void;
    flowName: string;
    onRenameFlow: (newName: string) => void;
}

export function FlowBuilderCanvas({ 
    nodes, edges, onAddNode, onSelectNode, onConfigureNode, onUpdateNodePosition, onAddEdge, onDeleteNode, onDeleteEdge, onSave, onRun, onBack, flowName, onRenameFlow
}: FlowBuilderCanvasProps) {
    const canvasRef = useRef<HTMLDivElement>(null);

    // State
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [selectedEdge, setSelectedEdge] = useState<{ source: string, target: string } | null>(null);
    const [isEditingName, setIsEditingName] = useState(false);
    const [tempName, setTempName] = useState(flowName);

    // Dragging State
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // Connection State
    const [connectingStart, setConnectingStart] = useState<{ nodeId: string, type: 'source' | 'target' } | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setTempName(flowName);
    }, [flowName]);

    // Delete Key Handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                // Don't delete if editing text
                if (isEditingName) return;

                if (selectedNodeId) {
                    onDeleteNode(selectedNodeId);
                    setSelectedNodeId(null);
                } else if (selectedEdge) {
                    onDeleteEdge(selectedEdge.source, selectedEdge.target);
                    setSelectedEdge(null);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedNodeId, selectedEdge, isEditingName, onDeleteNode, onDeleteEdge]);

    const handleNameSave = () => {
        if (tempName.trim()) {
            onRenameFlow(tempName);
        } else {
            setTempName(flowName); // Revert if empty
        }
        setIsEditingName(false);
    };

    // --- Mouse Handlers ---

    const getRelativePos = (e: React.MouseEvent) => {
        if (!canvasRef.current) return { x: 0, y: 0 };
        const rect = canvasRef.current.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleNodeMouseDown = (e: React.MouseEvent, node: FlowNode) => {
        if (connectingStart) return; // Don't drag node if connecting
        e.stopPropagation(); // Prevent canvas drag
        const pos = getRelativePos(e);
        setDraggingId(node.id);
        setDragOffset({
            x: pos.x - node.x,
            y: pos.y - node.y
        });
        setSelectedNodeId(node.id);
        onSelectNode(node);
        setSelectedEdge(null); // Deselect edge
    };

    const handleHandleMouseDown = (e: React.MouseEvent, nodeId: string, type: 'source' | 'target') => {
        e.stopPropagation();
        e.preventDefault(); // Prevent text selection
        if (type === 'source') {
            setConnectingStart({ nodeId, type });
            const pos = getRelativePos(e);
            setMousePos(pos);
        }
    };

    const handleHandleMouseUp = (e: React.MouseEvent, nodeId: string, type: 'source' | 'target') => {
        e.stopPropagation();
        if (connectingStart && connectingStart.nodeId !== nodeId) {
            // Valid connection? (Source -> Target)
            if (connectingStart.type === 'source' && type === 'target') {
                onAddEdge(connectingStart.nodeId, nodeId);
            }
        }
        setConnectingStart(null);
    };

    const handleCanvasMouseMove = (e: React.MouseEvent) => {
        const pos = getRelativePos(e);
        
        if (draggingId) {
            onUpdateNodePosition(draggingId, pos.x - dragOffset.x, pos.y - dragOffset.y);
        }

        if (connectingStart) {
            setMousePos(pos);
        }
    };

    const handleCanvasMouseUp = () => {
        setDraggingId(null);
        setConnectingStart(null);
    };

    const handleCanvasClick = () => {
        setSelectedNodeId(null);
        setSelectedEdge(null);
    };

    return (
        <div className="flex h-full relative top-[60px] left-[320px] w-[calc(100%-320px)] bg-white border-l border-[#cfcfcf]" onMouseMove={handleCanvasMouseMove} onMouseUp={handleCanvasMouseUp}>
            {/* Sidebar for adding blocks */}
            <div className="w-[306px] border-r border-[#cfcfcf] p-4 flex flex-col gap-2 bg-white h-[1020px] z-10">
                <h3 className="font-bold text-lg mb-4">Adding Blocks</h3>
                <SidebarBlock label="Data Source Block" onClick={() => onAddNode('dataSource')} />
                <SidebarBlock label="Data Process Block" onClick={() => onAddNode('dataProcess')} />
                <SidebarBlock label="Judgment Block" onClick={() => onAddNode('judgment')} />
                <SidebarBlock label="Charting Block" onClick={() => onAddNode('charting')} />
                <div className="h-4" />
                <SidebarBlock label="Report Block" onClick={() => onAddNode('report')} />
            </div>

            {/* Canvas */}
            <div 
                className="flex-1 relative bg-white overflow-hidden cursor-default" 
                ref={canvasRef}
                onClick={handleCanvasClick}
            >
                <div className="absolute top-4 left-4 font-bold text-2xl flex items-center gap-2 z-20 pointer-events-none">
                    <div className="pointer-events-auto">
                    {isEditingName ? (
                        <div className="flex items-center gap-2">
                            <input 
                                type="text" 
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                onBlur={handleNameSave}
                                onKeyDown={(e) => e.key === 'Enter' && handleNameSave()}
                                className="border border-blue-500 rounded px-2 py-1 text-2xl font-bold outline-none bg-white"
                                autoFocus
                            />
                        </div>
                    ) : (
                        <>
                            {flowName}
                            <span 
                                className="text-gray-400 text-sm cursor-pointer hover:text-gray-600 ml-2"
                                onClick={() => setIsEditingName(true)}
                            >
                                ✎
                            </span>
                        </>
                    )}
                    </div>
                </div>

                <div className="absolute top-4 right-4 flex gap-4 z-20 pointer-events-none">
                     <button onClick={onRun} className="pointer-events-auto bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
                        <span>▶</span> Run
                     </button>
                     <button onClick={onSave} className="pointer-events-auto bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300">
                        <span>💾</span> Save
                     </button>
                </div>

                {/* SVG Layer for Edges */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full z-0">
                   <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#9D9D9D" />
                        </marker>
                        <marker id="arrowhead-selected" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                    </defs>

                   {/* Existing Edges */}
                   {edges.map((edge, i) => {
                       const source = nodes.find(n => n.id === edge.source);
                       const target = nodes.find(n => n.id === edge.target);
                       if (!source || !target) return null;
                       
                       const isSelected = selectedEdge && selectedEdge.source === edge.source && selectedEdge.target === edge.target;
                       const strokeColor = isSelected ? "#3b82f6" : "#9D9D9D";
                       const marker = isSelected ? "url(#arrowhead-selected)" : "url(#arrowhead)";

                       return (
                           <g key={i} className="pointer-events-auto cursor-pointer" onClick={(e) => { e.stopPropagation(); setSelectedEdge(edge); setSelectedNodeId(null); }}>
                               {/* Invisible thick line for easier clicking */}
                               <line 
                                    x1={source.x + 200} y1={source.y + 54} 
                                    x2={target.x} y2={target.y + 54} 
                                    stroke="transparent" strokeWidth="15" 
                               />
                               {/* Visible line */}
                               <line 
                                    x1={source.x + 200} y1={source.y + 54} 
                                    x2={target.x} y2={target.y + 54} 
                                    stroke={strokeColor} strokeWidth={isSelected ? "3" : "2"} 
                                    markerEnd={marker}
                               />
                           </g>
                       )
                   })}

                   {/* Temp Edge (Dragging) */}
                   {connectingStart && (() => {
                       const source = nodes.find(n => n.id === connectingStart.nodeId);
                       if (!source) return null;
                       return (
                           <line 
                                x1={source.x + 200} y1={source.y + 54} 
                                x2={mousePos.x} y2={mousePos.y} 
                                stroke="#9D9D9D" strokeWidth="2" strokeDasharray="5,5"
                                markerEnd="url(#arrowhead)"
                           />
                       );
                   })()}
                </svg>

                {/* Nodes Layer */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {nodes.map(node => (
                        <div key={node.id} className="pointer-events-auto inline-block">
                            <NodeBlock 
                                node={node} 
                                isSelected={selectedNodeId === node.id} 
                                onClick={() => {
                                    setSelectedNodeId(node.id);
                                    onSelectNode(node);
                                    setSelectedEdge(null);
                                }}
                                onConfigure={() => onConfigureNode(node)}
                                onMouseDown={(e) => handleNodeMouseDown(e, node)}
                                onHandleMouseDown={handleHandleMouseDown}
                                onHandleMouseUp={handleHandleMouseUp}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
