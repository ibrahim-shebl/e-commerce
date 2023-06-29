import React from "react";
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import {FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';
import {SiTailwindcss,SiFigma,SiNextdotjs} from 'react-icons/si';
import { FaReact } from "react-icons/fa";
import banner from '../../assets/bannerImg.png'
const Banner = ()=>{
    const [text] = useTypewriter({
        words: ["Profesional Coder." , "Full Stack Developer." , "Ui Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,

    });
    return(
        <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      >
             <div className="w-full lgl:w-1/2 flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                    <h4 className="text-lg font-normal">Welcom To My World</h4>
                    <h1 className="text-6xl font-bold text-white">Hi I,m {" "}
                        <span className="text-designColor capitalize">Ibrahim Shebl</span>
                    </h1>
                    <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
                      <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                       />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">I am Ibrahim Shebl, a web developer, React, and this is a hospital project using React</p>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me in
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                            <FaFacebook />
                            </span>
                            <span className="bannerIcon">
                            <FaTwitter />
                            </span>
                            <span className="bannerIcon">
                            <FaLinkedin />
                            </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                        <SiFigma />
                        </span>
                        <span className="bannerIcon">
                        <FaReact />
                        </span>
                        <span className="bannerIcon">
                        <SiNextdotjs/>
                        </span>
                        <span className="bannerIcon">
                        <SiTailwindcss />
                        </span>
                    </div>
                </div>
            </div>
        </div>
            {/* <LeftBanner /> */}
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
                <img
                    className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                    src={banner}
                    alt="bannerImg"
                />
                <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </section>
    )
}
export default Banner