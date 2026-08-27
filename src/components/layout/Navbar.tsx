"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../icons/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Profile", href: "/profile" },
  { name: "Strength", href: "/strength" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "https://sapl.mfourerp.com/jobs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const showGlass = !isHomePage || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center bg-navy-100/60 backdrop-blur-md border-b border-navy-200/20 ${showGlass
          ? "h-[72px] md:h-[89px] shadow-lg shadow-navy-950/10"
          : "h-[88px] md:h-[105px] shadow-sm"
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo light={false} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-xs xl:text-sm font-bold tracking-wider uppercase group py-2"
                  >
                    <span
                      className={`transition-colors duration-300 ${isActive
                        ? "text-sapl-blue font-extrabold"
                        : "text-navy-800 hover:text-sapl-blue"
                        }`}
                    >
                      {link.name}
                    </span>
                    {/* Hover animated bar */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-sapl-blue origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button Group */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                className="inline-flex items-center justify-center px-4 py-2.5 font-extrabold text-xs tracking-widest uppercase rounded-full border transition-all duration-300 backdrop-blur-sm select-none cursor-pointer hover:scale-[1.03] active:scale-[0.97] bg-navy-50/70 hover:bg-navy-100/90 text-navy-800 border-navy-200/80 hover:border-sapl-blue/50"
              >
                Brochure
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-md shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] select-none group"
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-sm transition-colors duration-300 text-navy-800 hover:text-sapl-blue"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-50/98 backdrop-blur-lg flex flex-col justify-center px-4 py-8 lg:hidden"
          >
            {/* Safe Header Buffer */}
            <div className="absolute top-5 right-4 flex justify-end items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-navy-800 hover:text-sapl-blue"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 text-center my-auto">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-extrabold tracking-widest uppercase block py-2 ${isActive ? "text-sapl-blue" : "text-navy-900 hover:text-sapl-blue"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6 flex flex-col gap-3 items-center"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new Event("open-brochure-modal"));
                  }}
                  className="inline-flex items-center justify-center w-full max-w-xs px-6 py-3 bg-navy-100/50 hover:bg-navy-200/50 text-navy-900 rounded-full font-extrabold text-xs tracking-widest uppercase border border-navy-200/50 hover:scale-[1.03] active:scale-[0.97] transition-all select-none cursor-pointer"
                >
                  Download Brochure
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full max-w-xs px-6 py-3 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white rounded-full font-extrabold text-xs tracking-widest uppercase shadow-lg shadow-sapl-blue/20 hover:scale-[1.03] active:scale-[0.97] transition-all select-none group"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Footer */}
            <div className="text-center text-navy-500 text-xs tracking-wider border-t border-navy-200 pt-4">
              © {new Date().getFullYear()} Srinivasan Associates. All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
