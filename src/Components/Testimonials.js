import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Daniel Loveland",
    },
    {
      id: 2,
      quote: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Nellie Iglesias",
    },
    {
      id: 3,
      quote: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Tristan Clousso",
    },
  ];

  return (
    <div className="bg-[#f8f8f6] py-10 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-start mb-10 ml-10">
          <h2 className="text-5xl font-bold text-[#422f40]">Words from happy clients</h2>
          <p className="text-lg text-[#422f40]">Testimonials and Reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" p-6 rounded-lg text-center"
            >
              <div className="text-[#f68b1f] z-60 text-4xl font-bold mb-4">“</div>
              <p className="text-[#422f40] text-base mb-4">{testimonial.quote}</p>
              <p className="text-[#422f40] font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
