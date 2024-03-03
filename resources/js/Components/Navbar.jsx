import React from "react";
import NavLink from "./NavLink";

const Navbar = ({ currenPath }) => {
    const handleWhatsappClick = () => {
        const phoneNumber = "62881025285404";
        const chat = "Halo";
        window.open(
            "https://api.whatsapp.com/send?phone=" +
                phoneNumber +
                "&text=" +
                encodeURIComponent(chat)
        );
    };

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/studioi27architect");
    };

    return (
        <div className="fixed w-[320px] h-screen py-[64px] bg-[#EEEEEE] Navbar hidden lg:block">
            <div className="flex flex-col items-center justify-between h-full items">
                <img
                    src={`../logo.png`}
                    alt="STUDIO I27 LOGO"
                    className="w-32"
                />
                <div className="flex flex-col w-full gap-6 text-lg text-center nav-items">
                    <NavLink href="/clients" active={currenPath === "clients"}>
                        Clients
                    </NavLink>
                    <NavLink href="/about" active={currenPath === "about"}>
                        About
                    </NavLink>
                    <NavLink href="/" active={currenPath === "home"}>
                        Home
                    </NavLink>
                    <NavLink
                        href="/projects/all"
                        active={currenPath === "projects"}
                    >
                        Projects
                    </NavLink>
                    <NavLink href="/contact" active={currenPath === "contact"}>
                        Contact
                    </NavLink>
                </div>
                <div className="flex gap-8 social-media">
                    <button
                        onClick={handleInstagramClick}
                        className="duration-300 ig hover:scale-125 hover:duration-300 hover:cursor-pointer"
                    >
                        <img
                            src="../storage/img/icon/mdi_instagram.svg"
                            alt="STUDIO I27 INSTAGRAM"
                        />
                    </button>
                    <button
                        onClick={handleWhatsappClick}
                        className="duration-300 whatsapp ig hover:scale-125 hover:duration-300 hover:cursor-pointer"
                    >
                        <img
                            src="../storage/img/icon/mdi_whatsapp.svg"
                            alt="STUDIO I27 INSTAGRAM"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
