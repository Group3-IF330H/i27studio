import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import ServiceSection from "@/Components/Homepage/ServiceSection";
import ClientSection from "@/Components/Homepage/ClientSection";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Homepage = (props) => {
    const client = props.client;
    const project = props.project;

    const banyakClient = props.client.length;
    const banyakProject = props.project.length;

    const count1 = useMotionValue(0);
    const jmlhClient = useTransform(count1, Math.round);

    const count2 = useMotionValue(0);
    const jmlhProject = useTransform(count2, Math.round);

    useEffect(() => {
        const client = animate(count1, banyakClient, { duration: 2 });
        const project = animate(count2, banyakProject, { duration: 2 });

        return () => {
            client.stop();
            project.stop();
        };
    }, []);

    return (
        <>
            <PageLayout
                title="Homepage"
                heading={
                    <span>
                        WE ARE <br />
                        ARCHITECT CONSULTANT
                    </span>
                }
                tag={
                    <>
                        <div className="container flex flex-col gap-8 wrapper">
                            <h1 className="md:w-[50%] text-sm md:text-lg opacity-70">
                                Our company has been engaged in architectural
                                services since 2012. So far we have provided
                                many services to large developers in Indonesia
                                such as the Ciputra group, Paramount land, BSA
                                Land, Kota Wisata, Legenda Wisata, Mitra Garden,
                                Wartawangsa, etc.
                            </h1>
                            <div className="flex flex-col gap-8 md:flex-row number">
                                <h1 className="text-lg">
                                    <div className="flex items-center gap-2 client">
                                        <div className="angka text-8xl text-[#f24c03]">
                                            <motion.h1>{jmlhClient}</motion.h1>
                                        </div>
                                        <div className="+client">
                                            <p className="text-5xl">+</p>
                                            <p>Clients</p>
                                        </div>
                                    </div>
                                </h1>
                                <h1 className="text-lg">
                                    <div className="flex items-center gap-2 projects">
                                        <div className="angka text-8xl text-[#f24c03]">
                                            <motion.h1>{jmlhProject}</motion.h1>
                                        </div>
                                        <div className="+projects">
                                            <p className="text-5xl">+</p>
                                            <p>Projects</p>
                                        </div>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </>
                }
            >
                <ClientSection client={client} />
                <ServiceSection />
                <div className="flex flex-col gap-64 featured-project">
                    <div className="relative project-item h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url('../storage/Picture1.jpg')]">
                        <motion.div
                            initial={{
                                translateX: -200,
                                opacity: 0,
                            }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 2.5, type: "spring" }}
                            className="absolute pr-16 text-5xl tracking-tighter underline left-12 md:left-24 -top-8 md:-top-8 xl:-top-12 title xl:text-8xl md:text-6xl"
                        >
                            BLOK FG CITRA 8
                        </motion.div>
                        <motion.div
                            initial={{
                                translateY: 100,
                                opacity: 0,
                                zIndex: 20,
                            }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                            className="absolute flex flex-col justify-between w-full gap-4 py-12 pl-12 pr-20 text-white shadow-xl md:w-max xl:gap-32 xl:flex-row xl:right-24 -bottom-12 detail bg-zinc-800"
                        >
                            <div className="flex items-center gap-4 xl:items-start xl:flex-col kategori">
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
                                    className="text-xl font-bold"
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
                                    className="text-md opacity-30"
                                >
                                    Commercial
                                </motion.span>
                            </div>
                            <div className="flex items-center gap-4 xl:items-start xl:flex-col lokasi">
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
                                    className="text-xl font-bold"
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
                                    className="text-md opacity-30"
                                >
                                    Jakarta
                                </motion.span>
                            </div>
                            <div className="flex items-center gap-4 xl:items-start xl:flex-col nama-client">
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
                                    className="text-xl font-bold"
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
                                    className="text-md opacity-30"
                                >
                                    Citra 8
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex items-center justify-center h-screen to-all-projects">
                    <span className="xl:text-[128px] md:text-6xl text-4xl pb-3 text-[#000] border-b-4 border-[#000]">
                        SEE ALL PROJECTS
                    </span>
                </div>
            </PageLayout>
        </>
    );
};

export default Homepage;
