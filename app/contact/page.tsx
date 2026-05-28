import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-light-grey">
      
      {/* Page Header */}
      <section className="bg-navy py-12 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy-dark pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
            Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 font-poppins">
            Contact & Support Centre
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Schedule a custom custom house clearance audit or request a direct sea/air freight quote.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 text-left space-y-8 animate-fade-up" data-aos="fade-up">
              <div>
                <span className="text-orange-accent text-xs font-bold uppercase tracking-widest">
                  Corporate Contacts
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3 tracking-tight font-poppins">
                  Let&apos;s Connect
                </h2>
                <p className="text-charcoal-light text-sm sm:text-base mt-2">
                  Connect directly with our corporate shipping coordinators or schedule a custom customs audit.
                </p>
              </div>

              {/* Direct Contacts List */}
              <div className="space-y-6">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8368351578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-orange-accent/30 hover:bg-orange-accent/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Chat Live</span>
                    <span className="text-sm font-bold text-navy group-hover:text-orange-accent transition-colors">+91 8368351578</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:8368351578"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-orange-accent/30 hover:bg-orange-accent/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <FaPhoneAlt className="text-orange-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Direct Hotline</span>
                    <span className="text-sm font-bold text-navy group-hover:text-orange-accent transition-colors">+91 8368351578</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:logisticsfaithglobal@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-orange-accent/30 hover:bg-orange-accent/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <FaEnvelope className="text-orange-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Email Support</span>
                    <span className="text-sm font-bold text-navy group-hover:text-orange-accent transition-colors">logisticsfaithglobal@gmail.com</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center text-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-orange-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Corporate HQ</span>
                    <span className="text-sm font-bold text-navy">House no 1, 1st floor, BLK-B-5 PKT 3, SEC 34, Utsav Residency, North West Delhi, Delhi 110042</span>
                  </div>
                </div>

              </div>

              {/* Slogan placement in contact */}
              <div className="bg-navy text-white p-6 rounded-2xl border border-navy-light/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-accent/10 rounded-full blur-xl pointer-events-none" />
                <p className="text-orange-accent text-xs font-bold uppercase tracking-widest mb-1">Company Motto</p>
                <p className="text-lg font-bold font-poppins italic">&ldquo;Going An Extra Mile For You&rdquo;</p>
              </div>
            </div>

            {/* Right Column: Inquiry Form component */}
            <div className="lg:col-span-7" data-aos="fade-up">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
