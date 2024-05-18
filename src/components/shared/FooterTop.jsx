import elementsOneImage from "@/assets/image/bg/Elements1.png";
import Container from "@/components/container/Container";
import { LuArrowUpRight } from "react-icons/lu";

const FooterTop = ({title1, title2, des, link}) => {
    return (
        <section className="bg-primary mt-32 w-full h-[400px] overflow-hidden">
            <Container>
                <div
                    className="h-[350px] lg:h-[400px] pt-10 bg-no-repeat bg-right-top lg:bg-right w-full space-y-3.5 absolute right-0 overflow-x-hidden px-6 footer-top-bg mx-auto"
                    style={{
                        backgroundImage: `url(${elementsOneImage.src})`,
                    }}
                >
                    <h3 data-aos="fade-up" className="flex gap-2 items-center text-xl md:text-[26px] lg:text-[48px] font-bold text-[#F5F9FD]">
                        {title1}{" "}
                        <span className="text-[28px] sm:text-[36px] lg:text-[56px] font-normal font-DMSerif italic">
                            {title2}
                        </span>
                    </h3>
                    <p data-aos="fade-up">{des}</p>
                    <button data-aos="fade-up" className="flex items-center bg-white font-semibold rounded-[30px] py-[6px] gap-2 mt-10">
                        <span className="pl-6 text-primary">{link}</span>
                        <div className="inline-flex justify-center items-center bg-primary  rounded-full text-white w-8 h-8 mr-2">
                            <LuArrowUpRight className="inline" size={20} />
                        </div>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default FooterTop;
