// Contact.jsx
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <Title
          text1="CONTACT"
          text2="US"
          className="text-4xl font-bold text-sky-800"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        <img
          className="w-full lg:max-w-2xl rounded-2xl shadow-xl"
          src={assets.contact_img}
          alt="Our store location"
        />
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-800">Visit Us</h3>
            <div className="space-y-2 text-sky-600/90">
              <p>6789 Amamoma Station</p>
              <p>Cape Coast, Ghana</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-800">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-sky-600/90">
                Tel:{" "}
                <a href="tel:+233-555-902-675" className="hover:text-sky-700">
                  +233-555-902-675
                </a>
              </p>
              <p className="text-sky-600/90">
                Email:{" "}
                <a
                  href="mailto:contact@skycommerce.com"
                  className="hover:text-sky-700"
                >
                  contact@skycommerce.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-800">Careers</h3>
            <p className="text-sky-600/90">
              Join our team of innovators and help shape the future of
              e-commerce.
            </p>
            <button className="bg-gradient-to-r from-sky-600 to-sky-500 text-white px-8 py-3 rounded-full hover:from-sky-700 hover:to-sky-600 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </section>
  );
};

export default Contact;
