import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="contact">
      {/* Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8962E] to-[#8B6914]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' stroke='%23000000' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8 rounded-full" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for a Bespoke Transformation?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            Request your no-obligation quote today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Inverse Button - White with Gold Text */}
            <Link href="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-[#D4AF37] hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold border-0"
              >
                Get a Quote
              </Button>
            </Link>
            
            {/* Secondary Button - White outline */}
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#8B6914] transition-all duration-300 font-bold"
              >
                View Our Work
              </Button>
            </Link>
          </div>
          
          {/* Phone Number */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <a
              href="tel:07588019692"
              className="inline-flex items-center justify-center gap-3 text-white font-bold text-lg hover:text-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>07588 019692</span>
            </a>
          </div>
        </div>
      </Container>
      
      {/* Add custom animation for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
