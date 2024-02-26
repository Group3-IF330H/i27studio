import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import CallToActionWhatsapp from "@/Components/CallToActionWhatsapp";
import Map from "@/Components/Map";
import React from "react";

const Contact = () => {

    return (
        <>
            <PageLayout title={"Contact"}>
                <ContainerLayout className="h-screen flex flex-col">
                    <h1 className="text-[#f24D03] text-xl 2xl:text-2xl font-medium">CONTACT</h1>
                    <h1 className="text-[#000000] text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pt-5 font-bold">Reach out. Let's discuss<br />your vision. Contact<br />details below.</h1>

                    <div className="contact-item grid 2xl:grid-cols-12 xl:grid-cols-10 gap-5 xl:pt-7 2xl:pt-10 w-full">
                        <div className="map grid 2xl:col-span-7 xl:col-span-5 drop-shadow-lg">
                            <Map />
                        </div>

                        <div className="contact-data 2xl:col-span-5 xl:col-span-5 grid pl-5 xl:gap-3 2xl:gap-6">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <h1 className="font-semibold xl:text-xl 2xl:text-2xl">Location</h1>
                                    <h1 className="data-text font-light text-[#000000] opacity-50 xl:text-lg 2xl:text-xl">Blok 120/20, Taman Carribian, Citra Raya, Kabupaten Tangerang</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 xl:gap-10 2xl:gap-11">
                                <div className="col-span-6">
                                    <h1 className="font-semibold xl:text-xl 2xl:text-2xl">Email</h1>
                                    <h1 className="font-light text-[#000000] opacity-50 xl:text-lg 2xl:text-xl">studioi27@yahoo.com</h1>
                                </div>
                                <div className="col-span-6">
                                    <h1 className="font-semibold xl:text-xl 2xl:text-2xl">Contact</h1>
                                    <h1 className="font-light text-[#000000] opacity-50 xl:text-lg 2xl:text-xl">(021) 59404099</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 xl:gap-10 2xl:gap-11">
                                <div className="col-span-6">
                                    <h1 className="font-semibold xl:text-xl 2xl:text-2xl">Contact Person 1</h1>
                                    <h1 className="font-light text-[#000000] opacity-50 xl:text-lg 2xl:text-xl">+62 812-1049-8587<br />[ Retno Datmayanti ]</h1>
                                </div>
                                <div className="col-span-6">
                                    <h1 className="font-semibold xl:text-xl 2xl:text-2xl">Contact Person 2</h1>
                                    <h1 className="font-light text-[#000000] opacity-50 xl:text-lg 2xl:text-xl">+62 815-1074-8047<br />[ Neneng Ratna ]</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-12">
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