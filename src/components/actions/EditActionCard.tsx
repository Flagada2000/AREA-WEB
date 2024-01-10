import React, { useState } from 'react';

type EditActionCardProps = {
  className?: string;
};

function EditActionCard ({ }: EditActionCardProps) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e:any) => {
      setInputText(e.target.value);
    };

    return (
        <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
          <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
            <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
              Titre compo
            </div>
          </div>
          <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
          <input
            type="input-text"
            id="input-text"
            className="self-stretch w-[250px] h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex text-blue-800 text-opacity-80 text-base bg-blue-100 font-medium font-inter placeholder-blue-800"
            placeholder="Texte"
            onChange={handleInputChange}
          />
          </div>
          {/* <p>Input Value: {inputText}</p> */}
        </div>
    );
}

export default EditActionCard;