import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import CallToActionWhatsapp from "@/Components/CallToActionWhatsapp";
import Map from "@/Components/Map";
import React from "react";
import Heading from "@/Components/Heading";

const Contact = () => {
    return (
        <>
            <PageLayout title={"Contact"} currentPath={"contact"}>
                <ContainerLayout className="flex flex-col lg:h-screen">
                    <Heading
                        pageName={"CONTACT"}
                        pageDescription={
                            "Reach out. Let's discuss your vision. Contact details below."
                        }
                    />
                    <div className="flex flex-col grid-cols-12 gap-10 lg:h-full lg:grid">
                        <div className="col-span-6 h-60 map lg:h-full">
                            <Map />
                        </div>
                        <div className="flex flex-col col-span-6 gap-6 lg:gap-0 lg:justify-between">
                            <div className="location">
                                <h1 className="text-xl font-semibold 2xl:text-2xl">
                                    Location
                                </h1>
                                <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                    Blok I20/20, Taman Carribian, Citra Raya,
                                    Kabupaten Tangerang
                                </p>
                            </div>
                            <div className="flex flex-col grid-cols-12 gap-6 lg:grid email-and-contact">
                                <div className="col-span-6 Email">
                                    <h1 className="text-xl font-semibold 2xl:text-2xl">
                                        Email
                                    </h1>
                                    <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                        studioi27@yahoo.com
                                    </p>
                                </div>
                                <div className="col-span-6 Contact ">
                                    <h1 className="text-xl font-semibold 2xl:text-2xl">
                                        Contact
                                    </h1>
                                    <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                        0881-0252-85404
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col grid-cols-12 gap-6 lg:grid contact-person">
                                <div className="col-span-6 person1">
                                    <h1 className="text-xl font-semibold 2xl:text-2xl">
                                        Contact Person 1
                                    </h1>
                                    <div className="flex gap-2 lg:block contact-detail">
                                        <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                            0812-1049-8587
                                        </p>
                                        <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                            [ Retno Datmayanti ]
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-6 person2">
                                    <h1 className="text-xl font-semibold 2xl:text-2xl">
                                        Contact Person 2
                                    </h1>
                                    <div className="flex gap-2 lg:block contact-detail">
                                        <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                            0815-1074-8047
                                        </p>
                                        <p className="mt-1 font-light opacity-50 lg:mt-2 2xl:text-xl">
                                            [ Neneng Ratna ]
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="WhatsappButton">
                                <CallToActionWhatsapp />
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </PageLayout>
        </>
    );
};

export default Contact;
