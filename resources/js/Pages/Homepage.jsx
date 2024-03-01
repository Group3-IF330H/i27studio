import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevButton from "@/Components/Homepage/PrevButton";
import NextButton from "@/Components/Homepage/NextButton";

const Homepage = (props) => {
    const project = props.project;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % project.length);
        slider?.current?.slickNext();
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + project.length) % project.length
        );
        slider?.current?.slickPrev();
    };

    const setActiveSlide = (index) => {
        setCurrentSlide(index);
    };

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slideToScroll: 1,
        speed: 1000,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <>
            <PageLayout title={"Home"} currentPath={"home"}>
                <div className="relative slider">
                    <div className="absolute w-full h-screen opacity-[70%] -z-30 overlay">
                        <div className="w-full h-full bg-black"></div>
                    </div>
                    {project.map((project, index) => (
                        <div
                            key={index}
                            className={`absolute slide w-full h-screen -z-40 ${
                                index === currentSlide
                                    ? "opacity-100 duration-1000"
                                    : "opacity-0 duration-1000"
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
                        <div className="flex flex-col grid-cols-12 gap-4 text-white lg:grid heading">
                            <h1 className="col-span-12 text-lg font-semibold text-center lg:text-start md:text-3xl lg:text-4xl">
                                Welcome to Studio I27, where innovative design
                                meets precision engineering to transform visions
                                into timeless structures that inspire and
                                elevate the art of architecture.
                            </h1>
                            <h1 className="text-xs text-center md:text-base lg:col-span-11 opacity-70 lg:text-justify">
                                Since 2012 we have served all kinds of design
                                plans from developers and custom projects
                                throughout Indonesia, and are still continuing
                                to this day. explore our projects and discover a
                                world where creativity and precision converge to
                                redefine architectural possibilities.
                            </h1>
                        </div>
                        <div className="flex items-end justify-between bottom-section">
                            <div className="hidden gap-2 lg:flex arrow-button">
                                <PrevButton prevSlide={prevSlide} />
                                <NextButton nextSlide={nextSlide} />
                            </div>

                            <div className="relative flex flex-col items-end lg:w-[80%] w-[100%] gap-8">
                                <div className="w-full text-white text-end detail-project">
                                    {project[currentSlide] && (
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-medium text-center lg:text-end md:text-3xl">
                                                {project[currentSlide].client
                                                    .nama_client +
                                                    " " +
                                                    project[currentSlide]
                                                        .nama_project}
                                            </h2>
                                            <h2 className="font-light text-center md:text-2xl lg:text-end">
                                                {project[currentSlide].client
                                                    .lokasi_client +
                                                    ", Indonesia"}
                                            </h2>
                                        </div>
                                    )}
                                </div>
                                <div className="slider-container lg:w-[70%] 2xl:w-[45%] w-[100%]">
                                    <Slider
                                        {...settings}
                                        ref={slider}
                                        className="flex gap-10"
                                    >
                                        {project.map((project, index) => (
                                            <div
                                                key={index}
                                                className={`h-20 ${
                                                    index === currentSlide
                                                        ? "duration-500"
                                                        : "opacity-70"
                                                }`}
                                                style={{ width: 200 }}
                                            >
                                                <img
                                                    src={`../storage/img/projects/${project.gambar_project}`}
                                                    alt="Studio I27 Highlighted Project"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
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
