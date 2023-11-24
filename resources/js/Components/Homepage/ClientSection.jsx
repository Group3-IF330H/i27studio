import React from "react";
import Marquee from "react-fast-marquee";

const ClientSection = (props) => {
    return (
        <>
            <div className="relative py-32 gradient">
                <Marquee
                    speed={100}
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
