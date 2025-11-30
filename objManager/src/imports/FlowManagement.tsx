import svgPaths from "./svg-xvibdd3m3d";

function Title() {
  return (
    <div className="absolute bg-white h-[60px] left-0 top-0 w-[1920px]" data-name="Title">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[60px] items-start justify-center overflow-clip pl-[50px] pr-[106px] py-[3px] relative rounded-[inherit] w-[1920px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0009ad] text-[32px] text-nowrap whitespace-pre">Object Manager</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
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

function DiagnosisScript() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Diagnosis Script">
      <AiBook />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Diagnosis Script</p>
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

function Intention() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Intention">
      <Frame />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Intention</p>
    </div>
  );
}

function FlowBuilder() {
  return (
    <div className="bg-[#e8e8e8] box-border content-stretch flex gap-[17px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Flow Builder">
      <div className="relative shrink-0 size-[28px]" data-name="Icon">
        <div className="absolute inset-[-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
            <path d={svgPaths.p31b48ff0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Flow Builder</p>
    </div>
  );
}

function CaseHistory() {
  return (
    <div className="box-border content-stretch flex gap-[15px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Case History">
      <div className="relative shrink-0 size-[30px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p1f056c80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Case History</p>
    </div>
  );
}

function NormalUser() {
  return (
    <div className="bg-white h-[400px] relative shrink-0 w-full" data-name="Normal User">
      <div className="content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[inherit] w-full">
        <DiagnosisScript />
        <Intention />
        <FlowBuilder />
        <CaseHistory />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
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

function ScenarioSettings() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Scenario Settings">
      <Wysiwyg />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Scenario Settings</p>
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

function PlatformSettings() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[80px] items-center px-[10px] py-0 relative shrink-0 w-[320px]" data-name="Platform Settings">
      <Settings />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Platform Settings</p>
    </div>
  );
}

function Administrator() {
  return (
    <div className="h-[620px] relative shrink-0 w-full" data-name="Administrator">
      <div className="content-stretch flex flex-col h-[620px] items-start overflow-clip relative rounded-[inherit] w-full">
        <ScenarioSettings />
        <PlatformSettings />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute bg-white h-[1020px] left-0 top-[60px] w-[320px]" data-name="Navigation bar">
      <div className="content-stretch flex flex-col h-[1020px] items-start justify-between overflow-clip relative rounded-[inherit] w-[320px]">
        <NormalUser />
        <Administrator />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
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

function Button() {
  return (
    <div className="absolute bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[1332px] overflow-clip p-[12px] rounded-[8px] top-[76px] w-[198px]" data-name="Button">
      <Plus />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Create Flow</p>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dropdown Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dropdown Icon">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SelectScenario() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[29px] items-center min-w-[120px] pl-[16px] pr-[12px] py-[12px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Select Scenario">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[18px]">Scenario 01</p>
      <DropdownIcon />
    </div>
  );
}

function DropdownIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dropdown Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dropdown Icon">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SelectSubScenario() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[29px] items-center min-w-[120px] pl-[16px] pr-[12px] py-[12px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Select Sub-Scenario">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[18px]">sub-scen01</p>
      <DropdownIcon1 />
    </div>
  );
}

function ScenarioSelection() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-center justify-center left-[30px] top-[79px] w-[404px]" data-name="Scenario Selection">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] w-[81px]">
        <p className="leading-[normal]">Scenario</p>
      </div>
      <SelectScenario />
      <SelectSubScenario />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Flow Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[360px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Flow Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[720px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[230px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[190px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[55px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Flow001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[360px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">flow des1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[720px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">KY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[230px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[190px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[55px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Flow002</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[360px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">flow des2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[720px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">TL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[230px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[190px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[55px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">Flow003</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[360px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content12 />
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">flow des3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[720px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">TL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[230px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">
            <p className="leading-[1.3]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[190px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[55px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white h-[220px] relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col h-[220px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <div className="absolute h-[140px] left-[1390px] top-[68px] w-[30px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 140">
            <g id="Vector">
              <path d={svgPaths.p3fa0ad80} fill="var(--fill-0, #323232)" />
              <path d={svgPaths.pf739800} fill="var(--fill-0, #323232)" />
              <path d={svgPaths.pf7c6200} fill="var(--fill-0, #323232)" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[139px] left-[1340px] top-[68px] w-[30px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 139">
            <g id="Vector">
              <path d={svgPaths.p26844d80} fill="var(--fill-0, #323232)" />
              <path d={svgPaths.p2b2ae100} fill="var(--fill-0, #323232)" />
              <path d={svgPaths.p35627780} fill="var(--fill-0, #323232)" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[788px] items-start left-[30px] top-[161px] w-[1500px]" data-name="Table 1">
      <Table />
    </div>
  );
}

function FlowManagement() {
  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] w-[1600px]" data-name="Flow Management">
      <div className="box-border content-stretch flex gap-[10px] h-[1020px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[inherit] w-[1600px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Flow Management</p>
        <Button />
        <ScenarioSelection />
        <Table1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function FlowManagement1() {
  return (
    <div className="bg-white relative size-full" data-name="Flow Management">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center pb-[266px] pt-0 px-0 relative size-full">
        <Title />
        <NavigationBar />
        <FlowManagement />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}