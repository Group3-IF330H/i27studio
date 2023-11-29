import React from "react";

const ClientsProjects = ({ data, index }) => {
    console.log(data);
    return (
        <>
            <div className="relative overflow-hidden h-max card" key={index}>
                <div className="nama-project">
                    <h1 className="mb-4 text-3xl">{data.nama_project}</h1>
                </div>
                <div className="absolute w-full h-full text-white duration-500 bg-black bg-opacity-0 opacity-0 cursor-pointer hover:opacity-100 hover:text-opacity-100 black-overlay hover:bg-opacity-70">
                    <h1 className="flex items-center justify-center h-full text-2xl text-center uppercase">
                        SEE IMAGE
                    </h1>
                </div>
                <img
                    src={`../../storage/img/projects/${data?.gambar_project}`}
                    alt="projects"
                    className="object-cover object-center w-full h-72"
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default ClientsProjects;
