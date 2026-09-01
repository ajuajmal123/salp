"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Phone, Download, CheckCircle2, AlertCircle, RefreshCw, Building } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  address?: string;
  consentAccepted?: string;
}

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
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
      setConsentAccepted(false);
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

    if (!consentAccepted) {
      tempErrors.consentAccepted = "Please accept the Privacy Policy & Terms to continue.";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">

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
            className="bg-white dark:bg-navy-900 border border-[#eae7e3] dark:border-navy-800 rounded-md shadow-2xl relative w-full max-w-lg overflow-hidden z-10 text-navy-950 dark:text-white"
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

            <div className="max-h-[90vh] overflow-y-auto">

              {/* Lead Capture Form */}
              <div className="p-6 xs:p-8 sm:p-8 flex flex-col justify-center">
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
                          className="text-[10px] font-extrabold uppercase tracking-widest text-black dark:text-navy-300 block text-left"
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
                          placeholder="Enter Your name"
                          className={`w-full px-3 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${errors.name
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
                          className="text-[10px] font-extrabold uppercase tracking-widest text-black dark:text-navy-300 block text-left"
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
                          placeholder="Enter Your email"
                          className={`w-full px-3 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${errors.email
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
                          className="text-[10px] font-extrabold uppercase tracking-widest text-black dark:text-navy-300 block text-left"
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
                          placeholder="Enter Your address"
                          className={`w-full px-3 py-2.5 rounded-md border bg-[#fbfbfa] dark:bg-navy-950 text-navy-950 dark:text-white text-xs sm:text-sm font-semibold tracking-wide placeholder-[#afa99e] focus:outline-none focus:bg-white focus:ring-4 focus:ring-sapl-blue/15 transition-all duration-300 ${errors.address
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

                      {/* Privacy Consent Checkbox */}
                      <div className="flex flex-col gap-1.5 mt-2">
                        <label className="flex items-start gap-3 cursor-pointer group w-fit">
                          <div className="relative flex items-start mt-[1px]">
                            <input
                              type="checkbox"
                              name="consentAccepted"
                              checked={consentAccepted}
                              onChange={(e) => {
                                setConsentAccepted(e.target.checked);
                                if (errors.consentAccepted && e.target.checked) {
                                  setErrors(prev => ({ ...prev, consentAccepted: undefined }));
                                }
                              }}
                              className="peer appearance-none w-4 h-4 border border-slate-300 dark:border-navy-600 rounded bg-[#fbfbfa] dark:bg-navy-950 checked:bg-sapl-blue checked:border-sapl-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sapl-blue transition-all cursor-pointer shrink-0"
                            />
                            <svg className="w-3 h-3 text-white absolute left-0.5 top-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[11px] sm:text-xs text-[#6D675E] dark:text-navy-300 leading-relaxed select-none max-w-[95%] text-left">
                            I have read and understood the <a href="/SAPLPrivacy%20Policy.pdf" className="text-sapl-blue hover:underline font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-sapl-blue/50 rounded-sm" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="/SAPLTerms%20%26%20Conditions.pdf" className="text-sapl-blue hover:underline font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-sapl-blue/50 rounded-sm" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and consent to SAPL processing the personal information I submit through this form for the purpose of responding to my enquiry.
                          </span>
                        </label>
                        {errors.consentAccepted && (
                          <span className="flex items-center gap-1.5 text-xs text-red-500 font-bold mt-1 text-left">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.consentAccepted}
                          </span>
                        )}
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed select-none w-fit cursor-pointer mt-2"
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
                      className="flex flex-col items-center justify-center text-center py-4"
                    >
                      <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-4" />
                      <h3 className="text-xl font-extrabold tracking-tight text-navy-950 dark:text-white uppercase leading-tight">
                        Download Initialized!
                      </h3>
                      <p className="text-slate-500 dark:text-navy-300 max-w-sm text-xs sm:text-sm mt-2 leading-relaxed">
                        Thank you! The compressed corporate brochure has been requested. It should begin downloading in your browser automatically.
                      </p>

                      {/* Review details collected & direct contact info card */}
                      <div className="w-full mt-4 bg-[#f7f6f4] dark:bg-navy-950 p-3 rounded-md border border-[#eae7e3] dark:border-navy-800 text-left space-y-3">
                        <div className="text-[10px] font-extrabold text-black dark:text-navy-400 tracking-widest uppercase border-b border-[#eae7e3] dark:border-navy-800 pb-2">
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
                        className="mt-6 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
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

