// About.jsx
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <Title
          text1="ABOUT"
          text2="US"
          className="text-4xl font-bold text-sky-800"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        <img
          className="w-full lg:max-w-xl rounded-2xl shadow-xl"
          src={assets.about_img}
          alt="About our company"
        />
        <div className="flex-1 space-y-6 text-sky-600/90">
          <p className="text-lg leading-relaxed">
            At SkyCommerce, we're revolutionizing online shopping through
            innovative technology and customer-centric design. Founded in 2020,
            we've grown from a small startup to a trusted platform serving
            thousands of customers worldwide.
          </p>
          <p className="text-lg leading-relaxed">
            Our journey began with a simple vision: to create seamless shopping
            experiences that combine quality products with exceptional service.
            Today, we're proud to offer a curated selection of premium items
            while maintaining our commitment to sustainability and ethical
            practices.
          </p>
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold text-sky-800">Our Mission</h3>
            <p className="text-lg">
              To empower consumers with access to high-quality products while
              fostering meaningful connections between brands and their
              customers through innovative e-commerce solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <Title
          text1="WHY"
          text2="CHOOSE US"
          className="text-center mb-12 text-3xl font-bold text-sky-800"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Assurance",
              content:
                "Every product undergoes rigorous quality checks to ensure premium standards",
            },
            {
              title: "Seamless Experience",
              content:
                "User-friendly platform with intuitive navigation and secure transactions",
            },
            {
              title: "Dedicated Support",
              content: "24/7 customer service with personalized assistance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-sky-700 mb-4">
                {item.title}
              </h3>
              <p className="text-sky-600/90">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBox />
    </section>
  );
};

export default About;
