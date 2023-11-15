import React from "react";
import Marquee from "react-fast-marquee";

const ClientSection = (props) => {
    return (
        <>
            <div className="relative py-16 gradient">
                <div className="absolute top-0 z-40 xl:w-96 md:w-52 w-24 h-full bg-gradient-to-r from-[#f2f2f2] from-35%"></div>
                <div className="absolute top-0 right-0 z-40 xl:w-96 w-24 md:w-52 h-full bg-gradient-to-l from-[#f2f2f2] from-35%"></div>
                <Marquee
                    speed={50}
                    className="relative flex items-center w-full h-full"
                >
                    <div className="flex items-center justify-center h-full gap-24 px-12">
                        {props?.client.map((data, index) => {
                            return (
                                <div key={index}>
                                    <div className="w-full p-2 bg-white shadow-md img">
                                        <img
                                            src={`../storage/img/clients/${data?.logo_client}`}
                                            className="h-24"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default ClientSection;
