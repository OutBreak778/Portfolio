"use client";

import React from "react";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { Github } from "../components/Icons";
import newImg1 from "../../public/dashboard.png";
import Image from "next/image";
import { motion } from "framer-motion";
import trello from "../../public/trello.png";
import details from "../../public/details.png";
import blog from "../../public/blog.png";
import adminPage from "../../public/admin-page.png";
import data from "../../public/data.png";
import news from "../../public/news.png";
import TransitionEffect from "../components/TransitionEffect";

export const metadata = {
  title: "OUTBREAK | Projects",
  description: "Generated by Nikhil Mishra",
};

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-[96%] ml-6 relative mt-4 py-8 flex items-center dark:text-light/70 dark:border-light justify-between rounded-3xl border p-6 border-solid border-black dark:bg-dark dark:text-light bg-white shadow-2xl lg:flex-col lg:p-6 xs:rounded-2xl xs:rounded-br-3xl xs:p-3 lg:ml-2">
      <div className="absolute -top-0 -right-4 -z-10 w-[101%] h-[104%] rounded-[2.4rem] rounded-br-3xl bg-black dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] md:-right-4 md:h-[103%] md:w-full md:rounded-[2rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 mr-4 cursor-pointer overflow-hidden rounded-xl dark:bg-light lg:w-full"
      >
        <FramerImage
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt="Image"
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1000px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-center lg:w-full lg:pl-0 lg:pt-4">
        <span className="font-bold text-xl text-primary dark:text-primaryDark xs:text-lg">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-4 w-full text-center text-4xl font-bold dark:text-light sm:text-xl sm:my-1">
            {title}
          </h2>
        </Link>
        <p className="mt-1 font-medium text-black/70 dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center justify-center my-3">
          <Link href={github} target="_blank" className="w-32 dark:text-light">
            <Github />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="absolute right-4 ml-4 rounded-lg w-auto bg-black font-bold text-xl text-white px-4 py-4 dark:bg-light dark:text-dark flex items-center justify-center  sm:text-base"
          >
            Visit Live
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeatureSmProject = ({ title, img, github, link, type }) => {
  return (
    <article className="w-[96%] my-4 ml-2 lg:mr-4 flex flex-col items-center justify-center rounded-2xl border border-solid xs:p-4  border-black dark:border-light bg-white dark:text-dark relative py-4 dark:bg-dark">
      <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-light lg:rounded-[2rem] md:-right-2 md:w-[101%] sm:w-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-[95%] mx-2 cursor-pointer overflow-hidden rounded-xl"
      >
        <FramerImage
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt="Image"
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1000px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col p-3 items-start justify-center mt-2">
        <span className="font-bold text-xl text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="mt-1 w-full text-center text-3xl font-bold dark:text-light lg:text-xl">
            {title}
          </h2>
        </Link>
        <div className="w-full flex items-center justify-between my-3 dark:text-light">
          <Link href={github} target="_blank">
            {" "}
            <Github className="w-12 md:w-8" />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 font-medium text-xl mr-12 hover:bg-black dark:bg-light dark:text-dark hover:text-white px-6 py-2 rounded-lg transition-all ease-out md:text-base duration-300"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />

      <main className="w-full flex flex-col items-center justify-center dark:text-light mb-12">
        <div className="py-12 mt-5">
          <AnimatedText
            text="Designing Today, Showcasing Tomorrow"
            className="mb-8 lg:!text-8xl md:!text-6xl sm:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-16 gap-y-32 xl:gap-x-20 xl:mx-3 xl lg:mx-3 lg:gap-x-10 md:mx-3 md:gap-y-24 sm:mx-3 sm:gap-x-2 xs:mx-4 ">
            <div className="col-span-12">
              <FeatureProject
                title="Trello App"
                img={trello}
                link="https://trello-app-outbreak778.vercel.app/"
                github="https://github.com/OutBreak778/trello-app"
                type="Featured Project"
                summary="This is the Todo app which is using the DnD (Drag and Drop) components which is pretty difficult to make, you can store you day-to-day task in here, it also come with the search functionalality components which will be helpfull for those who have many task to do in a day."
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:ml-2">
              <FeatureSmProject
                title="Amazing UI Dashboard"
                img={newImg1}
                link="/"
                type="Simple Projects"
                github="https://github.com/OutBreak778/MuiDashboard-Client"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:ml-2">
              <FeatureSmProject
                title="Simple Detail Portfolio"
                img={details}
                link="https://portfolio-4594f.web.app/"
                type="Simple Projects"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                title="Blog App - Headless CMS"
                img={blog}
                link="https://sanity-blog-nextjs-outbreak778.vercel.app/"
                github="https://github.com/OutBreak778/blog-app"
                summary="This is a Blog App- headless CMS where you can share you view to other, it is mainly focued on simple UI, and it's suported backend is mostly of Sanity, it is a Headless CMS you can update the data if you are given the access of the Studio of sanity by the User means by Me, please visit my Website"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:ml-2">
              <FeatureSmProject
                title="Admin with it's Backend"
                img={adminPage}
                link="https://admin-page-vert.vercel.app/"
                github="/"
                type="Simple Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:ml-2">
              <FeatureSmProject
                title="Some Language Learn by Me"
                img={data}
                link="/"
                github="/"
                type="Simple Project"
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                title="The News app"
                img={news}
                link="/"
                github="https://github.com/OutBreak778/news-app"
                summary="This is the News app made by react with the class based components which fetch the data from the API and show the data of that page, here we have categories of the news which are mainly shown the data on it's given data"
                type="Featured Project"
              />
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default page;
