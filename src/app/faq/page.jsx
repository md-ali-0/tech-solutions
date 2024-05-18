import subTitleBGImage from "@/assets/image/title_vector.png";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/container/Container";
import FaqPage from "@/components/pages/home/FaqPage";
import FooterTop from "@/components/shared/FooterTop";
import Image from "next/image";
import Link from "next/link";
const page = () => {
    return (
        <>
            <Breadcrumb
                pageDetails={{
                    url: "faq",
                    pageName: "FAQs",
                    title1: "Frequently Asked",
                    title2: "Questions?",
                    description:
                        "Answers to the most frequently asked questions about our services",
                }}
            />

            <Container>
                <div
                    data-aos="fade-down"
                    className="flex flex-col lg:flex-row justify-center  lg:justify-between mt-20 lg:gap-10 px-6 lg:px-0 space-y-3 lg:space-y-0"
                >
                    <div className="overflow-x-scroll lg:overflow-auto lg:w-2/5">
                        <ul className="flex flex-row lg:flex-col justify-around lg:space-y-3 gap-3">
                            <li className="lg:text-base text-xl font-bold text-nowrap text-[#153658] ">
                                <Link href={"#"}>Getting Started</Link>
                            </li>
                            <li className="lg:text-base text-xl font-medium text-nowrap text-[#768391] ">
                                <Link href={"#"}>Why A2Z Tech Solution</Link>
                            </li>
                            <li className="lg:text-base text-xl font-medium text-nowrap text-[#768391]">
                                <Link href={"#"}>Billing</Link>
                            </li>
                            <li className="lg:text-base text-xl font-medium text-nowrap text-[#768391] ">
                                <Link href={"#"}>Privacy and data</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-3/5 flex flex-col">
                        <div className="">
                            <div className=" px-6 mb-5">
                                <div className="flex justify-center items-center md:flex-row md:w-fit md:gap-3">
                                    <h3 className="text-[26px] sm:text-[32px] text-[#1D1F2C] md:text-[36px] lg:text-[45px] font-bold ">
                                        Getting
                                    </h3>
                                    <div>
                                        <h3 className="text-primary text-[32px] sm:text-[36px] md:text-[42px] lg:text-[45px] font-DMSerif italic">
                                            Started
                                        </h3>
                                        <Image
                                            className="mx-auto w-[120px] "
                                            src={subTitleBGImage.src}
                                            alt=""
                                            width={150}
                                            height={5}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FaqPage />
                    </div>
                </div>
            </Container>
            <FooterTop
                title1={"Have More"}
                title2={"Questions?"}
                des={"Reach out to us today and let's grow together"}
                link={"Contact Us"}
            />
        </>
    );
};

export default page;
