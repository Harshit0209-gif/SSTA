'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Training Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E5E7EB]'
          : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Wordmark */}
          <button
            onClick={() => handleNavClick('#home')}
            className='flex flex-col items-start cursor-pointer'
          >
            <span
              className={`text-2xl font-bold tracking-[0.18em] leading-none transition-colors duration-300 ${
                scrolled ? 'text-[#A32020]' : 'text-white'
              }`}
            >
              SSTA
            </span>
            <span
              className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 mt-0.5 ${
                scrolled ? 'text-[#9E9B9B]' : 'text-white/70'
              }`}
            >
              Sainik Surakhsa Training Academy
            </span>
          </button>

          {/* Desktop links */}
          <ul className='hidden lg:flex items-center gap-1'>
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`px-3 py-2 text-[14px] font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? scrolled
                          ? 'text-[#A32020]'
                          : 'text-white'
                        : scrolled
                          ? 'text-[#4B5563] hover:text-[#A32020]'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className='flex items-center gap-3'>
            <button
              onClick={() => handleNavClick('#contact')}
              className='hidden lg:inline-flex items-center px-5 py-2.5 text-[14px] font-medium rounded-full bg-[#A32020] text-white hover:bg-[#7F1818] transition-colors duration-200 cursor-pointer'
            >
              Apply Now
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors cursor-pointer ${
                scrolled ? 'text-[#1F2937]' : 'text-white'
              }`}
              aria-label='Toggle menu'
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='bg-white border-t border-[#E5E7EB] px-6 py-4'>
          <ul className='flex flex-col gap-1'>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className='w-full text-left px-3 py-3 text-[16px] font-medium text-[#4B5563] hover:text-[#A32020] hover:bg-[#F7F6F3] rounded-md transition-colors cursor-pointer'
                >
                  {label}
                </button>
              </li>
            ))}
            <li className='pt-3 border-t border-[#E5E7EB] mt-2'>
              <button
                onClick={() => handleNavClick('#contact')}
                className='w-full py-3 text-[16px] font-medium rounded-full bg-[#A32020] text-white hover:bg-[#7F1818] transition-colors cursor-pointer'
              >
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
