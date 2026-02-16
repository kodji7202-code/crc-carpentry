import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Contact us today for a free, no-obligation quote. Our experienced team 
            is ready to help you create the kitchen or carpentry project of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary">
                View Our Projects
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-4">Or give us a call</p>
            <a 
              href="tel:07725343916" 
              className="text-2xl md:text-3xl font-bold text-primary hover:text-primary-light transition-colors"
            >
              07725 343916
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
