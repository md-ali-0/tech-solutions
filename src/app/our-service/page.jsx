"use client";

import digitalBannerImage from "@/assets/image/banner/Frame1171275984.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/container/Container";
import FooterTop from "@/components/shared/FooterTop";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const page = () => {
    return (
        <div>
            {/* banner section  */}

            <Breadcrumb
                pageDetails={{
                    url: "our-service",
                    pageName: "Our Service",
                    title1: "Made For Creative",
                    title2: "Solutions",
                    description: "We believe in your success.",
                }}
            />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center py-12 lg:py-24 px-6 lg:px-0">
                    <div>
                        <Image
                            className=""
                            src="https://i.ibb.co/vv8VS6K/Iamge.png"
                            alt=""
                            width={500}
                            height={10}
                        />
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <div className="bg-primary h-[1px] w-16 mt-2"></div>
                            <h3 className="font-medium text-[#153658] text-xs md:text-base">
                                AI Chatbot
                            </h3>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                            <h3 className="text-[26px] text-[#1D1F2C] sm:text-[32px] lg:text-[48px] font-bold">
                                Al Chatbot{" "}
                            </h3>
                            <div className="w-fit">
                                <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                    Solutions
                                </h3>
                                <Image
                                    className="mx-auto -mt-2 w-[150px] md:w-auto"
                                    src={subTitleBGImage.src}
                                    alt=""
                                    width={300}
                                    height={10}
                                />
                            </div>
                        </div>
                        <p className="text-base text-[#153658] lg:text-[18px] py-3.5">
                            In the realm of customer service and engagement,
                            Artificial Intelligence (AI) and chatbots are
                            revolutionizing the way businesses interact with
                            their clients. Our AI solutions are tailored to meet
                            the unique challenges and opportunities of your
                            business, enhancing customer experience through
                            intelligent, responsive, and efficient interactions.
                            Our custom chatbots are designed not only to provide
                            immediate assistance and support to your customers
                            but also to learn from interactions, continually
                            improving the quality of service
                        </p>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    className="flex justify-center mb-10 px-6 h-[150px] lg:h-auto lg:px-0"
                >
                    <Image
                        src="https://i.ibb.co/3CzRjyh/Image.png"
                        alt=""
                        width={1300}
                        height={10}
                    />
                </div>
                <div>
                    <div className="mb-16 mt-16">
                        <div className="md:flex justify-between items-center flex-row-reverse rounded-lg gap-3">
                            <div className="h-auto md:w-1/2 bg-[#F5F9FD] rounded-3xl p-6">
                                <div className="flex flex-wrap gap-2 items-center  mt-5 text-black rounded-xl">
                                    <div className="flex items-center border rounded-full px-3 py-1">
                                        <p className="text-base font-normal  text-[#002172] ">
                                            Streamlined Operations
                                        </p>
                                    </div>
                                    <div className="flex items-center border rounded-full px-5 py-1">
                                        <p className="text-base font-normal  text-[#002172] ">
                                            Proven Success
                                        </p>
                                    </div>
                                    <div className="flex items-center border rounded-full px-5 py-1">
                                        <p className="text-base font-normal  text-[#002172] ">
                                            Aligned with Business Goals
                                        </p>
                                    </div>
                                    <div className="flex items-center border rounded-full px-5 py-1">
                                        <p className="text-base font-normal  text-[#002172] ">
                                            Enriched Engagement
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-[26px] md:text-[30px] text-black font-bold mt-28">
                                    Al Chatbot
                                </h3>
                                <div className="w-fit">
                                    <h3 className="text-primary text-[32px] md:text-[30px] font-DMSerif italic">
                                        Solutions
                                    </h3>
                                    <div className="flex justify-end mr-20">
                                        <Image
                                            className=""
                                            src={subTitleBGImage.src}
                                            alt=""
                                            width={280}
                                            height={10}
                                        />
                                    </div>
                                </div>
                                <p className="text-base text-black py-3.5">
                                    AI and chatbots redefine customer
                                    engagement, tailoring solutions to your
                                    unique needs.
                                </p>
                                <button className="flex  items-center bg-primary py-[6px] gap-2 mt-5 rounded-full mb-10">
                                    <span className="pl-6">
                                        Let&apos;s Talk
                                    </span>
                                    <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                        <LuArrowUpRight
                                            className="inline"
                                            size={20}
                                        />
                                    </div>
                                </button>
                            </div>

                            <div className="md:w-1/2 p-3">
                                <div className="">
                                    <span className="font-semibold text-[#153658] text-[32px] sm:text-[40px]">
                                        Revolutionize Customer Interactions with
                                        AI Chatbots
                                    </span>
                                    <p className="text-[#153658] text-[18px]">
                                        Our diverse portfolio showcases
                                        successful implementations across
                                        various industries, highlighting how our
                                        AI solutions can be transformative.
                                        Through detailed case studies, we
                                        demonstrate the tangible benefits
                                        realized by our clients, from
                                        streamlined customer service operations
                                        to enriched customer engagement.
                                    </p>
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div
                                        className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                        data-aos="fade-down"
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                                fill="green"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className="lg:text-[18px] text-[#153658] font-medium">
                                                Provide instant support and
                                                guidance to customers, enhancing
                                                their experience and
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                        data-aos="fade-down"
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                                fill="green"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className="lg:text-[18px] text-[#153658] font-medium">
                                                Provide instant support and
                                                guidance to customers, enhancing
                                                their experience and
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                        data-aos="fade-down"
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                                fill="green"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className="lg:text-[18px] text-[#153658] font-medium">
                                                Provide instant support and
                                                guidance to customers, enhancing
                                                their experience and
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                        data-aos="fade-down"
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                                fill="green"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className="lg:text-[18px] text-[#153658] font-medium">
                                                Provide instant support and
                                                guidance to customers, enhancing
                                                their experience and
                                                satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div
                data-aos="fade-down"
                className="bg-[#F6F9FD] py-10 lg:py-20 px-6 lg:px-0"
            >
                <Container>
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-5 lg:gap-[400px]">
                        <div className="choose_texts mt-[45px] text-black">
                            <div className="">
                                <div className="flex gap-3">
                                    <div className="bg-primary h-[2px] w-16 mt-2"></div>
                                    <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base text-[#153658]">
                                        Marketing
                                    </h3>
                                </div>
                                <h3 className="text-[26px] sm:text-[32px] lg:text-[48px] text-[#153658] font-bold">
                                    Digital Marketing
                                </h3>
                                <div className="w-fit">
                                    <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                        Campains
                                    </h3>
                                    <Image
                                        className="mx-auto mt-1 w-full lg:w-auto"
                                        src={subTitleBGImage.src}
                                        alt=""
                                        width={300}
                                        height={10}
                                    />
                                </div>
                                <p className="text-[18px] py-3.5">
                                    In the dynamic world of digital marketing,
                                    our comprehensive strategies are designed to
                                    align seamlessly with your business goals,
                                    ensuring your brand not only competes but
                                    excels in the digital landscape. We
                                    specialize in a range of services including
                                    Search Engine Optimization (SEO), content
                                    marketing, social media management, and
                                    pay-per-click (PPC) advertising.
                                </p>
                            </div>
                        </div>
                        <Image
                            className="w-full"
                            src={digitalBannerImage.src}
                            alt=""
                            width={500}
                            height={10}
                        />
                    </div>
                </Container>
            </div>
            <Container>
                <div
                    data-aos="zoom-in"
                    className="flex justify-center mb-10 px-6 lg:px-0"
                >
                    <Image
                        src="https://i.ibb.co/PZKCGq6/Image-1.png"
                        alt=""
                        className="h-[150px] sm:h-auto"
                        width={1300}
                        height={10}
                    />
                </div>

                <div data-aos="fade-down" className="mb-16 mt-16 px-6 lg:px-0">
                    <div className="md:flex justify-evenly items-center flex-row-reverse rounded-lg gap-10">
                        <div className="md:w-1/2">
                            <div className="">
                                <span className="font-semibold text-[#153658] text-[32px] lg:text-[40px]">
                                    Elevate Your Brand&apos;s Online Presence
                                    and Drive Growth
                                </span>
                                <p className="text-[#153658] text-[18px] py-3">
                                    Our diverse portfolio showcases successful
                                    implementations across various industries,
                                    highlighting how our AI solutions can be
                                    transformative. Through detailed case
                                    studies, we demonstrate the tangible
                                    benefits realized by our clients, from
                                    streamlined customer service operations to
                                    enriched customer engagement.
                                </p>
                            </div>
                            <div className="mt-6 space-y-3">
                                <div
                                    className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                    data-aos="fade-down"
                                >
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                            fill="green"
                                        />
                                    </svg>
                                    <div className="">
                                        <p className="lg:text-[18px] text-[#153658] font-medium">
                                            Provide instant support and guidance
                                            to customers, enhancing their
                                            experience and satisfaction.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                    data-aos="fade-down"
                                >
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                            fill="green"
                                        />
                                    </svg>
                                    <div className="">
                                        <p className="lg:text-[18px] text-[#153658] font-medium">
                                            Provide instant support and guidance
                                            to customers, enhancing their
                                            experience and satisfaction.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex hover:scale-105 cursor-pointer items-center  transition-all p-4 gap-4 rounded-md"
                                    data-aos="fade-down"
                                >
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z"
                                            fill="green"
                                        />
                                    </svg>
                                    <div className="">
                                        <p className="lg:text-[18px] text-[#153658] font-medium">
                                            Provide instant support and guidance
                                            to customers, enhancing their
                                            experience and satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto md:w-1/2 bg-[#F5F9FD] rounded-3xl p-6">
                            <div className="flex flex-wrap gap-2 items-center  mt-5 text-black rounded-xl">
                                <div className="flex items-center border rounded-full px-3 py-1">
                                    <p className="text-base font-normal  text-[#002172] ">
                                        Streamlined Operations
                                    </p>
                                </div>
                                <div className="flex items-center border rounded-full px-5 py-1">
                                    <p className="text-base font-normal  text-[#002172] ">
                                        Proven Success
                                    </p>
                                </div>
                                <div className="flex items-center border rounded-full px-5 py-1">
                                    <p className="text-base font-normal  text-[#002172] ">
                                        Aligned with Business Goals
                                    </p>
                                </div>
                                <div className="flex items-center border rounded-full px-5 py-1">
                                    <p className="text-base font-normal  text-[#002172] ">
                                        Enriched Engagement
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-[26px] md:text-[30px] text-black font-bold mt-28">
                                Al Chatbot
                            </h3>
                            <div className="w-fit">
                                <h3 className="text-primary text-[32px] md:text-[30px] font-DMSerif italic">
                                    Solutions
                                </h3>
                                <div className="flex justify-end mr-20">
                                    <Image
                                        className=""
                                        src={subTitleBGImage.src}
                                        alt=""
                                        width={280}
                                        height={10}
                                    />
                                </div>
                            </div>
                            <p className="text-base text-black py-3.5">
                                AI and chatbots redefine customer engagement,
                                tailoring solutions to your unique needs.
                            </p>
                            <button className="flex  items-center bg-primary py-[6px] gap-2 mt-5 rounded-full mb-10">
                                <span className="pl-6">Let&apos;s Talk</span>
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                    <LuArrowUpRight
                                        className="inline"
                                        size={20}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <FooterTop
                title1={"Have More"}
                title2={"Questions?"}
                des={"Reach out to us today and let's grow together"}
                link={"Contact Us"}
            />
        </div>
    );
};

export default page;
