import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";

const Client = (props) => {
    const client = props.client;
    const isTablet = window.innerWidth < 1024;

    return (
        <>
            <PageLayout title={"Client"} currentPath={"clients"}>
                <div className="relative">
                    <div className="absolute w-full h-screen opacity-[70%] -z-30 overlay">
                        <div className="w-full h-full bg-black"></div>
                    </div>
                    <div className="absolute w-full h-screen -z-40">
                        <img
                            src={`../storage/img/clients/bgclient.webp`}
                            alt="Studio I27 Client"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div
                        className="absolute flex items-center w-full h-screen overflow-hidden -z-20"
                        style={{
                            paddingLeft: isTablet ? "0" : "30%",
                            paddingTop: isTablet ? "50%" : "0",
                        }}
                    >
                        <Marquee
                            speed={100}
                            style={{
                                width: "100%",
                                position: "absolute",
                            }}
                            direction={isTablet ? "left" : "down"}
                        >
                            {client.map((client, index) => (
                                <div className="p-10" key={index}>
                                    <img
                                        className="w-32 p-6 bg-white 2xl:w-40"
                                        src={`../storage/img/clients/${client.logo_client}`}
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <ContainerLayout className="h-screen overflow-hidden">
                    <div className="justify-center w-full grid-cols-12 lg:w-full lg:grid lg:h-full h-[70%] items-center">
                        <div className="flex items-center justify-center col-span-6 gap-4 text-white h-[70%]">
                            <div className="flex flex-col items-center grid-cols-12 md:w-full lg:w-full lg:grid">
                                <h1 className="col-span-12 text-2xl font-semibold text-center md:text-4xl md:w-3/4 lg:text-start 2xl:text-5xl">
                                    Meet Our Esteemed Partners and Clients
                                </h1>
                                <h1 className="col-span-11 mt-4 text-xs text-center lg:w-full md:w-1/2 md:text-base lg:mt-6 text-md lg:text-start opacity-70">
                                    Our commitment to client satisfaction drives
                                    every aspect of our service, ensuring
                                    unparalleled support.
                                </h1>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </PageLayout>
        </>
    );
};

export default Client;
