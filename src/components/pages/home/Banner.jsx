"use client";
import bannerImage from "@/assets/image/banner/banner.png";
import bannerBG from "@/assets/image/bg/BG.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { FaPlay, FaStarOfLife } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const Banner = () => {
    console.log(bannerImage);
    return (
        <section
            className="bg-cover bg-center overflow-hidden"
            style={{ background: `url("${bannerBG.src}")` }}
        >
            <Container>
                <div className="relative flex flex-col md:flex-row items-center h-[960px]">
                    <div className="w-3/4">
                        <div className="flex gap-3">
                            <FaStarOfLife
                                className="inline text-primary"
                                size={20}
                            />
                            <h3 className="font-medium text-white">
                                World Best Technology
                            </h3>
                            <div className="bg-[#D4E5F6] text-[#D4E5F6] h-[1px] w-[69px] mt-2"></div>
                        </div>
                        <h3 className="text-[64px] font-bold">
                            Technology Made Simple 
                        </h3>
                        <h3 className="text-primary text-7xl font-DMSerif italic">
                            for Your Business
                        </h3>
                        <p className="text-xl text-[#D4E5F6] py-3.5">
                            We are a team of specialists who are excited to help
                            you grow your business <br /> with our AI and
                            digital marketing solutions.
                        </p>
                        <div className="flex gap-3 *:text-[#F5F9FD] *:font-semibold *:rounded-[30px] py-5">
                            <button className="flex  items-center bg-primary py-[6px] gap-2">
                                <span className="pl-6">Contact Us</span>
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                    <LuArrowUpRight
                                        className="inline"
                                        size={20}
                                    />
                                </div>
                            </button>
                            <button
                                className="flex bg-center items-center py-[6px] gap-2 pl-3"
                                style={{
                                    backgroundImage: `url("${bannerImage.src}")`,
                                    backgroundSize: "100% auto",
                                }}
                            >
                                <FaPlay className="inline ml-2" size={20} />
                                <span className="pr-6">See How it works</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/4 px-6">
                        <Image
                            className="rotate-3 w-full"
                            src={bannerImage.src}
                            alt=""
                            width={400}
                            height={600}
                            style={{ fontStyle: "italic" }}
                        />
                    </div>
                    <div className="absolute bg-primary bottom-2 left-5 -rotate-[8.5deg] z-10 w-full">
                        <marquee behavior="" direction="">
                            <div className="flex justify-center items-center h-20 gap-3">
                                <FaStarOfLife
                                    className="inline"
                                    size={20}
                                />
                                <h3>Al Driven Solutions</h3>
                                <FaStarOfLife
                                    className="inline"
                                    size={20}
                                />
                                <h3>Al Driven Solutions</h3>
                                <FaStarOfLife
                                    className="inline"
                                    size={20}
                                />
                                <h3>Al Driven Solutions</h3>
                            </div>
                        </marquee>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
