import React, { useState } from 'react';

type MailEditReactionProps = {
  className?: string;
};

function MailEditReaction ({ }: MailEditReactionProps) {
    // OBJECT
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e:any) => {
      setInputText(e.target.value);
    };

    // BODY
    const [inputBody, setInputBody] = useState('');

    const handleBodyChange = (e:any) => {
        setInputBody(e.target.value);
    };

    return (
        <div className="action-card-right">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Réaction
            </div>
          </div>


          {/* OBJECT */}
          <div className="self-stretch h-[269px] pb-[30px] flex-col justify-start items-center gap-[15px] flex">
              <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Objet du mail
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
          </div>


          {/* BODY */}
          <div className="self-stretch h-[269px] pb-[30px] flex-col justify-start items-center gap-[15px] flex">
              <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Texte du mail
                </div>
              </div>
              <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
              <input
                type="input-text"
                id="input-text"
                className="self-stretch w-[250px] h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex text-blue-800 text-opacity-80 text-base bg-blue-100 font-medium font-inter placeholder-blue-800"
                placeholder="Texte"
                onChange={handleBodyChange}
              />
              </div>
              {/* <p>Input Value: {inputBody}</p> */}
            </div>
          </div>
        </div>
    );
}

export default MailEditReaction;