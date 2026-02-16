import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flooring Installation Milton Keynes | Professional Floor Fitters | CRC Carpentry",
  description: "Professional flooring installation services in Milton Keynes. Hardwood, laminate, and luxury vinyl flooring. Expert floor fitting across Buckinghamshire.",
};

const services = [
  {
    title: "Hardwood Flooring",
    description: "Solid and engineered hardwood flooring for a timeless, elegant look.",
  },
  {
    title: "Laminate Flooring",
    description: "Durable and cost-effective laminate flooring in a wide range of styles.",
  },
  {
    title: "Luxury Vinyl Flooring",
    description: "Modern LVT flooring that's waterproof and perfect for any room.",
  },
  {
    title: "Floor Sanding",
    description: "Restore your wooden floors to their original beauty.",
  },
  {
    title: "Floor Repairs",
    description: "We repair damaged flooring to extend its lifespan.",
  },
  {
    title: "Floor Maintenance",
    description: "Professional cleaning and maintenance services.",
  },
];

export default function FlooringInstallationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Flooring Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Professional Flooring Installation in Milton Keynes
            </h1>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Transform your floors with our expert flooring installation services. We supply and fit 
              hardwood, laminate, and luxury vinyl flooring with professional finishing.
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
              Our Flooring Services
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of flooring services to suit all budgets and styles.
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Why Choose Our Flooring Services?
              </h2>
              <p className="text-secondary-600 text-lg mb-6">
                With years of experience in flooring installation, we ensure a flawless finish 
                that transforms your space. We only work with quality materials from trusted suppliers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">Free measuring and quoting service</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">Professional installation team</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">Quality materials from trusted suppliers</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">Competitive pricing</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="text-gray-500 font-medium">Flooring Projects</p>
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
              Need New Flooring?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a free quote on your flooring project. We serve Milton Keynes and all of Buckinghamshire.
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
