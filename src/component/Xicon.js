import React from "react";

export default function Xicon(props) {
  return (
    <div className="cross-icon">
      <div className={`line ${props.h?props.h:'h-1'} ${props.w?props.w:'w-4'} bg-[#32bdb6] mt-6 rotate-[45deg] rounded-sm`}></div>
      <div className={`line ${props.h?props.h:'h-1'} ${props.w?props.w:'w-4'} bg-[#32bdb6] mt-5 -rotate-[45deg] -translate-y-6 rounded-sm`}></div>
    </div>
  );
}
