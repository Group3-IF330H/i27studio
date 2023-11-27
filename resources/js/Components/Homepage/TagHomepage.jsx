import React from "react";
import { motion } from "framer-motion";

const TagHomepage = (props) => {
    return (
        <>
            <div className="container flex flex-col gap-8 wrapper" id="title">
                <h1 className="md:w-[50%] text-sm md:text-lg opacity-70 font-normal">
                    Our company has been engaged in architectural services since
                    2012. So far we have provided many services to large
                    developers in Indonesia such as the Ciputra group, Paramount
                    land, BSA Land, Kota Wisata, Legenda Wisata, Mitra Garden,
                    Wartawangsa, etc.
                </h1>
                <div className="flex flex-col gap-8 md:flex-row number">
                    <h1 className="text-lg">
                        <div className="flex items-center gap-2 client">
                            <div className="angka text-8xl text-[#f24c03]">
                                <motion.h1>{props.jmlhClient}</motion.h1>
                            </div>
                            <div className="+client">
                                <p className="text-5xl">+</p>
                                <p>Clients</p>
                            </div>
                        </div>
                    </h1>
                    <h1 className="text-lg">
                        <div className="flex items-center gap-2 projects">
                            <div className="angka text-8xl text-[#f24c03]">
                                <motion.h1>{props.jmlhProject}</motion.h1>
                            </div>
                            <div className="+projects">
                                <p className="text-5xl">+</p>
                                <p>Projects</p>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default TagHomepage;
