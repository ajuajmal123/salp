"use client";

import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-24 bg-white min-h-screen">

      {/* Page Heading */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-8 text-center flex flex-col items-center justify-center">
        <h1 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mt-2 text-[#1c1a17]">
          Contact Us
        </h1>
        <div className="w-12 h-[2px] bg-sapl-blue rounded-full mt-2" />
        <p className="text-sm text-[#6D675E] mt-3 max-w-lg mx-auto">
          Reach out to our centralized administrative team.
        </p>
      </section>

      {/* Main Grid Contact Coordinates */}
      <section className="pt-4 pb-8 md:pb-16 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Office branch addresses */}
          <div className="lg:col-span-5 space-y-8">

            {/* Coimbatore Branch Address */}
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Coimbatore (HQ)
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-4" style={{ color: "#1c1a17" }}>
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
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Chennai Office
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-4" style={{ color: "#1c1a17" }}>
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
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Bengaluru Office
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-4" style={{ color: "#1c1a17" }}>
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
            <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 rounded-sm shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-sapl-blue block mb-2">
                Central Enquiries
              </span>
              <h2 className="text-xl font-extrabold uppercase mb-4" style={{ color: "#1c1a17" }}>
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

          {/* Right Column: Dynamic Form & Map */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ContactForm />

            {/* Interactive Office Locations Map */}
            <div className="relative w-full h-[380px] lg:h-auto lg:flex-1 rounded-md overflow-hidden shadow-xl shadow-navy-950/5 border border-[#eae7e3] bg-[#fbfbfa] p-2 min-h-[380px]">
              <iframe
                src="https://maps.google.com/maps?q=Srinivasan%20Associates%20Private%20Limited%20Coimbatore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAPL Coimbatore Headquarters Map"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
