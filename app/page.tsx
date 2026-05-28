import Image from "next/image";
import HeroImageSlider from "./components/HeroImageSlider";
import { 
  FaGlobe, 
  FaUserShield, 
  FaDollarSign, 
  FaRoute, 
  FaHeadset, 
  FaCogs, 
  FaMicrochip, 
  FaCar, 
  FaFlask, 
  FaTshirt, 
  FaBriefcaseMedical,
  FaPlane,
  FaShip,
  FaTruck,
  FaWarehouse
} from "react-icons/fa";
import GlobalMap from "./components/GlobalMap";

export default function Home() {
  const services = [
    {
      title: "Air Freight",
      description: "Time-critical express air shipping connecting your supply chains with premium commercial airlines and cargo carriers globally.",
      icon: <FaPlane className="text-lg" />,
      image: "/images/air-cargo-service.jpg"
    },
    {
      title: "Sea Freight",
      description: "Cost-efficient containerized sea cargo featuring FCL and LCL shipping across premium international trade networks.",
      icon: <FaShip className="text-lg" />,
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customs Clearance",
      description: "Fast customs filings, HTS classification, and duty payment brokerage managed directly by licensed customs experts.",
      icon: <FaUserShield className="text-lg" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Transportation",
      description: "Secure regional container logistics and heavy-duty trucking to move imports and exports from docks to warehouses.",
      icon: <FaTruck className="text-lg" />,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Warehousing",
      description: "Climate-regulated, inventory-tracked, and secure storage hubs providing flexible short and long-term consolidation.",
      icon: <FaWarehouse className="text-lg" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Import/Export Handling",
      description: "End-to-end documentation coordination, certificate of origin filings, and bill of lading releases for smooth international trade.",
      icon: <FaGlobe className="text-lg" />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="flex-1 w-full bg-light-grey">

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative overflow-hidden bg-navy">
        <div className="w-full px-4 sm:px-6 lg:px-0 py-8">
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[440px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 mx-auto lg:max-w-none">
            <HeroImageSlider />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-20">
          
          
<h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none font-poppins">
  <span className="text-orange-accent">Trusted Customs</span>
</h1>



          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed font-sans">
            Going the extra mile to coordinate your air, ocean, and ground freight with absolute customs clearance compliance and zero-delay tracking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <a
              href="/contact"
              id="hero_quote_btn"
              className="bg-orange-accent hover:bg-orange-hover text-white text-center font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-accent/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Request Quote
            </a>
            <a
              href="/contact"
              id="hero_contact_btn"
              className="bg-navy-light/50 hover:bg-navy-light text-white text-center font-bold px-8 py-4 rounded-xl border border-navy-light/60 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-4 tracking-tight">
              Freight Services with Visual Confidence
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Explore the same service offerings with image-led cards directly on the homepage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative w-full h-64 overflow-hidden bg-gray-100 " data-aos="fade-up">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-orange-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 sm:p-7 text-left">
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
              Our Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-4 tracking-tight">
              Engineered For International Reliability
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Discover why premier global brands select us to route their high-value supply lines.
            </p>
          </div>

          {/* Feature Icons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            
            {/* Feature 1 */}
            <div className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mx-auto shadow">
                <FaUserShield className="text-lg text-orange-accent" />
              </div>
              <h4 className="font-extrabold text-navy text-sm sm:text-base leading-snug">Fast Customs Clearance</h4>
              <p className="text-xs text-charcoal-light">In-house custom brokers ensuring immediate regulatory processing.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mx-auto shadow">
                <span className="text-lg text-orange-accent font-bold">$</span>
              </div>
              <h4 className="font-extrabold text-navy text-sm sm:text-base leading-snug">Competitive Freight Rates</h4>
              <p className="text-xs text-charcoal-light">Contracted vessel rates keeping your shipping costs minimal.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mx-auto shadow">
                <FaRoute className="text-lg text-orange-accent" />
              </div>
              <h4 className="font-extrabold text-navy text-sm sm:text-base leading-snug">End-to-End Logistics</h4>
              <p className="text-xs text-charcoal-light">From overseas suppliers straight to your designated warehouses.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mx-auto shadow">
                <FaHeadset className="text-lg text-orange-accent" />
              </div>
              <h4 className="font-extrabold text-navy text-sm sm:text-base leading-snug">Dedicated Support</h4>
              <p className="text-xs text-charcoal-light">24/7 dedicated key account managers resolving custom events.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mx-auto shadow">
                <FaGlobe className="text-lg text-orange-accent" />
              </div>
              <h4 className="font-extrabold text-navy text-sm sm:text-base leading-snug">Global Network</h4>
              <p className="text-xs text-charcoal-light">Agent representation covering over 120 global air/sea ports.</p>
            </div>

          </div>

          {/* Statistics Counters Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy text-white rounded-2xl p-8 sm:p-12 border border-navy-light/40 shadow-xl">
            <div className="space-y-1">
              <span className="block text-4xl sm:text-5xl font-black font-poppins text-orange-accent">9+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider block">Years in Industry</span>
            </div>
            <div className="space-y-1 border-l border-navy-light/40">
              <span className="block text-4xl sm:text-5xl font-black font-poppins text-white">100%</span>
              <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider block">Customs Clearance</span>
            </div>
            <div className="space-y-1 border-l border-navy-light/40">
              <span className="block text-4xl sm:text-5xl font-black font-poppins text-white">45k+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider block">Containers Handled</span>
            </div>
            <div className="space-y-1 border-l border-navy-light/40">
              <span className="block text-4xl sm:text-5xl font-black font-poppins text-white">120+</span>
              <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider block">Connected Ports</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INDUSTRIES SERVED SECTION */}
      <section id="industries" className="py-20 sm:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
              Sectors Handled
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-4 tracking-tight">
              Custom Solutions For Key Sectors
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              We satisfy rigorous specific storage and transportation demands across critical global industries.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* Sector 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaCogs className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Engineering</h4>
            </div>

            {/* Sector 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaMicrochip className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Electronics</h4>
            </div>

            {/* Sector 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaCar className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Auto Parts</h4>
            </div>

            {/* Sector 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaFlask className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Chemicals</h4>
            </div>

            {/* Sector 5 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaTshirt className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Textile</h4>
            </div>

            {/* Sector 6 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-0.5 group" data-aos="fade-up">
              <div className="w-12 h-12 bg-navy-light/10 text-navy rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-accent group-hover:text-white transition-colors">
                <FaBriefcaseMedical className="text-xl" />
              </div>
              <h4 className="font-bold text-navy text-sm sm:text-base">Pharma</h4>
            </div>

          </div>
          <br/>
          <GlobalMap/>
        </div>
      </section>

    </main>
  );
}
