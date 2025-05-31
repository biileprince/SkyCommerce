import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Profile = () => {
  const { navigate } = useContext(ShopContext);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+233-555-902-675",
    address: "6789 Amamoma Station, Cape Coast, Ghana",
  });

  // Mock order history
  const orders = [
    {
      id: "#ORD-001",
      date: "2025-01-15",
      amount: "$149.99",
      status: "Delivered",
    },
    { id: "#ORD-002", date: "2025-01-10", amount: "$89.99", status: "Shipped" },
    {
      id: "#ORD-003",
      date: "2025-01-05",
      amount: "$199.99",
      status: "Processing",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-sky-800 mb-2">My Profile</h1>
        <p className="text-sky-600 max-w-2xl mx-auto">
          Manage your personal information, addresses, and order history
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-sky-800">
                Personal Information
              </h2>
              <button
                onClick={() => setEditMode(!editMode)}
                className="text-sky-600 hover:text-sky-800 font-medium flex items-center gap-1"
              >
                {editMode ? (
                  <>
                    <svg
                      className="w-4 h-4"
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
                    Cancel
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit Profile
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-sky-100"
                    src={assets.profile_icon}
                    alt="Profile"
                  />
                  {editMode && (
                    <button
                      type="button"
                      className="absolute bottom-1 right-1 bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sky-700 mb-2">Full Name</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full border border-sky-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        required
                      />
                    ) : (
                      <p className="text-sky-800 font-medium">
                        {userData.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sky-700 mb-2">
                    Email Address
                  </label>
                  {editMode ? (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full border border-sky-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  ) : (
                    <p className="text-sky-800">{userData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sky-700 mb-2">
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-sky-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  ) : (
                    <p className="text-sky-800">{userData.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sky-700 mb-2">Address</label>
                {editMode ? (
                  <textarea
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="w-full border border-sky-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 min-h-[100px]"
                    required
                  />
                ) : (
                  <p className="text-sky-800">{userData.address}</p>
                )}
              </div>

              {editMode && (
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-600 to-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-700 hover:to-sky-600 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-sky-800">Recent Orders</h2>
              <Link
                to="/orders"
                className="text-sky-600 hover:text-sky-800 font-medium"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border border-sky-100 rounded-lg hover:bg-sky-50"
                >
                  <div>
                    <p className="font-medium text-sky-800">{order.id}</p>
                    <p className="text-sky-600 text-sm">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sky-800">{order.amount}</p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="space-y-8">
          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-6">
            <h2 className="text-xl font-bold text-sky-800 mb-6">
              Account Settings
            </h2>
            <ul className="space-y-4">
              <li>
                <button className="flex items-center gap-3 text-sky-700 hover:text-sky-900 w-full text-left">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Change Password
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 text-sky-700 hover:text-sky-900 w-full text-left">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Payment Methods
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 text-sky-700 hover:text-sky-900 w-full text-left">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                    />
                  </svg>
                  Privacy Settings
                </button>
              </li>
            </ul>
          </div>

          {/* Support Card */}
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="mb-6 text-sky-100">
              Our support team is available 24/7 to assist you with any
              questions or issues.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+233-555-902-675</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@skycommerce.com</span>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-800 p-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
