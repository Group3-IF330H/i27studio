import React from "react";
import { motion } from "framer-motion";

const AboutHeading = (props) => {
    return (
        <>
            <div className="relative w-full pb-52 parallax h-max" id="title">
                <div className="relative image">
                    <motion.img
                        src="../storage/img/about/kantor/K-02.jpg"
                        className="object-cover xl:w-[70%] w-[90%] h-[40rem]"
                        style={{ y: props.y1, x: -50 }}
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                </div>
                <div className="relative text">
                    <motion.h1
                        className="absolute text-4xl text-white md:text-5xl xl:text-6xl w-max h-max"
                        style={{ y: props.y2, rotate: 90 }}
                    >
                        Quality and Trusted <br />
                        Planning Architecture
                    </motion.h1>
                </div>
            </div>
        </>
    );
};

export default AboutHeading;
