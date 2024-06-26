import logo from "@/assets/image/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import Container from "../container/Container";

const Footer = () => {
    return (
        <footer className="bg-secondary rounded-t-3xl py-5 pt-10 lg:pt-28 -mt-10 z-50">
            <Container>
                <div className="flex flex-col md:flex-row pb-6 border-b border-[#222e3b] justify-between md:items-center w-full px-6 md:px-0 gap-3 mb-3">
                    <Link className="flex items-center gap-2 py-3.5" href={"/"}>
                        <Image src={logo.src} alt="" width={40} height={40} />
                        <h3 className="uppercase text-base font-bold lg:text-2xl lg:font-semibold text-white">
                            Tech Solutions
                        </h3>
                    </Link>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 text-[#F5F9FD]">
                        <h3 className="text-base lg:text-[18px] font-semibold">
                            Ready to get started?
                        </h3>
                        <button className="flex  items-center bg-primary font-semibold rounded-[30px] py-3.5 gap-2 px-2">
                            <span className="pl-6">Get Started</span>
                            <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                <LuArrowUpRight className="inline" size={20} />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between space-y-2 lg:space-y-0 py-3 px-6 lg:px-0">
                    <div className="order-4 lg:order-1 py-3 lg:py-0">
                        <h3 className="text-[20px] lg:text-2xl font-bold text-white py-6">
                            Subscribe to our
                            <br className="hidden lg:block" /> newsletter
                        </h3>
                        <div className="relative flex lg:justify-center items-center max-w-[360px] lg:max-w-full">
                            <input
                                className="bg-[#212e3a] focus:outline-none placeholder:text-[#98C2ED] placeholder:font-medium rounded-xl px-2 py-3.5 w-full"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                            />
                            <button className="absolute right-0 bg-primary rounded-xl text-white py-5 px-5">
                                <LuChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 py-2 lg:py-0">
                        <h3 className="text-[#F5F9FD] text-[18px] font-bold py-5">
                            Site Map
                        </h3>
                        <ul className="*:text-[#F5F9FD] space-y-6">
                            <li>
                                <Link className="hover:text-primary" href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href={"/about-us"}>About Us</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href={"/our-service"}>Our Service</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href={"/faq"}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="order-2 lg:order-3 py-2 lg:py-0">
                        <h3 className="text-[#F5F9FD] text-[18px] font-bold py-5">
                            Contacts
                        </h3>
                        <ul className="*:text-[#F5F9FD] space-y-6">
                            <li>
                                <span className="text-primary">Email:</span>{" "}
                                admin@a2z-techsolutions.co.uk
                            </li>
                            <li>
                                <span className="text-primary">Mobile:</span>{" "}
                                +44 7441 398272
                            </li>
                            <li>
                                <span className="text-primary">Landline:</span>{" "}
                                +441224 042961
                            </li>
                        </ul>
                    </div>
                    <div className="order-3 lg:order-4 py-2 lg:py-0">
                        <h3 className="text-[#F5F9FD] text-[18px] font-bold py-5">
                            Company
                        </h3>
                        <ul className="*:text-[#F5F9FD] space-y-6">
                            <li>A2Z Tech Solutions(Aberdeen) Ltd</li>
                            <li>Registered in Scotland No. SC718942</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:py-20"></div>
                <div className="flex text-[#D4E5F6] justify-between items-end lg:items-center px-6 md:px-0">
                    <div className="flex flex-col justify-center md:items-center md:flex-row lg:space-x-[60px] sm:gap-5 lg:gap-0">
                        <h3>© 2024 All Rights Reserved</h3>
                        <h3>
                            <Link className="hover:text-primary" href={"#"}>Terms & Conditions</Link>
                        </h3>
                        <h3>
                            <Link className="hover:text-primary" href={"#"}>Privacy Policy</Link>
                        </h3>
                    </div>
                    <div className="flex text-xl space-x-5 pb-3 lg:pb-0 lg:space-x-9">
                        <Link className="hover:text-primary" href={"#"}>
                            <FaFacebookF />
                        </Link>
                        <Link className="hover:text-primary" href={"#"}>
                            <FaTwitter />
                        </Link>
                        <Link className="hover:text-primary" href={"#"}>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
