import { Reaction } from "@/types/types";
import React from "react";

type ReactionCardCreationProps = {
    className?: string;
    reaction: Reaction;
  };

function ReactionCardCreation({reaction: reaction, className: className}: ReactionCardCreationProps) {
    return (
        <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <img className="w-6 h-6 rounded-[5px]" src="https://via.placeholder.com/24x24" />
              <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">{reaction.reaction_name}</div>
            </div>
            <div className="self-stretch text-slate-500 text-xs font-normal font-inter">{reaction.reaction_desc}</div>
            <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
              <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
            </button>
        </div>
    );
}

export default ReactionCardCreation;