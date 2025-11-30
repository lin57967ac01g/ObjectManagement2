import React, { useState } from 'react';
import { Scenario } from './types';
import { CreateEditScenarioModal } from './ScenarioModals';

interface ScenarioManagerProps {
    scenarios: Scenario[];
    onSave: (scenario: Scenario) => void;
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

function EditIcon({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
        </button>
    );
}

export function ScenarioManager({ scenarios, onSave }: ScenarioManagerProps) {
  const [modalMode, setModalMode] = useState<'none' | 'create' | 'edit'>('none');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | undefined>(undefined);

  // Handlers
  const handleCreate = () => {
      setSelectedScenario(undefined);
      setModalMode('create');
  };

  const handleEdit = (item: Scenario) => {
      setSelectedScenario(item);
      setModalMode('edit');
  };

  const handleSaveInternal = (data: Scenario) => {
      onSave(data);
      setModalMode('none');
  };

  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] right-0 bottom-0 w-[calc(100%-320px)] overflow-auto border-l border-[#cfcfcf]">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[30px] py-[20px] relative w-full">
        
        {/* Header */}
        <div className="flex justify-between w-full items-center">
            <p className="font-bold text-[32px] text-black">Scenario Management</p>
            <button 
                onClick={handleCreate}
                className="bg-[#1d89ff] flex gap-[8px] h-[43px] items-center justify-center px-[12px] rounded-[8px] hover:bg-blue-600 transition-colors"
            >
                <PlusIcon />
                <span className="text-[20px] text-neutral-100">Create Scenario</span>
            </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#cfcfcf] rounded-[4px] w-full flex flex-col mt-6">
            {/* Header */}
            <div className="grid grid-cols-[200px_200px_1fr_230px_190px] bg-[#e8e8e8] border-b border-[#cfcfcf] h-[55px]">
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Scenario</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Sub-scenario</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Description</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Owner</div>
                <div className="flex items-center px-3 text-[18px] text-[#484848] font-semibold">Action</div>
            </div>

            {/* Rows */}
            {scenarios.map((item) => (
                <div key={item.id} className="grid grid-cols-[200px_200px_1fr_230px_190px] border-b border-[#cfcfcf] min-h-[55px] hover:bg-gray-50">
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.name}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.subScenario}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] py-2">{item.description}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.owner}</div>
                    <div className="flex items-center px-3">
                        <EditIcon onClick={() => handleEdit(item)} />
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Modals */}
      {(modalMode === 'create' || modalMode === 'edit') && (
          <CreateEditScenarioModal 
            initialData={selectedScenario}
            onSave={handleSaveInternal}
            onCancel={() => setModalMode('none')}
          />
      )}

    </div>
  );
}
