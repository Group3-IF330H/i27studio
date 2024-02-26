import React from "react";

const NextButton = ({ nextSlide }) => {
    return (
        <button
            onClick={nextSlide}
            className="w-12 h-12 p-3 rounded-full bg-white/20 backdrop-blur-3xl left-arrow hover:cursor-pointer"
        >
            <img src="../storage/img/icon/ph_arrow-up-light.svg" alt="" />
        </button>
    );
};

export default NextButton;
