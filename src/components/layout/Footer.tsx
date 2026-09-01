"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Logo from "../icons/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f7f6f4] text-navy-950 border-t border-[#eae7e3] pt-8 pb-6">
      {/* Premium cyan gradient illumination line at the top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sapl-blue/0 via-sapl-blue/50 to-sapl-blue/0" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">

        {/* Top Grid: Quick Links, 3 Addresses, Central Enquiries (Horizontally aligned) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-2">

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 text-sapl-blue">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Company", href: "/about" },
                { name: "Strength", href: "/strength" },
                { name: "Projects Showcase", href: "/projects" },
                { name: "Careers @ SAPL", href: "https://sapl.mfourerp.com/jobs" },
                { name: "Contact & Inquiries", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-navy-900 hover:text-sapl-blue transition-all duration-300 transform hover:translate-x-1 font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-400 group-hover:bg-sapl-blue mr-2 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                  className="group flex items-center text-sm text-sapl-blue hover:text-navy-950 transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 outline-none text-left font-bold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sapl-blue mr-2 group-hover:bg-navy-950 transition-colors" />
                  Download Brochure
                  <ExternalLink className="ml-1.5 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Coimbatore (HQ) */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 text-sapl-blue">
              Coimbatore (HQ)
            </h3>
            <div className="space-y-3 text-navy-900 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">
                  14/2 & 4, Avinashi Road,<br />
                  Opp. Tiruppur Textiles, Peelamedu,<br />
                  Coimbatore – 641 004
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-[13px] font-semibold">
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
            </div>
          </div>

          {/* Column 3: Chennai Office */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 text-sapl-blue">
              Chennai Office
            </h3>
            <div className="space-y-3 text-navy-900 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">
                  9/21, Saroja Illam, Second Floor,<br />
                  Landons Road, Kilpauk,<br />
                  Chennai – 600010
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-[13px] font-semibold">
                <Phone className="w-4 h-4 text-sapl-blue shrink-0" />
                <a href="tel:+914443851380" className="hover:text-sapl-blue transition-colors">
                  +91 44 43851380
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Bengaluru Office */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 text-sapl-blue">
              Bengaluru Office
            </h3>
            <div className="space-y-3 text-navy-900 text-sm ">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">
                  7th Floor, Unit No. 713,<br />
                  Barton Centre, No. 84,<br /> MG Road, Bengaluru,
                  Karnataka – 560001
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Central Enquiries */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 text-sapl-blue">
              Central Enquiries
            </h3>
            <div className="space-y-4 text-navy-900 text-sm">
              <div className="flex items-start gap-2.5 group">
                <Mail className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-navy-700 font-semibold uppercase tracking-wider">General</span>
                  <a href="mailto:info@sapl.in" className="hover:text-sapl-blue transition-colors font-bold text-[13px]">
                    info@sapl.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 group">
                <Mail className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-navy-700 font-semibold uppercase tracking-wider">Tenders</span>
                  <a href="mailto:tender@sapl.in" className="hover:text-sapl-blue transition-colors font-bold text-[13px]">
                    tender@sapl.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Bottom Bar: Logo, Copyright, Socials, Links */}
        <div className="pt-8 border-t border-[#eae7e3] flex flex-col xl:flex-row items-center justify-between gap-6 text-[11px] sm:text-xs text-navy-800 font-semibold tracking-wider uppercase">

          {/* Left: Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shrink-0 xl:flex-1 xl:justify-start">
            <Logo light={false} size="sm" className="w-[80px] sm:w-[120px]" />
            <span className="opacity-80 text-[9px] sm:text-xs leading-relaxed">
              © {currentYear} Srinivasan Associates Private Limited. All Rights Reserved.
            </span>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center justify-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/share/1JnmtX1HQZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#eae7e3] flex items-center justify-center text-navy-700 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#eae7e3] flex items-center justify-center text-navy-700 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/saplofficial?igsi=OXZ4OHBqY2F4aHhr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#eae7e3] flex items-center justify-center text-navy-700 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Policy Links and Credits */}
          <div className="flex items-center flex-wrap justify-center xl:justify-end gap-6 shrink-0 xl:flex-1">
            <a href="/SAPLPrivacy%20Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-sapl-blue transition-colors">
              Privacy Policy
            </a>
            <a href="/SAPLTerms%20%26%20Conditions.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-sapl-blue transition-colors">
              Terms & Conditions
            </a>
            <small className="copyright__content font-normal text-navy-800 tracking-wider flex items-center gap-1">
              <span className="opacity-70">Designed by</span>
              <a href="https://www.instagram.com/nashcreations.in" target="_blank" rel="noopener noreferrer" className="blinking-text hover:opacity-80 transition-opacity">Creations</a>
            </small>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blinkColors {
            0%   { color: #ffd431; }
            20%  { color: #03ff75; }
            40%  { color: #cd76ea; }
            60%  { color: #ffb444; }
            80%  { color: #ff5e5e; }
            100% { color: #38dbff; }
          }
          .blinking-text {
            font-weight: bold;
            font-size: 13px;
            animation: blinkColors 3s infinite;
            text-decoration: none;
          }
        `
      }} />
    </footer>
  );
}
