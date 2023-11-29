import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: 1.5,
                type: "spring",
                delay: 0.1,
            }}
            viewport={{ once: true }}
            className="project"
            key={index}
        >
            <div className="mb-4 text-3xl nama-client">
                {data.client.nama_client}
            </div>
            <Link
                href={route("project.show", {
                    client: data.client.nama_client,
                })}
            >
                <div className="relative overflow-hidden h-96 card bg-slate-300">
                    <div className="absolute w-full h-full text-white duration-500 bg-black bg-opacity-0 opacity-0 cursor-pointer hover:opacity-100 hover:text-opacity-100 black-overlay hover:bg-opacity-70">
                        <h1 className="flex items-center justify-center h-full text-2xl text-center uppercase">
                            {data.nama_project}
                        </h1>
                    </div>
                    <img
                        src={`../storage/img/projects/${data.gambar_project}`}
                        alt="projects"
                        className="object-cover object-center w-full h-full"
                        loading="lazy"
                    />
                    <div className="absolute px-4 py-4 w-[90%] left-0 right-0 mx-auto bottom-0 mb-6 h-max shadow-lg bg-white z-50 flex justify-between items-center">
                        <div className="kategori">
                            <h1 className="text-lg">Category</h1>
                            <p className="font-normal opacity-50">
                                {data.category.nama_category}
                            </p>
                        </div>
                        <div className="text-right lokasi">
                            <h1 className="text-lg">Location</h1>
                            <p className="font-normal opacity-50">
                                {data.client.lokasi_client}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
