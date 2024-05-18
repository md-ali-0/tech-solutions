"use client";
import Container from "@/components/container/Container";
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
                isActive == idx ? "bg-primary text-white" : "text-[#153658]"
            }`}
            onClick={handleToggle}
        >
            <h2 className="flex flex-row justify-between items-center lg:text-[20px] font-semibold py-3 cursor-pointer">
                <span>{`${idx + 1} ${faq.question}`}</span>
                {isActive == idx ? <PiMinusThin /> : <GoPlus />}
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

const FaqPage = () => {
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
        <div className="">
            <Container>
                <div className="flex items-start lg:my-2">
                    <ul className="flex flex-col ">
                        {faqs.map((faq, idx) => (
                            <FaqItem
                                key={idx}
                                faq={faq}
                                idx={idx}
                                isActive={isActive}
                                setIsActive={setIsActive}
                                className="#F5F9FD"
                            />
                        ))}
                    </ul>
                </div>
                <div className="h-[100px]"></div>
            </Container>
        </div>
    );
};

export default FaqPage;
