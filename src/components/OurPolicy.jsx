// OurPolicy.jsx
import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <section className="bg-sky-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Policy Cards */}
          {[
            {
              icon: assets.exchange_icon,
              title: "Easy Exchange Policy",
              text: "Hassle-free product exchanges within 14 days",
            },
            {
              icon: assets.quality_icon,
              title: "7 Days Returns",
              text: "Free return policy for all purchases",
            },
            {
              icon: assets.support_img,
              title: "24/7 Support",
              text: "Dedicated customer service team",
            },
          ].map((policy, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-sky-100 rounded-full">
                  <img
                    src={policy.icon}
                    className="w-12 h-12 object-contain"
                    alt={policy.title}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">
                {policy.title}
              </h3>
              <p className="text-sky-600/90">{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
