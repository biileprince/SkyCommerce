// NewsletterBox.jsx
import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Add newsletter submission logic
  };

  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get 20% Off Your First Order
          </h2>
          <p className="text-sky-100/90 text-lg">
            Subscribe to our newsletter for exclusive deals and updates
          </p>

          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 placeholder-sky-200/80 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>

          <p className="text-sm text-sky-200/80 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBox;
