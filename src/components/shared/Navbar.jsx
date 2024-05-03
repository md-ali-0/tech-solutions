"use client";

import bannerBG from "@/assets/image/bg/BG.png";
import logo from "@/assets/image/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuArrowUpRight, LuMenu, LuPhoneCall, LuX } from "react-icons/lu";
import Container from "../container/Container";

const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <header className="absolute w-full z-50">
            <div className="relative">
                <Container>
                    <nav className="flex justify-between items-center py-7 lg:px-0 px-6">
                        <Link className="flex items-center gap-2" href={"/"}>
                            <Image
                                src={logo.src}
                                alt=""
                                width={40}
                                height={40}
                            />
                            <h3 className="uppercase text-base font-bold lg:text-2xl lg:font-semibold text-white">
                                Tech Solutions
                            </h3>
                        </Link>
                        <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
                            {menuIsOpen ? (
                                <LuX
                                    size={30}
                                    className="lg:hidden text-white"
                                />
                            ) : (
                                <LuMenu
                                    size={30}
                                    className="lg:hidden text-white"
                                />
                            )}
                        </button>
                        <ul className="hidden lg:flex items-center border font-medium line-h text-[#D4E5F6] border-[#133150] px-6 rounded-3xl gap-9 *:py-[10px]">
                            <li className={pathName == "/" ? "active" : ""}>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li
                                className={
                                    pathName == "/about-us" ? "active" : ""
                                }
                            >
                                <Link href={"/about-us"}>About Us</Link>
                            </li>
                            <li
                                className={
                                    pathName == "/our-service" ? "active" : ""
                                }
                            >
                                <Link href={"/our-service"}>Our Service</Link>
                            </li>
                            <li className={pathName == "/faq" ? "active" : ""}>
                                <Link href={"/faq"}>FAQ</Link>
                            </li>
                        </ul>
                        <div className="hidden lg:flex gap-4 *:text-[#F5F9FD] *:font-semibold *:rounded-[30px]">
                            <button className="flex  items-center bg-[#2B3446] py-[6px] gap-2">
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 ml-2">
                                    <LuPhoneCall className="inline" size={20} />
                                </div>
                                <span className="pr-6">+44 7441 398272</span>
                            </button>
                            <button className="flex  items-center bg-primary py-[6px] gap-2">
                                <span className="pl-6">Contact Us</span>
                                <div className="inline-flex justify-center items-center bg-white rounded-full text-primary w-8 h-8 mr-2">
                                    <LuArrowUpRight
                                        className="inline"
                                        size={20}
                                    />
                                </div>
                            </button>
                        </div>
                    </nav>
                </Container>
                <div
                    className={`absolute top-0 ${
                        menuIsOpen ? "" : "hidden"
                    } lg:hidden h-screen w-full`}
                    style={{ background: `url("${bannerBG.src}")` }}
                >
                    <div className="flex justify-between items-center pt-7 px-6">
                        <Link className="flex items-center gap-2" href={"/"}>
                            <Image
                                src={logo.src}
                                alt=""
                                width={40}
                                height={40}
                            />
                            <h3 className="uppercase text-base font-bold lg:text-2xl lg:font-semibold text-white">
                                Tech Solutions
                            </h3>
                        </Link>
                        <button onClick={() => setMenuIsOpen(false)}>
                            <LuX size={30} className="text-white" />
                        </button>
                    </div>
                    <div className="flex items-center pb-10">
                        <ul className="flex flex-col gap-5 py-10 px-6 *:text-[#D4E5F6]">
                            <li>
                                <Link
                                    href={"/"}
                                    className={
                                        pathName == "/" ? "active py-2" : "py-3"
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/about-us"}
                                    className={
                                        pathName == "/about-us"
                                            ? "active py-2"
                                            : "py-3"
                                    }
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/our-service"}
                                    className={
                                        pathName == "/our-service"
                                            ? "active py-2"
                                            : "py-3"
                                    }
                                >
                                    Our Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/faq"}
                                    className={
                                        pathName == "/faq"
                                            ? "active py-2"
                                            : "py-3"
                                    }
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="self-end px-6">
                        <button className="bg-[#3757F5] text-white text-[18px] font-semibold focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 w-full rounded-xl px-5 py-3">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
