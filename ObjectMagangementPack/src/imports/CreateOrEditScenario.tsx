import svgPaths from "./svg-pagc7fu4ey";

function Name() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Name">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <span className="text-[#940000]">*</span>
        <span className="text-[#484848]">Scenario</span>
      </p>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[584px]" data-name="Chart Group Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function DataSubject() {
  return (
    <div className="content-stretch flex gap-[20px] h-[39px] items-center relative shrink-0 w-[687px]" data-name="DataSubject">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#940000]">*</span>
          <span className="text-[#484848]">Sub-scenario</span>
        </p>
      </div>
      <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-[544px]" data-name="Tool Type Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Intention() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Intention">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#940000]">*</span>
          <span className="text-[#484848]">{`Description `}</span>
        </p>
      </div>
      <div className="bg-white h-[62px] relative rounded-[10px] shrink-0 w-[562px]" data-name="Intention Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Intention1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[688px]" data-name="Intention">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#940000]">*</span>
          <span className="text-[#484848]">{`Trigger Conditions `}</span>
        </p>
      </div>
      <div className="bg-white h-[62px] relative rounded-[10px] shrink-0 w-[502px]" data-name="Trigger Conditions Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Intention2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Intention">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#940000]">*</span>
          <span className="text-[#484848]">{`Permission `}</span>
        </p>
      </div>
      <div className="bg-white h-[62px] relative rounded-[10px] shrink-0 w-[511px]" data-name="Permission Input">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function AttributesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[342px] items-start overflow-clip relative shrink-0 w-[710px]" data-name="Attributes Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0009ad] text-[24px] text-nowrap tracking-[0.1px] whitespace-pre">Define Attributes</p>
      <Name />
      <DataSubject />
      <Intention />
      <Intention1 />
      <Intention2 />
    </div>
  );
}

function Add() {
  return (
    <div className="absolute left-[331px] size-[24px] top-[122px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6295)" id="Add">
          <g id="Vector"></g>
          <path d={svgPaths.p3c33800} fill="var(--fill-0, #9D9D9D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_6295">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Remove() {
  return (
    <div className="absolute left-[648px] size-[24px] top-[81px]" data-name="Remove">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6291)" id="Remove">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #9D9D9D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_6291">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Remove1() {
  return (
    <div className="absolute left-[648px] size-[24px] top-[42px]" data-name="Remove">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6291)" id="Remove">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #9D9D9D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_6291">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Remove2() {
  return (
    <div className="absolute left-[648px] size-[24px] top-[4px]" data-name="Remove">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6291)" id="Remove">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #9D9D9D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_6291">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Intention3() {
  return (
    <div className="h-[146px] relative shrink-0 w-[696px]" data-name="Intention">
      <div className="absolute bg-white border border-[#cfcfcf] border-solid h-[31px] left-[5px] rounded-[10px] top-0 w-[675px]" data-name="Knowledge Input" />
      <div className="absolute bg-white border border-[#cfcfcf] border-solid h-[31px] left-[5px] rounded-[10px] top-[38px] w-[675px]" data-name="Knowledge Input" />
      <div className="absolute bg-white border border-[#cfcfcf] border-solid h-[31px] left-[5px] rounded-[10px] top-[77px] w-[675px]" data-name="Knowledge Input" />
      <Add />
      <Remove />
      <Remove1 />
      <Remove2 />
    </div>
  );
}

function IntentionMappingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[252px] items-start overflow-clip relative shrink-0 w-full" data-name="Intention Mapping Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0009ad] text-[24px] text-nowrap tracking-[0.1px] whitespace-pre">Common Knowledge</p>
      <Intention3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[608px] overflow-clip p-[12px] rounded-[8px] top-[738px] w-[139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Save</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[439px] overflow-clip p-[12px] rounded-[8px] top-[738px] w-[139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#484848] text-[20px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

export default function CreateOrEditScenario() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Create or Edit Scenario">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[40px] py-[24px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Create/Edit Scenario</p>
          <AttributesContainer />
          <IntentionMappingContainer />
          <Button />
          <Button1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9d9d9d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}