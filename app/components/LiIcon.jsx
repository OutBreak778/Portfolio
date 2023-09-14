import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[4px] fill-white dark:fill-dark" style={{pathLength:scrollYProgress}}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse fill-primary dark:fill-primaryDark stroke-1" />
      </svg>
    </figure>
  );
};

export default LiIcon;
