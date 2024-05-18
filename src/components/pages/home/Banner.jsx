"use client";
import bannerImage from "@/assets/image/banner/banner.png";
import bannerBG from "@/assets/image/bg/BG.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { FaPlay, FaStarOfLife } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const Banner = () => {
    return (
        <section
            className="bg-cover bg-center overflow-hidden"
            style={{ background: `url("${bannerBG.src}")` }}
        >
            <Container>
                <div className="relative flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[700px] lg:h-[900px] pt-32 lg:pt-0 space-y-10 lg:space-y-0 overflow-hidden px-0 sm:px-6 lg:px-6 ">
                    <div className="sm:w-1/2 lg:w-3/4 px-6 sm:space-y-3 sm:px-0">
                        <div data-aos="fade-up" className="flex gap-3">
                            <FaStarOfLife
                                className="inline text-primary"
                                text-xl
                            />
                            <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base text-white">
                                World Best Technology
                            </h3>
                            <div className="bg-[#D4E5F6] text-[#D4E5F6] h-[1px] w-[69px] mt-2"></div>
                        </div>
                        <h3
                            data-aos="fade-up"
                            className=" text-[26px] lg:text-[64px] font-bold"
                        >
                            Technology Made Simple 
                        </h3>

                        <div data-aos="fade-up" className="w-fit">
                            <h3 className="text-primary text-[32px] lg:text-7xl font-DMSerif italic">
                                for Your Business
                            </h3>
                            <Image
                                className="mx-auto mt-1 w-[150px] lg:w-auto"
                                src={subTitleBGImage.src}
                                alt=""
                                width={300}
                                height={10}
                            />
                        </div>
                        <p
                            data-aos="fade-up-right"
                            className="lg:text-xl text-[#D4E5F6] py-3.5"
                        >
                            We are a team of specialists who are excited to help
                            you grow your business <br /> with our AI and
                            digital marketing solutions.
                        </p>
                        <div
                            data-aos="fade-up-right"
                            className="lg:flex space-y-3.5 lg:space-y-0 gap-3 *:text-[#F5F9FD] *:font-semibold *:rounded-[30px] py-5"
                        >
                            <button className="flex items-center bg-primary py-2 gap-2">
                                <span className="pl-6 text-nowrap">
                                    Contact Us
                                </span>
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                    <LuArrowUpRight
                                        className="inline"
                                        size={20}
                                    />
                                </div>
                            </button>
                            <button
                                className="flex bg-center items-center py-2 gap-2 pl-3"
                                style={{
                                    backgroundImage: `url("${bannerImage.src}")`,
                                    backgroundSize: "100% auto",
                                }}
                            >
                                <FaPlay className="inline ml-2" size={20} />
                                <span className="pr-6 text-nowrap">
                                    See How it works
                                </span>
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="lg:w-1/4 px-6">
                        <Image
                            className="rotate-3 w-full"
                            src={bannerImage.src}
                            alt=""
                            width={400}
                            height={600}
                            style={{ fontStyle: "italic" }}
                        />
                    </div>
                    <div className="absolute bg-primary bottom-0 lg:bottom-2 left-0 lg:left-12 -rotate-[8.36deg] z-10 w-full whitespace-nowrap overflow-hidden">
                        <marquee behavior="scroll" direction="left" scrollamount="10">
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Digital Marketing</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Al Driven Solutions</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Web & Ecommerce</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Business Automation</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Digital Marketing</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Al Driven Solutions</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Web & Ecommerce</h3>
                            </div>
                            <div className="inline-flex justify-center items-center h-[50px] lg:h-20 gap-2 px-5">
                                <FaStarOfLife className="inline text-white text-xl" />
                                <h3>Business Automation</h3>
                            </div>
                        </marquee>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
