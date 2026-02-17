"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Henry S.",
    location: "HP18",
    content:
      "Cristian built our chimney breast/media wall, along with putting in all of our wainscoting panelling around our house, which reinstated the traditional detailed features we wanted to put back into our home. Cris also offered great suggestions when it came to deciding how our shoe storage cupboard could fit all of our shoes! All was built to a high standard with outstanding workmanship, and clear quotes! Would gladly recommend in a heartbeat!",
    rating: 5,
    service: "Chimney Breast / Media Wall & Wainscoting",
    source: null,
  },
  {
    name: "",
    location: "MK",
    content:
      "I can't speak highly enough of Cristian. Not only was he an absolute skilled professional but also a great guy. IKEA kitchens are sometimes a nightmare to assemble but Cristian managed to find solutions to every problem we had, be it uneven walls or floors or any improvisation needing to be done. We also designed a larder which was not a standard thing within the IKEA kitchen but Cristian built it for us and it all came out perfect. Cristian also cares about his customers, he didn't shy away once from giving advice on other bits around the house. Can't recommend him enough!",
    rating: 5,
    service: "IKEA Kitchen Installation",
    source: null,
  },
  {
    name: "Leo Labinot K.",
    location: "MK6",
    content:
      "Chris was very professional and prompt. Really great experience in dealing with Chris and job well done with the countertop. He took his time and ensured every detail was taken care of. Overall great experience and would highly recommend.",
    rating: 5,
    service: "Countertop Installation",
    source: null,
  },
  {
    name: "Robert K.",
    location: "MK10",
    content:
      "Great service — completed the job with the minimum of fuss. Had all the tools and cleaned up after works were complete. First class service.",
    rating: 5,
    service: "General Carpentry",
    source: null,
  },
  {
    name: "",
    location: "HP23",
    content:
      "Great service, clean, tidy, did a good job. Reliable. Will use again.",
    rating: 5,
    service: "General Service",
    source: null,
  },
  {
    name: "Anand P.",
    location: "MK42",
    content:
      "Very good response and quality of work, and a reasonable price.",
    rating: 5,
    service: "Quality & Pricing",
    source: null,
  },
  {
    name: "",
    location: null,
    content:
      "We are utterly speechless! Radu came to refurb our kitchen and hallway but we added the dining room and living room to the build. Radu and his team have transformed the downstairs of our home and made it look like a new build! Most importantly he is friendly, honest, very helpful, cost conscious and gave us a very reasonable quote from the start.",
    rating: 5,
    service: "Full House Refurbishment",
    source: "MyBuilder",
  },
  {
    name: "",
    location: null,
    content:
      "We contacted CRC Carpentry to rectify a kitchen fitted by a previous not so good carpenter. From initial contact when Radu came out and gave us a quote, he was polite and you can tell his knowledge on carpentry was very good. Radu's work and finishing is to a very high standard.",
    rating: 5,
    service: "Kitchen Rectification",
    source: "MyBuilder",
  },
  {
    name: "",
    location: null,
    content:
      "Radu has an excellent eye for detail. He fitted our 7 doors with perfection. He is an asset to anyone who hires him for any kind of carpentry work.",
    rating: 5,
    service: "Door Fitting (7 Doors)",
    source: "MyBuilder",
  },
  {
    name: "",
    location: null,
    content:
      "From start to finish, Cristian was excellent. He checked materials, advised on shortages, suggested better alternatives, removed the old kitchen and flooring, and fitted new units, splashbacks, flooring, and decoration. Great attention to detail and clear communication throughout.",
    rating: 5,
    service: "Full Kitchen Installation",
    source: "crccarpentry.co.uk",
  },
  {
    name: "",
    location: null,
    content:
      "Cristian was very reliable and kept us updated throughout. The bespoke feet for our fireplace surround are perfect and exceeded expectations. We now have a beautiful fireplace.",
    rating: 5,
    service: "Fireplace Surround",
    source: "crccarpentry.co.uk",
  },
  {
    name: "",
    location: "MK17",
    content:
      "Christian installed an engineered wooden floor in our home to a fantastic standard. Professional, reliable, punctual, and kept the workspace tidy every day. Highly recommended.",
    rating: 5,
    service: "Engineered Wooden Floor Installation",
    source: null,
  },
  {
    name: "",
    location: null,
    content:
      "We had a completely new kitchen fitted as well as flooring and a new doorway between the dining room and kitchen. We are thrilled with the quality and would definitely have CRC back again.",
    rating: 5,
    service: "New Kitchen & Flooring",
    source: "crccarpentry.co.uk",
  },
  {
    name: "Radu",
    location: "MK42",
    content:
      "Good communication, fast quotation, on time, trustworthy and reliable. Friendly, polite, highly skilled, and tidy. Radu did a fantastic job quickly and professionally. Highly recommended.",
    rating: 5,
    service: "Cottage Doors & Bespoke Basement Door",
    source: null,
  },
  {
    name: "",
    location: null,
    content:
      "Perfect work. Clean, reliable, and a very good carpenter. Highly recommend CRC. Fantastic service and very hard working.",
    rating: 5,
    service: "General Carpentry",
    source: "crccarpentry.co.uk",
  },
];

const MAX_CHARS = 200;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setExpanded(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setExpanded(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const currentTestimonial = testimonials[currentIndex];
  const isLongContent = currentTestimonial.content.length > MAX_CHARS;
  const displayContent =
    expanded || !isLongContent
      ? currentTestimonial.content
      : currentTestimonial.content.slice(0, MAX_CHARS) + "...";

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Premium Wood Background with Heavy Blur and Gold Overlay */}
      <div className="absolute inset-0">
        {/* Wood texture background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80')",
          }}
        />
        {/* Heavy blur for premium effect */}
        <div className="absolute inset-0 backdrop-blur-3xl" />
        {/* Semi-transparent gold overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-[#8B6914]/15 to-[#D4AF37]/20" />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' stroke='%23FFFFFF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-primary font-medium text-sm mb-3 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg">
            Discover why homeowners across Milton Keynes trust us with their carpentry projects.
          </p>
        </div>

        {/* Carousel - Single Review View */}
        <div className="relative max-w-3xl mx-auto px-4 md:px-0">
          {/* Navigation Arrows - Gold styled */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-10 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-secondary-900 transition-all duration-300 border border-white/20 hover:border-[#D4AF37]"
            aria-label="Previous review"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-10 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-secondary-900 transition-all duration-300 border border-white/20 hover:border-[#D4AF37]"
            aria-label="Next review"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonial Card - Pure White with Gigantic Shadow */}
          <Card className="bg-white mx-4 md:mx-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] transition-shadow duration-500">
            <CardContent className="p-6 md:p-10 h-full flex flex-col relative">
              {/* Large Decorative Gold Quote Mark */}
              <div className="absolute top-4 left-6 text-[#D4AF37]/20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Service Type */}
              <p className="text-xs text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider relative z-10">
                {currentTestimonial.service}
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="flex-grow overflow-hidden relative z-10">
                <blockquote className="text-secondary-700 mb-4 leading-relaxed text-base md:text-lg font-medium">
                  "{displayContent}"
                </blockquote>
              </div>

              {/* Read More Button */}
              {isLongContent && (
                <button
                  onClick={toggleExpand}
                  className="text-[#D4AF37] text-sm font-semibold hover:underline mb-4 self-start relative z-10 transition-colors duration-200"
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#8B6914] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.name
                      ? currentTestimonial.name.charAt(0)
                      : "C"}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-secondary-900 text-base">
                    {currentTestimonial.name || "CRC Carpentry Customer"}
                  </p>
                  <p className="text-sm text-secondary-500">
                    {currentTestimonial.location
                      ? `${currentTestimonial.location}`
                      : currentTestimonial.source
                      ? `${currentTestimonial.source}`
                      : "Verified Customer"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap px-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpanded(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#D4AF37] w-8 h-2"
                    : "bg-white/30 hover:bg-white/60 w-3 h-3"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Review Counter */}
          <p className="text-center text-sm text-white/60 mt-4 font-medium">
            {currentIndex + 1} of {testimonials.length} reviews
          </p>
        </div>
      </Container>
    </section>
  );
}
