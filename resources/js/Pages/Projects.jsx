import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";

const Projects = (props) => {
    const project = props.data;
    console.log("Props received by Projects component:", props);

    return (
        <>
            <PageLayout title={"Projects"} currentPath={"projects"}>
                <ContainerLayout className="h-screen">
                    <div className="h-full">
                        <div>
                            <h1 className="text-[#F24D03] text-2xl font-medium">
                                PROJECTS
                            </h1>
                            <p className="text-[#000000] text-5xl font-bold mt-4 grid grid-cols-2">
                                Projects are windows to rethink, redesign, and
                                reshape futures.
                            </p>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {project.map((project, index) => (
                                    <div className="relative h-96" key={index}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black from-1%  to-transparent to-99% opacity-70 overlay"></div>
                                        <img
                                            src={`../storage/img/projects/${project.gambar_project}`}
                                            alt="Studio I27 Highlighted Project"
                                            className="object-cover w-full h-full"
                                        />

                                        <div className="absolute bottom-0 left-0 text-white p-4">
                                            <h2 className="text-2xl tracking-wide">
                                                {project.nama_project}
                                            </h2>
                                            <p className="text-[15px] font-extralight tracking-wide">
                                                {project.client.lokasi_client},
                                                Indonesia
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </PageLayout>
        </>
    );
};

export default Projects;
