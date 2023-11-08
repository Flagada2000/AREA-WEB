import { relative } from "path";
import React from "react";
import { PiAlienDuotone } from "react-icons/pi";
import Image from "next/image";

interface LoginProps {
  children: React.ReactNode;
}

function page({ children }: LoginProps) {
  return (
    <>
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mt-28 text-xl font-semibold gap-5">
        <PiAlienDuotone color="#00fc71" size={60} />
        <p className="">Sign in to your account</p>
      </div>
      <div className="relative flex flex-col items-center mt-9">

        <div className="absolute inset-0 bg-indigo-700 blur-lg"></div>
          <div className="absolute triangle bottom-8 right-5 blur-[6px] animate-spin-veryslow">
          </div>
        <div className="text-gradient w-full h-full p-10 rounded-md drop-shadow-lg">
          <div>
            <p>Email address</p>
            <input className="w-full h-10 bg-login-input" type="email" />
            <p>Password</p>
          </div>
          <input className="w-full h-10 bg-login-input" type="password" />
          <div className="flex flex-col items-center gap-2 mt-5">
            <button className="w-1/4 h-10 bg-login-button">Sign in</button>
            <p>
              Don't have an account ?{" "}
              <span className="text-blue-500">Sign up</span>
            </p>
            <button className="w-1/4 h-10 bg-login-button">
              Forgot password ?
            </button>
          </div>
          <div className="absolute w-28 h-28 -top-16 -left-16 bg-slate-400/40 blur-[6px] brightness-125 rounded-2xl animate-spin-slow">
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default page;
