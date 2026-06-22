import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-light/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          
          {/* Column 1: Logo & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-global.jpeg"
                alt="Faith Globals Logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-white/20 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-wider font-poppins text-white leading-none">
                  FAITH GLOBAL
                </span>
                <span className="text-[9px] tracking-[0.2em] font-medium text-orange-accent uppercase mt-0.5">
                  LOGISTICS SERVICE
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-xs">
              State-of-the-art customs broker & international freight forwarder. Dedicated to compliance and on-time transit.
            </p>
            <div className="text-xs font-semibold italic text-orange-accent">
              &ldquo;Delivering Beyond Borders&rdquo;
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About History</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Core Capabilities</a></li>
              <li><a href="/network" className="hover:text-white transition-colors">Global Trade Lanes</a></li>
              <li><a href="/track" className="hover:text-white transition-colors">Track Consignment</a></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent">Services</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="/services" className="hover:text-white transition-colors">Air Express Freight</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Ocean Cargo (FCL/LCL)</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Customs House Filings</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Warehouse Consolidations</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Drayage & Transportation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent">Contact Details</h4>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
              <li>
                <span className="font-bold text-white block">Email Direct:</span>
                <a href="mailto:Info@faithgloballogistics.in" className="hover:text-white text-orange-accent">Info@faithgloballogistics.in</a>
              </li>
              <li>
                <span className="font-bold text-white block">Hotline support:</span>
                <a href="tel:8796636150" className="hover:text-white">+91 8796636150</a>
              </li>
              <li>
                <span className="font-bold text-white block">Corporate HQ:</span>
                House no 1, 1st floor, BLK-B-5 PKT 3, SEC 34, Utsav Residency, North West Delhi, Delhi 110042
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-navy-light/30 pt-8 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Faith Globals. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
