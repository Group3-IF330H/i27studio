import React from "react";
import ShapeAnimation from "./ShapeAnimation";

const TextReveal = ({ children }) => {
    return (
        <>
            <div className="relative w-full h-max heading">
                {children}
                <ShapeAnimation />
            </div>
        </>
    );
};

export default TextReveal;
