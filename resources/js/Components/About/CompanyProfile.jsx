import React from "react";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";

const CompanyProfile = (props) => {
    const kantor = props.foto.map((data) => {
        return {
            src: `../storage/img/projects/${data.gambar_project}`,
            width: 300,
            height: Math.random() * 200 + 100,
        };
    });

    return (
        <>
            <div className="h-[30rem] overflow-hidden mt-12">
                <PhotoAlbum photos={kantor} layout="masonry" />
            </div>
            <div className="container relative pb-8 mt-8 sm:px-6 company-profile-section">
                <motion.h1
                    className="absolute hidden lg:block md:right-0 text-8xl -z-30"
                    style={{ y: props.y4, rotate: 90, x: 20 }}
                >
                    Company <br /> Profile
                </motion.h1>
                <table className="border-separate border-spacing-x-4 border-spacing-y-8">
                    <tbody>
                        <tr>
                            <td className="p-4 border-black border-y-2">
                                Name
                            </td>
                            <td className="p-4 border-black border-y-2 text-[#f24c03]">
                                I27 Studio
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-black border-y-2">
                                Address
                            </td>
                            <td className="p-4 border-black border-y-2 text-[#f24c03]">
                                Blok I20/20, Taman Carribian, Citra Raya,
                                Kabupaten Tangerang
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-black border-y-2">
                                Email
                            </td>
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
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CompanyProfile;
