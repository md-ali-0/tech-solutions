"use client";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { PiMinusThin } from "react-icons/pi";

const FaqItem = () => {
    const [faqOpen, setFaqOpen] = useState(false);
    return (
        <li
            class={`border rounded-xl my-2 px-8 py-6 ${
                faqOpen ? "bg-primary text-white" : "text-[#153658]"
            }`}
            onClick={() => setFaqOpen(!faqOpen)}
        >
            <h2 class="flex flex-row justify-between items-center text-[20px] font-semibold py-3 cursor-pointer">
                <span>
                    01 How do your Al solutions improve customer service?
                </span>
                {!faqOpen ? <GoPlus /> : <PiMinusThin />}
            </h2>
            <div
                x-ref="tab"
                class={`border-l-2 border-primary overflow-hidden max-h-0 duration-500 transition-all ${
                    faqOpen ? "max-h-[80px]" : ""
                }`}
            >
                <p class="p-3">
                    Shipping time is set by our delivery partners, according to
                    the delivery method chosen by you. Additional details can be
                    found in the order confirmation
                </p>
            </div>
        </li>
    );
};

const FAQ = () => {
    const faq = [
        {
            question: "How do your Al solutions improve customer service?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question: "Are your Al and chatbot solutions customizable to specific industries?",
            answer: "Yes, we specialize in creating AI and chatbot solutions that are tailored to the unique requirements and challenges of different industries.",
        },
        {
            question: "How do you measure the success of a digital marketing campaign?",
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
        <div className="bg-[#F5F9FD]">
            <Container>
                <div className="h-[100px]"></div>
                <div className="px-6">
                    <div className="w-fit mx-auto">
                        <div className="flex justify-center gap-3">
                            <div className="bg-primary h-[1px] w-[69px] mt-2"></div>
                            <h3 className="font-medium text-[#153658] text-xs md:text-base">
                                Our FAQS
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row md:w-fit md:gap-3">
                            <h3 className="text-[26px] text-[#1D1F2C] md:text-[48px] font-bold">
                                Frequently Asked
                            </h3>
                            <div>
                                <h3 className="text-primary text-[32px] md:text-[56px] font-DMSerif italic">
                                    Questions
                                </h3>
                                <Image
                                    className="mx-auto mt-1 w-[150px] md:w-auto"
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
                <div class="flex justify-center items-start my-2">
                    <div class="w-full sm:w-10/12 md:w-1/2 my-1">
                        <ul class="flex flex-col"></ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;