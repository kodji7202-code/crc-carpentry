import { Container } from "@/components/ui/Container";

const areas = [
  "Milton Keynes",
  "Leighton Buzzard",
  "Luton",
  "Bedford",
  "Newport Pagnell",
  "Wolverton",
  "Bletchley",
  "Fenny Stratford",
  "Stoke Mandeville",
  "Wobaston",
  "Houghton Regis",
  "Dunstable",
  "Kempston",
  "Ampthill",
  "Flitwick",
];

export default function AreasWeServe() {
  return (
    <section className="py-16 md:py-20 bg-white" id="areas-we-serve">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm mb-3">Service Area</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Proudly Serving Milton Keynes & Surrounding Areas
          </h2>
          <p className="text-secondary-600 text-lg">
            We provide expert carpentry and kitchen fitting services across Bedfordshire & Buckinghamshire, 
            bringing exceptional craftsmanship to homes throughout the region.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {areas.map((area, index) => (
            <span 
              key={area}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-secondary-700 font-medium rounded-full reveal"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {area}
            </span>
          ))}
        </div>

        {/* Additional SEO Text */}
        <div className="mt-12 text-center">
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Based in Milton Keynes, we travel throughout Bedfordshire and Buckinghamshire to bring 
            our expert carpentry services to customers in areas including <strong>Leighton Buzzard</strong>,{" "}
            <strong>Luton</strong>, <strong>Bedford</strong>, <strong>Newport Pagnell</strong>, and surrounding villages.
            No job is too small - contact us today for a free quote on your carpentry project.
          </p>
        </div>
      </Container>
    </section>
  );
}
