import React from "react";

const ContainerLayout = ({ children, className = "" }) => {
    return (
        <div
            className={
                `container-layout lg:ml-[320px] lg:px-[70px] lg:py-[64px] pb-[32px] pt-[110px] px-8 md:px-12 ` +
                className
            }
        >
            {children}
        </div>
    );
};

export default ContainerLayout;
