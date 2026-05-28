import ShipmentTracker from "../components/ShipmentTracker";

export default function TrackPage() {
  return (
    <main className="flex-1 w-full bg-light-grey">
      
      {/* Page Header */}
      <section className="bg-navy py-12 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy-dark pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1 rounded-full">
            Milestone Tracking
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 font-poppins">
            Consignment Tracking & Status
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Review live vessel transit routing, custom clearances, and estimated delivery dates.
          </p>
        </div>
      </section>

      {/* Shipment Tracker Section */}
      <section className="py-20 sm:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ShipmentTracker />
        </div>
      </section>

    </main>
  );
}
