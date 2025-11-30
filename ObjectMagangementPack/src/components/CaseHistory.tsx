import React from 'react';
import { Case } from './types';

// SVG Paths
const svgPaths = {
  eye: "M12.0938 12.0938C12.6633 11.5243 13.5867 11.5243 14.1562 12.0938L17.0729 15.0105C17.6424 15.58 17.6424 16.5033 17.0729 17.0729L14.1562 19.9895C13.5867 20.559 12.6633 20.559 12.0938 19.9895C11.5243 19.42 11.5243 18.4967 12.0938 17.9271L13.9793 16.0417L12.0938 14.1562C11.5243 13.5867 11.5243 12.6633 12.0938 12.0938ZM14 7.58333C18.4217 7.58333 22.365 10.0683 24.29 14C22.365 17.9317 18.4333 20.4167 14 20.4167C9.56667 20.4167 5.635 17.9317 3.71 14C5.635 10.0683 9.57833 7.58333 14 7.58333ZM14 5.25C8.16667 5.25 3.185 8.87833 1.16667 14C3.185 19.1217 8.16667 22.75 14 22.75C19.8333 22.75 24.815 19.1217 26.8333 14C24.815 8.87833 19.8333 5.25 14 5.25ZM14 11.0833C15.61 11.0833 16.9167 12.39 16.9167 14C16.9167 15.61 15.61 16.9167 14 16.9167C12.39 16.9167 11.0833 15.61 11.0833 14C11.0833 12.39 12.39 11.0833 14 11.0833ZM14 8.75C11.1067 8.75 8.75 11.1067 8.75 14C8.75 16.8933 11.1067 19.25 14 19.25C16.8933 19.25 19.25 16.8933 19.25 14C19.25 11.1067 16.8933 8.75 14 8.75Z"
};

interface CaseHistoryProps {
  cases: Case[];
  onViewCase: (caseItem: Case) => void;
}

function EyeIcon({ onClick }: { onClick: () => void }) {
    return (
      <button onClick={onClick} className="hover:opacity-70">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.eye} fill="#323232"/>
        </svg>
      </button>
    );
}

export function CaseHistory({ cases, onViewCase }: CaseHistoryProps) {
  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] right-0 bottom-0 w-[calc(100%-320px)] overflow-auto border-l border-[#cfcfcf]">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[30px] py-[20px] relative w-full">
            
            {/* Header */}
            <div className="flex justify-between w-full items-center mb-6">
                <p className="font-bold text-[32px] text-black">Case History</p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#cfcfcf] rounded-[4px] w-full flex flex-col">
                {/* Header */}
                <div className="grid grid-cols-[360px_1fr_230px_190px] bg-[#e8e8e8] border-b border-[#cfcfcf] h-[55px]">
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Case ID</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Scenario</div>
                    <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848] font-semibold">Status</div>
                    <div className="flex items-center px-3 text-[18px] text-[#484848] font-semibold">Action</div>
                </div>

                {/* Rows */}
                {cases.map((item) => (
                    <div key={item.id} className="grid grid-cols-[360px_1fr_230px_190px] border-b border-[#cfcfcf] min-h-[55px] hover:bg-gray-50">
                        <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.caseId}</div>
                        <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">
                            {item.scenario} | {item.subScenario}
                        </div>
                        <div className="border-r border-[#cfcfcf] flex items-center px-3 text-[18px] text-[#484848]">{item.status}</div>
                        <div className="flex items-center px-3 justify-start pl-6">
                            <EyeIcon onClick={() => onViewCase(item)} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  );
}
