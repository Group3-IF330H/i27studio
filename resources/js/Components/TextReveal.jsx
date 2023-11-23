import React from "react";
import ShapeAnimation from "./ShapeAnimation";

const TextReveal = ({ children }) => {
    return (
        <>
            <div className="relative overflow-hidden heading w-fit">
                {children}
                <ShapeAnimation />
            </div>
        </>
    );
};

export default TextReveal;
