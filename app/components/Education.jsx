import React, {useRef} from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return <li
    ref={ref}
    className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
  >
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex flex-col"
    >
      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
        {type}
      </h3>
      <span className="capitalize font-medium text-black/70 dark:text-primaryDark xs:text-sm">
        <span className=' dark:text-light/70 dark:underline dark:underline-offset-4'>{time}</span> | <span className='dark:text-light/70'>{place}</span>
      </span>
      <span className="font-medium w-full md:text-sm ">{info}</span>
    </motion.div>
  </li>
}

const Education = () => {

    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-64 mt-24">
      <h2 className="font-bold w-[100%] text-center text-6xl mb-24 md:text-5xl xs:text-3xl md:mb-12 sm:text-center">
        Education
      </h2>
      <div ref={ref} className="mx-auto relative w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] h-[100%] left-9 mt-2 top-0 bg-black origin-top dark:bg-light md:w-[3px] md:left-[35px] xs:left-[35px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-12">
          <Details
            type="kindergarten"
            time="2007-2009"
            place="Lalita prasad poddar Academy English Medium School"
            info="Kindergarten is a preschool usually for four to six years old kid, located is shramik nagar of Nashik, playing, singing, practical activities such as drawing, and social interaction as part of the transition from home to school and that was mu Life. i didn't remember everything but vaguely remember some of awesome moments."
          />
          <Details
            type="Primay School"
            time="2009-2014"
            place="Lalita prasad poddar Academy English Medium School"
            info="Primary education is typically designed for children 6 to 11 years of age. Significant progress has been made towards achieving educating the kid for future development, and my school also focused on same things about kids living in carefree life."
          />
          <Details
            type="Middle School"
            time="2014-1017"
            place="Lalita prasad poddar Academy English Medium School"
            info="The middle school years are a significant time in compulsory schooling for students, as educational expectations rise and the social and biological changes of puberty affect the students. My School is strict for their attendance and studying material which will help to develop in their upcoming future"
          />
          <Details
            type="Secondary School"
            time="2017-2019"
            place="Lalita prasad poddar Academy English Medium School"
            info="The start of lower secondary education is characterised by the transition from the single-class-teacher, who delivers all content to a cohort of pupils, to one where content is delivered by a series of subject specialists. Its educational aim is to complete provision of basic education and to lay the foundations for lifelong learning."
          />
          <Details
            type="Higher Secondary School"
            time="2019-2021"
            place="Boy's Town Public High School"
            info="It refers to the education imparted in the 11th and 12th standards in schools. The schools which provide education up to these classes are known as Higher secondary schools"
          />
          <Details
            type="Graduation"
            time="2021-2024"
            place="Commerce management and Computer Science"
            info="Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma. They asked what his plans were after graduation."
          />
          <Details
            type="Masters (Upcoming)"
            time="2024-2026"
            place="?"
            info="A master’s degree can be a viable option for those who want to further their knowledge of a particular subject, explore other areas of interest after having completed an undergraduate degree, or improve their career prospects. "
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
