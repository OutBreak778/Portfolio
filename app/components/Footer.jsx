import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-4 bg-white text-black w-full border-t border-solid border-dark dark:bg-dark dark:border-light dark:text-light font-medium text-lg ">
      <div className="py-3 flex items-center justify-between dark:text-light mx-20 lg:flex-col lg:py-6 md:py-4 md:text-sm">
        <span>{new Date().getFullYear()} &nbsp;@all rights reserved</span>
        <div className="flex items-center lg:py-3">Build with <span className="text-primary text-2xl font-bold dark:text-primaryDark"> &nbsp;&#9825;&nbsp;</span> by &nbsp;
        <Link href="/" className="underline underline-offset-4 uppercase">OutBreak</Link>
        </div>
        <Link href="/" className="underline underline-offset-4">Hello</Link>
      </div>
    </footer>
  );
};

export default Footer;
