import React from 'react';

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Object Manager" }: HeaderProps) {
  return (
    <div className="absolute bg-white h-[60px] left-0 top-0 w-full z-20 border-b border-[#cfcfcf]" data-name="Title">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[60px] items-start justify-center overflow-clip pl-[50px] pr-[106px] py-[3px] relative rounded-[inherit] w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0009ad] text-[32px] text-nowrap whitespace-pre">{title}</p>
      </div>
    </div>
  );
}
