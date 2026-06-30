'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Dumbbell,
  Shield,
  Lock,
  Factory,
  Flame,
  AlertTriangle,
  Radio,
  UserCheck,
  Crosshair,
  Map,
  ArrowRight,
} from 'lucide-react';

const programs = [
  {
    icon: Dumbbell,
    title: 'Physical Fitness Training',
    description:
      'Structured PT programmes covering endurance runs, strength conditioning, obstacle courses, and agility drills modelled on Army PT standards.',
  },
  {
    icon: Shield,
    title: 'Security Guard Training',
    description:
      'Comprehensive training covering post duties, access control fundamentals, threat identification, patrolling techniques, and reporting procedures.',
  },
  {
    icon: Lock,
    title: 'Access Control Management',
    description:
      'Specialised instruction in visitor management systems, ID verification, CCTV monitoring, and controlled entry/exit procedures for corporate environments.',
  },
  {
    icon: Factory,
    title: 'Industrial Security',
    description:
      'Tailored for public sector undertaking and government vendors — covering perimeter security, asset protection, and workforce safety protocols.',
  },
  {
    icon: Flame,
    title: 'Fire Safety & Prevention',
    description:
      'Hands-on training in fire detection, extinguisher operation, evacuation coordination, and emergency response planning for industrial entities/units.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Response',
    description:
      'Crisis management, first-aid basics, crowd control, and coordination with local authorities during incidents — building composure under pressure.',
  },
  {
    icon: Radio,
    title: 'Soft Skills',
    description:
      'Professional communication etiquette, radio procedure, incident reporting, and inter-agency coordination — bridging military directness with civilian professionalism.',
  },
  {
    icon: UserCheck,
    title: 'Professional Ethics & Conduct',
    description:
      'Legal rights and responsibilities of security personnel, code of conduct, client relations, and workplace ethics aligned with industry standards.',
  },
  {
    icon: Crosshair,
    title: 'Antidrone Security',
    description:
      'Detection, classification, and neutralisation protocols for unmanned aerial threats — covering drone identification, jamming awareness, and incident escalation procedures for critical installations.',
  },
  {
    icon: Map,
    title: 'Mounted Guard — Horseback',
    description:
      'Specialised training for large-area patrol on horseback, tailored for tea estates and plantation security across Northeast India where terrain and scale demand mounted coverage.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrainingPrograms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='programs' className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
            Our Curriculum
          </p>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center'>
            Training Programmes
          </h2>
          <p className='text-[#4B5563] text-[17px] mt-6 leading-relaxed'>
            Ten structured modules spanning physical conditioning to
            professional conduct — each designed around the specific demands of
            Northeast India&rsquo;s security industry.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                variants={cardVariants}
                className='group bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-xl hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-default'
              >
                {/* Icon + duration */}
                <div className='mb-5 flex items-center justify-between'>
                  <div className='w-12 h-12 rounded-xl bg-[#F7F6F3] flex items-center justify-center group-hover:bg-[#A32020] transition-colors duration-300'>
                    <Icon
                      size={22}
                      className='text-[#A32020] group-hover:text-white transition-colors duration-300'
                    />
                  </div>
                  <span className='text-[13px] font-medium text-[#9E9B9B] bg-[#F7F6F3] px-3 py-1 rounded-full'></span>
                </div>

                <h3 className='text-[17px] font-bold text-[#1F2937] mb-3 leading-snug'>
                  {program.title}
                </h3>
                <p className='text-[15px] text-[#4B5563] leading-relaxed flex-1 mb-5'>
                  {program.description}
                </p>

                {/* Footer */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
