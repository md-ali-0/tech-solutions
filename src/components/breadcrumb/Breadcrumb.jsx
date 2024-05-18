"use client"

import bannerBG from "@/assets/image/bg/BG.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ pageDetails }) => {
    return (
        <section
            className="bg-cover bg-center overflow-hidden pt-20 lg:pt-0"
            style={{ background: `url("${bannerBG.src}")` }}
        >
            <Container>
                <div data-aos="fade-down-right" className="relative flex flex-col md:flex-row items-center h-[250px] lg:h-[528px] sm:px-6 lg:px-0">
                    <div className="w-3/4 lg:w-3/4 space-y-2.5 lg:space-y-0 my-5">
                        <div className="flex gap-3 lg:pb-5">
                            <Link href={"/"}>Home</Link>/
                            <Link href={`/${pageDetails.url}`}>
                                {pageDetails.pageName}
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 lg:pb-5">
                            <h3 className="text-[22px] lg:text-[64px] font-bold">
                                {pageDetails.title1}{" "}
                            </h3>
                            <div className="w-fit">
                                <h3 className="text-primary text-[28px] md:text-[56px] font-DMSerif italic">
                                    {pageDetails.title2}
                                </h3>
                                <Image
                                    className="mx-auto -mt-2 w-fit md:w-auto"
                                    src={subTitleBGImage.src}
                                    alt=""
                                    width={100}
                                    height={10}
                                />
                            </div>
                        </div>

                        <p className="text-base text-wrap lg:text-xl text-[#D4E5F6] py-3">
                            {pageDetails.description}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Breadcrumb;
