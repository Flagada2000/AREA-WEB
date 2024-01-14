import React, { useState, useEffect } from 'react';

const XCircleIcon = (props:any) => (
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
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

function NotificationError() {
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
      <div className='bg-red-100 text-red-800 border border-red-200 rounded-[30px] pr-4 pl-4 pt-2 pb-2 absolute right-4'>
        <XCircleIcon className="h-5 w-5" />
        <div className="ml-2">
          <div className="font-semibold">Error</div>
          <div className="ml-2">This is an error alert</div>
        </div>
      </div>
    </div>
  );
}

export default NotificationError;