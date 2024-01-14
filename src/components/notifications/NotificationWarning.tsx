import React, { useState, useEffect } from 'react';

const AlertCircleIcon = (props:any) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

function NotificationWarning() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity - 0.1);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="grid gap-4"
      style={{
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto', // Disable pointer events when fully transparent
      }}
    >
      <div className='bg-orange-100 text-orange-800 border border-orange-200 rounded-[30px] pr-4 pl-4 pt-2 pb-2 absolute right-4'>
        <AlertCircleIcon className="h-5 w-5" />
        <div className="ml-2">
          <div className="font-semibold">Warning</div>
          <div className="ml-2">This is a warning alert</div>
        </div>
      </div>
    </div>
  );
}

export default NotificationWarning;