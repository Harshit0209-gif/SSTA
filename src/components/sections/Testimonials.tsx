"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Havildar (Retd.) Ramesh Kalita",
    unit: "Former — Assam Regiment",
    role: "Currently: Security Supervisor, Tata Steel NE Division",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80",
    quote:
      "After 18 years in the Army, I wasn't sure how to translate my experience into a civilian career. SSTA didn't just train me — they helped me understand how my military background was actually an asset. Within six weeks of completing the programme, I had a supervisory role at a reputable firm.",
  },
  {
    name: "Nb. Subedar (Retd.) Bijoy Das",
    unit: "Former — Rajput Regiment",
    role: "Currently: Head of Security, Gauhati Medical College",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      "The instructors at SSTA understand us because they are us — retired from the same service. The training is rigorous, but it respects your experience. I came in as a retired officer and left as a certified security professional. The transition was far smoother than I expected.",
  },
  {
    name: "Sepoy (Retd.) Anup Borah",
    unit: "Former — Mahar Regiment",
    role: "Currently: Gate Security Officer, Oil India Limited",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    quote:
      "Before SSTA, I had no idea how to approach private employers or what certifications they expected. The academy covered everything — from paperwork to job interview preparation. The placement team worked hard for me personally. I'm proud of where I've ended up.",
  },
  {
    name: "Rifleman (Retd.) Sanjay Tamang",
    unit: "Former — 1/3 Gorkha Rifles",
    role: "Currently: Armed Guard Supervisor, Assam Oil & Gas",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
    quote:
      "SSTA gave me structure at a time when I felt adrift after discharge. The physical training brought back the discipline I missed, and the classroom modules gave me knowledge I didn't know I needed. I would recommend this programme to every retiring soldier in Northeast India.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3">
            What Graduates Say
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center">
            Stories of Transformation
          </h2>
        </div>

        {/* Featured testimonial */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E5E7EB] shadow-sm"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Photo + info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative w-24 h-24 mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-[#A32020] ring-4 ring-[#A32020]/10 mb-4">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#C89B3C] text-[#C89B3C]" />
                    ))}
                  </div>
                  <h4 className="font-bold text-[#1F2937] text-[16px] leading-snug max-w-[180px] mx-auto lg:mx-0">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[14px] text-[#A32020] font-medium mt-1">
                    {testimonials[current].unit}
                  </p>
                  <p className="text-[13px] text-[#9E9B9B] mt-1 max-w-[180px] mx-auto lg:mx-0 leading-snug">
                    {testimonials[current].role}
                  </p>
                </div>

                {/* Quote */}
                <div className="flex-1 relative">
                  <Quote
                    size={40}
                    className="text-[#A32020]/10 absolute -top-2 -left-2"
                    fill="currentColor"
                  />
                  <p className="text-[#4B5563] text-[18px] leading-[1.8] relative z-10 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-6 bg-[#A32020]" : "w-2 bg-[#E5E7EB] hover:bg-[#9E9B9B]"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[#E5E7EB] bg-white hover:border-[#A32020] hover:text-[#A32020] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-[#E5E7EB] bg-white hover:border-[#A32020] hover:text-[#A32020] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                i === current
                  ? "border-[#A32020] bg-[#A32020]/5"
                  : "border-[#E5E7EB] bg-white hover:border-[#A32020]/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1F2937] leading-snug">
                    {t.name.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <p className="text-[12px] text-[#9E9B9B]">{t.unit}</p>
                </div>
              </div>
              <p className="text-[13px] text-[#4B5563] leading-relaxed line-clamp-2">
                {t.quote.substring(0, 80)}...
              </p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
