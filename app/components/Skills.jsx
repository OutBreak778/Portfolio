import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y, transition:{duration:1.5}}}
      viewport={{once:true}}
      className="flex items-center justify-center rounded-full font-semibold py-4 px-7 absolute bg-dark text-white shadow-black cursor-pointer dark:bg-white dark:text-dark lg:py-2 lg:px-3 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:font-bold xs:dark:text-light"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="xs:ml-12">
      <h2 className="font-bold text-7xl mt-48 w-full text-center md:text-5xl md:mt-24">Skills</h2>
      <div className="w-full h-screen relative flex justify-center items-center rounded-full bg-circularWhite dark:bg-circularDark lg:h-[90vh] sm:h-[80vh] xs:h-[70vh] lg:bg-circularWhiteLg lg:dark:bg-circularDarkLg sm:bg-circularWhiteLg sm:dark:bg-circularDarkLg">
        <motion.div
          className="flex items-center justify-center dark:bg-white dark:text-dark rounded-full font-semibold bg-dark text-white p-8 z-12 shadow-black sm:p-5 xs:bg-black xs:text-light xs:dark:bg-light xs:text-xs"
          whileHover={{ scale: 1.06 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-3vw" y="11vw" />
        <Skill name="Javascript" x="-34vw" y="5vw" />
        <Skill name="HTML" x="18vw" y="-2vw" />
        <Skill name="React" x="8vw" y="18vw" />
        <Skill name="Next.js" x="22vw" y="11vw" />
        <Skill name="Github" x="-25vw" y="-14vw" />
        <Skill name="Firebase" x="32vw" y="-7vw" />
        <Skill name="Vercel" x="-17vw" y="15vw" />
        <Skill name="Tailwind CSS" x="19vw" y="-21vw" />
        <Skill name="C Language" x="-20vw" y="-4vw" />
        <Skill name="C++ Language" x="-5vw" y="-18vw" />
      </div>
    </div>
  );
};

export default Skills;
