import React from "react";

type CreateActionCardProps = {
  className?: string;
};

function CreateActionCard({}: CreateActionCardProps) {
  return (
    <div className="w-[460px] h-[180px] bg-blue-100 rounded-[33px] flex-col justify-center items-center flex">
      <div className="self-stretch px-2.5 py-[30px] bg-white justify-center items-center gap-[30px] inline-flex rounded-tl-[30px] rounded-tr-[30px]">
        <img
          className="w-[30px] h-[30px] rounded-[5px]"
          src="https://via.placeholder.com/30x30"
        />
        <div className="w-80 text-center text-blue-900 text-xl font-bold font-inter">
          Nouveau tweet compo
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 p-[15px] justify-center items-center gap-[15px] inline-flex">
        <img
          className="w-[60px] h-[60px] relative rounded-[999px]"
          src="https://via.placeholder.com/60x60"
        />
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-[15px] inline-flex">
          <div className="text-blue-900 text-xl font-bold font-inter">
            Titre
          </div>
          <div className="text-blue-900 text-base font-medium font-inter">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateActionCard;
