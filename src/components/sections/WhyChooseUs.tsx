"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Target, Dumbbell, Award, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Military Standard Training",
    description:
      "Our curriculum is built on the same rigorous standards that govern India's armed forces — ensuring graduates are prepared for any situation.",
  },
  {
    icon: Users,
    title: "Retired Army Instructors",
    description:
      "Every trainer is a retired JCO or Commissioned Officer with hands-on operational experience, not just theoretical knowledge.",
  },
  {
    icon: Target,
    title: "Practical Field Exercises",
    description:
      "Learning doesn't stop at the classroom. Trainees undergo real-world simulations, patrol drills, and scenario-based exercises.",
  },
  {
    icon: Dumbbell,
    title: "Physical Conditioning",
    description:
      "Structured PT sessions keep trainees at peak fitness — because professional security work demands both mental sharpness and physical readiness.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description:
      "Graduates receive industry-recognised certifications that open doors with Northeast India's top security agencies and corporates.",
  },
  {
    icon: BookOpen,
    title: "Professional Discipline",
    description:
      "We develop not just skills but character — punctuality, integrity, communication, and professional conduct that employers value.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3">
            Why SSTA
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center">
            What Sets Us Apart
          </h2>
          <p className="text-[#4B5563] text-[17px] mt-6 leading-relaxed">
            We combine the precision of military training with the practical
            demands of the private security industry — a combination no one else
            in the region offers.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#A32020]/20 hover:shadow-lg hover:shadow-[#A32020]/5 transition-all duration-300 cursor-default"
              >
                <div className="w-13 h-13 rounded-xl bg-[#A32020]/8 flex items-center justify-center mb-6 group-hover:bg-[#A32020] transition-colors duration-300 w-14 h-14">
                  <Icon
                    size={26}
                    className="text-[#A32020] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#1F2937] mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563] text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
