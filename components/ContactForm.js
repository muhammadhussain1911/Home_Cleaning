// components/ContactForm.js
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "house-cleaning",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const phoneRegex = /^[\d\-()+ ]{10,}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.date) {
      newErrors.date = "Preferred date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Mock submission (no backend required)
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        serviceType: "house-cleaning",
        date: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 text-center">
        <div className="text-4xl text-green-500 mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your quote request has been received. We'll contact you within 1 hour
          during business hours.
        </p>
        <p className="text-green-600 text-sm">
          In the meantime, you can call us directly at{" "}
          <strong>(888) 555-0199</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Get Your Free Quote</h2>
      <p className="text-gray-600 mb-8">
        Book in 60 seconds. No credit card required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="John Smith"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="New York"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* Service Type */}
          <div>
            <label
              htmlFor="serviceType"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="house-cleaning">House Cleaning</option>
              <option value="deep-cleaning">Deep Cleaning</option>
              <option value="move-in-move-out">Move-In/Move-Out</option>
              <option value="office-cleaning">Office Cleaning</option>
              <option value="airbnb-cleaning">Airbnb Cleaning</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Tell us about your cleaning needs, home size, pet info, etc."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
        >
          Get Free Quote
        </button>

        <p className="text-center text-gray-500 text-sm">
          We respect your privacy. Your information is secure and never shared.
        </p>
      </form>
    </div>
  );
}
