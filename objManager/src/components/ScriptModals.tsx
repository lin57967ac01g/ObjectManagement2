import React, { useState, useEffect } from 'react';
import { Script, Intention } from './types';

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

function TrashIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="hover:opacity-70">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#323232"/>
      </svg>
    </button>
  );
}

function PlusIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="hover:opacity-70">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
         <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#323232"/>
      </svg>
    </button>
  );
}

// --- Components ---

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

interface CreateEditScriptModalProps {
    initialData?: Script;
    allIntentions: Intention[];
    onSave: (data: Script) => void;
    onCancel: () => void;
}

export function CreateEditScriptModal({ initialData, allIntentions, onSave, onCancel }: CreateEditScriptModalProps) {
    const [chartGroup, setChartGroup] = useState(initialData?.chartGroup || '');
    const [patternType, setPatternType] = useState(initialData?.patternType || '');
    const [toolType, setToolType] = useState(initialData?.toolType || '');
    
    const [selectedIntentionIds, setSelectedIntentionIds] = useState<string[]>(initialData?.intentionIds || []);

    const handleAddIntention = (id: string) => {
        if (!selectedIntentionIds.includes(id)) {
            setSelectedIntentionIds([...selectedIntentionIds, id]);
        }
    };

    const handleRemoveIntention = (id: string) => {
        setSelectedIntentionIds(selectedIntentionIds.filter(i => i !== id));
    };

    const handleSave = () => {
        onSave({
            id: initialData?.id || Date.now().toString(),
            chartGroup,
            patternType,
            toolType,
            owner: initialData?.owner || 'CurrentUser',
            intentionIds: selectedIntentionIds
        });
    };

    // Derived lists
    const selectedIntentions = allIntentions.filter(i => selectedIntentionIds.includes(i.id));
    const poolIntentions = allIntentions.filter(i => !selectedIntentionIds.includes(i.id));

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-[20px] w-[900px] max-h-[90vh] overflow-y-auto p-[40px] relative flex flex-col gap-[20px]">
                <h2 className="font-bold text-[32px] text-black">Create/Edit Script</h2>
                
                <ScenarioSelector />

                {/* Trigger Condition */}
                <div className="flex flex-col gap-[20px] w-full">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Trigger Condition</h3>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Chart Group</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={chartGroup} 
                            onChange={(e) => setChartGroup(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Pattern Type</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={patternType} 
                            onChange={(e) => setPatternType(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <label className="w-[150px] text-[18px] font-normal text-[#484848]"><span className="text-[#940000]">*</span>Tool Type</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={toolType} 
                            onChange={(e) => setToolType(e.target.value)}
                        />
                    </div>
                </div>

                {/* Intention Mapping */}
                <div className="flex flex-col gap-[10px] w-full mt-4">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Intention Mapping</h3>
                    
                    {/* Selected Intentions */}
                    <p className="text-[18px] text-[#000000]">Selected Intentions</p>
                    <div className="border border-[#cfcfcf] rounded-[4px] w-full">
                         <div className="flex bg-[#e8e8e8] h-[40px] border-b border-[#cfcfcf]">
                            <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Name</div>
                            <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Intention</div>
                            <div className="w-[100px] flex items-center justify-center text-[18px] text-[#484848]">Action</div>
                        </div>
                        <div className="max-h-[150px] overflow-y-auto bg-white">
                             {selectedIntentions.length === 0 && <div className="p-3 text-gray-500 italic">No intentions selected</div>}
                             {selectedIntentions.map(item => (
                                <div key={item.id} className="flex border-b border-[#cfcfcf] h-[40px]">
                                    <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] truncate">{item.name}</div>
                                    <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] truncate">{item.description}</div>
                                    <div className="w-[100px] flex items-center justify-center">
                                        <TrashIcon onClick={() => handleRemoveIntention(item.id)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Intention Pool */}
                    <p className="text-[18px] text-[#000000] mt-2">Intention Pool</p>
                    <div className="border border-[#cfcfcf] rounded-[4px] w-full">
                         <div className="flex bg-[#e8e8e8] h-[40px] border-b border-[#cfcfcf]">
                            <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Name</div>
                            <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">Intention</div>
                            <div className="w-[100px] flex items-center justify-center text-[18px] text-[#484848]">Action</div>
                        </div>
                        <div className="max-h-[200px] overflow-y-auto bg-white">
                             {poolIntentions.length === 0 && <div className="p-3 text-gray-500 italic">No intentions available</div>}
                             {poolIntentions.map(item => (
                                <div key={item.id} className="flex border-b border-[#cfcfcf] h-[40px]">
                                    <div className="w-[200px] border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] truncate">{item.name}</div>
                                    <div className="flex-1 border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] truncate">{item.description}</div>
                                    <div className="w-[100px] flex items-center justify-center">
                                        <PlusIcon onClick={() => handleAddIntention(item.id)} />
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
