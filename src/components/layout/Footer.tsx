"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About SSTA", href: "#about" },
  { label: "Training Programmes", href: "#programs" },
  { label: "Our Facilities", href: "#facilities" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "Placement Assistance", href: "#placements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const programmes = [
  "Physical Fitness Training",
  "Security Guard Training",
  "Access Control Management",
  "Industrial Security",
  "Fire Safety & Prevention",
  "Emergency Response",
  "Communication Skills",
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("#home")}
              className="text-left cursor-pointer mb-4"
            >
              <div className="text-2xl font-bold tracking-[0.18em] text-white mb-0.5">
                SSTA
              </div>
              <div className="text-[12px] font-medium tracking-[0.1em] text-white/40 uppercase">
                Sainik Surakhsa Training Academy
              </div>
            </button>
            <p className="text-white/50 text-[15px] leading-relaxed mt-4 mb-6">
              Northeast India&rsquo;s premier security training institute, empowering
              retired Indian Army personnel with the skills, discipline, and
              certification to excel in the private security sector.
            </p>

            {/* Contact snippets */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919864000000"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-[15px] transition-colors"
              >
                <Phone size={14} className="text-[#C89B3C] flex-shrink-0" />
                +91 98640 00000
              </a>
              <a
                href="mailto:info@ssta.in"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-[15px] transition-colors"
              >
                <Mail size={14} className="text-[#C89B3C] flex-shrink-0" />
                info@ssta.in
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-[15px]">
                <MapPin
                  size={14}
                  className="text-[#C89B3C] flex-shrink-0 mt-0.5"
                />
                Silpukhuri, Guwahati — 781 003, Assam
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/30 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-white/55 hover:text-white text-[15px] transition-colors cursor-pointer"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Training programmes */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/30 mb-5">
              Training Programmes
            </h4>
            <ul className="flex flex-col gap-3">
              {programmes.map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => scrollTo("#programs")}
                    className="text-white/55 hover:text-white text-[15px] transition-colors text-left cursor-pointer"
                  >
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + social */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/30 mb-5">
              Start Your Journey
            </h4>
            <p className="text-white/50 text-[15px] leading-relaxed mb-5">
              Ready to take the next step after military service? Get in touch
              with our admissions team today.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full py-3.5 bg-[#A32020] hover:bg-[#7F1818] text-white font-medium text-[15px] rounded-xl transition-colors duration-200 mb-6 cursor-pointer"
            >
              Apply for Training
            </button>

            {/* Social links placeholder */}
            <div>
              <p className="text-[13px] text-white/25 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex gap-2">
                {["FB", "TW", "LI", "YT"].map((social) => (
                  <div
                    key={social}
                    className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-[12px] font-bold text-white/35 hover:bg-white/15 hover:text-white/60 transition-all cursor-pointer select-none"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent mx-6 lg:mx-8" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-[14px]">
          &copy; {new Date().getFullYear()} Sainik Surakhsa Training Academy.
          All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <button className="text-white/30 hover:text-white/60 text-[14px] transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <button className="text-white/30 hover:text-white/60 text-[14px] transition-colors cursor-pointer">
            Terms of Use
          </button>
        </div>
      </div>
    </footer>
  );
}
