"use client";
import FrameAboutImage from "@/assets/image/banner/Frame1171275031.png";
import brandFive from "@/assets/image/brand/image5.png";
import brandSix from "@/assets/image/brand/image6.png";
import brandSeven from "@/assets/image/brand/image7.png";
import brandNine from "@/assets/image/brand/image9.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { LuGoal } from "react-icons/lu";

const AboutA2Z = () => {
    return (
        <section className="py-10 lg:py-20">
            <Container>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    className="flex flex-col lg:flex-row justify-between *:text-[#153658] items-center py-10 lg:py-20 px-6 lg:px-0 gap-10"
                >
                    <div className="flex lg:justify-end lg:w-1/2">
                        <Image
                            className="w-full"
                            src={FrameAboutImage.src}
                            alt=""
                            width={500}
                            height={600}
                            style={{ fontStyle: "italic" }}
                        />
                    </div>
                    <div data-aos="fade-up" className="sm:w-1/2">
                        <div className="flex gap-3">
                            <div className="bg-primary h-[1px] w-16 mt-2"></div>
                            <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base">
                                About Us
                            </h3>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                            <h3 className="text-[26px] sm:text-[32px] lg:text-[48px] font-bold">
                                About A2Z
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
                        </div>
                        <p className="text-base lg:text-[18px] py-3.5">
                            A2Z Tech Solutions is at the forefront of providing
                            innovative digital frontier services. Our focus is
                            on delivering solutions that seamlessly blend
                            advanced technology with an understanding of
                            business needs. We pride ourselves on our commitment
                            to excellence, customer satisfaction, and fostering
                            long-term partnerships. Embark with us on your
                            journey towards digital excellence, where we
                            prioritize your business growth and technological
                            advancement
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-10 px-6 lg:px-0">
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <LuGoal className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Our Mission
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            A2Z Tech Solutions Delivering superior web
                            development with innovation and quality.
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <IoEyeOutline className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Our Vision
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            A2Z Tech Vision Leading digital solutions, growing
                            with clients, shaping tech future.
                        </p>
                    </div>
                    <div className="bg-[#F5F9FD] rounded-3xl p-10">
                        <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px] lg:h-20 lg:w-20">
                            <GiSelfLove className="text-primary" size={30} />
                        </div>
                        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#153658] py-2.5 lg:py-5">
                            Our Values
                        </h3>
                        <p className="text-[#153658] text-base lg:text-[18px]">
                            Grounded in excellence, satisfaction, innovation.
                            Committed to long-term partnerships & business
                            growth.
                        </p>
                    </div>
                </div>
            </Container>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="bg-[#F3F8FD] py-10 lg:py-20"
            >
                <Container>
                    <div className="space-y-8 px-6 lg:px-0">
                        <h3 className="text-[#153658] text-2xl font-semibold py-2">
                            Trusted by great companies
                        </h3>
                        <div className="grid grid-cols-4 items-center lg:grid-cols-8 gap-5 sm:gap-12 lg:gap-20">
                            <Image
                                className="w-full"
                                src={brandFive.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandSix.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandSeven.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandNine.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandFive.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandSix.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandSeven.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                            <Image
                                className="w-full"
                                src={brandNine.src}
                                alt=""
                                width={300}
                                height={200}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default AboutA2Z;
