import React, { useState } from 'react';
import { Scenario } from './types';

// --- Icons ---
function PlusIcon({ onClick }: { onClick: () => void }) {
    return (
      <button onClick={onClick} className="hover:opacity-70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
           <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#9D9D9D"/>
        </svg>
      </button>
    );
}
  
function TrashIcon({ onClick }: { onClick: () => void }) {
    return (
      <button onClick={onClick} className="hover:opacity-70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#9D9D9D"/>
        </svg>
      </button>
    );
}

interface CreateEditScenarioModalProps {
    initialData?: Scenario;
    onSave: (data: Scenario) => void;
    onCancel: () => void;
}

export function CreateEditScenarioModal({ initialData, onSave, onCancel }: CreateEditScenarioModalProps) {
    const [name, setName] = useState(initialData?.name || '');
    const [subScenario, setSubScenario] = useState(initialData?.subScenario || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [triggerConditions, setTriggerConditions] = useState(initialData?.triggerConditions || '');
    const [permissions, setPermissions] = useState(initialData?.permissions || '');
    const [commonKnowledge, setCommonKnowledge] = useState<string[]>(initialData?.commonKnowledge || ['']);

    const handleAddKnowledge = () => {
        setCommonKnowledge([...commonKnowledge, '']);
    };

    const handleRemoveKnowledge = (index: number) => {
        const newKnowledge = [...commonKnowledge];
        newKnowledge.splice(index, 1);
        setCommonKnowledge(newKnowledge);
    };

    const handleKnowledgeChange = (index: number, value: string) => {
        const newKnowledge = [...commonKnowledge];
        newKnowledge[index] = value;
        setCommonKnowledge(newKnowledge);
    };

    const handleSave = () => {
        onSave({
            id: initialData?.id || Date.now().toString(),
            name,
            subScenario,
            description,
            triggerConditions,
            permissions,
            commonKnowledge: commonKnowledge.filter(k => k.trim() !== ''),
            owner: initialData?.owner || 'CurrentUser',
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-[20px] w-[900px] max-h-[90vh] overflow-y-auto p-[40px] relative flex flex-col gap-[20px]">
                <h2 className="font-bold text-[32px] text-black">Create/Edit Scenario</h2>
                
                {/* Define Attributes */}
                <div className="flex flex-col gap-[15px] w-full">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Define Attributes</h3>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[180px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Scenario</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-[20px]">
                        <label className="w-[180px] text-[18px] font-light text-[#484848]"><span className="text-[#940000]">*</span>Sub-scenario</label>
                        <input 
                            className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full" 
                            value={subScenario} 
                            onChange={(e) => setSubScenario(e.target.value)}
                        />
                    </div>

                    <div className="flex items-start gap-[20px]">
                        <label className="w-[180px] text-[18px] font-normal text-[#484848] pt-2"><span className="text-[#940000]">*</span>Description</label>
                        <textarea 
                            className="border border-[#cfcfcf] rounded-[10px] h-[62px] px-3 py-2 w-full resize-none" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="flex items-start gap-[20px]">
                        <label className="w-[180px] text-[18px] font-normal text-[#484848] pt-2"><span className="text-[#940000]">*</span>Trigger Conditions</label>
                        <textarea 
                            className="border border-[#cfcfcf] rounded-[10px] h-[62px] px-3 py-2 w-full resize-none" 
                            value={triggerConditions} 
                            onChange={(e) => setTriggerConditions(e.target.value)}
                        />
                    </div>

                    <div className="flex items-start gap-[20px]">
                        <label className="w-[180px] text-[18px] font-normal text-[#484848] pt-2"><span className="text-[#940000]">*</span>Permission</label>
                        <textarea 
                            className="border border-[#cfcfcf] rounded-[10px] h-[62px] px-3 py-2 w-full resize-none" 
                            value={permissions} 
                            onChange={(e) => setPermissions(e.target.value)}
                        />
                    </div>
                </div>

                {/* Common Knowledge */}
                <div className="flex flex-col gap-[10px] w-full mt-4">
                    <h3 className="font-bold text-[24px] text-[#0009ad]">Common Knowledge</h3>
                    
                    <div className="flex flex-col gap-2">
                        {commonKnowledge.map((knowledge, index) => (
                            <div key={index} className="relative w-full">
                                <input 
                                    className="border border-[#cfcfcf] rounded-[10px] h-[39px] px-3 w-full pr-10" 
                                    value={knowledge} 
                                    onChange={(e) => handleKnowledgeChange(index, e.target.value)}
                                />
                                <div className="absolute right-2 top-2">
                                    <TrashIcon onClick={() => handleRemoveKnowledge(index)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2">
                         <PlusIcon onClick={handleAddKnowledge} />
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
