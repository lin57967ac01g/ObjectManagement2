import React from 'react';
import svgPaths from "../imports/svg-xvibdd3m3d";

type View = 'scenario' | 'flow' | 'intention' | 'script' | 'diagnosis';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

function AiBook() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="ai-book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="ai-book">
          <path d={svgPaths.pc644100} id="Vector" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeWidth="3" />
          <path d={svgPaths.p3eb471d0} id="Vector_2" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeWidth="3" />
          <path d={svgPaths.p17434ac0} id="Vector_3" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeWidth="3" />
          <path d={svgPaths.p12f16904} id="Vector_4" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Frame">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p131320b0} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31ec4e80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p264c9700} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wysiwyg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[35px]" data-name="wysiwyg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.pb3ae400} fill="var(--fill-0, #323232)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="settings">
          <path d={svgPaths.p371bf300} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

export function Sidebar({ currentView, onChangeView }: SidebarProps) {
  const menuItemClass = (view: View) => 
    `box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px] cursor-pointer hover:bg-gray-100 ${currentView === view ? 'bg-gray-200' : ''}`;

  return (
    <div className="absolute bg-white h-[1020px] left-0 top-[60px] w-[320px] z-10 border-r border-[#cfcfcf]" data-name="Navigation bar">
      <div className="content-stretch flex flex-col h-[1020px] items-start justify-between overflow-clip relative rounded-[inherit] w-[320px]">
        {/* Normal User Section */}
        <div className="bg-white h-[400px] relative shrink-0 w-full" data-name="Normal User">
          <div className="content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[inherit] w-full">
            
            {/* Scenario (Diagnosis Script in Design, mapped to Scenario/Script context? Actually Diagnosis Script seems to be Script in prompt, but prompt says Scenario is top level. Design says 'Diagnosis Script', 'Intention', 'Flow Builder', 'Case History'.
               The prompt map:
               1. Scenario (Top Level) -> Maybe "Scenario Settings"
               2. Flow -> "Flow Builder"
               3. Intention -> "Intention"
               4. Script -> "Diagnosis Script" (Seems likely "Script" = "Diagnosis Script")
               
               Let's map them:
               Diagnosis Script -> script
               Intention -> intention
               Flow Builder -> flow
               Scenario Settings -> scenario
            */}
            
            <div className={menuItemClass('script')} onClick={() => onChangeView('script')}>
              <AiBook />
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Diagnosis Script</p>
            </div>

            <div className={menuItemClass('intention')} onClick={() => onChangeView('intention')}>
              <Frame />
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Intention</p>
            </div>

            <div className={menuItemClass('flow')} onClick={() => onChangeView('flow')}>
              <div className="relative shrink-0 size-[28px]" data-name="Icon">
                <div className="absolute inset-[-5.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
                    <path d={svgPaths.p31b48ff0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Flow Builder</p>
            </div>

            <div className={menuItemClass('case')} onClick={() => onChangeView('case')}>
              <div className="relative shrink-0 size-[30px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                  <path d={svgPaths.p1f056c80} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Case History</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-b border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Administrator Section */}
        <div className="h-[620px] relative shrink-0 w-full" data-name="Administrator">
          <div className="content-stretch flex flex-col h-[620px] items-start overflow-clip relative rounded-[inherit] w-full">
            <div className={menuItemClass('scenario')} onClick={() => onChangeView('scenario')}>
              <Wysiwyg />
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Scenario Settings</p>
            </div>
            
            <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px] cursor-pointer hover:bg-gray-100">
              <Settings />
              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Platform Settings</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-t border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
