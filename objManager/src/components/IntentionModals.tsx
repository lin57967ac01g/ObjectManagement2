import React, { useState, useEffect } from 'react';
import { Intention, Flow } from './types';
import { Button } from './ui/button';

// --- Icons ---
function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

// --- Common Components ---

function ScenarioSelector() {
    return (
        <div className="flex items-center gap-2">
             <div className="text-[18px] font-light text-[#1e1e1e] w-[81px]">Scenario</div>
             <div className="bg-white border border-[#d9d9d9] rounded-[8px] h-[29px] px-[12px] py-[12px] flex items-center gap-[8px] min-w-[156px]">
                 <span className="font-light text-[18px] text-[#1e1e1e] flex-grow">Scenario 01</span>
                 <DropdownIcon />
             </div>
             <div className="bg-white border border-[#d9d9d9] rounded-[8px] h-[29px] px-[12px] py-[12px] flex items-center gap-[8px] min-w-[156px]">
                 <span className="font-light text-[18px] text-[#1e1e1e] flex-grow">sub-scen01</span>
                 <DropdownIcon />
             </div>
        </div>
    );
}

// --- Create / Edit Modal ---

interface CreateEditIntentionModalProps {
    initialData?: Intention;
    flows: Flow[];
    onSave: (data: Intention) => void;
    onCancel: () => void;
}

export function CreateEditIntentionModal({ initialData, flows, onSave, onCancel }: CreateEditIntentionModalProps) {
    const [name, setName] = useState(initialData?.name || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [dataSubject, setDataSubject] = useState(initialData?.dataSubject || '');
    const [selectedFlowId, setSelectedFlowId] = useState(initialData?.flowId || '');

    const handleSave = () => {
        onSave({
            id: initialData?.id || Date.now().toString(),
            name,
            description,
            dataSubject,
            flowId: selectedFlowId,
            owner: initialData?.owner || 'CurrentUser', // Default owner
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-[20px] w-[900px] max-h-[90vh] overflow-y-auto p-[40px] relative flex flex-col gap-[20px]">
                <h2 className="font-bold text-[32px] text-black">Create/Edit Intention</h2>
                
                <ScenarioSelector />

                {/* Define Attributes */}
                <div className="flex flex-col gap-[20px] w-full">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Define Attributes</h3>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[100px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Name</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-start gap-[20px]">
                        <label className="w-[100px] text-[18px] font-normal text-[#484848] pt-2"><span className="text-[#940000]">*</span>Intention</label>
                        <textarea 
                            className="border border-[#cfcfcf] rounded-[10px] h-[123px] px-3 py-2 w-full resize-none" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <label className="w-[100px] text-[18px] font-normal text-[#484848]"><span className="text-[#940000]">*</span>Data Subject</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={dataSubject} 
                            onChange={(e) => setDataSubject(e.target.value)}
                        />
                    </div>
                </div>

                {/* Link to a Flow */}
                <div className="flex flex-col gap-[10px] w-full mt-4">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Link to a Flow</h3>
                    <p className="text-[18px] text-[#484848]"><span className="text-[#940000]">*</span>Select an Existing Flow</p>
                    
                    <div className="border border-[#cfcfcf] rounded-[4px] w-full">
                        {/* Header */}
                        <div className="flex bg-[#e8e8e8] h-[40px] border-b border-[#cfcfcf]">
                            <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Flow Name</div>
                            <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Flow Description</div>
                            <div className="w-[118px] flex items-center justify-center text-[18px] text-[#484848]">Select</div>
                        </div>
                        {/* Rows */}
                        <div className="max-h-[200px] overflow-y-auto bg-[#363636]">
                            {flows.map(flow => (
                                <div key={flow.id} className="flex bg-white border-b border-[#cfcfcf] h-[40px]">
                                    <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{flow.name}</div>
                                    <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{flow.description}</div>
                                    <div className="w-[118px] flex items-center justify-center">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedFlowId === flow.id} 
                                            onChange={() => setSelectedFlowId(flow.id)}
                                            className="w-[20px] h-[20px]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-[30px] mt-8">
                    <button onClick={onCancel} className="bg-[#e8e8e8] text-[#484848] text-[20px] px-8 py-2 rounded-[8px] w-[139px]">Cancel</button>
                    <button onClick={handleSave} className="bg-[#1d89ff] text-white text-[20px] px-8 py-2 rounded-[8px] w-[139px]">Save</button>
                </div>
            </div>
        </div>
    );
}

// --- Test Run Modal ---

interface TestRunModalProps {
    intentions: Intention[];
    flows: Flow[];
    onRun: (data: any) => void;
    onCancel: () => void;
}

export function TestRunModal({ intentions, flows, onRun, onCancel }: TestRunModalProps) {
    // Fields for Trigger Condition
    const [chartGroup, setChartGroup] = useState('');
    const [patternType, setPatternType] = useState('');
    const [toolType, setToolType] = useState('');
    const [timePeriod, setTimePeriod] = useState('');
    
    // Flow Selection
    const [selectedFlowId, setSelectedFlowId] = useState('');

    // Intention Selection
    const [question, setQuestion] = useState('');
    const [selectedIntentionId, setSelectedIntentionId] = useState('');

    const handleRun = () => {
        onRun({
            chartGroup,
            patternType,
            toolType,
            timePeriod,
            selectedFlowId,
            question,
            selectedIntentionId
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-[20px] w-[900px] max-h-[90vh] overflow-y-auto p-[40px] relative flex flex-col gap-[20px]">
                <h2 className="font-bold text-[32px] text-black">Flow Test Run</h2>
                
                <ScenarioSelector />

                {/* Trigger Condition */}
                <div className="flex flex-col gap-[15px] w-full">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Trigger Condition</h3>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Chart Group</label>
                        <input className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" value={chartGroup} onChange={e => setChartGroup(e.target.value)} />
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Pattern Type</label>
                        <input className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" value={patternType} onChange={e => setPatternType(e.target.value)} />
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-normal text-[#484848]"><span className="text-[#940000]">*</span>Tool Type</label>
                        <input className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" value={toolType} onChange={e => setToolType(e.target.value)} />
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-normal text-[#484848]"><span className="text-[#940000]">*</span>Time Period</label>
                        <input className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" value={timePeriod} onChange={e => setTimePeriod(e.target.value)} />
                    </div>
                </div>

                {/* Select a Flow */}
                <div className="flex flex-col gap-[10px] w-full mt-2">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Select a Flow</h3>
                    
                    <div className="border border-[#cfcfcf] rounded-[4px] w-full">
                         {/* Header */}
                         <div className="flex bg-[#e8e8e8] h-[40px] border-b border-[#cfcfcf]">
                            <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Flow Name</div>
                            <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Flow Description</div>
                            <div className="w-[100px] flex items-center justify-center text-[18px] text-[#484848]">Select</div>
                        </div>
                        {/* Rows */}
                        <div className="max-h-[150px] overflow-y-auto bg-white">
                            {flows.map(flow => (
                                <div key={flow.id} className="flex border-b border-[#cfcfcf] h-[40px]">
                                    <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{flow.name}</div>
                                    <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{flow.description}</div>
                                    <div className="w-[100px] flex items-center justify-center">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedFlowId === flow.id} 
                                            onChange={() => setSelectedFlowId(flow.id)}
                                            className="w-[20px] h-[20px]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Your Intention */}
                <div className="flex flex-col gap-[10px] w-full mt-2">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Your Intention</h3>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="text-[18px] font-normal text-[#484848] whitespace-nowrap">(option 1) Ask a question</label>
                        <input className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" value={question} onChange={e => setQuestion(e.target.value)} />
                    </div>

                    <p className="text-[18px] font-normal text-[#484848] mt-2">(option 2) Select from intention pool</p>
                    
                    <div className="border border-[#cfcfcf] rounded-[4px] w-full">
                         {/* Header */}
                         <div className="flex bg-[#e8e8e8] h-[40px] border-b border-[#cfcfcf]">
                            <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Name</div>
                            <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Intention</div>
                            <div className="w-[100px] flex items-center justify-center text-[18px] text-[#484848]">Select</div>
                        </div>
                        {/* Rows */}
                        <div className="max-h-[150px] overflow-y-auto bg-white">
                            {intentions
                                .filter(item => !selectedFlowId || item.flowId === selectedFlowId)
                                .map(item => (
                                <div key={item.id} className="flex border-b border-[#cfcfcf] h-[40px]">
                                    <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.name}</div>
                                    <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.description}</div>
                                    <div className="w-[100px] flex items-center justify-center">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedIntentionId === item.id} 
                                            onChange={() => setSelectedIntentionId(item.id)}
                                            className="w-[20px] h-[20px]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-[30px] mt-8 mb-4">
                    <button onClick={onCancel} className="bg-[#e8e8e8] text-[#484848] text-[20px] px-8 py-2 rounded-[8px] w-[139px]">Cancel</button>
                    <button onClick={handleRun} className="bg-[#1d89ff] text-white text-[20px] px-8 py-2 rounded-[8px] w-[139px]">Test Run</button>
                </div>
            </div>
        </div>
    );
}
