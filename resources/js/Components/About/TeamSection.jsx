import React from "react";

const TeamSection = ({ data }) => {
    return (
        <div className="mt-20 team-section">
            <div className="flex flex-col items-center w-full heading">
                <h1 className="text-4xl font-semibold text-center md:text-5xl">
                    Meet The Team
                </h1>
                <p className="mt-5 text-lg text-center md:text-2xl opacity-60">
                    Our diverse team brings together expertise in architecture,
                    design, and project management, dedicated to turning your
                    vision into reality.
                </p>
            </div>
            <div className="flex flex-col grid-cols-12 gap-5 mt-10 md:justify-between md:gap-6 md:grid team-items">
                {data.map((team, index) => (
                    <div
                        className="w-full duration-500 bg-transparent team-photo-card lg:col-span-4 md:col-span-6"
                        key={index}
                    >
                        <div className="w-full duration-500 h-96 team-photo">
                            <img
                                src={`../storage/img/team/${team.foto}`}
                                alt=""
                                className="object-cover object-top w-full h-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col gap-1 mt-3 team-detail">
                            <h1 className="text-xl font-semibold">
                                {team.nama}
                            </h1>
                            <h1 className="text-xl font-light">
                                {team.jabatan}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
