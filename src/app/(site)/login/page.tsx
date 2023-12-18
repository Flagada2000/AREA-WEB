"use client";
import { relative } from "path";
import React from "react";
import { PiAlienDuotone } from "react-icons/pi";
import { Button, Checkbox, CheckboxProps, Input, styled } from "@mui/material";
import Link from "next/link";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

function page() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mt-8 text-xl font-semibold gap-5">
          <p className="">Connexion</p>
        </div>
        <div className="relative flex flex-col items-center mt-9 w-2/3 h-[70%]">
          <div className="absolute triangle bottom-8 right-5 blur-[6px] animate-spin-veryslow"></div>
          <div className="flex flex-row space-x-2 text-gradient w-full h-full p-14 rounded-md neon-indigo">
            <div className="w-100% md:w-1/2">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-100 dark:text-white">
                  Adresse e-mail
                </label>
                <input type="email" id="email" className="w-full h-9 bg-white/5 rounded-md p-2.5 shadow-lg border-2 border-violet-500 hover:neon-violet hover:border-white delay-200 focus:ring-violet-800 focus:border-violet-800 " placeholder="john.doe@company.com" required/>
              </div>
              <div className="mt-8 mb-8">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-100 dark:text-white">
                  Mot de passe
                </label>
                <input type="password" id="password" className="w-full h-9 bg-white/5 rounded-md p-2.5 shadow-lg border-2 border-violet-500 hover:neon-violet hover:border-white delay-200 focus:ring-violet-800 focus:border-violet-800 " placeholder="john.doe@company.com" required/>
              </div>
              <div className="flex flex-row items-center justify-between mb-8">
                <div className="flex flex-rox items-center text-sm -ml-2">
                  <BpCheckbox />
                  <p>Se rappeler de moi</p>
                </div>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
                  <p className="text-blue-500">Mot de passe oublié ?</p>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-5">
              <hr className="border-white-50 border w-2/3 mb-3" />
                  <button className="text-gradient hover:bg-indigo-700 py-1 px-6 rounded-md neon-violet">
                    Se connecter
                  </button>
                <p>
                  Pas de compte ?{" "}
                  <Link href='/signup'>
                    <span className="text-blue-500">S'inscrire</span>
                  </Link>
                </p>
              </div>
              <div className="absolute w-28 h-28 -top-16 -left-16 bg-slate-400/40 blur-[6px] brightness-125 rounded-2xl animate-spin-slow"></div>
            </div>
              <div className="hidden md:flex w-1/2 h-auto items-center " >
                <p className="inline-block ml-2 uppercase lg:text-5xl sm:text-4xl hover:leading-snug duration-300">Réinventez l'intégration numérique.</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
