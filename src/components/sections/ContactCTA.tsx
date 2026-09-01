"use client";

import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import ContactForm from "../ui/ContactForm";

export default function ContactCTA() {
  return (
    <section className="relative py-12 md:py-16 bg-slate-50 dark:bg-navy-950/40 border-t border-slate-100 dark:border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 items-start gap-12">

          {/* Left Column: Office Coordinates (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
                Partner with SAPL
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 dark:text-white tracking-tight uppercase">
                Let's Build Together
              </h2>
              <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed">
                Connect with our estimation and engineering offices in Peelamedu, Coimbatore or Kilpauk, Chennai to discuss structural layouts, scheduling, or cost plans.
              </p>
            </div>

            {/* Support Details */}
            <div className="space-y-6">

              {/* Direct Support */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 dark:text-white">
                    Primary Estimation Line
                  </h4>
                  <a
                    href="tel:+914224036666"
                    className="text-slate-650 dark:text-navy-300 text-sm font-bold mt-1 hover:text-sapl-blue block transition-colors"
                  >
                    +91 422 4036666
                  </a>
                  <span className="text-navy-450 dark:text-navy-400 text-xs font-semibold block">
                    Peelamedu, Coimbatore (HQ)
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 dark:text-white">
                    Office Operating Hours
                  </h4>
                  <span className="text-slate-600 dark:text-navy-300 text-sm font-semibold block mt-1">
                    Monday – Saturday: 09:00 AM – 06:30 PM
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 dark:text-white">
                    Corporate Email
                  </h4>
                  <a
                    href="mailto:tender@sapl.in"
                    className="text-slate-650 dark:text-navy-300 text-sm font-bold mt-1 hover:text-sapl-blue block transition-colors"
                  >
                    tender@sapl.in
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick chat */}
              <div className="pt-4">
                <a
                  href="https://wa.me/919842223015"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-3.5 rounded-sm transition-all duration-300 shadow-md shadow-emerald-500/10"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Initiate WhatsApp Inquiry
                </a>
              </div>

            </div>

            {/* Geographical Coverage */}
            <div className="border-t border-slate-200 dark:border-navy-850 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy-450 dark:text-navy-400">
                Operating Across South India
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-xs font-bold text-navy-800 dark:text-navy-350">
                <span>• Tamil Nadu</span>
                <span>• Karnataka</span>
                <span>• Andhra Pradesh</span>
                <span>• Pondicherry</span>
              </div>
            </div>

          </div>

          {/* Right Column: Form (7 columns) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
