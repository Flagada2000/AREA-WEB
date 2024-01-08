import React from "react";
import { ActionUserInfo } from "@/types/types";

type Props = {
  className?: string;
  action: ActionUserInfo
};

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }

function MyActionCard({ action, className }: Props) {
  return (
    <div className="h-[319px] w-[319px] justify-center items-center gap-2.5 flex">
      <div className="grow basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <button className="hover:bg-slate-300 p-1 rounded-lg">
          <TrashIcon className="h-6 w-6 text-red-500" />
        </button>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
          {action.action.action_name}
        </div>
        <div className="self-stretch h-[0px] border border-blue-900"></div>
        <div className="self-stretch justify-start items-center inline-flex">
          <div className="justify-center items-center gap-[15px] flex">
            <img
              className="w-[50px] h-[50px] rounded-[5px]"
              src={action.service.icon_url}
            />
            <img
              className="w-[50px] h-[50px] rounded-[5px]"
              src="https://via.placeholder.com/50x50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyActionCard;
