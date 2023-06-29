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
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Faculty of Computer and Information"
            subTitle="Menoufia University from 2021 to 2024

            "
            result="3.0/4"
            des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Istbari Secondary School from 2017 to 2020"
            result="91,5%"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
          <ResumeCard
            title="Preparatory School Education"
            subTitle="Ahmed Fouad Farag Preparatory School from 2013 to 2016"
            result="3.5/5.0"
            des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fresh graduate student

            "
            subTitle="Graduate of the Faculty of Computers and Information

            "
            result="ITI"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem reprehenderit suscipit asperiores consequuntur expedita dolore perferendis eius, illum aliquam."
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