"use client";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FooterTop from "@/components/shared/FooterTop";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
const page = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    pageDetails={{
                        url: "contact-us",
                        pageName: "Contact us",
                        title1: "Let us know what",
                        title2: "you think!",
                        description: "Have any inquiries or need support?",
                    }}
                />
                {/* details sections starts */}
                <div
                    data-aos="fade-down"
                    className="max-w-7xl mx-auto mt-16 md:p-10"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="main_details px-5 md:px-0 sm:w-1/2">
                            <div className="mb-16">
                                <div className="p-4 py-6 rounded-3xl bg-gray-50 md:p-8">
                                    <div className="flex">
                                        <div className="bg-primary h-[2px] w-16 mt-3"></div>
                                        <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base text-[#153658]">
                                            Get in touch
                                        </h3>
                                    </div>
                                    <h3 className="text-[26px] sm:text-[32px] lg:text-[48px] font-bold text-[#153658]">
                                        Let&apos;s Chat, Reach
                                    </h3>
                                    <div className="w-fit">
                                        <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                            Out to Us
                                        </h3>
                                        <Image
                                            className="mx-auto mt-1 w-full lg:w-auto"
                                            src={subTitleBGImage.src}
                                            alt=""
                                            width={300}
                                            height={10}
                                        />
                                    </div>
                                    <p className="text-base text-black py-3.5">
                                        Have questions or feedback? We&apos;re
                                        here to help. Send us a message, and
                                        we&apos;ll respond wit hin 24 hours.
                                    </p>
                                    <form>
                                        <div className="-mx-2 md:items-center md:flex mt-5">
                                            <div className="flex-1 px-2">
                                                <label className="block mb-2 text-sm text-[#153658] font-semibold">
                                                    Your Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John "
                                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6] border border-gray-200 rounded-lg focus:border-[#5B52FF] focus:ring-[#5B52FF] focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block mb-2 text-sm text-[#153658] font-semibold">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="johndoe@example.com"
                                                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6] border border-gray-200 rounded-lg focus:border-[#5B52FF] focus:ring-[#5B52FF] focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>

                                        <div className="w-full mt-4">
                                            <label className="block mb-2 text-sm text-[#153658] font-semibold ">
                                                Message
                                            </label>
                                            <textarea
                                                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6] border border-gray-200 rounded-lg focus:border-[#5B52FF] focus:ring-[#5B52FF] focus:outline-none focus:ring focus:ring-opacity-80"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>

                                        <div className=" my-2 flex justify-start items-center gap-3 mt-5 text-sm">
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                id="terms"
                                            />
                                            <p className="text-black text-sm">
                                                I agree to the terms &
                                                conditions and privacy policy
                                            </p>
                                        </div>
                                        <button className="flex  items-center bg-primary py-[6px] gap-2 mt-5 rounded-full">
                                            <span className="pl-6">
                                                Send a message
                                            </span>
                                            <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                                <LuArrowUpRight
                                                    className="inline"
                                                    size={20}
                                                />
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* div for right side */}

                        <div className="flex flex-col gap-3 mx-auto sm:w-1/2 px-6 lg:px-0">
                            <div
                                data-aos="fade-down"
                                className="h-auto p-7 mt-3 bg-[#153658] rounded-3xl"
                                style={{
                                    boxShadow:
                                        "0px 0px 10px 0px rgba(0,0,0,0.09)",
                                }}
                            >
                                <h2 className="text-3xl font-bold my-5">
                                    Live chat
                                </h2>
                                <p>Chat with our experts in WhatsApp!</p>
                                <div className="flex flex-wrap mt-8 mb-10">
                                    <button className="flex  items-center bg-primary py-[6px] gap-2 rounded-full">
                                        <span className="pl-6">Open chat</span>
                                        <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                            <LuArrowUpRight
                                                className="inline"
                                                size={20}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div
                                data-aos="fade-left"
                                className="h-auto rounded-3xl p-7 mt-3 bg-[#F5F9FD] "
                            >
                                <h2 className="text-[24px] font-bold text-[#153658]">
                                    Get in touch
                                </h2>
                                <p className="text-gray-400">
                                    Chat with our experts in WhatsApp!
                                </p>
                                <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                                    <h3>Email</h3>
                                    <div className="flex items-center">
                                        <Image
                                            className=" mt-1 w-[50px] mr-3"
                                            src="https://i.ibb.co/4NXTZk3/Icon.png"
                                            alt=""
                                            width={300}
                                            height={10}
                                        />
                                        <div>
                                            <p className="text-base font-normal  text-[#002172] ">
                                                Apartments Rent
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                                    <h3>Phone Number</h3>
                                    <div className="flex items-center">
                                        <Image
                                            className=" mt-1 w-[50px] mr-3"
                                            src="https://i.ibb.co/4NXTZk3/Icon.png"
                                            alt=""
                                            width={300}
                                            height={10}
                                        />
                                        <div>
                                            <p className="text-base font-normal  text-[#002172] ">
                                                +441224 042961
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                                    <h3>Office Address</h3>
                                    <div className="flex items-center">
                                        <Image
                                            className=" mt-1 w-[50px] mr-3"
                                            src="https://i.ibb.co/ZMLp2F3/Icon-1.png"
                                            alt=""
                                            width={300}
                                            height={10}
                                        />
                                        <div>
                                            <p className="text-base font-normal  text-[#002172] ">
                                                26 Grandholm Grove, Aberdeen,
                                                AB22 8AX
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-16 px-6 lg:px-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.692024044031!2d-2.120889!3d57.1765114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48841200f55ee371%3A0x9883988bb72d32a2!2s26%20Grandholm%20Grove%2C%20Bridge%20of%20Don%2C%20Aberdeen%20AB24%202YD%2C%20UK!5e0!3m2!1sen!2sbd!4v1714965243275!5m2!1sen!2sbd"
                        width="1300"
                        height="350"
                        style={{border:'0'}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <FooterTop
                title1={"Ready to"}
                title2={"Learn More"}
                des={
                    "Discover how our services can revolutionize your business."
                }
                link={"Explore Services"}
            />
        </>
    );
};

export default page;
