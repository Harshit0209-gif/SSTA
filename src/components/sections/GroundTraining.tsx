"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const trainingImages = [
  {
    src: "https://images.pexels.com/photos/37360199/pexels-photo-37360199.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Indian Army soldiers practicing coordinated defence tactics on the training ground",
    caption: "Ground Defence Training",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/8700869/pexels-photo-8700869.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Trainee climbing net and tyre obstacle course",
    caption: "Obstacle Course",
    span: "col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/36380795/pexels-photo-36380795.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Medical trainer demonstrating first aid and medical report procedures",
    caption: "Medical Training Demo",
    span: "col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/35928389/pexels-photo-35928389.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Indian security force soldiers in ceremonial parade at Wagah border",
    caption: "Security Guard Parade",
    span: "col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/27786489/pexels-photo-27786489.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Indian soldier in ceremonial uniform saluting the Indian national flag",
    caption: "Flag Salute Ceremony",
    span: "col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/14065744/pexels-photo-14065744.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Soldiers crawling through grassy field during ground drill exercise",
    caption: "Ground Drill Exercise",
    span: "col-span-2",
  },
];

export default function GroundTraining() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<null | (typeof trainingImages)[0]>(
    null
  );

  return (
    <section className="py-24 lg:py-32 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C89B3C] text-[15px] font-medium tracking-[0.15em] uppercase mb-3">
            On The Ground
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where Discipline Becomes Skill
          </h2>
          <div className="w-12 h-0.5 bg-[#C89B3C] mx-auto mt-4" />
          <p className="text-white/55 text-[17px] mt-6 leading-relaxed">
            Our training ground is where theory meets action. Every drill, every
            exercise, every scenario is designed to build the instincts and
            reflexes of a professional security operator.
          </p>
        </div>

        {/* Image grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]"
        >
          {trainingImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${img.span}`}
              onClick={() => setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features row */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          {[
            {
              title: "Parade & Drill Training",
              desc: "Formation marching, saluting drills, and inspection readiness — building the visible discipline that defines a security professional.",
            },
            {
              title: "Physical Endurance",
              desc: "Obstacle courses, long-distance runs, and functional strength sessions that push trainees beyond their comfort zones.",
            },
            {
              title: "Tactical Simulations",
              desc: "Real-world security scenarios where trainees practice threat assessment, response protocols, and team coordination.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-10 h-0.5 bg-[#C89B3C] mx-auto mb-4" />
              <h3 className="text-white font-bold text-[16px] mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
