import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-500 to-sky-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-1 bg-amber-300 rounded-full" />
              <p className="font-semibold text-sm uppercase tracking-widest text-amber-100">
                Our Bestseller
              </p>
              <div className="w-12 h-1 bg-amber-300 rounded-full" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="prata-regular block mb-4">Latest Arrivals</span>
              <span className="text-xl font-normal">
                Summer Collection 2024
              </span>
            </h1>
            <Link to="/collection" className="block">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300">
                <span className="font-medium text-sm uppercase tracking-wider">
                  Shop Now
                </span>
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Image Container */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={assets.hero_img}
                alt="Latest Collection"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-sky-600/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white" />
    </section>
  );
};

export default Hero;
