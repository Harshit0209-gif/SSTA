'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  MapPin,
  Layers,
  BookOpen,
  Home,
  Dumbbell,
  HeartPulse,
  Package,
} from 'lucide-react';

const facilities = [
  {
    icon: MapPin,
    title: 'Main Training Ground',
    description:
      'A purpose-built outdoor arena for formation drills, parade practice, and tactical exercises — spanning over two acres of dedicated training space.',
    image:
      'https://images.pexels.com/photos/36163617/pexels-photo-36163617.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Layers,
    title: 'Obstacle Course',
    description:
      'A multi-stage obstacle course designed to challenge endurance, strength, agility, and teamwork — modelled on Army physical standards.',
    image:
      'https://images.pexels.com/photos/8700869/pexels-photo-8700869.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BookOpen,
    title: 'Classrooms & Lecture Halls',
    description:
      'Modern, well-equipped classrooms for theoretical instruction, case study discussions, and regulatory training — air-conditioned and AV-enabled.',
    image:
      'https://images.pexels.com/photos/3985149/pexels-photo-3985149.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Home,
    title: 'Residential Hostel',
    description:
      'Clean, secure residential facilities for outstation trainees — with meals, laundry, and a structured daily routine maintained on-campus.',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Dumbbell,
    title: 'Physical Training Area',
    description:
      'A well-maintained PT area with running tracks, pull-up bars, and open-field zones for daily physical conditioning sessions.',
    image:
      'https://images.pexels.com/photos/4117789/pexels-photo-4117789.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  {
    icon: Package,
    title: 'Equipment & Kit Store',
    description:
      'Trainees are issued full kit — uniforms, safety gear, communication equipment — managed through a dedicated equipment store on campus.',
    image:
      'https://images.pexels.com/photos/13742003/pexels-photo-13742003.jpeg?auto=compress&cs=tinysrgb&w=600',
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

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='facilities' className='py-24 lg:py-32 bg-[#F7F6F3]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
            Infrastructure
          </p>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center'>
            Our Facilities
          </h2>
          <p className='text-[#4B5563] text-[17px] mt-6 leading-relaxed'>
            Every aspect of our campus is designed to support intensive, focused
            training — from field operations to academic learning.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                variants={cardVariants}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300 cursor-default ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-10 h-10 rounded-lg bg-[#A32020]/8 flex items-center justify-center group-hover:bg-[#A32020] transition-colors duration-300 flex-shrink-0'>
                      <Icon
                        size={18}
                        className='text-[#A32020] group-hover:text-white transition-colors duration-300'
                      />
                    </div>
                    <h3 className='text-[18px] font-bold text-[#1F2937] leading-snug'>
                      {facility.title}
                    </h3>
                  </div>
                  <p className='text-[15px] text-[#4B5563] leading-relaxed'>
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
