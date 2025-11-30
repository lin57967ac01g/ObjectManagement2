import svgPaths from "./svg-psxbxjxpdf";

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

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-white h-[196px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
      </div>
      <ol className="[white-space-collapse:collapse] absolute block font-['Inter:Light',sans-serif] font-light leading-[0] left-[7px] list-decimal not-italic text-[24px] text-black text-nowrap top-[15px]" start="1">
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">summary point1</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">summary point2</span>
        </li>
        <li className="ms-[36px]">
          <span className="leading-[normal]">summary point3</span>
        </li>
      </ol>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[280px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[280px] items-start p-[20px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre">AI Text Summary</p>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[280px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[280px] items-start p-[20px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre">Data Table</p>
          <div className="bg-white h-[196px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[280px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[280px] items-start p-[20px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre">Chart</p>
          <div className="bg-white h-[196px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseView() {
  return (
    <div className="absolute bg-[rgba(232,232,232,0.5)] h-[1020px] left-0 top-[60px] w-[1094px]" data-name="Case View">
      <div className="box-border content-stretch flex flex-col gap-[20px] h-[1020px] items-start overflow-clip px-[35px] py-[20px] relative rounded-[inherit] w-[1094px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Intention002</p>
        <Frame2 />
        <Frame3 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[113px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] h-[113px] items-start leading-[normal] not-italic p-[20px] relative text-black w-full">
          <p className="relative shrink-0 text-[24px] text-nowrap whitespace-pre">Intention001</p>
          <p className="relative shrink-0 text-[16px] w-[247px]">Intention001 result</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9d9d9d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(29,137,255,0.1)] h-[113px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] h-[113px] items-start leading-[normal] not-italic p-[20px] relative text-black text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-[24px]">Intention002</p>
          <p className="relative shrink-0 text-[16px]">Intention002 result</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1d89ff] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[113px] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] h-[113px] items-start leading-[normal] not-italic p-[20px] relative text-black text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-[24px]">Intention003</p>
          <p className="relative shrink-0 text-[16px]">Intention003 result</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9d9d9d] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] h-[438px] items-start left-[30px] overflow-clip px-[15px] py-[10px] rounded-[20px] top-[83px] w-[612px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-black w-full">Diagnosis Script Result</p>
      <Frame8 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#edf0ff] box-border content-stretch flex flex-col gap-[10px] h-[65px] items-start left-[444px] overflow-clip p-[20px] rounded-[20px] top-[578px] w-[365px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">I want to know more about Intention002</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] h-[104px] items-start left-[30px] overflow-clip p-[20px] rounded-[20px] top-[667px] w-[612px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Here is the answer...</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group">
          <path d={svgPaths.p18200b80} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[701px] overflow-clip size-[30px] top-[23px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white h-[75px] left-[30px] top-[917px] w-[755px]">
      <div className="h-[75px] overflow-clip relative rounded-[inherit] w-[755px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-359.5px)] not-italic text-[#667085] text-[18px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
          <p className="leading-[30px] whitespace-pre">Write a messge</p>
        </div>
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CaseView1() {
  return (
    <div className="absolute bg-[#e8e8e8] h-[1020px] left-[1094px] top-[60px] w-[826px]" data-name="Case View">
      <div className="box-border content-stretch flex gap-[10px] h-[1020px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[inherit] w-[826px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">AI Chat</p>
        <Frame9 />
        <Frame10 />
        <Frame11 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function CaseAnalysisView() {
  return (
    <div className="bg-white relative size-full" data-name="Case Analysis View">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center pb-[266px] pt-0 px-0 relative size-full">
        <Title />
        <CaseView />
        <CaseView1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}