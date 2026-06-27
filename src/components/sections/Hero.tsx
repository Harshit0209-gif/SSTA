"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <Image
          src="https://images.pexels.com/photos/13316037/pexels-photo-13316037.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indian Army parade and ground training"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Red top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#A32020]" />

      {/* Navbar height spacer — keeps content below the fixed nav */}
      <div className="flex-none h-20 lg:h-20" />

      {/* Content — flex-1 lets this fill remaining viewport height */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C89B3C]" />
            <span className="text-[#C89B3C] text-[13px] font-medium tracking-[0.18em] uppercase">
              Northeast India&rsquo;s Premier Security Training Institute
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5"
          >
            Transforming Military{" "}
            <span className="text-[#C89B3C]">Experience</span> into
            Professional Security Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.46 }}
            className="text-white/75 text-lg leading-relaxed max-w-2xl mb-7 font-normal"
          >
            Providing world-class security training for retired Indian Army
            personnel, preparing them for successful careers in the private
            security sector across Northeast India.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#A32020] hover:bg-[#7F1818] text-white font-medium text-[16px] rounded-full transition-all duration-200 shadow-lg shadow-[#A32020]/25 cursor-pointer"
            >
              Apply for Training
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollTo("#programs")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-[16px] rounded-full border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              Explore Courses
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="flex flex-wrap gap-8 pt-7 border-t border-white/15"
          >
            {[
              { value: "15+", label: "Expert Army Instructors" },
              { value: "500+", label: "Trained Professionals" },
              { value: "8", label: "States Covered" },
              { value: "3", label: "Training Centers" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[12px] text-white/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-10 flex-none flex flex-col items-center gap-1.5 pb-6 cursor-pointer group self-center"
      >
        <span className="text-white/35 text-[11px] tracking-[0.18em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            size={20}
            className="text-white/35 group-hover:text-white/65 transition-colors"
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
