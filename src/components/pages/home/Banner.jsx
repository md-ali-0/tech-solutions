import bannerBG from "@/assets/image/bg/BG.png";

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[700px]" style={{background: `url("${bannerBG.src}")`}}>
            
        </div>
    );
};

export default Banner;