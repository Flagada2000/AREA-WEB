import React from "react";

type EditActionCardProps = {
  className?: string;
};

function EditActionCard ({ }: EditActionCardProps) {
    return (
        <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
          <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
            <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
              Titre compo
            </div>
          </div>
          <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
            <div className="grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
              tweet-author
            </div>
          </div>
        </div>
    );
}

export default EditActionCard;