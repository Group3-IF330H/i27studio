import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import {
    ArrowUpRightIcon,
    PhotoIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const DetailProject = (props) => {
    const project = props.project;
    const [showImagePopup, setShowImagePopup] = useState(false);

    const handleSeeImageButtonClick = () => {
        setShowImagePopup(true);
    };

    const handleCloseImagePopup = () => {
        setShowImagePopup(false);
    };

    return (
        <>
            <PageLayout title={project.nama_project} currentPath={"details"}>
                <ContainerLayout className="h-screen">
                    <div className="flex flex-col h-full grid-cols-12 gap-5 md:gap-10 lg:grid">
                        <div className="col-span-6 project-image">
                            <img
                                src={`../storage/img/projects/${project.gambar_project}`}
                                alt=""
                                className="object-cover object-center h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between h-full col-span-6 lg:gap-0 project-detail">
                            <div className="flex flex-col gap-6 text-detail">
                                <div className="flex flex-col gap-2 md:gap-3 project-name">
                                    <h1 className="text-2xl md:text-4xl">
                                        Project Name
                                    </h1>
                                    <p className="md:text-2xl text-lg text-[#f24c03] font-light">
                                        {project.nama_project}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 md:gap-3 project-location">
                                    <h1 className="text-2xl md:text-4xl">
                                        Location
                                    </h1>
                                    <p className="md:text-2xl text-lg text-[#f24c03] font-light">
                                        {project.client.lokasi_client}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 md:gap-3 project-client">
                                    <h1 className="text-2xl md:text-4xl">
                                        Client
                                    </h1>
                                    <div className="flex items-center gap-3 client">
                                        <img
                                            src={`../storage/img/clients/${project.client.logo_client}`}
                                            alt=""
                                            className="object-cover object-center h-10 md:h-16"
                                        />
                                        <p className="md:text-2xl text-lg text-[#f24c03] font-light">
                                            {project.client.nama_client}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 button-detail">
                                <div className="see-image-button">
                                    <button
                                        onClick={handleSeeImageButtonClick}
                                        className="border border-[#f24c03] w-full py-3 justify-center flex items-center gap-2 hover:bg-[#f24c03] duration-300 hover:text-[#fafafa] text-[#f24c03]"
                                    >
                                        <PhotoIcon className="w-5 h-5" />
                                        <h1 className="">See Image</h1>
                                    </button>
                                </div>
                                <div className="see-image-button">
                                    <Link
                                        href={`/client-project/${project.client.nama_client}`}
                                        className="flex items-center justify-center w-full gap-2 py-3 border border-[#fafafa] bg-[#f24c03] hover:border-[#f24c03] hover:bg-[#fafafa] duration-300 hover:text-[#f24c03] text-[#fafafa] "
                                    >
                                        <h1>
                                            Check {project.client.nama_client}{" "}
                                            Projects
                                        </h1>
                                        <ArrowUpRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </PageLayout>
            {showImagePopup && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-90">
                    <div className="relative max-w-2xl max-h-96">
                        <button
                            className="absolute p-2 text-white bg-white rounded-full top-5 right-5"
                            onClick={handleCloseImagePopup}
                        >
                            <XMarkIcon className="w-6 h-6 text-[#f24c03]" />
                        </button>
                        <img
                            src={`../storage/img/projects/${project.gambar_project}`}
                            alt=""
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default DetailProject;
