import React from "react";
import { motion } from "framer-motion";
const TeamSection = (props) => {
    return (
        <div className="container relative px-8 mt-36 team-section">
            <div className="mb-8 heading-team-section">
                <div className="mb-6 sm:mb-2 heading">
                    <h1 className="block text-5xl text-center lg:hidden sm:text-left sm:text-7xl xl:text-8xl">
                        Meet Our Team
                    </h1>
                    <motion.h1
                        className="absolute hidden lg:block md:right-0 text-8xl"
                        style={{ y: props.y3, rotate: 90, x: -50 }}
                    >
                        Meet Our <br />
                        Team
                    </motion.h1>
                </div>
                <div className="desc sm:w-[80%] opacity-50 mb-6 text-sm sm:text-left text-center sm:text-base">
                    <p className="font-normal">
                        A close-knit collective of creative minds shaping spaces
                        and redefining possibilities. With a shared dedication
                        to crafting compelling structures, we collaborate
                        seamlessly, blending expertise and imagination to create
                        spaces that inspire.
                    </p>
                </div>
                <motion.hr
                    className="border-2 border-orange-400 border-double sm:w-[80%]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{ originX: 0 }}
                    viewport={{ once: true }}
                />
            </div>
            <div className="flex flex-wrap md:justify-start justify-center gap-y-8 md:gap-y-16 image-team md:w-[80%]">
                {props?.employee.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-center person-image xl:basis-1/3 md:basis-1/2"
                        >
                            <motion.img
                                src={`../storage/img/about/anggota/${data?.foto}`}
                                alt="team"
                                className="object-cover shadow-lg w-72"
                                loading="lazy"
                                initial={{ translateY: 200, opacity: 0 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            />
                            <motion.div
                                className="mt-4 detail"
                                initial={{
                                    opacity: 0,
                                    translateY: -20,
                                    zIndex: -50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    translateY: 0,
                                    zIndex: -50,
                                }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.3,
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="text-xl name">
                                    <h1>{data?.nama}</h1>
                                </div>
                                <div className="font-normal job opacity-40">
                                    <h1>{data?.jabatan}</h1>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection;
