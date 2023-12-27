"use client";
import { relative } from "path";
import React from "react";
import { Button, Checkbox, CheckboxProps, Input, styled } from "@mui/material";
import Link from "next/link";
import APIService from "../../service";

function page() {
  const apiService = new APIService();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [mailState, setMailState] = React.useState('');
  const [passwordState, setPasswordState] = React.useState('');

  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mail = e.target.value;
    setMailState(mail)
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const password = e.target.value;
   setPasswordState(password)
  };

  const handleSubmit = () => {
    let promise = apiService.signup({email:mailState, password:passwordState});
    promise.then((res) => {
      const data = res.data;
      console.log(data);
      if (data.code == 201) {
        let jwtToken = data.session.accessToken;
        localStorage.setItem("jwtToken", jwtToken);
        window.location.href = "/profile";
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mt-8 text-xl font-semibold gap-5">
          <p className="text-blue-100">Inscription</p>
        </div>
        <div className="relative flex flex-col items-center mt-9 w-2/3 h-[70%]">
          <div className="absolute triangle bottom-8 right-5 blur-[6px] animate-spin-veryslow"></div>
          <div className="flex flex-row space-x-2 text-gradient w-full h-full p-14 rounded-[33px] neon-indigo">
            <div className="w-100% md:w-1/2">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-100 dark:text-white">
                  Adresse e-mail
                </label>
                <input onChange={handleMailChange}
                type="email" id="email" className="w-full h-9 bg-white/5 rounded-[33px] p-2.5 shadow-lg border-2 border-blue-200 hover:neon-blue-300 hover:border-white delay-200 focus:ring-blue-800 focus:border-blue-800 placeholder-blue-300" placeholder="john.doe@company.com" required/>
              </div>
              <div className="mt-8 mb-8">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-100 dark:text-white">
                  Mot de passe
                </label>
                <input onChange={handlePasswordChange}
                type="password" id="password" className="w-full h-9 bg-white/5 rounded-[33px] p-2.5 shadow-lg border-2 border-blue-200 hover:neon-blue-300 hover:border-white delay-200 focus:ring-blue-800 focus:border-blue-800 placeholder-blue-300" placeholder="Mot de passe" required/>
              </div>
              <div className="flex flex-col items-center gap-5">
              <hr className="border-blue-100 border w-2/3 mb-3" />
                  <button onClick={handleSubmit}
                  className="px-6 py-2 font-semibold text-blue-100 text-gradient hover:bg-indigo-700 py-1 px-6 rounded-full">
                    S'inscrire
                  </button>
                <p className="text-blue-100">
                  Déjà un compte ?{" "}
                  <Link href='/signin'>
                    <span className="text-blue-300">Se connecter</span>
                  </Link>
                </p>
              </div>
              <div className="absolute w-28 h-28 -top-16 -left-16 bg-slate-400/40 blur-[6px] brightness-125 rounded-2xl animate-spin-slow"></div>
            </div>
              <div className="hidden md:flex w-1/2 h-auto items-center" >
                <p className="text-blue-100 inline-block ml-10 uppercase lg:text-6xl sm:text-4xl hover:leading-snug duration-300 font-medium">Simplifiez votre monde</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
