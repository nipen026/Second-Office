import React from "react";
import bannerImg from "../../assets/banner.mp4";
const Banner = () => {
    return (
        <section className="h-auto banner-gradient  ">
            <div className=" flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="md:w-1/2 max-w-2xl ps-5 ms-auto text-center md:text-left">
                    <h1 className="text-3xl mb-2  md:text-4xl font-bold text-primary leading-snug ">
                        Stop
                    </h1>
                    <p className="text-3xl/12 mb-2  md:text-4xl font-bold text-primary leading-snug ">Chasing Your </p>
                    <p className="text-3xl/12 mb-4  md:text-4xl font-bold text-primary leading-snug ">Accountant</p>
                    <p className="text-primary text-base md:text-lg mb-6">
                        Work with a responsive, proactive team. We provide quality bookkeeping, payroll and tax services to small business nationwide.
                    </p>
                    <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
                        Schedule a Free Consultation
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2 h-[600px]">
                    <video
                        src={bannerImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-l-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
