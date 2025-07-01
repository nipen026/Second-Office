import React from "react";
import serviceImg from "../../assets/5209.jpg"; // replace with your image path

const ServicesSection = () => {
  return (
    <section className="bg-[#fafaf7] py-16 px-6">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm text-primary uppercase tracking-widest mb-2 font-semibold">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-tight mb-4">
            Services and <span className="text-yellow-600">Solutions</span><br />
            for Your Small Business
          </h2>
          <p className="text-primary text-base mb-6">
            At Appletree Business Services, our specialty is providing small
            business owners nationwide quality accounting, bookkeeping, payroll and
            tax services they need, packaged in a combined ‘Business Owners Package.’
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-primary-900 transition">
            EVERYTHING WE CAN DO FOR YOU
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={serviceImg}
            alt="Service"
            className="w-full h-auto rounded-r-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
