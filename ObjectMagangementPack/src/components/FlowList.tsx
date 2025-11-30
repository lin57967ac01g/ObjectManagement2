import React from 'react';
import svgPaths from "../imports/svg-xvibdd3m3d";

export interface FlowData {
  id: string;
  name: string;
  description: string;
  owner: string;
}

interface FlowListProps {
  flows: FlowData[];
  onEdit: (id: string) => void;
  onRun: (id: string) => void;
  onCreate: () => void;
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function FlowList({ flows, onEdit, onRun, onCreate }: FlowListProps) {
  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] right-0 bottom-0 w-[calc(100%-320px)] overflow-auto border-l border-[#cfcfcf]" data-name="Flow Management">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[30px] py-[20px] relative w-full">
        
        {/* Header Row */}
        <div className="flex justify-between w-full items-center mb-4">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Flow Management</p>
          
          <div 
            onClick={onCreate}
            className="bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center px-[12px] rounded-[8px] cursor-pointer hover:bg-blue-600"
          >
            <Plus />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Create Flow</p>
          </div>
        </div>

        {/* Filters */}
        <div className="content-stretch flex h-[42px] items-center justify-start gap-4 mb-6 w-full">
            <div className="flex items-center gap-2">
                <span className="text-[18px] font-light">Scenario</span>
                <select className="border border-gray-300 rounded p-1 text-[18px] font-light min-w-[150px]">
                    <option>Scenario 01</option>
                </select>
            </div>
            <select className="border border-gray-300 rounded p-1 text-[18px] font-light min-w-[150px]">
                <option>sub-scen01</option>
            </select>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#cfcfcf] rounded-[4px] w-full flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-[300px_1fr_200px_150px] bg-[#e8e8e8] border-b border-[#cfcfcf] h-[55px]">
                <div className="border-r border-[#cfcfcf] flex items-center px-3 font-normal text-[#484848] text-[18px]">Flow Name</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 font-normal text-[#484848] text-[18px]">Flow Description</div>
                <div className="border-r border-[#cfcfcf] flex items-center px-3 font-normal text-[#484848] text-[18px]">Owner</div>
                <div className="flex items-center px-3 font-normal text-[#484848] text-[18px]">Action</div>
            </div>

            {/* Rows */}
            {flows.map((flow) => (
                <div key={flow.id} className="grid grid-cols-[300px_1fr_200px_150px] border-b border-[#cfcfcf] min-h-[55px] hover:bg-gray-50">
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 font-light text-black text-[18px]">{flow.name}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 font-light text-black text-[18px]">{flow.description}</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 font-light text-black text-[18px]">{flow.owner}</div>
                    <div className="flex items-center px-3 gap-4 text-[#323232]">
                        <button onClick={() => onEdit(flow.id)} className="hover:text-blue-600">
                            <EditIcon />
                        </button>
                        <button onClick={() => onRun(flow.id)} className="hover:text-green-600">
                            <PlayIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
