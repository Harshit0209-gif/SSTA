"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/13316037/pexels-photo-13316037.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Indian Army personnel in full parade formation on the training ground",
    caption: "Indian Army Parade",
    category: "Parade",
    height: "h-72",
  },
  {
    src: "https://images.pexels.com/photos/35928391/pexels-photo-35928391.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Border Security Force soldier at Wagah border ceremony in ceremonial uniform",
    caption: "BSF Ceremonial Guard",
    category: "Parade",
    height: "h-48",
  },
  {
    src: "https://images.pexels.com/photos/36163617/pexels-photo-36163617.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Gurkha soldiers marching in formation during parade in Pokhara",
    caption: "Formation March",
    category: "Drills",
    height: "h-48",
  },
  {
    src: "https://images.pexels.com/photos/36163611/pexels-photo-36163611.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Retired army officer addressing and training a squad of security trainees",
    caption: "Officer-Led Training",
    category: "Training",
    height: "h-56",
  },
  {
    src: "https://images.pexels.com/photos/14065744/pexels-photo-14065744.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Trainees crawling through grassy field during intense ground drill exercise",
    caption: "Ground Drill",
    category: "Drills",
    height: "h-64",
  },
  {
    src: "https://images.pexels.com/photos/8700869/pexels-photo-8700869.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Trainee climbing net and navigating tyre obstacles on the obstacle course",
    caption: "Obstacle Course",
    category: "Training",
    height: "h-56",
  },
  {
    src: "https://images.pexels.com/photos/5186813/pexels-photo-5186813.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Soldiers marching proudly with Indian national flags during ceremony",
    caption: "Flag March Ceremony",
    category: "Ceremony",
    height: "h-48",
  },
  {
    src: "https://images.pexels.com/photos/27786489/pexels-photo-27786489.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Security guard in ceremonial uniform saluting the Indian national flag",
    caption: "Flag Salute",
    category: "Ceremony",
    height: "h-48",
  },
  {
    src: "https://images.pexels.com/photos/36380795/pexels-photo-36380795.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Medical instructor demonstrating first aid and emergency response techniques",
    caption: "Medical Training Demo",
    category: "Academic",
    height: "h-64",
  },
];

const categories = ["All", "Training", "Drills", "Parade", "Ceremony", "Academic"];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof galleryImages)[0]>(null);

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3">
            Visual Journal
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center">
            Life at SSTA
          </h2>
          <p className="text-[#4B5563] text-[17px] mt-6 leading-relaxed">
            A glimpse into the daily discipline, camaraderie, and intensity
            that defines training at Sainik Surakhsa Training Academy.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#A32020] text-white shadow-md shadow-[#A32020]/20"
                  : "bg-[#F7F6F3] text-[#4B5563] border border-[#E5E7EB] hover:border-[#A32020]/30 hover:text-[#A32020]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          ref={ref}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative ${img.height} break-inside-avoid mb-4 overflow-hidden rounded-xl cursor-pointer`}
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[14px] font-medium">
                    {img.caption}
                  </p>
                  <span className="text-[12px] text-white/60 uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={26} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full max-h-[80vh] aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-[16px]">
                  {lightbox.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
