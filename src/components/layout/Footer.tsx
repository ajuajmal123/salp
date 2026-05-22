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
    <footer className="relative bg-navy-950 text-white border-t border-navy-900 pt-16 pb-8">
      {/* Premium cyan gradient illumination line at the top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sapl-blue/0 via-sapl-blue/50 to-sapl-blue/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-navy-900">
          
          {/* Column 1: Company Profile */}
          <div className="flex flex-col gap-6">
            <Logo light={true} />
            <p className="text-navy-300 text-sm leading-relaxed">
              SRINIVASAN ASSOCIATES PRIVATE LIMITED (SAPL), established in 1987, has grown dramatically, built its goodwill and gained its reputation over the years as a leader in premium corporate engineering, commercial complexes, healthcare infrastructure, and industrial developments in India.
            </p>
            {/* Social Icons with Premium Scaling & Hover Transition */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-300 hover:text-white hover:bg-sapl-blue hover:border-sapl-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-6 text-sapl-blue">
              Quick Links
            </h3>
            <ul className="space-y-4">
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
                    className="group flex items-center text-sm text-navy-300 hover:text-sapl-blue transition-all duration-300 transform hover:translate-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-700 group-hover:bg-sapl-blue mr-3 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://sapl.in/wp-content/uploads/2025/01/SAPL-compressed.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center text-sm text-sapl-blue hover:text-white transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sapl-blue mr-3" />
                  Download Brochure
                  <ExternalLink className="ml-1.5 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact - Coimbatore (HQ) */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-6 text-sapl-blue">
                Coimbatore (HQ)
              </h3>
              <div className="space-y-4 text-navy-300 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sapl-blue shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    14/2 & 4, Avinashi Road,<br />
                    Opp. Tiruppur Textiles, Peelamedu,<br />
                    Coimbatore – 641 004
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sapl-blue shrink-0" />
                  <a href="tel:+914224036666" className="hover:text-sapl-blue transition-colors">
                    +91 422 4036666
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sapl-blue shrink-0" />
                  <a href="mailto:info@sapl.in" className="hover:text-sapl-blue transition-colors">
                    info@sapl.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact - Chennai */}
          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-6 text-sapl-blue">
              Chennai Office
            </h3>
            <div className="space-y-4 text-navy-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sapl-blue shrink-0 mt-1" />
                <span className="leading-relaxed">
                  9/21, Saroja Illam, Second Floor,<br />
                  Landons Road, Kilpauk,<br />
                  Chennai – 600010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sapl-blue shrink-0" />
                <a href="tel:+914443851380" className="hover:text-sapl-blue transition-colors">
                  +91 44 43851380
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sapl-blue shrink-0" />
                <a href="mailto:info@sapl.in" className="hover:text-sapl-blue transition-colors">
                  info@sapl.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-400 font-semibold tracking-wider uppercase">
          <div>
            © {currentYear} Srinivasan Associates Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
