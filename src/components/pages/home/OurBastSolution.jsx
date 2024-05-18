"use client";

import bestSolutionImage from "@/assets/image/bg/Elements.png";
import downloadOneImage from "@/assets/image/bg/download1.png";
import downloadTwoImage from "@/assets/image/bg/download2.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const OurBastSolution = () => {
    return (
        <div
        
            className="bg-secondary bg-cover bg-center rounded-t-3xl py-5 lg:py-10"
            style={{ backgroundImage: `url("${bestSolutionImage.src}")` }}
        >
            <Container>
                <div className="h-[100px]"></div>
                <div data-aos="zoom-in-up" className="px-6">
                    <div className="w-fit mx-auto">
                        <div className="flex justify-center gap-3">
                            <div className="bg-primary h-[1px] w-[69px] mt-2"></div>
                            <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base">
                                Our Best Solution
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row md:w-fit md:gap-3">
                            <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold">
                                Our Comprehensive
                            </h3>
                            <div>
                                <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                    Tech Solution
                                </h3>
                                <Image
                                    className="mx-auto mt-1 w-full lg:w-auto"
                                    src={subTitleBGImage.src}
                                    alt=""
                                    width={300}
                                    height={10}
                                />
                            </div>
                        </div>
                        <h3 className="text-center py-3 pb-10">
                            Your journey to digital excellence starts here.
                        </h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="bg-[#0F263E] rounded-3xl sm:w-1/2 lg:w-[70%] p-3.5 sm:p-10">
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                                <div className="">
                                    <h4 className="text-[#F5F9FD] text-[20px] lg:text-[32px] font-semibold pb-5">
                                        Al Driven Solutions
                                    </h4>
                                    <p className="pb-5 lg:pb-20">
                                        Revolutionize your customer interactions
                                        with our Al-driven applications and
                                        chatbots, offering efficient, automated
                                        solutions to improve user engagement &
                                        streamline operations.
                                    </p>
                                    <div className="">
                                        <button className="flex text-primary font-semibold rounded-[30px] items-center bg-white py-2 gap-2">
                                            <span className="pl-6 font-semibold">
                                                Learn More
                                            </span>
                                            <div className="inline-flex justify-center items-center bg-primary rounded-full text-white w-8 h-8 mr-2">
                                                <LuArrowUpRight
                                                    className="inline"
                                                    size={20}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <Image
                                    src={downloadOneImage.src}
                                    alt=""
                                    width={300}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="bg-[#0F263E] rounded-3xl sm:w-1/2 lg:w-[30%] p-3.5 sm:p-10">
                            <div className="">
                                <div className="">
                                    <h4 className="text-[#F5F9FD] text-[20px] lg:text-[32px] font-semibold pb-5">
                                        Digital Marketing
                                    </h4>
                                    <p className="pb-5 lg:pb-20">
                                        Elevate brand visibility through
                                        tailored digital marketing strategies.
                                    </p>
                                    <button className="self-start flex text-primary font-semibold rounded-[30px] items-center bg-white py-2 gap-2">
                                        <span className="pl-6 text-nowrap font-semibold">
                                            Learn More
                                        </span>
                                        <div className="inline-flex justify-center items-center bg-primary rounded-full text-white w-8 h-8 mr-2">
                                            <LuArrowUpRight
                                                className="inline"
                                                size={20}
                                            />
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end items-end py-5 lg:py-0">
                                    <Image
                                        className="lg:w-1/2"
                                        src={downloadTwoImage.src}
                                        alt=""
                                        width={200}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurBastSolution;
