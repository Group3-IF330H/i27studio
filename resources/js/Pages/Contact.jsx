import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Contact = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, 1000]);

    const { setData, post, processing, reset, errors } = useForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        question: "",
    });

    function submit(e) {
        e.preventDefault();
        reset();
        post(route("contact.mail"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("The email has been sent");
            },
            onFinish: () => {
                reset();
            },
        });
    }

    return (
        <>
            <PageLayout title={"Contact"}>
                <div className="contact-content">
                    <motion.div
                        className="container relative px-8 heading-text text-[5rem] xl:text-[11.25rem] leading-none pt-20"
                        style={{ y: y1, zIndex: -40 }}
                        initial={{ translateX: -1000 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                    >
                        <h1 className="opacity-50 text-[#f24c03] -z-30 hello">
                            Let's <br />
                        </h1>
                        <h1 className="-z-30 hello">Get In Touch</h1>
                    </motion.div>
                    <motion.div
                        initial={{ translateY: 1000 }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                        className="container px-8 mt-8 box-form-wrapper"
                    >
                        <div className="z-50 w-full mb-32 border-2 border-black rounded-lg border-opacity-80 bg-slate-50 form-box bg-opacity-80 backdrop-blur">
                            <form
                                action=""
                                className="relative flex flex-col gap-16 px-8 pt-8 pb-20"
                            >
                                <div className="name">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="name"
                                    >
                                        Name{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        required
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mb-1"
                                    />
                                </div>
                                <div className="company-name">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="company"
                                    >
                                        Company Name{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Your Company Name"
                                        name="company"
                                        required
                                        onChange={(e) =>
                                            setData("company", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.company}
                                        className="mb-1"
                                    />
                                </div>
                                <div className="email" id="title">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="email"
                                    >
                                        Email Address{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="email"
                                        placeholder="hello@example.com"
                                        name="email"
                                        required
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mb-1"
                                    />
                                </div>
                                <div className="email-confirm">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="email-confirm"
                                    >
                                        Email Address Confirmation{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="email"
                                        placeholder="hello@example.com"
                                        name="email-confirm"
                                        required
                                    />
                                </div>
                                <div className="phone">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="phone"
                                    >
                                        Phone Number{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="number"
                                        placeholder="081234567890"
                                        name="phone"
                                        required
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.phone}
                                        className="mb-1"
                                    />
                                </div>
                                <div className="location">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="location"
                                    >
                                        Location{" "}
                                        <span className="text-[#f24c03]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Tangerang, Banten"
                                        name="location"
                                        required
                                        onChange={(e) =>
                                            setData("location", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.location}
                                        className="mb-1"
                                    />
                                </div>
                                <div className="question">
                                    <label
                                        className="block mb-2 text-xl font-bold tracking-wide uppercase"
                                        htmlFor="question"
                                    >
                                        Question
                                    </label>
                                    <textarea
                                        className="w-full pt-1 pb-3 leading-tight bg-transparent border-b-2 appearance-none placeholder:opacity-30 focus:border-b-2 focus:border-x-transparent focus:border-t-transparent focus:border-black border-x-transparent border-t-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quo quisquam temporibus unde doloremque in totam sint doloribus repellendus illum?"
                                        name="question"
                                        onChange={(e) =>
                                            setData("question", e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="absolute px-6 py-4 text-white uppercase bg-gray-800 rounded-md shadow-lg disabled:bg-slate-400 md:right-8 -bottom-6 w-max"
                                    disabled={processing}
                                    onClick={submit}
                                >
                                    Send Your Ideas
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </PageLayout>
        </>
    );
};

export default Contact;
