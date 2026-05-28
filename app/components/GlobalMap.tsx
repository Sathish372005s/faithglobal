"use client";

import Image from "next/image";

export default function GlobalMap() {
  return (
    <section className="space-y-10">

      {/* INDIA MAP */}
      <div className="bg-navy rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl">

        <div className="mb-6 text-center">
          <span className="text-orange-400 text-xs uppercase tracking-widest font-bold">
            India Port Coverage
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Major Indian Shipping Ports
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            Strategic logistics and customs operations across India.
          </p>
        </div>

        {/* Map Image */}
        <div  className="relative w-full rounded-2xl overflow-hidden">
        <Image
    src="/images/india-map.jpeg"
    alt="India Logistics Map"
    width={1600}
    height={900}
    className="w-full h-auto object-contain"
  />
</div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { value: "12+", label: "Major Ports" },
            { value: "24/7", label: "Tracking" },
            { value: "100%", label: "Customs" },
            { value: "9+", label: "Years" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-orange-400">
                {item.value}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WORLD MAP */}
      <div className="bg-navy rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl">

        <div className="mb-6 text-center">
          <span className="text-orange-400 text-xs uppercase tracking-widest font-bold">
            Global Shipping Network
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Worldwide Trade Connections
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            International freight movement across global ports.
          </p>
        </div>

        {/* Map Image */}
        <div className="relative w-full rounded-2xl overflow-hidden">
  <Image
    src="/images/world.jpeg"
    alt="World Logistics Map"
    width={1600}
    height={900}
    className="w-full h-auto object-contain"
  />
</div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { value: "120+", label: "Global Ports" },
            { value: "45K+", label: "Shipments" },
            { value: "24/7", label: "Monitoring" },
            { value: "100%", label: "Success Rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm  text-orange-400"
            >
              <h3 className="text-2xl sm:text-3xl text-orange-400">
                {item.value}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}