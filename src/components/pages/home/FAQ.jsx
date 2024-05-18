"use client";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { PiMinusThin } from "react-icons/pi";

const FaqItem = ({ faq, idx, isActive, setIsActive }) => {
    const handleToggle = () => {
        setIsActive(idx);
    };
    return (
        <li
            className={`border rounded-xl my-2 px-8 py-6 ${
                isActive == idx
                    ? "bg-primary text-white"
                    : "text-[#153658]"
            }`}
            onClick={handleToggle}
        >
            <h2 className="flex flex-row justify-between items-center text-base lg:text-[20px] font-semibold py-3 cursor-pointer">
                <span>{`${idx + 1} ${faq.question}`}</span>
                {isActive == idx ? <PiMinusThin size={25} /> : <GoPlus size={25} />}
            </h2>
            <div
                x-ref="tab"
                className={`border-l-2 border-primary overflow-hidden max-h-0 duration-500 transition-all ${
                    isActive == idx ? "max-h-[80px]" : ""
                }`}
            >
                <p className="p-3">{faq.answer}</p>
            </div>
        </li>
    );
};

const FAQ = () => {
    const [isActive, setIsActive] = useState(1);
    const faqs = [
        {
            question: "How do your Al solutions improve customer service?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question:
                "Are your Al and chatbot solutions customizable to specific industries?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question:
                "How do you measure the success of a digital marketing campaign?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question: "Can you create a mobile-responsive website?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question: "What kind of processes can be automated in my business?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
    ];
    return (
        <div className="bg-[#F5F9FD] px-6 lg:px-0">
            <Container>
                <div className="h-[100px]"></div>
                <div data-aos="fade-up" className="px-6">
                    <div className="w-fit mx-auto">
                        <div className="flex justify-center gap-3">
                            <div className="bg-primary h-[1px] w-[69px] mt-2"></div>
                            <h3 className="font-medium text-[#153658] text-sm sm:text-lg font-Inter lg:text-base">
                                Our FAQS
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row md:w-fit md:gap-3">
                            <h3 className="text-2xl text-[#1D1F2C] sm:text-3xl lg:text-[48px] font-bold">
                                Frequently Asked
                            </h3>
                            <div>
                            <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                    Questions
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
                        <h3 className="text-center text-[#153658] py-3 pb-10">
                            Answers to the most frequently asked questions about
                            our services
                        </h3>
                    </div>
                </div>
                <div data-aos="fade-down" className="flex justify-center items-start my-2">
                    <div className="w-full sm:w-10/12 lg:w-1/2 my-1">
                        <ul className="flex flex-col">
                            {faqs.map((faq, idx) => (
                                <FaqItem
                                    key={idx}
                                    faq={faq}
                                    idx={idx}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="h-[100px]"></div>
            </Container>
        </div>
    );
};

export default FAQ;
