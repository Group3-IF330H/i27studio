import React from "react";
import { motion, stagger } from "framer-motion";

const VisionMission = () => {
    return (
        <>
            <div className="container relative flex flex-col gap-20 px-8 xl:flex-row visi-misi">
                <div className="flex flex-col gap-4 visi">
                    <motion.h1
                        className="text-7xl xl:text-8xl"
                        initial={{ opacity: 0, translateY: 200 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1.7, type: "spring" }}
                    >
                        Vision
                    </motion.h1>
                    <motion.p
                        className="font-normal opacity-90 xl:text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Become a quality and trusted planning architecture
                        consulting company that guarantees service user
                        satisfaction.
                    </motion.p>
                </div>
                <div className="flex flex-col gap-4 misi">
                    <motion.h1
                        className="text-7xl xl:text-8xl"
                        initial={{ opacity: 0, translateY: 200 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{
                            delay: 0.7,
                            duration: 1.7,
                            type: "spring",
                        }}
                        viewport={{ once: true }}
                    >
                        Mission
                    </motion.h1>
                    <motion.p
                        className="font-normal opacity-90 xl:text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        viewport={{ once: true }}
                    >
                        Providing professional and reliable architectural
                        consulting services to clients.
                        <br />
                        <br />
                        Understand client needs and expectations in order to
                        provide architectural solutions that match budget, wants
                        and functional requirements.
                        <br />
                        <br />
                        Build long-term relationships with clients and related
                        parties to ensure the success of the overall
                        architectural project.
                    </motion.p>
                </div>
            </div>
        </>
    );
};

export default VisionMission;
