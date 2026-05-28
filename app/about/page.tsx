import Image from "next/image";
import { FaShip, FaUserShield, FaGlobe, FaTruck } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="flex-1 w-full bg-light-grey">
      
      {/* Page Header */}
      <section className="bg-navy py-12 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy-dark pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
            Our History
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 font-poppins">
            About Faith Global
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Reliable customs compliance and dedicated freight forwarding since 2017.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Images Grid */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-gray-100 shadow-xl" data-aos="zoom-in">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Faith Global Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              
              {/* Floating badge for 9 Years experience */}
              <div className="absolute top-6 left-6 bg-orange-accent text-white p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-white/10">
                <span className="text-3xl font-black font-poppins leading-none">9+</span>
                <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1 text-center">Years of<br />Excellence</span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-7 text-left space-y-6" data-aos="fade-up">
              <span className="text-orange-accent text-xs font-bold uppercase tracking-widest">
                Our Pedigree
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight font-poppins">
                Reliable Global Logistics & Custom House Brokers
              </h2>
              <p className="text-charcoal-light text-base leading-relaxed font-sans">
                With over 9 years of active industry experience, we specialize in high-end freight forwarding, seamless customs clearance, and global supply chain operations. We provide tailored solutions to move your freight securely across global borders.
              </p>

              {/* Point Layout Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                    <FaShip className="text-lg text-orange-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm sm:text-base">Freight Forwarding</h4>
                    <p className="text-xs text-charcoal-light mt-0.5">Custom ocean and air routes tailored to your deadlines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                    <FaUserShield className="text-lg text-orange-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm sm:text-base">Custom House Clearance</h4>
                    <p className="text-xs text-charcoal-light mt-0.5">Compliant filing and brokerage to avoid port penalties.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-lg text-orange-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm sm:text-base">Global Networks</h4>
                    <p className="text-xs text-charcoal-light mt-0.5">Robust agent relationships across European, US, and Asian ports.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                    <FaTruck className="text-lg text-orange-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm sm:text-base">Last-Mile Support</h4>
                    <p className="text-xs text-charcoal-light mt-0.5">End-to-end container transport straight to your warehouse.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
