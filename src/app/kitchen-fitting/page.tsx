import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Fitting Milton Keynes | Expert Kitchen Fitters | CRC Carpentry",
  description: "Professional kitchen fitting services in Milton Keynes. Complete kitchen installation including cabinets, worktops, and appliances. Free quotes available.",
};

const features = [
  "Complete Kitchen Installation",
  "Cabinet Fitting",
  "Worktop Installation",
  "Appliance Fitting",
  "Kitchen Design",
  "Plumbing & Electrical Coordination",
  "Tile Fitting",
  "Project Management",
];

const process = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We visit your home to discuss your vision, measure up, and provide initial recommendations.",
  },
  {
    step: 2,
    title: "Design & Quote",
    description: "We create a detailed design with 3D visuals and provide a comprehensive, transparent quote.",
  },
  {
    step: 3,
    title: "Installation",
    description: "Our experienced team completes the installation to the highest standards, on time and on budget.",
  },
  {
    step: 4,
    title: "Finishing Touches",
    description: "We add all the finishing details and ensure everything is perfect before sign-off.",
  },
];

export default function KitchenFittingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Kitchen Fitting Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Expert Kitchen Fitting in Milton Keynes
            </h1>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Transform your home with our professional kitchen fitting services. From complete kitchen 
              renovations to bespoke installations, we deliver exceptional craftsmanship with over 20 years 
              of experience.
            </p>
            <Link href="/contact">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Kitchen Fitting Services
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              We handle every aspect of your kitchen installation, ensuring a seamless experience from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-secondary-900">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Process
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              We make your kitchen fitting experience stress-free with our proven four-step process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Kitchen Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a free, no-obligation quote on your kitchen fitting project.
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
