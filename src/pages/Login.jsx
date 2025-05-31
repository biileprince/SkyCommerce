import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add login/signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50/20 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3">
            <div className="w-10 h-1 bg-sky-500 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              {currentState}
            </h2>
            <div className="w-10 h-1 bg-sky-500 rounded-full"></div>
          </div>
          <p className="text-sky-600 mt-2">
            {currentState === "Login"
              ? "Welcome back! Please sign in to your account"
              : "Create a new account to get started"}
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          {currentState === "Sign Up" && (
            <div className="space-y-2">
              <label className="text-sky-700 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sky-700 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sky-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <button type="button" className="text-sky-600 hover:text-sky-800">
              Forgot your password?
            </button>
            <button
              type="button"
              className="text-sky-600 hover:text-sky-800 font-medium"
              onClick={() =>
                setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
              }
            >
              {currentState === "Login"
                ? "Create account"
                : "Already have an account?"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white py-3 rounded-lg font-medium hover:from-sky-700 hover:to-sky-600 transition-all mt-6"
          >
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>

          {currentState === "Login" && (
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-sky-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-sky-600">
                  Or continue with
                </span>
              </div>
            </div>
          )}
        </form>

        {currentState === "Login" && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 p-3 border border-sky-200 rounded-lg hover:bg-sky-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V9h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  fill="#4285F4"
                />
              </svg>
              <span className="text-sky-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border border-sky-200 rounded-lg hover:bg-sky-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                />
              </svg>
              <span className="text-sky-700">Facebook</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
