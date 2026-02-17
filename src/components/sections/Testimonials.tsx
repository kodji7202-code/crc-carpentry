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
    <section id="testimonials" className="py-8 md:py-12 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-primary font-medium text-sm mb-2">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel - Single Review View */}
        <div className="relative max-w-2xl mx-auto px-4 md:px-0">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary hover:shadow-xl transition-all duration-200"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary hover:shadow-xl transition-all duration-200"
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

          {/* Testimonial Card - Fixed Height */}
          <Card className="bg-white mx-4 md:mx-0 h-[340px] md:h-[320px]">
            <CardContent className="p-4 md:p-6 h-full flex flex-col">
              {/* Service Type */}
              <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">
                {currentTestimonial.service}
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote - Fixed Height Container */}
              <div className="flex-grow overflow-hidden">
                <blockquote className="text-secondary-600 mb-3 leading-relaxed text-sm md:text-base">
                  "{displayContent}"
                </blockquote>
              </div>

              {/* Read More Button */}
              {isLongContent && (
                <button
                  onClick={toggleExpand}
                  className="text-primary text-sm font-medium hover:underline mb-3 self-start"
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              )}

              {/* Author */}
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {currentTestimonial.name
                      ? currentTestimonial.name.charAt(0)
                      : "C"}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900 text-sm">
                    {currentTestimonial.name || "CRC Carpentry Customer"}
                  </p>
                  <p className="text-xs text-secondary-500">
                    {currentTestimonial.location
                      ? `Location: ${currentTestimonial.location}`
                      : currentTestimonial.source
                      ? `Source: ${currentTestimonial.source}`
                      : "Verified Customer"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap px-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpanded(false);
                }}
                className={`rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary w-5 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Review Counter */}
          <p className="text-center text-xs text-secondary-400 mt-2">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </Container>
    </section>
  );
}
