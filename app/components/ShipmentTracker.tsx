"use client";

import { useState } from "react";
import { FiSearch, FiCheck, FiTruck, FiBox, FiCompass, FiAlertCircle } from "react-icons/fi";

interface TrackingStep {
  title: string;
  location: string;
  date: string;
  status: "completed" | "current" | "pending";
}

export default function ShipmentTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError("Please enter a valid tracking number.");
      setResult(null);
      return;
    }
    setError("");
    setResult(true);
  };

  const steps: TrackingStep[] = [
    { title: "Booking Confirmed", location: "Mumbai HQ Gateway", date: "May 24, 2026 - 10:00 AM", status: "completed" },
    { title: "Customs Clearance Approved", location: "Nhava Sheva Port, India", date: "May 25, 2026 - 02:30 PM", status: "completed" },
    { title: "Loaded on Vessel (Shipment In Transit)", location: "Indian Ocean Transit Route", date: "May 26, 2026 - 08:45 PM", status: "current" },
    { title: "Arrival at Destination Port", location: "Port of Hamburg, Germany", date: "Est: June 03, 2026", status: "pending" },
    { title: "Final Doorstep Delivery", location: "Consignee Warehouse, Berlin", date: "Est: June 05, 2026", status: "pending" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-orange-accent text-xs font-bold uppercase tracking-widest bg-orange-accent/10 px-3 py-1.5 rounded-full inline-block">
          Cargo Monitoring
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
          Track Your Global Shipment
        </h3>
        <p className="text-gray-500 text-sm mt-1 max-w-md mx-auto">
          Enter your 10-digit Air Waybill (AWB) or Container Tracking code to see real-time custom milestones.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <FiSearch className="text-lg" />
          </div>
          <input
            type="text"
            placeholder="e.g., AG-8796636150 or AWB-92849"
            id="tracking_id_input"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="block w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm sm:text-base font-medium placeholder-gray-400 transition-colors"
          />
        </div>
        <button
          type="submit"
          id="tracking_submit_btn"
          className="bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-navy/25 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Track Now
        </button>
      </form>

      {error && (
        <div className="max-w-2xl mx-auto flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200 text-sm mb-6">
          <FiAlertCircle className="text-lg flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Tracking Journey Output */}
      {result && (
        <div className="border-t border-gray-100 pt-8 animate-fade-up">
          {/* Summary Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4 sm:p-6 mb-8 border border-gray-100 text-left">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">Shipment ID</span>
              <span className="text-sm font-bold text-navy uppercase">{trackingId}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">Current Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-accent bg-orange-accent/15 px-2.5 py-1 rounded-full mt-1">
                <FiCompass className="animate-spin-slow" /> Shipment In Transit
              </span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">Carrier Method</span>
              <span className="text-sm font-bold text-navy flex items-center gap-1.5 mt-0.5">
                <FiTruck className="text-orange-accent" /> Premium Ocean Cargo (FCL)
              </span>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 space-y-8 max-w-xl mx-auto text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Node Indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                    step.status === "completed"
                      ? "bg-navy border-white text-white shadow-md"
                      : step.status === "current"
                      ? "bg-orange-accent border-white text-white animate-pulse shadow-md"
                      : "bg-gray-100 border-white text-gray-400"
                  }`}
                >
                  {step.status === "completed" && <FiCheck className="text-xs" />}
                  {step.status === "current" && <FiBox className="text-xs animate-bounce" />}
                  {step.status === "pending" && <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />}
                </div>

                {/* Detail Card */}
                <div
                  className={`pl-3 sm:pl-4 transition-all ${
                    step.status === "current" ? "scale-[1.01]" : ""
                  }`}
                >
                  <h4
                    className={`text-sm sm:text-base font-bold ${
                      step.status === "completed"
                        ? "text-navy"
                        : step.status === "current"
                        ? "text-orange-accent"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                    {step.location}
                  </p>
                  <span className="text-[10px] text-gray-400 font-semibold block mt-1">
                    {step.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
