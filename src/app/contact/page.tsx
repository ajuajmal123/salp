"use client";

import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-28 lg:pt-32 bg-white min-h-screen">

      {/* Page Heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mt-2 text-[#1c1a17]">
          Contact Us
        </h1>
        <div className="w-12 h-[2px] bg-sapl-blue rounded-full mt-2" />
        <p className="text-sm text-[#6D675E] mt-4 max-w-lg mx-auto">
          Reach out to our centralized administrative team.
        </p>
      </section>

      {/* Main Grid Contact Coordinates */}
      <section className="pt-4 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Office branch addresses */}
          <div className="lg:col-span-5 space-y-8">

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
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sapl-blue shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1 font-bold">
                    <a href="tel:+919842223015" className="hover:text-sapl-blue transition-colors">
                      +91 98422 23015
                    </a>
                    <a href="tel:+919842223010" className="hover:text-sapl-blue transition-colors">
                      +91 98422 23010
                    </a>
                    <a href="tel:+919842323015" className="hover:text-sapl-blue transition-colors">
                      +91 98423 23015
                    </a>
                  </div>
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
              </div>
            </div>

            {/* Bengaluru Branch Address */}
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Bengaluru Office
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-6" style={{ color: "#1c1a17" }}>
                Barton Centre Office
              </h2>

              <div className="space-y-4 text-sm text-[#4F4C42]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sapl-blue shrink-0 mt-0.5" />
                  <span>
                    7th Floor, Unit No. 713,<br />
                    Barton Centre, No. 84, MG Road,<br />
                    Bengaluru, Karnataka – 560001
                  </span>
                </div>
              </div>
            </div>

            {/* Central Enquiries */}
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Central Enquiries
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-6" style={{ color: "#1c1a17" }}>
                Contact Departments
              </h2>

              <div className="space-y-4 text-sm text-[#4F4C42]">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sapl-blue shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6D675E]">General Enquiries</span>
                    <a href="mailto:info@sapl.in" className="font-bold hover:text-sapl-blue transition-colors">
                      info@sapl.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sapl-blue shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6D675E]">Tender Submissions</span>
                    <a href="mailto:tender@sapl.in" className="font-bold hover:text-sapl-blue transition-colors">
                      tender@sapl.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
