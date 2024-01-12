import React from "react";
import { ActionUserInfo } from "@/types/types";

type Props = {
  className?: string;
  action: ActionUserInfo;
  handleModif: (actionId: number) => void;
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

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg width="24" height="24" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="essential/edit">
      <path id="Vector"
      d="M32.8079 6.63938C33.5893 5.85825 34.6489 5.41943 35.7538 5.41943C36.8586 5.41943 37.9182 5.85825 38.6996 6.63938L43.8559 11.7956C44.2429 12.1826 44.55 12.642 44.7595 13.1476C44.969 13.6532 45.0768 14.1952 45.0768 14.7425C45.0768 15.2898 44.969 15.8318 44.7595 16.3374C44.55 16.843 44.2429 17.3024 43.8559 17.6894L19.0788 42.4665L5.78711 44.7081L8.03086 31.4165L32.8079 6.63938ZM32.3309 13.0081L37.4871 18.1644L40.91 14.7415L35.7538 9.58729L32.3309 13.0081ZM34.5392 21.1123L29.385 15.956L11.9184 33.4227L10.8704 39.6248L17.0725 38.579L34.5413 21.1102L34.5392 21.1123Z" fill="#5B78B5"/>
      </g>
      </svg>
    )
  }

function MyActionCard({ action, className, handleModif }: Props) {
  const handleEdit = () => {
    handleModif(action.id);
  };
  return (
    <div className="h-[319px] w-[319px] justify-center items-center gap-2.5 flex">
      <div className="grow basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div>
          <button className="hover:bg-slate-300 p-1 rounded-lg">
            <TrashIcon className="h-6 w-6 text-red-500" />
          </button>
          <button className="hover:bg-slate-300 p-1 rounded-lg"
          onClick={handleEdit}>
            <EditIcon className="h-6 w-6" />
          </button>
        </div>
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
