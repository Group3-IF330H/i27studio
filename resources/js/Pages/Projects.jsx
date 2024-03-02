import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import SearchFilterComponent from "@/Components/SearchFilterComponent";
import FilterButton from "@/Components/FilterButton";
import { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";

const Projects = (props) => {
    let project = props.data;
    // console.log("Props received by Projects component:", props);

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (searchTerm !== "") {
        project = project.filter((project) => {
            return project.nama_project
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

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
                        <div className="grid grid-cols-5 gap-4 mt-8">
                            <div className="col-span-4">
                                <SearchFilterComponent
                                    project={project}
                                    debounce={debouncedResults}
                                />
                            </div>
                            <div className="col-span-1 h-10">
                                <FilterButton />
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {project.map((project, index) => (
                                    <div className="relative h-96" key={index}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black from-1% to-transparent to-99% opacity-70 overlay"></div>
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
