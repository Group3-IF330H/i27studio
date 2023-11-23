import { motion } from "framer-motion";
import React from "react";

const ShapeAnimation = () => {
    return (
        <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="absolute bg-[#f24c03] z-50"
            style={{
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                originX: 1,
            }}
            viewport={{ once: true }}
        />
    );
};

export default ShapeAnimation;
