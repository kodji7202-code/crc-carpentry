import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carpentry & Joinery Milton Keynes | Bespoke Woodwork | CRC Carpentry",
  description: "Expert carpentry and joinery services in Milton Keynes. Bespoke furniture, wardrobes, doors, and custom woodwork. Quality craftsmanship guaranteed.",
};

const services = [
  {
    title: "Bespoke Furniture",
    description: "Custom-made furniture designed and built to your exact specifications.",
  },
  {
    title: "Fitted Wardrobes",
    description: "Beautiful, space-saving wardrobes tailored to your bedroom.",
  },
  {
    title: "Door Installation",
    description: "Professional fitting of internal and external doors with matching frames.",
  },
  {
    title: "Stairs & Banisters",
    description: "Custom staircases and banisters to transform your hallway.",
  },
  {
    title: "Kitchen Units",
    description: "Bespoke kitchen cabinets and units for a unique look.",
  },
  {
    title: " shelving & Storage",
    description: "Custom shelving solutions to maximise your space.",
  },
];

export default function CarpentryAndJoineryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Carpentry & Joinery Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Expert Carpentry & Joinery in Milton Keynes
            </h1>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              From bespoke furniture to fitted wardrobes, our experienced carpenters deliver exceptional 
              quality craftsmanship for homes across Milton Keynes and Buckinghamshire.
            </p>
            <Link href="/contact">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Carpentry Services
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              We offer a wide range of carpentry and joinery services, all delivered with the highest standards of craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Why Choose CRC Carpentry?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-secondary-900">20+ Years Experience</h3>
                    <p className="text-secondary-600">Industry veterans with decades of combined experience.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Quality Materials</h3>
                    <p className="text-secondary-600">We only use the finest materials for lasting results.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Fully Insured</h3>
                    <p className="text-secondary-600">Complete peace of mind with full insurance coverage.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Guaranteed Work</h3>
                    <p className="text-secondary-600">All work backed by our satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 font-medium">Carpentry Projects</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Carpentry Work?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today to discuss your carpentry requirements. We're happy to help with projects of any size.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">Get in Touch</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
