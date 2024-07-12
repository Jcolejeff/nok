import { cn, url } from "lib/utils";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import TextFormat from "lib/helpers/TextFormat";

const InfoGrid = () => {
   const data = [
      {
         image: "/images/receipts/iconOne.svg",
         heading: "Connect with main contractors on NOK",
         paragraph:
            "Start by linking with your main contractor on NOK and get your project rolling!.",
      },
      {
         image: "/images/receipts/iconTwo.svg",
         heading: "Upload your project details to the NOK platform",
         paragraph:
            "Easily upload your project agreement and material requirements for swift approval.",
      },
      {
         image: "/images/receipts/icon.svg",
         heading: "Get your materials financed",
         paragraph:
            "Receive direct financing for your materials, ensuring no delays in your project.",
      },
      {
         image: "/images/receipts/icon.svg",
         heading: "Simple Fee",
         paragraph: "Pay a simple fee on the financed amount, with no hidden charges.",
      },
   ];
   return (
      <div>
         <motion.div variants={textVariant(0)}>
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
         </motion.div>

         <section className="grid gap-[3rem] rounded-lg md:mt-12 md:gap-[1rem]">
            {data.map((item: any, index: number) => {
               return (
                  <motion.div variants={fadeIn("down", "spring", index * 1, 0.75)}>
                     <article className="flex flex-col items-start justify-between gap-4 rounded-2xl border-[1px]  px-5 py-24  shadow-md xxl:gap-12 xxl:py-12">
                        <img src={url(item.image)} alt="" className="w-12 xl:w-12" />
                        <div className="flex flex-col gap-2 px-2  xxl:gap-4">
                           <h3 className="font-semibold md:text-base ">{item.heading}</h3>
                           <p className="text-[0.8rem] text-sm leading-[130%] tracking-[0.02rem] md:leading-[2rem] md:tracking-[0.0225rem]">
                              {item.paragraph}
                           </p>
                        </div>
                     </article>
                  </motion.div>
               );
            })}
         </section>
      </div>
   );
};

export default SectionWrapper(InfoGrid, "infoGrid");
