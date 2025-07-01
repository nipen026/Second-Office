import React from "react";
import insight2 from '../../assets/insight-2.png'
import insight3 from '../../assets/insight-3.png'
const insights = [
  {
    title: "Tax Planning Strategies for 2024",
    description:
      "Learn about the latest tax planning opportunities and strategies for the upcoming year.",
    image: insight2,
  },
  {
    title: "Business Growth Through Financial Planning",
    description:
      "Discover how effective financial planning can drive your business growth.",
    image: insight3,
  },
  {
    title: "Digital Transformation in Accounting",
    description:
      "Explore how digital tools are revolutionizing the accounting industry.",
    image: insight3,
  },
];

const LatestInsights = () => {
  return (
    <section className="bg-[#F8FBFF] py-16 px-4">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-10">
          Latest Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-container"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-primary mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {insight.description}
                </p>
                <a
                  href="#"
                  className="text-sm text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
