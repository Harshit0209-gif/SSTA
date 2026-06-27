"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const instructors = [
  {
    name: "Subedar Major R.K. Sharma (Retd.)",
    rank: "Subedar Major",
    unit: "11 Gorkha Rifles",
    service: "28 Years",
    specialization: "Close Protection & Threat Assessment",
    image: "https://images.pexels.com/photos/10852920/pexels-photo-10852920.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Nb. Subedar D.P. Boro (Retd.)",
    rank: "Naib Subedar",
    unit: "Assam Regiment",
    service: "24 Years",
    specialization: "Physical Training & Combat Fitness",
    image: "https://images.pexels.com/photos/4891762/pexels-photo-4891762.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Havildar Maj. T. Thapa (Retd.)",
    rank: "Havildar Major",
    unit: "Sikh Light Infantry",
    service: "22 Years",
    specialization: "Patrol Tactics & Perimeter Security",
    image: "https://images.pexels.com/photos/5790891/pexels-photo-5790891.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Captain A. Bhuyan (Retd.)",
    rank: "Captain",
    unit: "Corps of Signals",
    service: "18 Years",
    specialization: "Emergency Communication & Crisis Management",
    image: "https://images.pexels.com/photos/13282263/pexels-photo-13282263.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Instructors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3">
            Our Instructors
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center">
            Led by Those Who Served
          </h2>
          <p className="text-[#4B5563] text-[17px] mt-6 leading-relaxed">
            Our instructors don&rsquo;t just teach — they&rsquo;ve lived it.
            Every session draws from decades of field experience, operational
            intelligence, and the values that define the Indian Army.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.name}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Photo */}
              <div className="relative h-60 overflow-hidden bg-[#F7F6F3]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-[#A32020] text-white text-[13px] font-medium px-3 py-1 rounded-full">
                  {instructor.service}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#C89B3C] text-[#C89B3C]" />
                  ))}
                </div>
                <h3 className="text-[16px] font-bold text-[#1F2937] leading-snug mb-1.5">
                  {instructor.name}
                </h3>
                <p className="text-[14px] text-[#A32020] font-medium mb-1">
                  {instructor.rank}
                </p>
                <p className="text-[14px] text-[#9E9B9B] mb-4">
                  {instructor.unit}
                </p>
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[12px] text-[#4B5563] font-bold uppercase tracking-wider mb-1">
                    Specialization
                  </p>
                  <p className="text-[14px] text-[#4B5563] leading-snug">
                    {instructor.specialization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-[#9E9B9B] text-[16px] mt-10"
        >
          Our faculty of{" "}
          <span className="text-[#1F2937] font-medium">15+ retired officers</span>{" "}
          collectively bring over{" "}
          <span className="text-[#1F2937] font-medium">300 years</span> of combined
          military service.
        </motion.p>
      </div>
    </section>
  );
}
