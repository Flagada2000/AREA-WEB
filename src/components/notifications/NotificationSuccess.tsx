import React, { useState, useEffect } from 'react';

const CheckCircleIcon = (props: any) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

function NotificationSuccess() {
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
      <div className="bg-green-100 text-green-800 border border-green-200 rounded-[30px] pr-4 pl-4 pt-2 pb-2 absolute right-4">
        <CheckCircleIcon className="h-5 w-5" />
        <div className="ml-2">
          <div className="font-semibold">Success</div>
          <div className="ml-2">This is a success alert</div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSuccess;
