// components/FAQ.js
"use client";

import { useState } from "react";

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [],
}) {
  if (!items || items.length === 0) {
    items = [
      {
        q: "How much does house cleaning cost?",
        a: "Pricing depends on your home size and cleaning needs. We offer free in-home estimates or phone quotes. Call (888) 555-0199 for details.",
      },
      {
        q: "Are your cleaners background checked?",
        a: "Yes, all our cleaners undergo thorough background checks and are fully trained professionals.",
      },
      {
        q: "Can I schedule same-day cleaning?",
        a: "Many areas have same-day availability. Contact us to check availability in your location.",
      },
      {
        q: "Do you use eco-friendly cleaning products?",
        a: "Yes, we offer eco-friendly cleaning options upon request at no additional cost.",
      },
      {
        q: "How long does a typical cleaning take?",
        a: "Standard house cleaning typically takes 2-4 hours depending on home size and condition.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, we are fully licensed, insured, and bonded in all service areas.",
      },
    ];
  }

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">
            Answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.q}
                </span>
                <span className="text-2xl text-secondary flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your question?</p>
          <a
            href="tel:+18885550199"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Call Us: (888) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
