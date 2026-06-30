'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function Counter({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: '+', label: 'Ex-Army Instructors' },
  { value: 500, suffix: '+', label: 'Trained Personnel' },
  { value: 6, suffix: '', label: 'Northeast States Served' },
  { value: 8, suffix: '+', label: 'Years' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='about' className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8' ref={ref}>
        {/* Two-column layout */}
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl'>
              <Image
                src='https://images.pexels.com/photos/36163611/pexels-photo-36163611.jpeg?auto=compress&cs=tinysrgb&w=900'
                alt='Retired army officer conducting ground training session for trainees'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Floating card */}
            <div className='absolute -bottom-6 -right-6 bg-[#A32020] text-white p-6 rounded-2xl shadow-xl max-w-[240px]'>
              <div className='text-4xl font-bold mb-1'>
                <Counter target={10} suffix='+' />
              </div>
              <div className='text-white/80 text-[16px] font-medium leading-snug'>
                Years empowering Army veterans
              </div>
            </div>

            {/* Gold accent */}
            <div className='absolute -top-4 -left-4 w-20 h-20 border-2 border-[#C89B3C] rounded-xl opacity-40' />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
              About SSTA
            </p>
            <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-4 gold-line'>
              Built on Army Discipline, Shaped for Civilian Excellence
            </h2>
            <p className='text-[#4B5563] text-[17px] leading-relaxed mt-6 mb-4'>
              Sainik Surakhsa Training Academy was founded with a single,
              unwavering purpose — to bridge the gap between military service
              and civilian professional life for retired Indian Army personnel.
            </p>
            <p className='text-[#4B5563] text-[17px] leading-relaxed mb-6'>
              Our training programs are designed and delivered by retired Junior
              Commissioned Officers and Commissioned Army Officers who bring
              decades of real-world experience to every session. We don&rsquo;t
              just train — we transform raw military talent into polished
              security professionals ready for the demands of Northeast
              India&rsquo;s growing private security sector.
            </p>
            <p className='text-[#4B5563] text-[17px] leading-relaxed mb-10'>
              Every graduate leaves with the skills, certifications, and
              professional conduct standards required by India&rsquo;s leading
              security organisations — backed by the character built through
              years of service to the nation.
            </p>

            {/* Inline highlights */}
            <div className='grid grid-cols-2 gap-4'>
              {[
                'Ex-Army Instructors',
                'Hands-on Field Training',
                'Industry Certifications',
                'Placement Support',
              ].map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <div className='w-5 h-5 rounded-full bg-[#A32020]/10 flex items-center justify-center flex-shrink-0'>
                    <div className='w-2 h-2 rounded-full bg-[#A32020]' />
                  </div>
                  <span className='text-[#4B5563] text-[16px] font-medium'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden mt-20 shadow-sm'
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className='bg-white px-8 py-10 text-center hover:bg-[#F7F6F3] transition-colors duration-200'
            >
              <div className='text-5xl font-bold text-[#A32020] mb-2'>
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={1800 + i * 200}
                />
              </div>
              <div className='text-[15px] text-[#9E9B9B] font-medium uppercase tracking-wider mt-1'>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
