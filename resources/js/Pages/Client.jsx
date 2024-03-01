import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";

const Client = (props) => {
    const client = props.client;

    return (
        <>
            <PageLayout title={"Client"}>
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
                    <div className="w-full h-screen flex items-center absolute -z-20 overflow-hidden"  style={{ paddingLeft: '30%' }}>
                            <Marquee
                                speed={100}
                                style={{
                                    width: '100%',
                                    position: 'absolute',
                                }}
                                direction={'down'}
                            >

                                {client.map((client, index) => (
                                    <div className="p-10" key={index}>
                                        <img className="w-32 2xl:w-40 p-6 bg-white" src={`../storage/img/clients/${client.logo_client}`} />
                                    </div>
                                ))}
                            </Marquee>
                    </div>
                </div>
                <ContainerLayout className="h-screen overflow-hidden">
                    <div className="grid grid-cols-12 h-full justify-items-center">
                        <div className="col-span-6 gap-4 text-white flex items-center">
                            <div className="grid grid-cols-12">
                                <h1 className="col-span-12 text-4xl 2xl:text-5xl font-semibold">
                                    Meet Our Esteemed Partners and Clients
                                </h1>
                                <h1 className="col-span-11 text-md 2xl:text-xl opacity-70 mt-6">
                                    Our commitment to client satisfaction drives every aspect of our service, ensuring unparalleled support.
                                </h1>
                            </div>
                        </div>
                        <div className="col-span-6 w-full h-full">
                        </div>
                    </div>
                </ContainerLayout>
                       
            </PageLayout>
        </>
    );
};

export default Client;