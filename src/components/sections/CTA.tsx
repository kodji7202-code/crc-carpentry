import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary-900" id="contact">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for a Bespoke Transformation?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            Request your no-obligation quote today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Get a Quote
              </Button>
            </Link>
            
            {/* Phone Number */}
            <a
              href="tel:07588019692"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-lg hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>07588 019692</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
