'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardList,
  UserCheck,
  FileCheck,
  Dumbbell,
  ClipboardCheck,
  Award,
  Briefcase,
} from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Registration',
    description:
      'Submit your application with service documents. Our team reviews eligibility — a minimum of 5 years of Army service is required.',
  },
  {
    icon: UserCheck,
    number: '02',
    title: 'Verification',
    description:
      'Background verification of service records and discharge papers is completed within 3–5 working days.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Enrollment',
    description:
      'On successful verification, enroll for your chosen programme. Seat allocation and batch assignment follow.',
  },
  {
    icon: Dumbbell,
    number: '04',
    title: 'Ground Training',
    description:
      'Hands-on field training under the supervision of retired JCOs and officers, combining PT, drills, and practical exercises.',
  },
  {
    icon: ClipboardCheck,
    number: '05',
    title: 'Assessment',
    description:
      'Structured evaluations across physical, theoretical, and practical competencies. Standards mirror industry expectations.',
  },
  {
    icon: Award,
    number: '06',
    title: 'Certification',
    description:
      'Successful trainees receive industry-recognised certificates. A formal certification ceremony marks the completion.',
  },
  {
    icon: Briefcase,
    number: '07',
    title: 'Placement Assistance',
    description:
      'Our placement cell connects trainees with leading security agencies and corporates across Northeast India.',
  },
];

export default function TrainingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-20'>
          <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
            The Journey
          </p>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center'>
            From Application to Career
          </h2>
          <p className='text-[#4B5563] text-[17px] mt-6 leading-relaxed'>
            A clear, structured pathway from your first enquiry to your first
            placement — every step guided by our team.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className='relative'>
          <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB] -translate-x-1/2' />

          <div className='flex flex-col gap-12'>
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-left`}
                  >
                    <div
                      className={`bg-[#F7F6F3] border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-md hover:border-[#A32020]/20 transition-all duration-300 ${
                        isLeft
                          ? 'lg:ml-auto lg:max-w-md'
                          : 'lg:mr-auto lg:max-w-md'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}
                      >
                        <span className='text-[13px] font-bold text-[#9E9B9B] tracking-[0.2em]'>
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className='text-[22px] font-bold text-[#1F2937] mb-3'>
                        {step.title}
                      </h3>
                      <p className='text-[#4B5563] text-[16px] leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className='flex-shrink-0 relative z-10 hidden lg:flex'>
                    <div className='w-14 h-14 rounded-full bg-[#A32020] flex items-center justify-center shadow-lg shadow-[#A32020]/25 ring-4 ring-white'>
                      <Icon size={24} className='text-white' />
                    </div>
                  </div>

                  <div className='flex-1 hidden lg:block' />
                </motion.div>
              );
            })}
          </div>

          <div className='lg:hidden absolute left-7 top-0 bottom-0 w-px bg-[#E5E7EB]' />
        </div>
      </div>
    </section>
  );
}
