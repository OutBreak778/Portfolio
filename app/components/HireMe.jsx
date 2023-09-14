import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-2 md:left-auto md:-top-7 md:bottom-auto">
      <div className="w-52 font-bold h-auto relative flex items-center justify-center md:w-36 md:h-[50%] sm:w-28">
        <CircularText
          className={`fill-dark animate-spin-slow dark:fill-light`}
        />
        <Link
          href="mailto:mishran.2003@gmail.com"
          className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white shadow-md border-2 border-solid border-gray-700 w-20 h-20 rounded-full hover:bg-white hover:text-black transition-all ease-in dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-light md:w-14 md:h-14 md:text-[10px] sm:w-10 sm:h-10 sm:text-[8px]"
        >
          Mail Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
