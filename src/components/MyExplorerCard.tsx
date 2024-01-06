import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type MyExplorerCardProps = {
    className?: string;
  };

function MyExplorerCard({}: MyExplorerCardProps) {
    return (
        <div className="grow shrink basis-0 h-[319px] justify-center items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="justify-center items-center gap-[15px] flex">
              <img
                className="w-[50px] h-[50px] rounded-[5px]"
                src="https://via.placeholder.com/50x50"
              />
              <img
                className="w-[50px] h-[50px] rounded-[5px]"
                src="https://via.placeholder.com/50x50"
              />
            </div>
          </div>
          <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
            Nouveau tweet compo
          </div>
          <div className="self-stretch h-[0px] border border-blue-900"></div>
          <div className="self-stretch justify-between items-center inline-flex">
            <button
              className="h-[50px] px-[30px] py-2.5 bg-blue-900 rounded-[999px] justify-between items-center flex hover:bg-blue-400"
              style={{ gap: "15px" }}
            >
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-blue-100 transform"
                  />
                </div>
              </div>
              <div className="text-blue-100 text-xl font-semibold font-inter leading-[30px]">
                Ajouter
              </div>
            </button>
          </div>
        </div>
      </div>
    );
}

export default MyExplorerCard;