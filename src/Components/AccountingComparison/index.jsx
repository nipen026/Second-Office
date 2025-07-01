import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";


const AccountingComparison = () => {
    return (
        <section className="bg-primary py-16 px-6 text-center text-primary">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="mb-12">
                    <div className="flex justify-center">
                        <BsGraphUpArrow className="text-white text-[70px] mb-5"/>
                    </div>
                    <h2 className="text-3xl text-white md:text-4xl font-semibold">
                        Accounting <span className="text-yellow-600 font-bold">Done Right</span><br />
                        for a Growing Business
                    </h2>
                </div>

                {/* Comparison Cards */}
                <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
                    {/* Wrong Way */}
                    <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8 w-full md:w-1/2 text-left">
                        <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                            The Wrong Way
                        </h3>
                        <ul className="space-y-4 text-sm md:text-base">
                            {[
                                "Trying to do your own books",
                                "Chasing your accountant",
                                "Juggling multiple vendors",
                                "Reactive tax prep and bad surprises",
                            ].map((item, i) => (
                                <li key={i} className="flex font-bold items-start gap-3 text-red-700">
                                    <IoClose className="w-5 h-5 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Appletree Way */}
                    <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8 w-full md:w-1/2 text-left">
                        <h3 className="text-xl font-bold text-primary mb-4 text-center">
                            The Second office Way
                        </h3>
                        <ul className="space-y-4 text-sm md:text-base">
                            {[
                                "Clear, clean bookkeeping every month",
                                "Proactive strategy for growth",
                                "One expert team talking to you monthly",
                                "Cash flow planning and tax planning",
                            ].map((item, i) => (
                                <li key={i} className="flex font-bold items-start gap-3 text-primary">
                                    <FaCheck className="w-5 h-5 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Button */}
                <button className="bg-secondary  transition text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                    LET’S GET YOUR ACCOUNTING DONE RIGHT
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

export default AccountingComparison;
