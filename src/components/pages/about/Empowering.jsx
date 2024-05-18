import bannerImage from "@/assets/image/banner/banner.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { PiRainbowBold } from "react-icons/pi";
import { TbChartArcs } from "react-icons/tb";

const Empowering = () => {
    return (
        <section className="">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between *:text-[#153658] items-center py-10 lg:py-20 px-6 lg:px-0 gap-10">
                    <div data-aos="fade-up" className="sm:w-1/2">
                        <div className="flex gap-3">
                            <div className="bg-primary h-[1px] w-16 mt-2"></div>
                            <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base">
                                Empowering Growth
                            </h3>
                        </div>
                        <h3 className="text-[26px] sm:text-[32px] lg:text-[48px] font-bold">
                            Empowering Growth A2Z
                        </h3>
                        <div data-aos="fade-up" className="w-fit">
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
                        <p className="text-base lg:text-[18px] py-3.5">
                            A2Z Tech Solutions is at the forefront of providing
                            innovative digital frontier services. Our focus is
                            on delivering solutions that seamlessly blend
                            advanced technology with an understanding of
                            business needs.
                        </p>
                        <div className="flex gap-3 *:text-[#F5F9FD] *:font-semibold *:rounded-[30px] py-5">
                            <button className="flex  items-center bg-primary py-3 gap-2 px-3 lg:px-0">
                                <span className="pl-6 font-semibold">
                                    Get Started
                                </span>
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                    <LuArrowUpRight
                                        className="inline"
                                        size={20}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="md:w-1/2">
                        <div className="flex flex-col items-center lg:flex-row gap-10">
                            <div className="relative">
                                <Image
                                    className="w-full"
                                    src={bannerImage.src}
                                    alt=""
                                    width={400}
                                    height={600}
                                    style={{ fontStyle: "italic" }}
                                />
                                <div className="flex justify-center items-center absolute rounded-2xl top-0 bg-black bg-opacity-0 hover:bg-opacity-30 w-full h-full">
                                    <div className="bg-white rounded-full animate-ping w-18 h-18 md:w-24 md:h-24"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-primary rounded-full w-14 h-14">
                                        <FaPlay
                                            className="text-white"
                                            size={20}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:flex-col justify-center items-center gap-5 lg:gap-3 lg:space-y-14">
                                <div className="py-2">
                                    <h3 className="text-2xl sm:text-[32px] lg:text-[40px] font-semibold text-[#153658]">
                                        40+
                                    </h3>
                                    <h5 className="text-xs sm:text-base lg:text-[18px] italic font-DMSerif text-primary text-nowrap">
                                        Partner With Us
                                    </h5>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-2xl sm:text-[32px] lg:text-[40px] font-semibold text-[#153658]">
                                        24+
                                    </h3>
                                    <h5 className="text-xs sm:text-base lg:text-[18px] italic font-DMSerif text-primary text-nowrap">
                                        Happy Clients
                                    </h5>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-2xl sm:text-[32px] lg:text-[40px] font-semibold text-[#153658]">
                                        30+
                                    </h3>
                                    <h5 className="text-xs sm:text-base lg:text-[18px] italic font-DMSerif text-primary text-nowrap">
                                        Complete Project
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    className="flex flex-col md:flex-row justify-between items-center gap-5 py-10 px-6 lg:px-0"
                >
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <PiRainbowBold className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Flexible Option
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            Explore our flexible options designed to adapt to
                            your unique needs and preferences
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <IoStatsChart className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Customer Support
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            Experience unparalleled customer support tailored to
                            address your inquiries and concerns efficiently
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <TbChartArcs className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Futuristic Approach
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            Futuristic approach to your projects, leveraging
                            cutting-edge technology for unparalleled innovation
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Empowering;
