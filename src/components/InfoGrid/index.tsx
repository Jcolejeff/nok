import { cn, url } from "lib/utils";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import TextFormat from "lib/helpers/TextFormat";
import Fade from "react-reveal/Fade";
import { sub } from "date-fns";
import { desktopData, mobileData } from "./data";
import { ArrowRight } from "lucide-react";

const InfoGrid = () => {
	return (
		<div>
			<Fade bottom>
				<div className="flex h-full flex-col items-center justify-center gap-6 2xl:gap-8">
					<h5 className="text-center text-[1.8rem] font-[700] leading-[130%] tracking-[0.02rem]  transition-all duration-500 ease-in-out md:max-w-[80rem] md:text-[2.6rem] md:leading-[3rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3rem]">
						<TextFormat
							text={`Our Services`}
							keyword={"Services"}
							keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
						/>
					</h5>
				</div>
			</Fade>

			<section className=" hidden md:grid gap-[3rem] rounded-lg mt-12 md:gap-[4rem]">
				{desktopData.map((item, index: number) => {
					return (
						<a
							href={item.link}
							className="relative grid grid-cols-3   shadow-xl"
							key={index}
						>
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
								<div className="flex gap-2 justify-center items-center">
									<h3 className="text-center text-2xl  font-semibold md:text-4xl ">
										{item.heading}
									</h3>
									<ArrowRight className="w-6 h-6  " />
								</div>
								<h5 className="mt-5 text-[1.16rem]  leading-[130%] tracking-[0.02rem]  md:tracking-[0.0225rem]">
									{item.subHeading}
								</h5>
								<p className="text-[1rem]  leading-[130%] tracking-[0.02rem] md:tracking-[0.0225rem]">
									{item.paragraph}
								</p>
							</div>
						</a>
					);
				})}
			</section>

			<section className=" grid md:hidden gap-[3rem] rounded-lg mt-12 md:gap-[4rem]">
				{mobileData.map((item, index: number) => {
					return (
						<a
							href={item.link}
							className="relative grid grid-cols-1    shadow-xl"
							key={index}
						>
							<motion.div variants={fadeIn("right", "spring", 0 * 0.4, 0.75)}>
								<div className="h-[30rem] rounded-xl ">
									<img
										src={url(item.images[0])}
										alt=""
										className="h-full w-full object-cover"
									/>
								</div>
							</motion.div>

							<div className="absolute bottom-0 left-0 flex justify-center w-full items-center flex-col gap-2 bg-black/70 p-6 text-white  xxl:gap-4">
								<div className="flex gap-1 justify-center items-center">
									<h3 className="text-center text-2xl  font-semibold md:text-4xl ">
										{item.heading}
									</h3>
									<ArrowRight className="w-6 h-6 " />
								</div>
								<h5 className="mb-4 text-[1rem] text-center  leading-[130%] tracking-[0.02rem]  md:tracking-[0.0225rem]">
									{item.subHeading}
								</h5>
								<p className="text-[0.8rem] text-center max-w-[70%]   w-full leading-[130%] tracking-[0.02rem] md:tracking-[0.0225rem]">
									{item.paragraph}
								</p>
							</div>
						</a>
					);
				})}
			</section>
		</div>
	);
};

export default SectionWrapper(InfoGrid, "infoGrid");
