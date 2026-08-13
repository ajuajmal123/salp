"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Phone, Download, CheckCircle2, AlertCircle, RefreshCw, Building } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  address?: string;
}

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Hook into global trigger event
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      // Reset form states when opened
      setName("");
      setEmail("");
      setAddress("");
      setErrors({});
      setIsSuccess(false);
    };

    window.addEventListener("open-brochure-modal", handleOpen);
    return () => {
      window.removeEventListener("open-brochure-modal", handleOpen);
    };
  }, []);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!name.trim()) tempErrors.name = "Full name is required";
    
    if (!email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!address.trim()) {
      tempErrors.address = "Physical address or city is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate slight loading delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger PDF download automatically
    try {
      const link = document.createElement("a");
      link.href = "https://sapl.in/wp-content/uploads/2025/01/SAPL-compressed.pdf";
      link.download = "SAPL-Corporate-Brochure.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to auto-download PDF brochure", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-navy-900 border border-[#eae7e3] dark:border-navy-800 rounded-md shadow-2xl relative w-full max-w-2xl overflow-hidden z-10 text-navy-950 dark:text-white"
          >
            
            {/* Design Accent Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-sapl-blue z-20" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#afa99e] hover:text-sapl-blue hover:scale-110 transition-all duration-300 z-20 p-1.5 rounded-full hover:bg-navy-50 dark:hover:bg-navy-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
              
              {/* Left Side: Brand Visual Content (4 cols) */}
              <div className="md:col-span-4 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-6 flex flex-col justify-between text-white border-r border-[#eae7e3]/10 dark:border-navy-800 relative">
                
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sapl-blue/10 border border-sapl-blue/20 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-sapl-blue animate-pulse" />
                    <span className="text-[9px] font-bold tracking-widest uppercase text-sapl-blue">
                      Engineering PDF
                    </span>
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-300">
                      Corporate Portfolio
                    </h3>
                    <p className="text-xs text-navy-400 font-semibold leading-relaxed">
                      Detailed capabilities, equipment logs, landmark project lists, and engineering methodologies.
                    </p>
                  </div>
                </div>

                {/* Company contact info embedded right inside the brochure info */}
                <div className="relative z-10 space-y-4 pt-8 md:pt-0 border-t border-navy-800 mt-6 md:mt-0 text-left">
                  <div className="text-[10px] font-extrabold tracking-widest uppercase text-sapl-blue">
                    Direct Contact Info
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-[11px] leading-snug text-navy-300">
                      <MapPin className="w-3.5 h-3.5 text-sapl-blue shrink-0 mt-0.5" />
                      <span>Peelamedu, Coimbatore - 04</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-navy-300">
                      <Mail className="w-3.5 h-3.5 text-sapl-blue shrink-0" />
                      <a href="mailto:info@sapl.in" className="hover:text-sapl-blue transition-colors">
                        info@sapl.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-navy-300">
                      <Phone className="w-3.5 h-3.5 text-sapl-blue shrink-0" />
                      <a href="tel:+914224036666" className="hover:text-sapl-blue transition-colors">
                        +91 422 4036666
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Lead Capture Form (8 cols) */}
              <div className="md:col-span-8 p-6 xs:p-8 sm:p-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="brochure-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      <div className="text-left">
                        <h2 className="text-xl font-extrabold tracking-tight text-navy-950 dark:text-white uppercase leading-tight">
                          Get Corporate Brochure
                        </h2>
                        <p className="text-slate-500 dark:text-navy-450 text-[10px] sm:text-xs mt-1 font-semibold uppercase tracking-wider">
                          Enter your details below. The download starts automatically after submitting.
                        </p>
                      </div>

                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="brochure-name"
                          className="text-[10px] font-extrabold uppercase tracking-widest text-[#6D675E] dark:text-navy-300 block text-left"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="brochure-name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${
                            errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#eae7e3] dark:border-navy-800 focus:border-sapl-blue"
                          }`}
                        />
                        {errors.name && (
                          <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1 text-left">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="brochure-email"
                          className="text-[10px] font-extrabold uppercase tracking-widest text-[#6D675E] dark:text-navy-300 block text-left"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="brochure-email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder="e.g. john@company.com"
                          className={`w-full px-4 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#eae7e3] dark:border-navy-800 focus:border-sapl-blue"
                          }`}
                        />
                        {errors.email && (
                          <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1 text-left">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Address / Location input */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="brochure-address"
                          className="text-[10px] font-extrabold uppercase tracking-widest text-[#6D675E] dark:text-navy-300 block text-left"
                        >
                          Physical Address / Location
                        </label>
                        <input
                          type="text"
                          id="brochure-address"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                          }}
                          placeholder="e.g. peelamedu, coimbatore"
                          className={`w-full px-4 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${
                            errors.address
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#eae7e3] dark:border-navy-800 focus:border-sapl-blue"
                          }`}
                        />
                        {errors.address && (
                          <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1 text-left">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.address}
                          </span>
                        )}
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed select-none w-fit cursor-pointer mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Authorizing Download...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Submit & Download
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="brochure-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center text-center py-6"
                    >
                      <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-5" />
                      <h3 className="text-xl font-extrabold tracking-tight text-navy-950 dark:text-white uppercase leading-tight">
                        Download Initialized!
                      </h3>
                      <p className="text-slate-500 dark:text-navy-300 max-w-sm text-xs sm:text-sm mt-3 leading-relaxed">
                        Thank you! The compressed corporate brochure has been requested. It should begin downloading in your browser automatically.
                      </p>

                      {/* Review details collected & direct contact info card */}
                      <div className="w-full mt-6 bg-[#f7f6f4] dark:bg-navy-950 p-4 rounded-md border border-[#eae7e3] dark:border-navy-800 text-left space-y-3">
                        <div className="text-[10px] font-extrabold text-[#6D675E] dark:text-navy-400 tracking-widest uppercase border-b border-[#eae7e3] dark:border-navy-800 pb-2">
                          Lead Verification Summary
                        </div>
                        
                        <div className="grid grid-cols-3 gap-y-1 text-xs">
                          <span className="text-[#afa99e] font-semibold uppercase text-[10px]">Recipient:</span>
                          <span className="col-span-2 font-bold dark:text-navy-100">{name}</span>
                          
                          <span className="text-[#afa99e] font-semibold uppercase text-[10px]">Email:</span>
                          <span className="col-span-2 font-bold dark:text-navy-100 break-all">{email}</span>
                          
                          <span className="text-[#afa99e] font-semibold uppercase text-[10px]">Location:</span>
                          <span className="col-span-2 font-bold dark:text-navy-100">{address}</span>
                        </div>

                        <div className="pt-2 text-[10px] font-semibold text-slate-400 dark:text-navy-450 text-center leading-relaxed">
                          These details have been processed. You can download manually if needed by clicking{" "}
                          <a
                            href="https://sapl.in/wp-content/uploads/2025/01/SAPL-compressed.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sapl-blue font-extrabold hover:underline"
                          >
                            this direct link
                          </a>.
                        </div>
                      </div>

                      <button
                        onClick={() => setIsOpen(false)}
                        className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                      >
                        Close Window
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
