"use client";

import { useState } from "react";

const adventures = [
  "River Float",
  "Gold Panning",
  "Fishing",
  "Mountain Lake Trip",
  "Shed Hunting",
  "Cattle Drive",
  "Trail Ride",
  "Rifle Shooting",
  "Wildlife Viewing",
  "Cabin Rental",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adventures: [] as string[],
    guests: "1",
    startDate: "",
    endDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdventureChange = (adventure: string) => {
    setFormData((prev) => ({
      ...prev,
      adventures: prev.adventures.includes(adventure)
        ? prev.adventures.filter((a) => a !== adventure)
        : [...prev.adventures, adventure],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "605c93fc-3cb4-468b-a02e-e916b1b88bb2",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          adventures: formData.adventures.join(", "),
          guests: formData.guests,
          start_date: formData.startDate,
          end_date: formData.endDate,
          message: formData.message,
          subject: "New Adventure Inquiry from Montana Summer Adventures",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Thank you! We will contact you soon to plan your adventure.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          adventures: [],
          guests: "1",
          startDate: "",
          endDate: "",
          message: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-earth-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-4">
            Book Your Adventure
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we&apos;ll get back to you within 24 hours to plan your perfect Montana experience.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
                placeholder="(406) 360-8106"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="50"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
              />
            </div>

            {/* Preferred Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
              />
            </div>

            {/* Preferred End Date */}
            <div>
              <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition text-gray-900"
              />
            </div>
          </div>

          {/* Adventures Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Adventures * (Choose all that interest you)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {adventures.map((adventure) => (
                <label
                  key={adventure}
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all focus-within:ring-2 focus-within:ring-earth-500 focus-within:ring-offset-0 ${
                    formData.adventures.includes(adventure)
                      ? "border-earth-600 bg-earth-50"
                      : "border-gray-300 hover:border-earth-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.adventures.includes(adventure)}
                    onChange={() => handleAdventureChange(adventure)}
                    className="w-5 h-5 text-earth-600 border-gray-300 rounded-md focus:outline-none"
                  />
                  <span className="ml-3 text-gray-700 font-medium">{adventure}</span>
                </label>
              ))}
            </div>
            {formData.adventures.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">Please select at least one adventure</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Information or Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition resize-none text-gray-900"
              placeholder="Tell us about any special requests, experience level, or questions you have..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || formData.adventures.length === 0}
              className="bg-earth-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-earth-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
            {formData.adventures.length === 0 && (
              <p className="text-sm text-red-600 mt-2">Please select at least one adventure to continue</p>
            )}
          </div>

          {/* Success Message */}
          {submitMessage && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              {submitMessage}
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">
            Or call us directly at{" "}
            <a href="tel:+14063608106" className="text-earth-600 font-semibold hover:text-earth-800">
              (406) 360-8106
            </a>
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <a href="mailto:info@montanasummeradventures.com" className="text-earth-600 font-semibold hover:text-earth-800">
              info@montanasummeradventures.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
