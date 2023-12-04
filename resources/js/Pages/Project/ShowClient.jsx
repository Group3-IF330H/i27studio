import CallToAction from "@/Components/CallToAction";
import ClientsProjects from "@/Components/Projects/ClientsProjects";
import Paginator from "@/Components/Projects/Paginator";
import TextReveal from "@/Components/TextReveal";
import PageLayout from "@/Layouts/PageLayout";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

const ShowClient = (props) => {
    const logo = props.projects.data[0].client.logo_client;
    const projects = props.projects.data;
    const gone = props.projects.current_page === 1 ? true : false;

    const openImageModal = (imageUrl, nama, client) => {
        const modal = document.getElementById("image-modal");
        const imageSrc = document.getElementById("image-modal-src");
        const nama_project = document.getElementById("nama_project");

        imageSrc.src = `../public/img/projects/${imageUrl}`;
        nama_project.innerHTML = nama + " - " + client;
        modal.classList.remove("hidden");
    };

    const closeImageModal = () => {
        const modal = document.getElementById("image-modal");
        modal.classList.add("hidden");
    };

    return (
        <>
            <PageLayout title={props.client}>
                <div
                    className="fixed top-0 left-0 z-[1000] hidden w-full h-full bg-black bg-opacity-80"
                    id="image-modal"
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <motion.div
                            className="relative w-fit h-3/4"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-5%  from-white to-transparent to-30%"></div>
                            <img
                                src=""
                                alt=""
                                className="object-contain w-full h-full"
                                id="image-modal-src"
                            />
                            <h1
                                className="absolute text-3xl underline uppercase underline-offset-4 top-5 left-5"
                                id="nama_project"
                            ></h1>
                            <div
                                className="absolute z-50 shadow-2xl border border-[#f24c03] flex items-center justify-center w-8 h-8 text-3xl text-[#f24c03] bg-white rounded-full cursor-pointer md:w-10 md:h-10 top-5 right-5"
                                id="close-modal"
                                onClick={closeImageModal}
                            >
                                <XMarkIcon width={30} />
                            </div>
                        </motion.div>
                    </div>
                </div>
                {gone && (
                    <div
                        className="flex flex-col items-center justify-center h-screen gap-5 py-20"
                        id="title"
                    >
                        <div className="image">
                            <img
                                src={`../public/img/clients/${logo}`}
                                alt="Logo Client"
                                className="h-40 shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-6 nama-lokasi">
                            <h1 className="text-4xl md:text-8xl">
                                {props.client}
                            </h1>
                            <p className="text-lg md:text-2xl opacity-30">
                                {props.projects.data[0].client.lokasi_client}
                            </p>
                        </div>
                    </div>
                )}
                <div className="px-8 pt-20 all-clients-projects" id="title">
                    <div className="text-5xl text sm:text-8xl">
                        {props.client}'s Projects
                    </div>
                    <div className="grid w-full mt-16 gap-x-4 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {projects?.map((data, index) => {
                            return (
                                <div
                                    onClick={() =>
                                        openImageModal(
                                            data.gambar_project,
                                            data.nama_project,
                                            data.client.nama_client
                                        )
                                    }
                                >
                                    <ClientsProjects
                                        data={data}
                                        index={index}
                                        key={index}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Paginator meta={props.projects} />
                </div>
                <CallToAction
                    text={"Back To all Projects"}
                    href={route("project.category", { category: "all" })}
                />
            </PageLayout>
        </>
    );
};

export default ShowClient;
