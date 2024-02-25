import React from "react";

const ContainerLayout = ({ children, className = "" }) => {
    return (
        <div
            className={
                `container-layout ml-[320px] px-[70px] py-[64px] ` + className
            }
        >
            {children}
        </div>
    );
};

export default ContainerLayout;
