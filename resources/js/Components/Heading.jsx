import React from "react";

const Heading = ({ pageName, pageDescription }) => {
    return (
        <div
            className={`heading ` + pageDescription == null ? "mb-10" : "mb-4"}
        >
            <h1 className="text-[#f24D03] text-xl 2xl:text-2xl font-medium">
                {pageName}
            </h1>
            {pageDescription && (
                <h1 className="text-[#000000] text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pt-5 font-bold">
                    {pageDescription}
                </h1>
            )}
        </div>
    );
};

export default Heading;
