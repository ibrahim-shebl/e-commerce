import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experienc</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fresh graduate student"
            subTitle="Graduate of the Faculty of Computers and Information
            "
            result="ITI"
            des="He holds certificates from the ITI Institute in summer training and many courses from YouTube, in addition to studying the content at the university."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Frontend Developer Team - (2021 - 2024)"
            result="grant ITI"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="React"
            result="Juionur"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education