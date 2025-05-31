import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-sky-800 mb-8">
        Complete Your Order
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Delivery Information */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <Title
              text1="DELIVERY"
              text2="INFORMATION"
              className="text-2xl mb-6"
            />

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-700 mb-2">First Name</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="John"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sky-700 mb-2">Last Name</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Doe"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sky-700 mb-2">Email Address</label>
                <input
                  className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </div>

              <div>
                <label className="block text-sky-700 mb-2">
                  Street Address
                </label>
                <input
                  className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="123 Main Street"
                  type="text"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-700 mb-2">City</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="New York"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sky-700 mb-2">State</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="NY"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-700 mb-2">Zip Code</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="10001"
                    type="number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sky-700 mb-2">Country</label>
                  <input
                    className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="United States"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sky-700 mb-2">Phone Number</label>
                <input
                  className="w-full border border-sky-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="+1 (555) 123-4567"
                  type="tel"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100 sticky top-4">
            <div className="mb-8">
              <CartTotal />
            </div>

            <div className="mb-8">
              <Title text1="PAYMENT" text2="METHOD" className="text-2xl mb-6" />

              <div className="space-y-4">
                {[
                  {
                    id: "stripe",
                    label: "Credit Card",
                    logo: assets.stripe_logo,
                  },
                  {
                    id: "razorpay",
                    label: "Razorpay",
                    logo: assets.razorpay_logo,
                  },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setMethod(option.id)}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      method === option.id
                        ? "border-sky-500 bg-sky-50"
                        : "border-sky-100 hover:bg-sky-50"
                    }`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 border-2 rounded-full border-sky-300 mr-4">
                      {method === option.id && (
                        <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                      )}
                    </div>
                    {option.logo ? (
                      <img
                        src={option.logo}
                        alt={option.label}
                        className="h-5 ml-2"
                      />
                    ) : (
                      <span className="text-sky-700 font-medium">
                        {option.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate("/orders")}
              className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white py-4 rounded-lg font-medium hover:from-sky-700 hover:to-sky-600 transition-all"
            >
              Place Order
            </button>

            <p className="text-center text-sky-500 text-sm mt-4">
              Your personal data will be used to process your order and support
              your experience throughout this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
