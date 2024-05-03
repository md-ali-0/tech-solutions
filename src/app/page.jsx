import Banner from "@/components/pages/home/Banner";
import CustomizedService from "@/components/pages/home/CustomizedService";
import EmpoweringGrowth from "@/components/pages/home/EmpoweringGrowth";
import FAQ from "@/components/pages/home/FAQ";
import OurBastSolution from "@/components/pages/home/OurBastSolution";

export default function Home() {
    return (
        <main>
            <Banner />
            <EmpoweringGrowth />
            <OurBastSolution/>
            <CustomizedService/>
            <FAQ/>
        </main>
    );
}
