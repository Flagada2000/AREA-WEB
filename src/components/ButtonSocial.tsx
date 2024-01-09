import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTrash } from '@fortawesome/free-solid-svg-icons';

type ButtonSocialProps = {
  className?: string;
};

function ButtonSocial({}: ButtonSocialProps) {
  const [isConnected, setIsConnected] = useState(false);

  const handleClick = () => {
    setIsConnected(!isConnected);
  };

  return (
    <button
      className={`${isConnected ? 'h-11' : ''} self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex hover:bg-blue-200`}
      onClick={handleClick}
    >
      <div className="justify-start items-center gap-[15px] flex">
        <div className="w-4 h-4 relative">
          <FontAwesomeIcon icon={faCode} className="text-slate-500 transform" />
        </div>
        <div className={`mr-40 text-slate-500 text-sm font-bold font-inter ${isConnected ? 'opacity-50' : ''}`}>
          {isConnected ? 'Connecté à GitHub' : 'Se connecter à GitHub'}
        </div>
      </div>
      {isConnected && <div className="w-4 h-4 relative">
          <FontAwesomeIcon icon={faTrash} className="text-slate-400 transform" />
        </div>}
  </button>
  );

}

export default ButtonSocial;