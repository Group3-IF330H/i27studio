import PageLayout from "@/Layouts/PageLayout";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Paginator from "@/Components/Projects/Paginator";
import CategoryFilter from "@/Components/Projects/CategoryFilter";
import ProjectCard from "@/Components/Projects/ProjectCard";
import CallToAction from "@/Components/CallToAction";

const Projects = (props) => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollY, [40, 2000], ["0%", "-150%"]);
    const gone = props.project.current_page === 1 ? true : false;
    const cat = props.categoryNama === "all" ? true : false;
    return (
        <>
            <PageLayout
                title={"Projects"}
                heading={
                    gone &&
                    cat && (
                        <span
                            className="text-[5rem] md:text-[11.25rem]"
                            id="title"
                        >
                            Projects
                        </span>
                    )
                }
            >
                {gone && cat && (
                    <section
                        ref={targetRef}
                        className="relative h-[150vh] xl:mt-40 mt-16 mb-16"
                    >
                        <div className="sticky top-0 flex flex-col justify-center px-6 overflow-hidden md:px-8">
                            <div className="container pt-8 md:text-4xl">
                                <h1>
                                    Strengthening architectural visions through
                                    collaborative synergy, empowering innovative
                                    designs and sustainable spaces.
                                </h1>
                            </div>
                            <motion.div
                                style={{ x }}
                                className="flex gap-2 mt-16"
                            >
                                {props.project.data.map((data, index) => {
                                    return (
                                        <div className="project" key={index}>
                                            <div className="mb-4 text-3xl nama-client">
                                                {data.client.nama_client}
                                            </div>
                                            <div className="card w-[30rem] h-96 bg-slate-300">
                                                <img
                                                    src={`../storage/img/projects/${data.gambar_project}`}
                                                    alt=""
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>
                )}
                <div className="px-8 lg:pt-20 pt-28 all-projects" id="title">
                    <div className="text-5xl heading-all-projects sm:text-8xl">
                        {props.categoryNama.charAt(0).toUpperCase() +
                            props.categoryNama.slice(1)}{" "}
                        Projects
                    </div>
                    <CategoryFilter category={props.category} />
                    <div className="grid w-full mt-16 gap-x-4 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {props.project.data.map((data, index) => {
                            return (
                                <ProjectCard
                                    data={data}
                                    index={index}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                    <Paginator meta={props.project} />
                </div>
                <CallToAction text={"Contact Us?"} href={route("contact")} />
            </PageLayout>
        </>
    );
};

export default Projects;
