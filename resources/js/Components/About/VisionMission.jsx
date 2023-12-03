import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../TextReveal";

const VisionMission = () => {
    const variants = {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <>
            <div className="container relative flex flex-col gap-20 px-8 xl:flex-row visi-misi">
                <div className="flex flex-col gap-4 visi">
                    <TextReveal>
                        <motion.h1
                            className="text-7xl xl:text-8xl"
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                delay: 0.7,
                            }}
                            viewport={{ once: true }}
                        >
                            Vision
                        </motion.h1>
                    </TextReveal>
                    <TextReveal>
                        <motion.p
                            className="font-normal opacity-90 xl:text-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Become a quality and trusted planning architecture
                            consulting company that guarantees service user
                            satisfaction.
                        </motion.p>
                    </TextReveal>
                </div>
                <div className="flex flex-col gap-4 misi">
                    <TextReveal>
                        <motion.h1
                            className="text-7xl xl:text-8xl"
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                delay: 0.7,
                            }}
                            viewport={{ once: true }}
                        >
                            Mission
                        </motion.h1>
                    </TextReveal>
                    <TextReveal>
                        <motion.p
                            className="font-normal opacity-90 xl:text-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Providing professional and reliable architectural
                            consulting services to clients.
                            <br />
                            <br />
                            Understand client needs and expectations in order to
                            provide architectural solutions that match budget,
                            wants and functional requirements.
                            <br />
                            <br />
                            Build long-term relationships with clients and
                            related parties to ensure the success of the overall
                            architectural project.
                        </motion.p>
                    </TextReveal>
                </div>
            </div>
        </>
    );
};

export default VisionMission;
