"use client";

import Link from "next/link";
import Logo from "./Logo";
import React, { useState } from "react";
import { Github, Dribble, PinterestIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname, useRouter } from "next/navigation";

const CustomTitle = ({ href, title, className = "" }) => {
  const router = usePathname();
  //   const routes = router.refresh()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 dark:bg-white  group-hover:w-full transition-all ease duration-300 ${
          router === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileTitle = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  //   const routes = router.refresh()
  const handleLink = () => {
    toggle();
    router.push(href);
    // router.push(href)
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleLink}
    >
      {title}
      <span
        className={`h-[2px] inline-bloc absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease duration-300 ${
          router === href ? "w-full" : "w-0"
        } dark:bg-dark dark:text-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const MotionLink = motion(Link);

const Navbar = () => {
  const [mode, setMode] = ThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-24 py-6 relative font-medium flex justify-between items-center space-x-2 lg:px-16 md:px-12 sm:px-8 dark:text-white">
      <button
        className="flex-col justify-center items-center transition-all ease-in-out hidden lg:flex duration-200"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block  transition-all ease-in-out duration-200 h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block  transition-all ease-in-out duration-200 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block  transition-all ease-in-out duration-200 h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex flex-row justify-between items-center lg:hidden z-30">
        <nav>
          <CustomTitle href="/" title="Home" className="mr-6" />
          <CustomTitle href="/about" title="About" className="mr-6" />
          <CustomTitle href="/projects" title="Project" className="mr-6" />
          <CustomTitle href="/articles" title=" Articles" className="mr-6" />
        </nav>
        <nav className="space-x-6 flex flex-row items-center justify-between">
          <MotionLink
            href="https://in.pinterest.com/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="bg-light rounded-full"
          >
            <PinterestIcon />
          </MotionLink>
          <MotionLink
            href="https://dribbble.com/OutBreak778/"
            target="_blank"
            whileHover={{ y: -2 }}
          >
            <Dribble />
          </MotionLink>
          <MotionLink
            href="https://github.com/OutBreak778/"
            taget={"_blank"}
            whileHover={{ y: -2 }}
          >
            <Github className="w-8 h-8" />
          </MotionLink>
          {/* <MotionLink href="/" target="_blank">
          Mode
        </MotionLink> */}

          <button
            className={`${
              mode === "light" ? "bg-dark text-white" : "bg-white text-dark"
            } flex items-center justify-center rounded-full p-[2px]`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <MoonIcon className={`fill-white`} />
            ) : (
              <SunIcon className={`fill-dark`} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%", transitionDuration: "0.3s" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col fixed justify-between items-center bg-dark/90 dark:bg-light/80 rounded-lg backdrop-blur-md py-32 top-1/2 left-1/2 -translate-x-1/2 z-50 -translate-y-1/2"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileTitle
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileTitle
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileTitle
              href="/projects"
              title="Project"
              className=""
              toggle={handleClick}
            />
            <CustomMobileTitle
              href="/articles"
              title=" Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="space-x-6 flex flex-row items-center justify-between">
            <MotionLink
              href="https://in.pinterest.com/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="bg-light rounded-full sm:mx-1"
            >
              <PinterestIcon />
            </MotionLink>
            <MotionLink
              href="https://dribbble.com/OutBreak778/"
              target="_blank"
              whileHover={{ y: -2 }}
              className=" sm:mx-1"
            >
              <Dribble />
            </MotionLink>
            <MotionLink
              href="https://github.com/OutBreak778/"
              taget={"_blank"}
              whileHover={{ y: -2 }}
              className="bg-white rounded-full dark:bg-dark dark:text-white  sm:mx-1"
            >
              <Github className="w-8 h-8" />
            </MotionLink>
            {/* <MotionLink href="/" target="_blank">
          Mode
        </MotionLink> */}

            <button
              className={`${
                mode === "light" ? "bg-dark text-white" : "bg-white text-dark"
              } flex items-center justify-center rounded-full p-[3px] border border-solid border-light dark:border-dark`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <MoonIcon className={`fill-light`} />
              ) : (
                <SunIcon className={`fill-light`} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
