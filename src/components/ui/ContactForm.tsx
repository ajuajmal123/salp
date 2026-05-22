"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number (10+ digits)";
    }

    if (!formData.service) tempErrors.service = "Please select a service sector";
    if (!formData.message.trim()) tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-8 sm:p-10 rounded-sm shadow-xl shadow-navy-950/5 relative overflow-hidden">
      
      {/* Visual Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-sapl-blue" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold tracking-tight text-navy-950 dark:text-white">
                Submit an Inquiry
              </h3>
              <p className="text-slate-500 dark:text-navy-400 text-xs mt-1 font-semibold uppercase tracking-wider">
                Our estimation & engineering team will respond within 24 hours.
              </p>
            </div>

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-sm border bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-white text-sm font-semibold tracking-wide focus:outline-none transition-colors duration-300 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-navy-800 focus:border-sapl-blue"
                  }`}
                />
                {errors.name && (
                  <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  className={`w-full px-4 py-3 rounded-sm border bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-white text-sm font-semibold tracking-wide focus:outline-none transition-colors duration-300 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-navy-800 focus:border-sapl-blue"
                  }`}
                />
                {errors.email && (
                  <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Phone & Service Sector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-300"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98422 23015"
                  className={`w-full px-4 py-3 rounded-sm border bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-white text-sm font-semibold tracking-wide focus:outline-none transition-colors duration-300 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-navy-800 focus:border-sapl-blue"
                  }`}
                />
                {errors.phone && (
                  <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-300"
                >
                  Inquiry Category
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-sm border bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-white text-sm font-semibold tracking-wide focus:outline-none transition-colors duration-300 ${
                    errors.service
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-navy-800 focus:border-sapl-blue"
                  }`}
                >
                  <option value="">Select a Category</option>
                  <option value="Industrial Construction">Industrial Projects</option>
                  <option value="Healthcare Infrastructure">Healthcare Construction</option>
                  <option value="Commercial Complexes">Commercial & IT Parks</option>
                  <option value="Institutional Buildings">Institutional & Academic</option>
                  <option value="Premium Residential">Luxury Residential</option>
                  <option value="General Engineering">Turnkey Solutions</option>
                </select>
                {errors.service && (
                  <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.service}
                  </span>
                )}
              </div>
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-300"
              >
                Inquiry Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide a detailed summary of your building requirements, square footage, structural designs, or timelines..."
                className={`w-full px-4 py-3 rounded-sm border bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-white text-sm font-semibold tracking-wide focus:outline-none transition-colors duration-300 resize-y min-h-[120px] ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-navy-800 focus:border-sapl-blue"
                }`}
              />
              {errors.message && (
                <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed select-none w-fit cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Transmit Inquiry
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-extrabold tracking-tight text-navy-950 dark:text-white">
              Proposal Transmitted Successfully
            </h3>
            <p className="text-slate-500 dark:text-navy-300 max-w-md text-sm mt-3 leading-relaxed">
              Thank you for initiating contact with Srinivasan Associates. Your technical request has been routed directly to our Peelamedu estimation office. An engineer will follow up shortly.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
