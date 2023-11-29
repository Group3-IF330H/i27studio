import ClientsProjects from "@/Components/Projects/ClientsProjects";
import Paginator from "@/Components/Projects/Paginator";
import TextReveal from "@/Components/TextReveal";
import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const ShowClient = (props) => {
    console.log(props);
    const logo = props.projects.data[0].client.logo_client;
    const projects = props.projects.data;
    const gone = props.projects.current_page === 1 ? true : false;

    return (
        <>
            <PageLayout title={props.client}>
                {gone && (
                    <div
                        className="flex flex-col items-center justify-center h-screen gap-5 py-20"
                        id="title"
                    >
                        <div className="image">
                            <img
                                src={`../../storage/img/clients/${logo}`}
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
                                <ClientsProjects data={data} index={index} />
                            );
                        })}
                    </div>
                    <Paginator meta={props.projects} />
                </div>
                <div className="flex items-center justify-center h-screen to-contact">
                    <TextReveal>
                        <Link href="/contact">
                            <span className="xl:text-[8rem] md:text-6xl text-4xl pb-3 text-[#000] border-b-4 border-[#000]">
                                Contact Us?
                            </span>
                        </Link>
                    </TextReveal>
                </div>
            </PageLayout>
        </>
    );
};

export default ShowClient;
