import bestSolutionImage from "@/assets/image/bg/Elements.png";
import subTitleBGImage from "@/assets/image/title_vector.png";
import Container from "@/components/container/Container";
import Image from "next/image";
import { BiCommentAdd } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { GrSettingsOption } from "react-icons/gr";
import { RiUserSearchLine } from "react-icons/ri";

const GuidingPrincipleOfYou = () => {
    return (
        <div
            className="bg-secondary bg-cover bg-center rounded-t-3xl py-5 lg:py-10"
            style={{ backgroundImage: `url("${bestSolutionImage.src}")` }}
        >
            <Container>
                <div className="h-14 lg:h-[100px]"></div>
                <div data-aos="zoom-in-up" className="px-6 lg:px-0">
                    <div className="w-fit mx-auto">
                        <div className="flex justify-center gap-3">
                            <div className="bg-primary h-[1px] w-[69px] mt-2"></div>
                            <h3 className="font-medium text-sm sm:text-lg font-Inter lg:text-base">
                                Our Porcess
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row md:w-fit md:gap-3">
                        <h3 className="text-xl sm:text-3xl lg:text-[48px] font-bold">
                                Guiding Principles of you
                            </h3>
                            <div>
                                <h3 className="text-primary text-[32px] sm:text-[40px] lg:text-[56px] font-DMSerif italic">
                                    Operations
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
                        <h3 className="text-center py-3 pb-10">
                            Our A2Z Tech Solution Exploring Process in Details
                        </h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-8 py-5">
                    <div className="bg-[#0F263E] rounded-3xl sm:w-1/2 lg:w-[65%] p-3.5 sm:p-10">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="">
                                    <div className="bg-white/10 rounded-full p-3 sm:p-4 lg:p-6 w-fit mb-8">
                                        <RiUserSearchLine
                                            className="text-primary text-3xl lg:text-5xl"
                                        />
                                    </div>
                                    <h4 className="text-[#F5F9FD] text-base md:text-[18px] lg:text-[32px] font-semibold pb-4">
                                        Personalized Understanding
                                    </h4>
                                    <p className="pb-5 text-sm md:text-base">
                                        We initiate our process with an in-depth
                                        consultation, diving into your
                                        business&apos;s unique challenges and
                                        goals. This step is crucial for creating
                                        a strong foundation for our
                                        collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0F263E] rounded-3xl sm:w-1/2 lg:w-[35%] p-3.5 sm:p-10">
                            <div className="">
                                <div className="">
                                    <div className="bg-white/10 rounded-full p-3 sm:p-4 lg:p-6 w-fit mb-8">
                                        <FiRefreshCw
                                            className="text-primary text-3xl lg:text-5xl"
                                        />
                                    </div>
                                    <h4 className="text-[#F5F9FD] text-base md:text-[18px] lg:text-[32px] font-semibold pb-4">
                                        Ongoing Engagement
                                    </h4>
                                    <p className="pb-5 text-sm md:text-base">
                                        We prioritize clear and consistent
                                        communication throughout the project to
                                        ensure your needs are met efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-8 py-5">
                        <div className="bg-[#0F263E] rounded-3xl lg:w-[35%] p-3.5 sm:p-10">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="">
                                    <div className="bg-white/10 rounded-full p-3 sm:p-4 lg:p-6 w-fit mb-8">
                                        <GrSettingsOption
                                            className="text-primary text-3xl lg:text-5xl"
                                        />
                                    </div>
                                    <h4 className="text-[#F5F9FD] text-base md:text-[18px] lg:text-[32px] font-semibold pb-4">
                                        Customized Solutions
                                    </h4>
                                    <p className="pb-5 text-sm md:text-base">
                                        Leveraging the insights gained, our
                                        expert team designs solutions that are
                                        not just effective but are a precise fit
                                        for your business's specific needs,
                                        ensuring optimal results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0F263E] rounded-3xl lg:w-[65%] p-3.5 sm:p-10">
                            <div className="">
                                <div className="">
                                    <div className="bg-white/10 rounded-full p-3 sm:p-4 lg:p-6 w-fit mb-8">
                                        <BiCommentAdd
                                            className="text-primary text-3xl lg:text-5xl"
                                        />
                                    </div>
                                    <h4 className="text-[#F5F9FD] text-base md:text-[18px] lg:text-[32px] font-semibold pb-4">
                                        Feedback-Driven Improvement
                                    </h4>
                                    <p className="pb-5 text-sm md:text-base">
                                        We actively seek and value your feedback
                                        post-delivery. This ongoing dialogue
                                        helps us refine our services and adapt
                                        to your evolving needs, ensuring
                                        continuous improvement and satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default GuidingPrincipleOfYou;
