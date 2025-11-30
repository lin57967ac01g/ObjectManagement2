import svgPaths from "./svg-5mr071d2b2";

function AddCircleOutline({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add_circle_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p10425500} fill="var(--fill-0, #323232)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute bg-white h-[60px] left-0 top-0 w-[1920px]" data-name="Title">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[60px] items-start justify-center overflow-clip pl-[50px] pr-[106px] py-[3px] relative rounded-[inherit] w-[1920px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0009ad] text-[32px] text-nowrap whitespace-pre">Flow Builder</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Play">
          <path d={svgPaths.pa912b80} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[1180px] overflow-clip p-[12px] rounded-[8px] top-[16px] w-[148px]" data-name="Button">
      <Play />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Run</p>
    </div>
  );
}

function FlowBlock() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[90px] px-[22px] py-[39px] rounded-[20px] top-[294px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Data source 1</p>
    </div>
  );
}

function FlowBlock1() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[440px] px-[22px] py-[39px] rounded-[20px] top-[402px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Data Process 1</p>
    </div>
  );
}

function FlowBlock2() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[776px] px-[22px] py-[39px] rounded-[20px] top-[334px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Judgment 1</p>
    </div>
  );
}

function FlowBlock3() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[90px] px-[22px] py-[39px] rounded-[20px] top-[510px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Data source 2</p>
    </div>
  );
}

function FlowBlock4() {
  return (
    <div className="absolute bg-[#e8e8e8] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[776px] px-[22px] py-[39px] rounded-[20px] top-[550px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Charting 1</p>
    </div>
  );
}

function FlowBlock5() {
  return (
    <div className="absolute bg-[#ffec9e] box-border content-stretch flex gap-[10px] h-[108px] items-center justify-center left-[1198px] px-[22px] py-[39px] rounded-[20px] top-[402px] w-[200px]" data-name="Flow Block">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">Report</p>
        <p>(only one)</p>
      </div>
    </div>
  );
}

function Save() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Save">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_4109)" id="Save">
          <path d={svgPaths.p3f4dfd00} id="Icon" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2_4109">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#cfcfcf] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[1388px] overflow-clip p-[12px] rounded-[8px] top-[16px] w-[148px]" data-name="Button">
      <Save />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#484848] text-[20px] text-nowrap whitespace-pre">Save</p>
    </div>
  );
}

function FlowCanvas() {
  return (
    <div className="absolute bg-white h-[1020px] left-[306px] top-[60px] w-[1614px]" data-name="Flow Canvas">
      <div className="box-border content-stretch flex gap-[10px] h-[1020px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[inherit] w-[1614px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre">untitled flow-01</p>
        <Button />
        <FlowBlock />
        <FlowBlock1 />
        <FlowBlock2 />
        <FlowBlock3 />
        <FlowBlock4 />
        <FlowBlock5 />
        <Button1 />
        <div className="absolute left-[256px] size-[30px] top-[21px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <g id="Vector">
              <path d={svgPaths.p26844d80} fill="var(--fill-0, #9D9D9D)" />
            </g>
          </svg>
        </div>
        <div className="absolute flex h-[104px] items-center justify-center left-[290px] top-[343px] w-[152px]" style={{ "--transform-inner-width": "184.171875", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[34.38deg]">
            <div className="h-0 relative w-[184.174px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.54%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 15">
                  <path d={svgPaths.p3d238f00} fill="var(--stroke-0, #9D9D9D)" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[143px] items-center justify-center left-[637px] top-[465px] w-[137px]" style={{ "--transform-inner-width": "198.03125", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[46.228deg]">
            <div className="h-0 relative w-[198.035px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.5%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 15">
                  <path d={svgPaths.p1aaf4c60} fill="var(--stroke-0, #9D9D9D)" id="Arrow 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[152.857px] items-center justify-center left-[968px] top-[460px] w-[230.021px]" style={{ "--transform-inner-width": "276.171875", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[326.394deg]">
            <div className="h-0 relative w-[276.179px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.36%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 278 15">
                  <path d={svgPaths.p2bb5b5c0} fill="var(--stroke-0, #9D9D9D)" id="Arrow 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[86px] items-center justify-center left-[976px] top-[374px] w-[222px]" style={{ "--transform-inner-width": "238.0625", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[21.176deg]">
            <div className="h-0 relative w-[238.076px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.42%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 15">
                  <path d={svgPaths.p309bb300} fill="var(--stroke-0, #9D9D9D)" id="Arrow 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[83px] items-center justify-center left-[640px] top-[382px] w-[137px]" style={{ "--transform-inner-width": "160.171875", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[328.791deg]">
            <div className="h-0 relative w-[160.181px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.62%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 15">
                  <path d={svgPaths.p3a6bed00} fill="var(--stroke-0, #9D9D9D)" id="Arrow 5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[102px] items-center justify-center left-[290px] top-[471px] w-[152px]" style={{ "--transform-inner-width": "183.046875", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[326.136deg]">
            <div className="h-0 relative w-[183.052px]">
              <div className="absolute bottom-[-7.36px] left-0 right-[-0.55%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 15">
                  <path d={svgPaths.p34f6ca00} fill="var(--stroke-0, #9D9D9D)" id="Arrow 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BlockContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Block Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[213px]">
        <p className="leading-[normal]">Data Source Block</p>
      </div>
      <AddCircleOutline className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

function AddBlockIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add Block Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_4084)" id="Add Block Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p3c33800} fill="var(--fill-0, #323232)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_4084">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlockContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Block Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[230px]">
        <p className="leading-[normal]">Data Process Block</p>
      </div>
      <AddBlockIcon />
    </div>
  );
}

function AddBlockIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add Block Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_4084)" id="Add Block Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p3c33800} fill="var(--fill-0, #323232)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_4084">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlockContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Block Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[198px]">
        <p className="leading-[normal]">Judgment Block</p>
      </div>
      <AddBlockIcon1 />
    </div>
  );
}

function AddBlockIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add Block Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_4084)" id="Add Block Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p3c33800} fill="var(--fill-0, #323232)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_4084">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlockContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Block Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[181px]">
        <p className="leading-[normal]">Charting Block</p>
      </div>
      <AddBlockIcon2 />
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

function Button2() {
  return (
    <div className="absolute bg-[#1d89ff] box-border content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[1130px] overflow-clip p-[12px] rounded-[8px] top-[16px] w-[198px]" data-name="Button">
      <Plus />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[20px] text-neutral-100 text-nowrap whitespace-pre">Create Flow</p>
    </div>
  );
}

function AddBlockIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add Block Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_4084)" id="Add Block Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p3c33800} fill="var(--fill-0, #323232)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_4084">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlockContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Block Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[163px]">
        <p className="leading-[normal]">Report Block</p>
      </div>
      <AddBlockIcon3 />
    </div>
  );
}

function AddingBlocks() {
  return (
    <div className="absolute bg-white h-[1020px] left-0 top-[60px] w-[306px]" data-name="Adding Blocks">
      <div className="box-border content-stretch flex flex-col h-[1020px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[inherit] w-[306px]">
        <BlockContainer />
        <BlockContainer1 />
        <BlockContainer2 />
        <BlockContainer3 />
        <Button2 />
        <BlockContainer4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function FlowBuilder() {
  return (
    <div className="bg-white relative size-full" data-name="Flow Builder">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center pb-[266px] pt-0 px-0 relative size-full">
        <Title />
        <FlowCanvas />
        <AddingBlocks />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}