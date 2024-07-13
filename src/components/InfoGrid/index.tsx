import { cn, url } from "lib/utils";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import TextFormat from "lib/helpers/TextFormat";
import Fade from "react-reveal/Fade";
import { sub } from "date-fns";

const InfoGrid = () => {
   const data = [
      {
         images: [
            "/images/services/ani.png",
            "/images/services/ani_1.png",
            "/images/services/ani_2.png",
         ],
         heading: "3D ANIMATION",
         subHeading: "NEED ANIMATION SERVICES?",
         link: "/services/3d-animation",
         paragraph:
            "We offer quality and affordable 3D animation services for game cinematics, advertisement and more",
      },
      {
         images: [
            "/images/services/pv.png",
            "/images/services/pv_1.png",
            "/images/services/pv_2.png",
         ],
         heading: "PRODUCT VISUALIZATION",
         subHeading: "OUR PRODUCT VISUALIZATION ARE TOPNOTCH!!!",
         link: "/services/3d-animation",
         paragraph:
            "We bring VFX level CGI to our product visualization, making your products look eye catching with the best visual fidelity. ",
      },

      {
         images: ["/images/services/v.png", "/images/services/v_1.png", "/images/services/v_2.png"],
         heading: "VFX",
         subHeading: "OUR PRODUCT VISUALIZATION ARE TOP NOTCH!!!",
         link: "/services/3d-animation",
         paragraph:
            "We bring VFX level CGI to our product visualization, making your products look eye catching with the best visual fidelity. ",
      },
      {
         images: [
            "/images/services/gd.png",
            "/images/services/gd_1.png",
            "/images/services/gd_2.png",
         ],
         heading: "GAME DEVELOPMENT",
         subHeading: "WE CREATE AMAZING IMMERSIVE EXPERIENCES",
         link: "/services/3d-animation",
         paragraph:
            "At Nok Animation Studios, we develop immersive interactive experiences for different platforms such as mobile, pc, ps, xbox and VR. Check out some of our released titles as well as our works in progress.  ",
      },
   ];
   return (
      <div>
         <Fade bottom>
            <div className="flex h-full flex-col items-center justify-center gap-6 2xl:gap-8">
               <h5 className="text-center text-[1.6rem] font-[700] leading-[130%] tracking-[0.02rem]  transition-all duration-500 ease-in-out md:max-w-[80rem] md:text-[2.6rem] md:leading-[3rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3rem]">
                  <TextFormat
                     text={`Our Services`}
                     keyword={"Services"}
                     keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
                  />
               </h5>
            </div>
         </Fade>

         <section className="grid gap-[3rem] rounded-lg md:mt-12 md:gap-[4rem]">
            {data.map((item, index: number) => {
               return (
                  <article className="relative grid grid-cols-3   shadow-xl" key={index}>
                     <motion.div variants={fadeIn("right", "spring", 0 * 0.4, 0.75)}>
                        <div className="h-[30rem] rounded-xl ">
                           <img
                              src={url(item.images[0])}
                              alt=""
                              className="h-full w-full object-cover"
                           />
                        </div>
                     </motion.div>
                     <motion.div variants={fadeIn("down", "spring", 1 * 0.4, 0.75)}>
                        <div className="h-[30rem] rounded-xl ">
                           <img
                              src={url(item.images[1])}
                              alt=""
                              className="h-full w-full object-cover"
                           />
                        </div>
                     </motion.div>
                     <motion.div variants={fadeIn("left", "spring", 1.8 * 0.5, 0.75)}>
                        <div className="h-[30rem] rounded-xl ">
                           <img
                              src={url(item.images[2])}
                              alt=""
                              className="h-full w-full object-cover"
                           />
                        </div>
                     </motion.div>
                     <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 bg-black/60 p-8 text-white  xxl:gap-4">
                        <h3 className="text-center text-2xl  font-semibold md:text-4xl ">
                           {item.heading}
                        </h3>
                        <h5 className="mt-5 text-[1.16rem]  leading-[130%] tracking-[0.02rem]  md:tracking-[0.0225rem]">
                           {item.subHeading}
                        </h5>
                        <p className="text-[1rem]  leading-[130%] tracking-[0.02rem] md:tracking-[0.0225rem]">
                           {item.paragraph}
                        </p>
                     </div>
                  </article>
               );
            })}
         </section>
      </div>
   );
};

export default SectionWrapper(InfoGrid, "infoGrid");
