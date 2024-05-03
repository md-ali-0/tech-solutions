import bannerImage from "@/assets/image/banner/TradingIdea.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { IoStatsChart } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { PiRainbowBold } from "react-icons/pi";
import { TbChartArcs } from "react-icons/tb";

const CustomizedService = () => {
    return (
        <section className="py-10">
            <Container>
                <div className="flex flex-col md:flex-row justify-between *:text-[#153658] items-center py-10 lg:py-20 px-6 lg:px-0 gap-10">
                    <div className="md:w-3/5">
                        <div className="flex gap-3">
                            <div className="bg-primary h-[2px] w-16 mt-2"></div>
                            <h3 className="font-medium text-xs md:text-base">
                                What We Do
                            </h3>
                        </div>
                        <h3 className="text-[26px] md:text-[48px] font-bold">
                            Customized Services Tailored
                        </h3>
                        <div className="w-fit">
                            <h3 className="text-primary text-[32px] md:text-[56px] font-DMSerif italic">
                                To Your Preferences
                            </h3>
                            <Image
                                className="mx-auto mt-1 w-[150px] md:w-auto"
                                src={subTitleBGImage.src}
                                alt=""
                                width={300}
                                height={10}
                            />
                        </div>
                        <p className="text-[18px] py-3.5">
                            A2Z Tech Solutions is at the forefront of providing
                            innovative digital frontier services. Our focus is
                            on delivering solutions that seamlessly blend
                            advanced technology with an understanding of
                            business needs.
                        </p>
                        <div className="flex gap-3 *:text-[#F5F9FD] *:font-semibold *:rounded-[30px] py-5">
                            <button className="flex  items-center bg-primary py-3 gap-2">
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
                    <div className="flex md:justify-end md:w-2/5">
                        <Image
                            className="w-fit"
                            src={bannerImage.src}
                            alt=""
                            width={400}
                            height={600}
                            style={{ fontStyle: "italic" }}
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 py*10">
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full h-20 w-20">
                            <PiRainbowBold className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[20px] font-semibold text-[#153658] py-5">
                            Flexible Option
                        </h3>
                        <p className="text-[#153658] text-[18px]">
                            Explore our flexible options designed to adapt to
                            your unique needs and preferences
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full h-20 w-20">
                            <IoStatsChart className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[20px] font-semibold text-[#153658] py-5">
                            Customer Support
                        </h3>
                        <p className="text-[#153658] text-[18px]">
                            Experience unparalleled customer support tailored to
                            address your inquiries and concerns efficiently
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full h-20 w-20">
                            <TbChartArcs className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[20px] font-semibold text-[#153658] py-5">
                            Futuristic Approach
                        </h3>
                        <p className="text-[#153658] text-[18px]">
                            Futuristic approach to your projects, leveraging
                            cutting-edge technology for unparalleled innovation
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CustomizedService;
