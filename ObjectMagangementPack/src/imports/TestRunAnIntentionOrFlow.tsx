function ScenarioDropdown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Scenario Dropdown">
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
      <ScenarioDropdown />
    </div>
  );
}

function SubScenarioDropdown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Sub-Scenario Dropdown">
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
      <SubScenarioDropdown />
    </div>
  );
}

function ScenarioSelection() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative shrink-0 w-[404px]" data-name="Scenario Selection">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] w-[81px]">
        <p className="leading-[normal]">Scenario</p>
      </div>
      <SelectScenario />
      <SelectSubScenario />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[659px]" data-name="Name">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <span className="text-[#940000]">*</span>
        <span className="text-[#484848]">Chart Group</span>
      </p>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[526px]" data-name="Chart Group Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Name">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <span className="text-[#940000]">*</span>
        <span className="text-[#484848]">Pattern Type</span>
      </p>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[522px]" data-name="Pattern Type Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function DataSubject() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[659px]" data-name="DataSubject">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#940000]">*</span>
          <span className="text-[#484848]">Tool Type</span>
        </p>
      </div>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[547px]" data-name="Tool Type Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function DataSubject1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[659px]" data-name="DataSubject">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#940000]">*</span>
          <span className="text-[#484848]">Time Period</span>
        </p>
      </div>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[528px]" data-name="Time Period Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function AttributesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[196px] items-start overflow-clip relative shrink-0 w-[722px]" data-name="Attributes Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0009ad] text-[24px] text-nowrap tracking-[0.1px] whitespace-pre">Trigger Condition</p>
      <Name />
      <Name1 />
      <DataSubject />
      <DataSubject1 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Flow Name</p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Flow Description</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Select</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function IntentionPoolRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Pool Row">
      <Cell />
      <Cell1 />
      <Cell2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Flow001</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">flow des1</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function IntentionPoolRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Pool Row">
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Flow002</p>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">flow des2</p>
        </div>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function IntentionPoolRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Pool Row">
      <Cell6 />
      <Cell7 />
      <Cell8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Flow003</p>
        </div>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">flow des3</p>
        </div>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function IntentionPoolRow3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Pool Row">
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-[#363636] relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <IntentionPoolRow />
        <IntentionPoolRow1 />
        <IntentionPoolRow2 />
        <IntentionPoolRow3 />
        <div className="absolute left-[621px] size-[20px] top-[52px]" data-name="Checkbox">
          <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute left-[621px] size-[20px] top-[91px]" data-name="Checkbox">
          <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute left-[621px] size-[20px] top-[129px]" data-name="Checkbox">
          <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col h-[162px] items-start relative shrink-0 w-full" data-name="Table 2">
      <Table />
    </div>
  );
}

function IntentionMappingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[722px]" data-name="Intention Mapping Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0009ad] text-[24px] text-nowrap tracking-[0.1px] whitespace-pre">Select a Flow</p>
      <Table2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[611px] overflow-clip p-[12px] rounded-[8px] top-[828px] w-[139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Test Run</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[444px] overflow-clip p-[12px] rounded-[8px] top-[828px] w-[139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#484848] text-[20px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function AskAQuestionContainer() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-[710px]" data-name="Ask a Question Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">(option 1) Ask a question</p>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[462px]" data-name="Ask a Question Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Name</p>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Intention</p>
        </div>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Select</p>
        </div>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content14 />
    </div>
  );
}

function IntentionRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Row">
      <Cell12 />
      <Cell13 />
      <Cell14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Intention001</p>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Accounting with 2026 financial plan</p>
        </div>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content16 />
    </div>
  );
}

function Content17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content17 />
    </div>
  );
}

function IntentionRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Row">
      <Cell15 />
      <Cell16 />
      <Cell17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Intention002</p>
        </div>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content18 />
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Business KPI summary</p>
        </div>
      </div>
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content20 />
    </div>
  );
}

function IntentionRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Row">
      <Cell18 />
      <Cell19 />
      <Cell20 />
    </div>
  );
}

function Content21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Intention003</p>
        </div>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[139px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content21 />
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#484848] text-[18px]">Technology development</p>
        </div>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[465px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content22 />
    </div>
  );
}

function Content23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[118px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function IntentionRow3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Row">
      <Cell21 />
      <Cell22 />
      <Cell23 />
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-[#363636] relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <IntentionRow />
        <IntentionRow1 />
        <IntentionRow2 />
        <IntentionRow3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-col h-[162px] items-start relative shrink-0 w-full" data-name="Table 2">
      <Table1 />
      <div className="absolute left-[621px] size-[20px] top-[52px]" data-name="Intention Checkbox">
        <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[621px] size-[20px] top-[91px]" data-name="Intention Checkbox">
        <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[621px] size-[20px] top-[129px]" data-name="Intention Checkbox">
        <div aria-hidden="true" className="absolute border-2 border-[#9d9d9d] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function IntentionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[274px] items-start overflow-clip relative shrink-0 w-[722px]" data-name="Intention Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0009ad] text-[24px] text-nowrap tracking-[0.1px] whitespace-pre">Your Intention</p>
      <AskAQuestionContainer />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">(option 2) Select from intention pool</p>
      <Table3 />
    </div>
  );
}

export default function TestRunAnIntentionOrFlow() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Test Run an Intention or Flow">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start overflow-clip px-[40px] py-[24px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Flow Test Run</p>
          <ScenarioSelection />
          <AttributesContainer />
          <IntentionMappingContainer />
          <Button />
          <Button1 />
          <IntentionContainer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9d9d9d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}