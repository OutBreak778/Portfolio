'use client'

import React, { useRef, useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import nikPic from "@/public/nikPic.jpg";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import Skills from "../components/Skills"
import Experience from "..//components/Experience"
import Education from "..//components/Education"
import TransitionEffect from "../components/TransitionEffect";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "OUTBREAK | About",
  description: "Generated by Nikhil Mishra",
};

const AnimatedNumber = ({values}) => {
    const ref = useRef()

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const inView = useInView(ref, {once: true})


    useEffect(() => {
        if(inView) { 
            motionValue.set(values)
        }
    }, [inView, values, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            // console.log(latest)
            if(ref.current && latest.toFixed(0) <= values) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, values])


    return <span ref={ref}></span>
}

const page = () => {

  const router = useRouter()
  return (
    <div>
          <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div className="pt-12 w-[90%]">
          <AnimatedText
            text=" Make it work, make it fast. "
            className="mt-12 mb-12 md:mb-1 lg:!text-6xl sm:!text-5xl xs:!text-3xl"
          />
          <div className="grid w-full grid-cols-8 gap-14 mt-6">
            <div className="col-span-3 text-[18px] flex flex-col items-center mr-2 justify-start xl:col-span-4 md:order-2 md:col-span-8 md:ml-1 ">
              <h2 className="font-bold uppercase text-lg text-black/60  dark:text-light/50">
                Profile
              </h2>
              <p className="font-medium ml-12 xl:ml-2">
                I am{" "}
                <span className="font-bold underline text-primary dark:text-primaryDark underline-offset-2">
                  Nikhil Mishra
                </span>
                , a dedicated student currently pursuing my Bachelor's degree at
                CMCS College. My passion lies in the world of web development,
                where I aspire to excel.
              </p>
              <p className="font-medium my-2 ml-12 xl:ml-2">
                My journey as a web developer is marked by my unwavering
                commitment to creating exceptional websites that seamlessly
                adapt to various devices, ensuring both mobile and desktop users
                have a smooth experience.
              </p>
              <p className="font-medium ml-12 xl:ml-2">
                Outside of my academic pursuits, I invest my time in staying
                up-to-date with the latest web development tools and frameworks,
                always eager to enhance my skills.
              </p>
            </div>
            <div className="relative h-[70%] col-span-3 mt-4 rounded-2xl border-2 lg:h-[80%] lg:mt-12 border-solid border-black xl:w-[125%] lg:w-[135%] md:order-1 dark:border-light xl:col-span-3 md:col-span-5 md:ml-12 sm:ml-8 sm:my-0 bg-white p-6 dark:bg-dark/95">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <Image
                src={nikPic}
                alt="Image"
                className="w-full h-[100%] rounded-2xl"
                priority
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 -mt-24 flex flex-col items-center justify-evenly xl:col-span-8 xl:flex-row xl:items-center lg:mt-12 md:order-3 ">
              <div className="flex flex-col items-center justify-end xl:text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumber values={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/60 lg:text-lg dark:text-light xl:text-center md:text-lg sm:text-lg">Simple Projects</h2>
              </div>

              <div className="flex flex-col items-center justify-end xl:text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumber values={220} />+</span>
                <h2 className="text-xl font-medium capitalize text-black/60 lg:text-lg dark:text-light xl:text-center md:text-lg sm:text-lg">contribution on Github</h2>
              </div>

              <div className="flex flex-col items-center justify-end xl:text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumber values={8} />+</span>
                <h2 className="text-xl font-medium capitalize text-black/60 lg:text-lg dark:text-light xl:text-center md:text-lg sm:text-lg">Month of skill in React</h2>
              </div>
            </div>

          </div>

          <Skills />
          {/* <Experience /> */}
          <Education />
        </div>
      </main>

    </div>
  );
};

export default page;
