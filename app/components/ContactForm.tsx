"use client";

import { useState } from "react";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Air Freight",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thank you! Your shipping inquiry has been received. Our logistics team will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "Air Freight",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to dispatch your inquiry. Please check your network connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Air Freight",
    "Sea Freight",
    "Customs Clearance",
    "Transportation",
    "Warehousing",
    "Import/Export Handling",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">Send an Inquiry</h3>
      <p className="text-gray-500 text-sm mb-6">
        Request customized freight quotes or schedule an advisory customs consultation today.
      </p>

      {success && (
        <div className="flex items-start gap-2.5 bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 text-sm mb-6">
          <FiCheckCircle className="text-lg flex-shrink-0 mt-0.5" />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2.5 bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 text-sm mb-6">
          <FiAlertCircle className="text-lg flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field */}
        <div>
          <label htmlFor="contact_name" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="contact_name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm font-medium transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email field */}
          <div>
            <label htmlFor="contact_email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="contact_email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm font-medium transition-colors"
            />
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="contact_phone" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="contact_phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 8368351578"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm font-medium transition-colors"
            />
          </div>
        </div>

        {/* Service Type select */}
        <div>
          <label htmlFor="contact_service" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Service Required
          </label>
          <select
            name="serviceType"
            id="contact_service"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm font-medium bg-white transition-colors"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="contact_message" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Details of Consignment / Message
          </label>
          <textarea
            name="message"
            id="contact_message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your cargo dimensions, weight, origin, and destination..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-navy focus:outline-none text-gray-800 text-sm font-medium transition-colors"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          id="contact_submit_btn"
          disabled={loading}
          className="w-full bg-orange-accent hover:bg-orange-hover disabled:bg-orange-accent/50 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-orange-accent/25 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin text-lg" /> Processing...
            </>
          ) : (
            <>
              <FiSend className="text-sm" /> Submit Shipping Inquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}
