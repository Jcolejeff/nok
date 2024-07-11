import TextFormat from "lib/helpers/TextFormat";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeroSlide from "./TextSlide";
import { url } from "lib/utils";

import { cn } from "lib/utils";
interface IProps {}

const LandingPageHero = () => {
   const [index, setIndex] = useState(0);

   return (
      <section className="container relative    w-full max-w-[1700px] px-container-base pt-[3rem] lg:px-container-lg lg:py-[5rem]  xl:px-container-xl  xxl:py-[5rem] xxl:pb-[8rem]">
         <div className=" flex flex-col items-center justify-center  gap-6 2xl:gap-8">
            <div>
               <h1 className="max-w-[80rem] text-center text-[2rem]    font-[700] leading-[130%] tracking-[0.02rem] text-white transition-all duration-500 ease-in-out md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3.4rem] xxl:text-[5rem] xxl:leading-[5rem]">
                  <TextFormat
                     text={`NOK`}
                     keyword={"The nok"}
                     keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                  />
               </h1>
               <HeroSlide />
            </div>

            <Fade bottom>
               <h2 className="max-w-[38.875rem] text-center text-[1.18rem] font-[500] leading-[2.2rem] text-white md:leading-[2.01rem] lg:text-[1.2rem] xxl:max-w-[45.875rem] xxl:text-[1.5rem]">
                  Seamlessly access capital for your Construction projects.
               </h2>
            </Fade>

            <div className="mb-5 flex   items-center gap-4 transition-all duration-500 ease-in-out">
               <div className="flex items-center justify-center rounded-lg bg-primary-1 px-4 py-3  xxl:px-4 xxl:py-4">
                  <p className="text-sm  font-bold tracking-wider text-white lg:text-[0.9rem] xxl:text-[1.1rem]">
                     ANIMATION STUDIOS
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default LandingPageHero;
