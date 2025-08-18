"use client";
import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false,
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#B5D8B3] p-4 font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl  rounded-xl p-10 text-center "
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Heading */}
        <h2 
          className="text-3xl font-normal text-gray-600 mb-3 tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Insights to your inbox
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Learn why we're the global castings partner of choice to hundreds of
          global OEMs. Sign up to our mailing list.
        </p>

        {/* Inputs Row */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-6 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-gray-700 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-6 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-6 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Required note */}
        <div className="text-right text-sm text-gray-400 mb-6">
          * required fields
        </div>

        {/* Checkboxes - Fixed alignment */}
        <div className="mb-8 text-gray-600 text-left space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-gray-600 rounded border-gray-300 focus:ring-gray-300"
            />
            <span className="text-gray-600">
              By ticking the box below, you consent to us storing your data in
              line with our{" "}
              <a href="#" className="text-gray-600 underline hover:text-gray-500">
                Privacy Policy
              </a>
              , and using the information provided to contact you.
            </span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="h-4 w-4 text-gray-600 rounded border-gray-300 focus:ring-gray-300"
            />
            <span className="text-gray-600">
              I would like to receive communications from Texmo Blank.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-4 rounded-lg hover:bg-gray-500 transition-colors duration-200 font-medium tracking-wide"
        // className="relative inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none transition-all text-balance bg-carbon text-white hover:bg-carbon/85 rounded-sm py-3 md:py-4 px-6 md:px-12 text-base gap-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;