import React from "react";
import { motion } from "framer-motion";

const FeaturedProjects = (props) => {
    return (
        <>
            <div className="flex flex-col gap-64 featured-project">
                <div className="relative h-screen project-item">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={`../storage/${props.project.gambar_project}`}
                        alt="projects"
                        className="object-cover w-full h-full"
                        loading="lazy"
                    />
                    <motion.div
                        initial={{
                            translateX: -200,
                            opacity: 0,
                        }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 2.5, type: "spring" }}
                        viewport={{ once: true }}
                        className="absolute pr-16 text-5xl tracking-tighter underline left-12 md:left-24 -top-8 md:-top-8 xl:-top-12 title xl:text-8xl md:text-6xl"
                    >
                        {props?.project.nama_project}
                    </motion.div>
                    <motion.div
                        initial={{
                            translateY: 100,
                            opacity: 0,
                            zIndex: 20,
                        }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                        viewport={{ once: true }}
                        className="absolute flex flex-col justify-between w-full md:w-[50%] gap-2 py-6 px-4 md:pl-8 md:pr-16 text-white shadow-xl xl:pr-20 xl:pl-12 xl:py-12 xl:w-max xl:gap-32 xl:flex-row xl:right-24 xl:-bottom-12 detail bg-zinc-800"
                    >
                        <div className="flex items-center xl:gap-4 xl:items-start xl:flex-col kategori">
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="font-bold text-md xl:text-xl w-[6rem]"
                            >
                                Category
                            </motion.span>
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{
                                    translateY: 0,
                                    opacity: 0.3,
                                }}
                                transition={{
                                    duration: 1.3,
                                    type: "spring",
                                    delay: 0.7,
                                }}
                                viewport={{ once: true }}
                                className="text-sm xl:text-md opacity-30"
                            >
                                {props?.project.category.nama_category}
                            </motion.span>
                        </div>
                        <div className="flex items-center xl:gap-4 xl:items-start xl:flex-col lokasi">
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{
                                    translateY: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.1,
                                    type: "spring",
                                    delay: 0.9,
                                }}
                                viewport={{ once: true }}
                                className="font-bold text-md xl:text-xl w-[6rem]"
                            >
                                Location
                            </motion.span>
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{
                                    translateY: 0,
                                    opacity: 0.3,
                                }}
                                transition={{
                                    duration: 0.9,
                                    type: "spring",
                                    delay: 1.1,
                                }}
                                viewport={{ once: true }}
                                className="text-sm xl:text-md opacity-30"
                            >
                                {props?.project.client.lokasi_client}
                            </motion.span>
                        </div>
                        <div className="flex items-center xl:gap-4 xl:items-start xl:flex-col nama-client">
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{
                                    translateY: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.7,
                                    type: "spring",
                                    delay: 1.3,
                                }}
                                viewport={{ once: true }}
                                className="font-bold text-md xl:text-xl w-[6rem]"
                            >
                                Client
                            </motion.span>
                            <motion.span
                                initial={{
                                    translateY: 50,
                                    opacity: 0,
                                    zIndex: 20,
                                }}
                                whileInView={{
                                    translateY: 0,
                                    opacity: 0.3,
                                }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    delay: 1.5,
                                }}
                                viewport={{ once: true }}
                                className="text-sm xl:text-md opacity-30"
                            >
                                {props?.project.client.nama_client}
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProjects;
