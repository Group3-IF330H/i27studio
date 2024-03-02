import React from "react";

const styles = {
    "@media screen and (min-width: 1920px)": {
        dataText: {
            fontSize: "1.5rem",
            padding: "0.75rem",
        },
    },
};

const CallToActionWhatsapp = () => {
    const handleWhatsappClick = () => {
        const phoneNumber = "62881025285404";
        const chat = "testing";
        window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
            chat
        )}`;
    };

    return (
        <button
            className="group border border-1 border-[#F24D03] hover:bg-[#F24D03] col-span-12 flex flex-row justify-between px-3 w-full"
            onClick={handleWhatsappClick}
        >
            <h1 className="lg:text-xl text-[#F24D03] group-hover:text-white p-2 mt-0.5 transition-colors duration-300 ease-in-out">
                Direct Contact to Whatsapp
            </h1>
            <div className="p-3 mt-2.5 w-5 relative">
                <img
                    className="absolute inset-0 object-cover w-full h-full transition duration-300 opacity-100 group-hover:opacity-0"
                    src="../storage/img/icon/whatsappNew.svg"
                    alt="STUDIO I27 INSTAGRAM"
                    display="block"
                />
                <img
                    className="absolute inset-0 object-cover w-full h-full transition duration-300 opacity-0 group-hover:opacity-100"
                    src="../storage/img/icon/whatsappWhite.svg"
                    alt="STUDIO I27 INSTAGRAM"
                    display="none"
                />
            </div>
        </button>
    );
};

export default CallToActionWhatsapp;
