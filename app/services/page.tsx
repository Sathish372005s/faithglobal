import Image from "next/image";
import { 
  FaPlane, 
  FaShip, 
  FaUserShield, 
  FaTruck, 
  FaWarehouse, 
  FaGlobe, 
  FaChevronRight 
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Air Freight",
      description: "Time-critical express air shipping connecting your supply chains with premium commercial airlines and cargo carriers globally.",
      icon: <FaPlane className="text-lg" />,
      image: "/images/air-cargo-service.jpg"
    },
    {
      title: "Sea Freight",
      description: "Cost-efficient containerized sea cargo featuring FCL (Full Container) and LCL (Less-than-Container) shipping across premium trade networks.",
      icon: <FaShip className="text-lg" />,
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customs Clearance",
      description: "Fast custom filings, HTS classification, and duty payment brokerage managed directly by licensed expert custom house agents.",
      icon: <FaUserShield className="text-lg" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Transportation",
      description: "Secure regional container logistics and heavy-duty trucks to safely move imports/exports from docks to warehouse facilities.",
      icon: <FaTruck className="text-lg" />,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Warehousing",
      description: "Climate-regulated, inventory-tracked, and secure storage hubs providing flexible short and long-term consolidation.",
      icon: <FaWarehouse className="text-lg" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
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
      
      {/* Page Header */}
      <section className="bg-navy py-12 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy-dark pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
            Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 font-poppins">
            Logistics & Freight Services
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Providing premium end-to-end cargo movement and compliant customs clearance.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-4 tracking-tight">
              Responsive Logistics & Freight Management
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              We handle the heavy lifting, custom bureaucracy, and international transit lanes.
            </p>
          </div>

          {/* Grid layout cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-left relative overflow-hidden flex flex-col"
                data-aos="fade-up"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-accent opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                
                {/* Dummy Image Header inside card */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-orange-accent transition-colors z-10">
                    {item.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sea Freight Section */}
      <section id="sea-freight" className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Info */}
            <div className="lg:col-span-7 text-left space-y-6" data-aos="fade-up">
              <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3.5 py-1.5 rounded-full inline-block">
                Maritime Logistics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight font-poppins">
                High-Capacity Ocean Cargo Systems
              </h2>
              <p className="text-charcoal-light text-base leading-relaxed">
                We specialize in handling containerized sea freight globally. Whether you need standard containers, temperature-controlled reefers, or oversized machinery space, our contracts with top global shipping alliances guarantee secure space.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3.5 pt-2">
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  FCL (Full Container Load) & LCL (Less-than-Container Load) services
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Direct consolidation networks to major European, US, & UK ports
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Secure tracking with detailed custom clearance reporting at terminals
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Direct port-to-port and complex multi-modal door-to-door layouts
                </li>
              </ul>
            </div>

            {/* Right: Sea Freight Image */}
            <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100" data-aos="zoom-in">
              <div className="absolute inset-0 bg-navy/10 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
                alt="Ocean Sea Freight Logistics Cargo Vessel"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Air Freight Section */}
      <section id="air-freight" className="py-20 sm:py-28 bg-light-grey border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 order-last lg:order-first" data-aos="zoom-in">
              <div className="absolute inset-0 bg-navy/10 z-10" />
              <Image
                src="/images/air-cargo-service.jpg"
                alt="Air Freight Cargo Airplane Terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Column: Air Freight Info */}
            <div className="lg:col-span-7 text-left space-y-6" data-aos="fade-up">
              <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3.5 py-1.5 rounded-full inline-block">
                Express Transit
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight font-poppins">
                High-Priority Air Cargo Networks
              </h2>
              <p className="text-charcoal-light text-base leading-relaxed">
                When time is your main constraint, our express air freight services provide the ultimate solution. We maintain active partnerships with leading global cargo operators to guarantee express handling, prompt boarding, and custom routing.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 pt-2">
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Express high-priority cargo dispatching for urgent parts
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Air Waybill (AWB) reporting with proactive transit checks
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  On-airport custom clearance brokers to accelerate release times
                </li>
                <li className="flex items-center gap-3 font-semibold text-navy text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center flex-shrink-0 text-[10px]"><FaChevronRight /></div>
                  Time-sensitive and climate-regulated cargo handling compliance
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
