import TextReveal from "@/Components/TextReveal";
import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Projects = (props) => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollY, [40, 2000], ["0%", "-150%"]);
    return (
        <>
            <PageLayout
                title={"Projects"}
                heading={
                    <h1 className="text-[5rem] xl:text-[11.25rem]">Projects</h1>
                }
            >
                <section
                    ref={targetRef}
                    className="relative h-[200vh] mt-40 mb-16"
                >
                    <div className="sticky top-0 flex flex-col justify-center px-8 overflow-hidden">
                        <div className="container pt-8 text-4xl">
                            <h1>
                                Strengthening architectural visions through
                                collaborative synergy, empowering innovative
                                designs and sustainable spaces.
                            </h1>
                        </div>
                        <motion.div style={{ x }} className="flex gap-2 mt-16">
                            {props.project.map((data, index) => {
                                return (
                                    <div className="project">
                                        <div className="card w-[30rem] h-96 bg-slate-300"></div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
                <div className="px-8 all-projects">
                    <div className="heading-all-projects text-8xl">
                        All Projects
                    </div>
                    <div className="grid w-full mt-16 gap-x-4 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {props.project.map((data, index) => {
                            return (
                                <div className="project" key={index}>
                                    <div className="mb-4 text-3xl nama-client">
                                        {data.client.nama_client}
                                    </div>
                                    <div className="relative overflow-hidden h-96 card bg-slate-300">
                                        <div className="absolute w-full h-full text-white duration-150 bg-black bg-opacity-0 opacity-0 cursor-pointer hover:opacity-100 hover:text-opacity-100 black-overlay hover:bg-opacity-70">
                                            <h1 className="flex items-center justify-center h-full text-2xl uppercase">
                                                {data.nama_project}
                                            </h1>
                                        </div>
                                        <img
                                            src={`../storage/img/projects/${data.gambar_project}`}
                                            alt="projects"
                                            className="object-cover object-center w-full h-full"
                                        />
                                        <div className="absolute px-4 py-4 w-[90%] left-0 right-0 mx-auto bottom-0 mb-6 h-max bg-white z-50 flex justify-between">
                                            <div className="kategori">
                                                <h1 className="text-lg">
                                                    Category
                                                </h1>
                                                <p className="font-normal opacity-50">
                                                    {
                                                        data.category
                                                            .nama_category
                                                    }
                                                </p>
                                            </div>
                                            <div className="text-right lokasi">
                                                <h1 className="text-lg">
                                                    Location
                                                </h1>
                                                <p className="font-normal opacity-50">
                                                    {data.client.lokasi_client}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center justify-center h-screen to-contact">
                    <TextReveal>
                        <Link href="/contact">
                            <span className="xl:text-[8rem] md:text-6xl text-4xl pb-3 text-[#000] border-b-4 border-[#000]">
                                Contact Us?
                            </span>
                        </Link>
                    </TextReveal>
                </div>
            </PageLayout>
        </>
    );
};

export default Projects;
