'use client'

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-between items-center mt-3">
      <MotionLink
        href="/"
        className="w-14 h-14 rounded-full font-bold text-2xl border border-solid border-transparent bg-dark dark:border-white text-white flex items-center justify-center"
        whileHover={{
            backgroundColor:["#121212","#6190E8","#2980B9","#000428","#C193C5","#E93558"],
            transition:{duration:1, repeat:Infinity}
        }}
      >
        NM
      </MotionLink>
    </div>
  );
};

export default Logo;
