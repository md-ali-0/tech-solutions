import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import AboutA2Z from "@/components/pages/about/AboutA2Z";
import Empowering from "@/components/pages/about/Empowering";
import GuidingPrincipleOfYou from "@/components/pages/about/GuidingPrincipleOfYou";
import FooterTop from "@/components/shared/FooterTop";

const page = () => {
    return (
        <div>
            <Breadcrumb
                pageDetails={{
                    url: "about-us",
                    pageName: "About Us",
                    title1: "For a Better",
                    title2: "Tomorrow",
                    description: "We believe in your success.",
                }}
            />
            <AboutA2Z />
            <GuidingPrincipleOfYou />
            <Empowering />
            <FooterTop title1={"Ready to"} title2={"Learn More"} des={"Discover how our services can revolutionize your business."} link={"Explore Services"}/>
        </div>
    );
};

export default page;
