"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/container/Container";
import bannerBG from "@/assets/image/bg/BG.png";
import Link from "next/link";
import Image from "next/image";
import subTitleBGImage from "@/assets/image/title_vector.png";
import { LuArrowUpRight } from "react-icons/lu";
const page = () => {
    return (
        <div>
            {/* banner section  */}
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
              Made For Creative{" "}
                <span className="text-primary text-7xl font-DMSerif italic">
                Solutions 
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

              <p className="text-xl text-[#D4E5F6] py-3">
              We offer a wide range of digital services for your business
              growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="max-w-[1200px] mx-auto justify-between mb-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                <div>
                
                
                    <Image
                    className=""
                    src="https://i.ibb.co/vv8VS6K/Iamge.png"
                                    alt=""
                                    width={500}
                                    height={10}
                                />
                       
                 
                </div>
                <div className="choose_texts mt-[45px] text-black">
                <div className="">
                        <div className="flex gap-3">
                            <div className="bg-primary h-[2px] w-16 mt-2"></div>
                            <h3 className="font-medium text-xs md:text-sm text-[#153658]">AI Chatbot</h3>
                        </div>
                        <h3 className="text-[26px] md:text-[35px] font-bold mt-3">
                        Al Chatbot <span  className="text-primary text-[32px] md:text-[35px] font-DMSerif italic">
                           
                            Solutions
                          
                            <div className="flex ml-56">
                            <Image
                                    className="w-[100px]"
                                    src={subTitleBGImage.src}
                                    alt=""
                                    width={150}
                                    height={10}
                                />
                            </div>
                        </span>
                       
                        </h3>
                       
                        <p className="text-[18px] py-3.5 text-justify">
                        In the realm of customer service and engagement, Artificial Intelligence (AI) and chatbots are revolutionizing the way businesses interact with their clients. Our AI solutions are tailored to meet the unique challenges and opportunities of your business, enhancing customer experience through intelligent, responsive, and efficient interactions. Our custom chatbots are designed not only to provide immediate assistance and support to your customers but also to learn from interactions, continually improving the quality of service
                        </p>
                        
                    </div>
                   
                </div>
            </div>
        </div>

        <div className="flex justify-center mb-10">
            <Image src="https://i.ibb.co/3CzRjyh/Image.png"   alt=""
            width={1200}
            height={10}/>
        </div>
        <div>
<div className="mt-20 px-[170px]">
            <div className="md:flex justify-center items-center gap-36 flex-row-reverse">
                <div className="md:w-1/2 ">
                    <h1 className="text-3xl font-bold mb-10" data-aos="fade-left">Transforming Communication <br /> & <span className="text-yellow-400">Collaboration</span> </h1>
                    <div className="flex">
                        <div className="relative">
                            {/* <img className='mb-3 md:mb-0' src="https://ifingerstudio.com/landiox/wp-content/uploads/2022/11/property_img.jpg" alt="" />
                            <img className='hidden md:flex  absolute top-40 right-[340px]' src="https://themes.pixelstrap.com/sheltos/assets/images/blog/4.jpg" alt="" /> */}
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2">
                    <div className="">
                        <span className='opacity-75 text-black'>Revolutionize Customer Interactions with AI Chatbots<span className='font-semibold'>RapidLink</span> stands out</span>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z" fill="green"/>
                       </svg>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Flexibility comes first.</h3>
                                <p className='text-sm opacity-70'>We firmly believe that flexibility is at the heart of successful collaboration</p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z" fill="green"/>
                       </svg>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Seamless Communication</h3>
                                <p className='text-sm opacity-70'>RapidLink facilitates seamless communication, breaking down geographical barriers. </p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z" fill="green"/>
                       </svg>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Analytics and Insights</h3>
                                <p className='text-sm opacity-70'>This data-driven approach allows your business to continuously improve and optimize. </p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14.03 8.70001L9.35999 13.36C9.21999 13.51 9.02999 13.58 8.82999 13.58C8.63999 13.58 8.44999 13.51 8.29999 13.36L5.97 11.03C5.68 10.74 5.68 10.26 5.97 9.96997C6.26 9.67997 6.74 9.67997 7.03 9.96997L8.82999 11.77L12.97 7.64001C13.26 7.34001 13.74 7.34001 14.03 7.64001C14.32 7.93001 14.32 8.40001 14.03 8.70001Z" fill="green"/>
                       </svg>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Reliability and Security</h3>
                                <p className='text-sm opacity-70'>Our commitment to data privacy, encryption, and regular security updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

        </div>
    );
};

export default page;