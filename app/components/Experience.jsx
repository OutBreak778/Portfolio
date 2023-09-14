import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col"
      >
        <h3 className="capitalize font-bold text-3xl">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/70">
          {time} | {address}
        </span>
        <span className="font-medium w-full">{work}</span>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-60">
      <h2 className="font-bold w-full text-center text-6xl mb-24">
        Experience
      </h2>
      <div ref={ref} className="mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[3px] h-full left-9 mt-2 top-0 bg-black origin-top dark:bg-light "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Nothing"
            company="Outbreak"
            companyLink="www.google.com"
            time="12:00"
            address="Nashik"
            work="This is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the line"
          />
          <Details
            position="Nothing"
            company="Outbreak"
            companyLink="www.google.com"
            time="12:00"
            address="Nashik"
            work="This is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the line"
          />
          <Details
            position="Nothing"
            company="Outbreak"
            companyLink="www.google.com"
            time="12:00"
            address="Nashik"
            work="This is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the lineThis is the page of the reaction of the line"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;


