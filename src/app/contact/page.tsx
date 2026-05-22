"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-28 lg:pt-32 bg-white min-h-screen">

      {/* Page Heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center flex flex-col items-center justify-center">
        <h1 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mt-2 text-[#1c1a17]">
          Contact Us
        </h1>
        <div className="w-12 h-[2px] bg-sapl-blue rounded-full mt-2" />
      </section>

      {/* Main Grid Contact Coordinates */}
      <section className="pt-4 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Office branch addresses (5 columns) */}
          <div className="lg:col-span-5 space-y-12">

            {/* Coimbatore Branch Address */}
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Coimbatore (HQ)
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-6" style={{ color: "#1c1a17" }}>
                Peelamedu Main Office
              </h2>

              <div className="space-y-4 text-sm text-[#4F4C42]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sapl-blue shrink-0 mt-0.5" />
                  <span>
                    14/2 & 4, Avinashi Road,<br />
                    Opp. Tiruppur Textiles, Peelamedu,<br />
                    Coimbatore – 641 004
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sapl-blue shrink-0" />
                  <a href="tel:+914224036666" className="font-bold hover:text-sapl-blue transition-colors">
                    +91 422 4036666
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sapl-blue shrink-0" />
                  <a href="mailto:info@sapl.in" className="font-bold hover:text-sapl-blue transition-colors">
                    info@sapl.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-sapl-blue shrink-0" />
                  <span>Monday – Saturday: 09:00 AM – 06:30 PM</span>
                </div>
              </div>
            </div>

            {/* Chennai Branch Address */}
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Chennai Office
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-6" style={{ color: "#1c1a17" }}>
                Kilpauk Branch Office
              </h2>

              <div className="space-y-4 text-sm text-[#4F4C42]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sapl-blue shrink-0 mt-0.5" />
                  <span>
                    9/21, Saroja Illam, Second Floor,<br />
                    Landons Road, Kilpauk,<br />
                    Chennai – 600010
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sapl-blue shrink-0" />
                  <a href="tel:+914443851380" className="font-bold hover:text-sapl-blue transition-colors">
                    +91 44 43851380
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sapl-blue shrink-0" />
                  <a href="mailto:info@sapl.in" className="font-bold hover:text-sapl-blue transition-colors">
                    info@sapl.in
                  </a>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Dynamic Form (7 columns) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map visual placeholder */}
      <section className="h-[450px] relative w-full bg-[#f7f6f4] border-t border-[#eae7e3] select-none overflow-hidden flex items-center justify-center">
        {/* Unsplash abstract engineering drawing/coordinate grids representing map */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80"
          alt="Engineering drawing coordinate map"
          className="w-full h-full object-cover opacity-15 absolute inset-0"
        />
        <div className="relative z-10 text-center max-w-md p-6 bg-white border border-[#eae7e3] rounded-sm shadow-2xl">
          <MapPin className="w-8 h-8 text-sapl-blue mx-auto mb-4" />
          <h3 className="text-base font-extrabold uppercase" style={{ color: "#1c1a17" }}>
            Operational Region Covered
          </h3>
          <p className="text-[#6D675E] text-xs mt-2 leading-relaxed">
            Coimbatore Peelamedu HQ Coordinates: <br />
            <strong>11.0264° N, 77.0101° E</strong> <br /><br />
            Chennai Kilpauk Office Coordinates: <br />
            <strong>13.0792° N, 80.2415° E</strong>
          </p>
          <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-wider text-sapl-blue">
            Dual-Office Mapping Active
          </span>
        </div>
      </section>

    </div>
  );
}
