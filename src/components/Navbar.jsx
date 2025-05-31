import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            {/* name of the e-commerse */}

            <div className="text-3xl font-semibold text-sky-800">
              SkyCommerce
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 border-b-2 border-sky-500"
                    : "text-gray-600 hover:text-sky-500 hover:bg-sky-50/50 rounded-lg"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 border-b-2 border-sky-500"
                    : "text-gray-600 hover:text-sky-500 hover:bg-sky-50/50 rounded-lg"
                }`
              }
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 border-b-2 border-sky-500"
                    : "text-gray-600 hover:text-sky-500 hover:bg-sky-50/50 rounded-lg"
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 border-b-2 border-sky-500"
                    : "text-gray-600 hover:text-sky-500 hover:bg-sky-50/50 rounded-lg"
                }`
              }
            >
              CONTACT
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 sm:gap-5 min-w-[120px] justify-end">
            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 hover:bg-sky-50 rounded-full transition-colors shrink-0"
            >
              <img
                src={assets.search_icon}
                className="w-5 h-5 text-gray-600"
                alt="Search"
              />
            </button>

            {/* Profile Dropdown */}
            <div className="relative group hidden sm:block">
              <Link
                to="/login"
                className="p-2 hover:bg-sky-50 rounded-full transition-colors relative z-10"
              >
                <img
                  src={assets.profile_icon}
                  className="w-5 h-5"
                  alt="Profile"
                />
              </Link>
              <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 border border-sky-50 z-50">
                <div className="flex flex-col gap-1 px-2">
                  <Link
                    to="/profile"
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 rounded-md"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 rounded-md"
                  >
                    Orders
                  </Link>
                  <button className="px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 rounded-md text-left">
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-sky-50 rounded-full transition-colors shrink-0"
            >
              <img src={assets.cart_icon} className="w-5 h-5" alt="Cart" />
              <span className="absolute top-0 right-0 bg-amber-400 text-sky-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm transform translate-x-1 -translate-y-1">
                {getCartCount()}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setVisible(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-sky-500 shrink-0"
            >
              <img src={assets.menu_icon} className="w-6 h-6" alt="Menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Close Button Header */}
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => setVisible(false)}
            >
              <img src={assets.logo} className="w-32" alt="Website Logo" />
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="p-2 hover:bg-sky-50 rounded-full"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2 flex-1">
            {[
              { path: "/", label: "Home" },
              { path: "/collection", label: "Collection" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-sky-50 text-sky-600"
                      : "text-gray-700 hover:bg-sky-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="mt-auto pt-6 border-t border-sky-100">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 hover:bg-sky-50 rounded-full"
              >
                <img
                  src={assets.search_icon}
                  className="w-5 h-5"
                  alt="Search"
                />
              </button>
              <Link to="/profile" className="p-2 hover:bg-sky-50 rounded-full">
                <img
                  src={assets.profile_icon}
                  className="w-5 h-5"
                  alt="Profile"
                />
              </Link>
            </div>
            <p className="text-center text-sm text-sky-500 mt-4">
              © {new Date().getFullYear()} Your Brand Name
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
