import React from "react";
import { motion } from "framer-motion";

const CompanyProfile = (props) => {
    const kantor = [
        "../storage/img/about/kantor/K-01.jpg",
        "../storage/img/about/kantor/K-02.jpg",
        "../storage/img/about/kantor/K-03.jpg",
        "../storage/img/about/kantor/K-04.jpg",
        "../storage/img/about/kantor/K-05.jpg",
        "../storage/img/about/kantor/K-06.jpg",
        "../storage/img/about/kantor/K-07.jpg",
        "../storage/img/about/kantor/K-08.jpg",
        "../storage/img/about/kantor/K-09.jpg",
        "../storage/img/about/kantor/K-10.jpg",
        "../storage/img/about/kantor/K-11.jpg",
    ];
    return (
        <>
            <div className="container relative pb-8 mt-8 sm:px-6 company-profile-section">
                <div className="flex justify-center image-kantor">
                    {kantor?.map((data, index) => {
                        return (
                            <motion.img
                                key={index}
                                src={data}
                                alt="kantor"
                                className="object-cover w-[15%] h-[20rem]"
                                style={{ y: props.y3, x: -50 }}
                                loading="lazy"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                        );
                    })}
                </div>
                <motion.h1
                    className="absolute hidden lg:block md:right-0 text-8xl -z-30"
                    style={{ y: props.y4, rotate: 90, x: 20 }}
                >
                    Company <br /> Profile
                </motion.h1>
                <table className="border-separate border-spacing-x-4 border-spacing-y-8">
                    <tr>
                        <td className="p-4 border-black border-y-2">Name</td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            I27 Studio
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-black border-y-2">Address</td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            Blok I20/20, Taman Carribian, Citra Raya, Kabupaten
                            Tangerang
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-black border-y-2">Email</td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            studioi27@yahoo.com
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-black border-y-2">
                            Contact Number
                        </td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            (021)59404099
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-black border-y-2">
                            Contact Person(1)
                        </td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            0812-1049-8587 / Retno Datmayanti
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-black border-y-2">
                            Contact Person(2)
                        </td>
                        <td className="p-4 border-black border-y-2 text-[#f24c03]">
                            0815-1074-8047 / Neneng Ratna
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default CompanyProfile;
