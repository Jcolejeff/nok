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
      <section className="container relative  h-[50vh] w-full  max-w-[1700px] px-container-base md:h-screen lg:px-container-lg  xl:px-container-xl  ">
         <div className=" flex h-full flex-col items-center justify-center gap-6 2xl:gap-8">
            <div>
               <Fade bottom>
                  <img src={url("/images/logo.svg")} alt="" className=" object-contain " />
               </Fade>
               {/* <HeroSlide /> */}
            </div>

            <div className="mb-5 flex   items-center gap-4 transition-all duration-500 ease-in-out">
               <div className="flex items-center justify-center rounded-lg bg-primary-1 px-4 py-3  xxl:px-4 xxl:py-4">
                  <p className="text-sm  font-medium tracking-wider text-white lg:text-[1.9rem] xxl:text-[1.1rem]">
                     ANIMATION STUDIOS
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default LandingPageHero;
