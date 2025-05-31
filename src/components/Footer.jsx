import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-sky-50/30 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-xl font-semibold text-sky-800">
                SkyCommerce
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                EShop
              </span>
            </div>
            <p className="text-sky-600/90 text-sm">
              Discover premium fashion essentials designed for modern
              lifestyles. Quality meets style in every stitch.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-800">Company</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Delivery", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sky-600/90 hover:text-sky-700 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-800">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+233-555-902-675"
                  className="text-sky-600/90 hover:text-sky-700 transition-colors text-sm"
                >
                  +233-555-902-675
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@gmail.com"
                  className="text-sky-600/90 hover:text-sky-700 transition-colors text-sm"
                >
                  contact@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-800">Follow Us</h3>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-sky-600/90 hover:text-sky-700 transition-colors text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-sky-100 mt-12 pt-6">
          <p className="text-center text-sm text-sky-600/80">
            © {new Date().getFullYear()} EShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
