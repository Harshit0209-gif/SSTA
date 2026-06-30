'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  Briefcase,
  Users,
  FileText,
  Building2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Resume & Profile Building',
    description:
      'Our team helps trainees translate their military service records into professional resumes aligned with private sector expectations.',
  },
  {
    icon: Users,
    title: 'Industry Connections',
    description:
      'Through our network across Northeast India, we facilitate introductions between qualified trainees and security agencies actively seeking personnel.',
  },
  {
    icon: Building2,
    title: 'Sector-Specific Guidance',
    description:
      "Whether it's corporate security, industrial facilities, or event security — we counsel each graduate on the roles best suited to their background.",
  },
  {
    icon: Briefcase,
    title: 'Interview Preparation',
    description:
      'Mock interviews, grooming guidance, and professional conduct coaching ensure trainees present themselves with confidence and polish.',
  },
];

export default function PlacementAssistance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='placements' className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div
          className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'
          ref={ref}
        >
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
              After Training
            </p>
            <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-4 gold-line'>
              Placement Assistance Programme
            </h2>

            <p className='text-[#4B5563] text-[17px] leading-relaxed mt-6 mb-4'>
              Completing the SSTA training programme is only the beginning. Our
              dedicated placement cell works actively to help every graduate
              find their footing in the private security industry.
            </p>
            <p className='text-[#4B5563] text-[17px] leading-relaxed mb-8'>
              We connect trainees with employers across Northeast India —
              including opportunities within the group&rsquo;s affiliated
              security company where applicable. However, placement outcomes
              depend on individual performance, market availability, and
              candidate preference. We provide the bridge; our trainees cross it
              on their own merit.
            </p>

            {/* Services grid */}
            <div className='grid sm:grid-cols-2 gap-5'>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className='flex gap-4 p-5 rounded-xl bg-[#F7F6F3] border border-[#E5E7EB]'
                  >
                    <div className='w-10 h-10 rounded-lg bg-[#A32020]/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Icon size={18} className='text-[#A32020]' />
                    </div>
                    <div>
                      <h4 className='text-[15px] font-bold text-[#1F2937] mb-1.5'>
                        {service.title}
                      </h4>
                      <p className='text-[14px] text-[#4B5563] leading-relaxed'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[#A32020] hover:bg-[#7F1818] text-white font-medium text-[16px] rounded-full transition-colors duration-200 cursor-pointer'
            >
              Enquire About Placements
              <ArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl'>
              <Image
                src='https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
                alt='Professional handshake representing placement success'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40' />
            </div>

            {/* Floating stat */}
            <div className='absolute -left-6 top-1/3 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xl'>
              <div className='text-4xl font-bold text-[#A32020] mb-1'>96%</div>
              <div className='text-[14px] text-[#4B5563] font-medium leading-tight max-w-[130px]'>
                of trainees find placement within 90 days
              </div>
            </div>

            {/* Gold corner */}
            <div className='absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#C89B3C] rounded-xl opacity-30' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
