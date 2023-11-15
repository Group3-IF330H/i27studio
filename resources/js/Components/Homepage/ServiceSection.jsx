import React from "react";
import { motion } from "framer-motion";

const ServiceSection = () => {
    return (
        <>
            <div className="relative px-12 mt-8 mb-32 md:mt-56 section-service">
                <motion.h1
                    initial={{ translateY: 100, opacity: 0, zIndex: 20 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute text-4xl -top-4 md:-top-8 xl:-top-12 md:text-7xl xl:text-8xl"
                >
                    The Way We Do
                </motion.h1>
                <motion.div
                    initial={{ translateY: 100, opacity: 0, zIndex: 10 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="grid gap-5 px-10 pt-8 pb-16 bg-white shadow-lg md:pt-16 xl:pt-24 md:grid-cols-2 lg:grid-cols-3 service-item"
                >
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            ARCHITECTURAL <br />
                            DESIGN
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            We specialize in architectural design that goes
                            beyond aesthetics. Our architects blend creativity
                            with functionality to create spaces that inspire.
                        </item>
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            INTERIOR <br />
                            DESIGN
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            Step into a world of personalized interiors with
                            i27studio. Our interior design service transforms
                            spaces into captivating environments.
                        </item>
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            SPACE <br />
                            PLANNING
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            Efficient space planning is the foundation of a
                            well-designed environment. At i27studio, we excel in
                            creating layouts that maximize functionality and
                            aesthetics.
                        </item>
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            ENGINEERING <br />
                            DESIGN
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            Our engineering design services at i27studio ensure
                            that your projects are not only visually stunning
                            but also structurally sound.
                        </item>
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            EXTERIOR <br />
                            DESIGN
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            The exterior of a building is its first impression.
                            Our exterior design services at i27studio ensure
                            that your property stands out with aesthetic appeal
                            and functionality.
                        </item>
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center">
                        <div className="flex items-center justify-center text-xl md:h-20 item-heading">
                            CONSTRUCTION <br />
                            PROJECT
                        </div>
                        <item className="flex items-center md:h-24 desc opacity-40">
                            From concept to completion, our construction project
                            management services ensure that your vision is
                            brought to life seamlessly.
                        </item>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default ServiceSection;
