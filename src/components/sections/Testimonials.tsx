import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Bletchley, MK",
    content: "CRC Carpentry fitted our new kitchen and we couldn't be happier. The attention to detail was exceptional and the finish is flawless. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Thompson",
    location: "Wolverton, MK",
    content: "Excellent craftsmanship! They built bespoke wardrobes for our bedroom and the quality is outstanding. Professional, punctual and great communication throughout.",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    location: "Milton Keynes",
    content: "We had our entire ground floor flooring replaced and the team did an amazing job. Very competitive pricing and the finish is perfect. Will definitely use again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-secondary-600 text-lg">
            We're proud to have helped hundreds of homeowners across Milton Keynes 
            transform their properties with our carpentry services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-secondary-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                    <p className="text-sm text-secondary-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
