import React from "react";
import bgImage from "../../assets/bg-1.jpg"; // Replace with your image path
import person1 from "../../assets/p-1.jpg";
import person2 from "../../assets/p-2.jpg";
import person3 from "../../assets/p-3.jpg";

const StressReliefSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center text-white flex flex-col items-center">
                {/* Avatars */}
                <div className="flex items-center justify-center gap-6 mb-6">
                    {[person1, person2, person3].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Person ${i + 1}`}
                            className={`rounded-full object-cover border-4 border-white shadow-md ${i === 1 ? "w-32 h-32" : "w-20 h-20"
                                }`}
                        />
                    ))}
                </div>
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Let’s Help Eliminate Your Stress
                </h2>

                {/* Paragraph */}
                <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-8">
                    If you choose Appletree Business Services for your bookkeeping, payroll or tax needs,
                    you'll find that good things begin to happen in your business. Your common financial
                    challenges will become simple with a clear map to create your ideal situation. More than
                    that, we’ll identify your “typical” stresses and help make them go away.
                </p>

                {/* CTA Button */}
                <button className="border border-white px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition">
                    SCHEDULE AN APPOINTMENT
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default StressReliefSection;
