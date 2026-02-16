// components/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      city: "New York, NY",
      rating: 5,
      text: "Excellent service! My home has never looked better. The team was professional, friendly, and thorough.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      city: "Los Angeles, CA",
      rating: 5,
      text: "Best cleaning service I've used. They got stains out of my carpet I thought were permanent. Highly recommended!",
      initials: "MC",
    },
    {
      name: "Jennifer Martinez",
      city: "Chicago, IL",
      rating: 5,
      text: "Very reliable and affordable. They showed up on time, finished early, and my house was spotless!",
      initials: "JM",
    },
    {
      name: "David Thompson",
      city: "Houston, TX",
      rating: 5,
      text: "I scheduled them for my move-out cleaning and they did amazing work. Got my full security deposit back!",
      initials: "DT",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers say about our service
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">
                ★
              </span>
            ))}
            <span className="text-gray-600 ml-3 font-semibold">
              4.9/5 Stars • 347+ Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary text-white rounded-lg p-8 text-center">
          <p className="text-lg mb-6">Ready to experience the difference?</p>
          <a
            href="tel:+18885550199"
            className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Schedule Your Cleaning Today
          </a>
        </div>
      </div>
    </section>
  );
}
