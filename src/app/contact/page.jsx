"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import bannerImage from "@/assets/image/banner/banner.png";
import bannerBG from "@/assets/image/bg/BG.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { FaPlay, FaStarOfLife } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import subTitleBGImage from "@/assets/image/title_vector.png";
const page = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center overflow-hidden"
        style={{ background: `url("${bannerBG.src}")` }}
      >
        <Container>
          <div className="relative flex flex-col md:flex-row items-center h-[550px]">
            <div className="w-3/4">
              <div className="flex gap-3">
                <Link href={"/"}>Home</Link>/
                <Link href={"/contact"}>Contact us</Link>
              </div>
              <h3 className="text-[64px] font-bold">
                Let us know what{" "}
                <span className="text-primary text-7xl font-DMSerif italic">
                  you think! 
                  <div className="flex justify-end mr-20">
                           <Image
                    className=""
                        src={subTitleBGImage.src}
                                    alt=""
                                    width={280}
                                    height={10}
                                />
                  </div>
                </span>
               
              </h3>

              <p className="text-xl text-[#D4E5F6] py-3.5">
                Have any inquiries or need support?
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* details sections starts */}
      <div className="max-w-7xl mx-auto mt-16 md:p-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="main_details px-5 md:px-0 md:w-3/4">
            <div className="mb-16">
              <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
              <div className="flex">
                            <div className="bg-primary h-[2px] w-16 mt-3"></div>
                            <h3 className="font-medium text-xs md:text-base text-gray-300">Get in touch</h3>
                        </div>
                        <h3 className="text-[26px] md:text-[48px] text-black font-bold">
                        Let&apos;s Chat, Reach
                        </h3>
                        <div className="w-fit">
                            <h3 className="text-primary text-[32px] md:text-[56px] font-DMSerif italic">
                            Out to Us
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
                        Have questions or feedback? We&apos;re here to help. Send us a
                    message, and we&apos;ll respond wit hin 24 hours.
              </p>
                <form>
                  <div className="-mx-2 md:items-center md:flex mt-5">
                    <div className="flex-1 px-2">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#D4E5F6]  border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className=" my-2 flex justify-start items-center gap-3 mt-5 text-sm">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.854 7.31299C14.049 7.50799 14.049 7.82502 13.854 8.02002L9.18701 12.687C9.08901 12.785 8.96101 12.833 8.83301 12.833C8.70501 12.833 8.577 12.784 8.479 12.687L6.146 10.354C5.951 10.159 5.951 9.84197 6.146 9.64697C6.341 9.45197 6.65803 9.45197 6.85303 9.64697L8.83301 11.627L13.146 7.31403C13.342 7.11803 13.658 7.11799 13.854 7.31299ZM19.5 4.375V15.625C19.5 18.16 18.16 19.5 15.625 19.5H4.375C1.84 19.5 0.5 18.16 0.5 15.625V4.375C0.5 1.84 1.84 0.5 4.375 0.5H15.625C18.16 0.5 19.5 1.84 19.5 4.375ZM18.5 4.375C18.5 2.414 17.586 1.5 15.625 1.5H4.375C2.414 1.5 1.5 2.414 1.5 4.375V15.625C1.5 17.586 2.414 18.5 4.375 18.5H15.625C17.586 18.5 18.5 17.586 18.5 15.625V4.375Z"
                        fill="#3280CF"
                      />
                    </svg>
                    <p className="text-black text-sm">
                      I agree to the 
                     
                        terms & conditions
                     
                      and
                     privacy policy
                    </p>
                  </div>
                  <button className="flex  items-center bg-primary py-[6px] gap-2 mt-5 rounded-full">
                                <span className="pl-6">Send a message</span>
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

          <div className="flex flex-col gap-3" >
          <div
              className="h-auto p-7 md:w-[416px] max-w-[416px] mt-3 bg-[#153658] rounded-lg"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.09)",
              }}
            >
              <h2 className="text-3xl font-bold my-5">Live chat</h2>
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
              className="h-auto p-7 md:w-[416px] max-w-[416px] mt-3 bg-[#F5F9FD] "
             
            >
              <h2 className="text-[24px] font-bold text-[#153658]">Get in touch</h2>
             <p className="text-gray-400">Chat with our experts in WhatsApp!</p>
             <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                <h1>Email</h1>
            <div className="flex items-center">
            <Image
                                    className=" mt-1 w-[50px] mr-3"
                                    src="https://i.ibb.co/4NXTZk3/Icon.png"
                                    alt=""
                                    width={300}
                                    height={10}
                                />
                    <div>
                        <p className="text-base font-normal  text-[#002172] ">Apartments Rent</p>
                    </div>

            </div>
            
                </div>
                <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                <h1>Phone Number</h1>
            <div className="flex items-center">
            <Image
                                    className=" mt-1 w-[50px] mr-3"
                                    src="https://i.ibb.co/4NXTZk3/Icon.png"
                                    alt=""
                                    width={300}
                                    height={10}
                                />
                    <div>
                        <p className="text-base font-normal  text-[#002172] ">+441224 042961</p>
                    </div>

            </div>
            
                </div>
                <div className="flex-1 items-center border mt-5 text-black p-4 rounded-xl">
                <h1>Office Address</h1>
            <div className="flex items-center">
            <Image
                                    className=" mt-1 w-[50px] mr-3"
                                    src="https://i.ibb.co/ZMLp2F3/Icon-1.png"
                                    alt=""
                                    width={300}
                                    height={10}
                                />
                    <div>
                        <p className="text-base font-normal  text-[#002172] ">26 Grandholm Grove, Aberdeen, AB22 8AX</p>
                    </div>

            </div>
            
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-16">
      <Image
                                src="https://i.ibb.co/pXdGyjx/Map.png"
                                alt=""
                                width={1200}
                                height={400}
                            />
      </div>
    </div>
  );
};

export default page;
