import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React, { useState } from "react";

const Homepage = (props) => {
    const project = props.project;
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % project.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + project.length) % project.length
        );
    };

    const setActiveSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <PageLayout title={"Home"}>
                <div className="relative slider">
                    <div className="absolute w-full h-screen opacity-[70%] -z-30 overlay">
                        <div className="w-full h-full bg-black"></div>
                    </div>
                    {project.map((project, index) => (
                        <div
                            key={index}
                            className={`absolute slide w-full h-screen -z-40 ${
                                index === currentSlide
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <img
                                src={`../storage/img/projects/${project.gambar_project}`}
                                alt="Studio I27 Highlighted Project"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                <ContainerLayout className="h-screen">
                    <div className="flex flex-col justify-between h-full home-item">
                        <div className="grid grid-cols-12 gap-4 text-white heading">
                            <h1 className="col-span-12 text-4xl font-semibold">
                                Welcome to Studio I27, where innovative design
                                meets precision engineering to transform visions
                                into timeless structures that inspire and
                                elevate the art of architecture.
                            </h1>
                            <h1 className="col-span-11 text-justify opacity-70">
                                Since 2012 we have served all kinds of design
                                plans from developers and custom projects
                                throughout Indonesia, and are still continuing
                                to this day. explore our projects and discover a
                                world where creativity and precision converge to
                                redefine architectural possibilities.
                            </h1>
                        </div>
                        <div className="flex items-end justify-between bottom-section">
                            <div className="flex gap-2 arrow-button">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 p-3 rounded-full bg-white/20 backdrop-blur-3xl left-arrow hover:cursor-pointer"
                                >
                                    <img
                                        src="../storage/img/icon/ph_arrow-up-light-1.svg"
                                        alt=""
                                    />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 p-3 rounded-full bg-white/20 backdrop-blur-3xl left-arrow hover:cursor-pointer"
                                >
                                    <img
                                        src="../storage/img/icon/ph_arrow-up-light.svg"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div className="relative w-[60%] flex gap-8 flex-col justify-end">
                                <div className="text-white text-end detail-project">
                                    {project[currentSlide] && (
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-3xl font-medium">
                                                {project[currentSlide].client
                                                    .nama_client +
                                                    " " +
                                                    project[currentSlide]
                                                        .nama_project}
                                            </h2>
                                            <h2 className="text-2xl font-light">
                                                {project[currentSlide].client
                                                    .lokasi_client +
                                                    ", Indonesia"}
                                            </h2>
                                        </div>
                                    )}
                                </div>
                                <div className="overflow-hidden gallery-container">
                                    <div className="flex justify-end gap-8">
                                        {project.map((project, index) => (
                                            <div
                                                key={index}
                                                className="w-40 h-20 overflow-hidden"
                                                onClick={() =>
                                                    setActiveSlide(index)
                                                }
                                            >
                                                <img
                                                    src={`../storage/img/projects/${project.gambar_project}`}
                                                    alt="Stuio I27 Highlighted Project"
                                                    className="object-cover w-full h-full hover:cursor-pointer"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </PageLayout>
        </>
    );
};

export default Homepage;
