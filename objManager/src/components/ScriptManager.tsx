import React, { useState } from 'react';
import { Script, Intention, Flow } from './types';
import { CreateEditScriptModal } from './ScriptModals';
import { TestRunModal } from './IntentionModals';

// --- Mock Data ---
const initialScripts: Script[] = [
    { id: '1', chartGroup: 'chartgroup1', patternType: 'patterntype1', toolType: 'tooltype1', owner: 'KY', intentionIds: ['1'] },
    { id: '2', chartGroup: 'chartgroup2', patternType: 'patterntype12', toolType: 'tooltype1', owner: 'KY', intentionIds: ['2'] },
    { id: '3', chartGroup: 'chartgroup3', patternType: 'patterntype13', toolType: 'tooltype2', owner: 'TL', intentionIds: ['3'] },
];

interface ScriptManagerProps {
    intentions: Intention[];
    flows: Flow[];
    scripts: Script[];
    onSave: (script: Script) => void;
}

// --- Icons ---
function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M8 3.33333V12.6667M3.33333 8H12.6667" stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

function EditIcon({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
        </button>
    );
}

function PlayIcon({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
        </button>
    );
}

export function ScriptManager({ intentions, flows, scripts, onSave }: ScriptManagerProps) {
  const [modalMode, setModalMode] = useState<'none' | 'create' | 'edit' | 'run'>('none');
  const [selectedScript, setSelectedScript] = useState<Script | undefined>(undefined);

  // Handlers
  const handleCreate = () => {
      setSelectedScript(undefined);
      setModalMode('create');
  };

  const handleEdit = (item: Script) => {
      setSelectedScript(item);
      setModalMode('edit');
  };

  const handleRun = (item: Script) => {
      setSelectedScript(item);
      setModalMode('run');
  };

  const handleSaveInternal = (data: Script) => {
      onSave(data);
      setModalMode('none');
  };

  const handleRunSubmit = (data: any) => {
      console.log('Script Run Data:', data);
      alert('Test run started! Check console for data.');
      setModalMode('none');
  };

  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] right-0 bottom-0 w-[calc(100%-320px)] overflow-auto border-l border-[#cfcfcf]">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[30px] py-[20px] relative w-full">
        
        {/* Header */}
        <div className="flex justify-between w-full items-center">
            <p className="font-bold text-[32px] text-black">Diagnosis Script Management</p>
            <button 
                onClick={handleCreate}
                className="bg-[#1d89ff] flex gap-[8px] h-[43px] items-center justify-center px-[12px] rounded-[8px] hover:bg-blue-600 transition-colors"
            >
                <PlusIcon />
                <span className="text-[20px] text-neutral-100">Create Script</span>
            </button>
        </div>

        {/* Scenario Dropdowns */}
        <div className="flex items-center gap-4 mt-4 mb-6">
             <div className="text-[18px] font-light text-[#1e1e1e]">Scenario</div>
             <div className="bg-white border border-[#d9d9d9] rounded-[8px] h-[29px] px-[12px] py-[12px] flex items-center gap-[8px] min-w-[156px] cursor-pointer">
                 <span className="font-light text-[18px] text-[#1e1e1e] flex-grow">Scenario 01</span>
                 <DropdownIcon />
             </div>
             <div className="bg-white border border-[#d9d9d9] rounded-[8px] h-[29px] px-[12px] py-[12px] flex items-center gap-[8px] min-w-[156px] cursor-pointer">
                 <span className="font-light text-[18px] text-[#1e1e1e] flex-grow">sub-scen01</span>
                 <DropdownIcon />
             </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#cfcfcf] rounded-[4px] w-full flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_180px_150px] bg-[#e8e8e8] border-b border-[#cfcfcf] h-[55px]">
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Chart Group</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Pattern Type</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Tool Type</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Owner</div>
                <div className="flex items-center px-3 text-[18px] text-[#484848] font-semibold">Action</div>
            </div>

            {/* Rows */}
            {scripts.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_1fr_1fr_180px_150px] border-b border-[#cfcfcf] min-h-[55px] hover:bg-gray-50">
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.chartGroup}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.patternType}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.toolType}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.owner}</div>
                    <div className="flex items-center px-3 gap-4">
                        <EditIcon onClick={() => handleEdit(item)} />
                        <PlayIcon onClick={() => handleRun(item)} />
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Modals */}
      {(modalMode === 'create' || modalMode === 'edit') && (
          <CreateEditScriptModal 
            initialData={selectedScript}
            allIntentions={intentions}
            onSave={handleSaveInternal}
            onCancel={() => setModalMode('none')}
          />
      )}

      {modalMode === 'run' && (
          <TestRunModal 
            intentions={intentions}
            flows={flows}
            onRun={handleRunSubmit}
            onCancel={() => setModalMode('none')}
            // We could pre-fill data here if TestRunModal supports it. 
            // Currently it doesn't accept initialData, but we can assume for now it's a fresh run.
            // If needed, I would update TestRunModal to accept initialTriggerConditions.
          />
      )}

    </div>
  );
}
