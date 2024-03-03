import React from "react";

const PrevButton = ({ prevSlide }) => {
    return (
        <button
            onClick={prevSlide}
            className="w-12 h-12 p-3 rounded-full bg-white/20 backdrop-blur-3xl left-arrow hover:cursor-pointer"
        >
            <img
                src="../storage/img/icon/ph_arrow-up-light-1.svg"
                alt="Studio I27 Arrow"
            />
        </button>
    );
};

export default PrevButton;
