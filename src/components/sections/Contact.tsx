'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value:
      'Sainik Surakhsa Training Academy\nKhanapara, Guwahati — 781 003\nAssam, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98640 00000\n+91 36124 00000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admissions@ssta.in.net\ninfo@ssta.in.net',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday — Saturday\n9:00 AM to 5:30 PM IST',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    programme: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section id='contact' className='py-24 lg:py-32 bg-[#F7F6F3]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className='text-[#A32020] text-[15px] font-medium tracking-[0.15em] uppercase mb-3'>
            Get in Touch
          </p>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight gold-line-center'>
            Begin Your Next Chapter
          </h2>
          <p className='text-[#4B5563] text-[17px] mt-6 leading-relaxed'>
            Whether you have questions about our programmes, eligibility, or the
            placement process — our team is here to help.
          </p>
        </div>

        <div ref={ref} className='grid lg:grid-cols-5 gap-8 lg:gap-12'>
          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2 bg-[#1F2937] rounded-2xl p-8 text-white'
          >
            <h3 className='text-2xl font-bold mb-2'>Contact Information</h3>
            <p className='text-white/50 text-[16px] mb-8 leading-relaxed'>
              Reach us through any of these channels. For urgent admissions
              queries, please call directly.
            </p>

            <div className='flex flex-col gap-7'>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className='flex gap-4'>
                    <div className='w-11 h-11 rounded-xl bg-[#A32020]/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Icon size={18} className='text-[#C89B3C]' />
                    </div>
                    <div>
                      <p className='text-[13px] font-medium text-white/40 uppercase tracking-wider mb-1.5'>
                        {item.label}
                      </p>
                      {item.value.split('\n').map((line, i) => (
                        <p
                          key={i}
                          className='text-[16px] text-white/85 leading-relaxed'
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className='mt-8 rounded-xl overflow-hidden h-40 bg-[#2D3748] relative'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin size={26} className='text-[#C89B3C] mx-auto mb-2' />
                  <p className='text-white/40 text-[14px]'>
                    SSTA, Resham Nagar, Khanapara, Guwahati
                  </p>
                  <a
                    href='https://maps.google.com/?q=AssamScienceSocietyConventionCenter+ReshamnagarKhanapara+Guwahati'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#C89B3C] text-[14px] underline hover:text-white transition-colors mt-1 inline-block'
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className='lg:col-span-3 bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm'
          >
            {submitted ? (
              <div className='flex flex-col items-center justify-center h-full py-16 text-center'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle
                    size={60}
                    className='text-[#A32020] mx-auto mb-5'
                  />
                </motion.div>
                <h3 className='text-2xl font-bold text-[#1F2937] mb-3'>
                  Enquiry Received
                </h3>
                <p className='text-[#4B5563] text-[17px] max-w-sm leading-relaxed'>
                  Thank you for reaching out. Our admissions team will contact
                  you within 1–2 business days.
                </p>
              </div>
            ) : (
              <>
                <h3 className='text-[22px] font-bold text-[#1F2937] mb-6'>
                  Training Enquiry Form
                </h3>
                <form onSubmit={handleSubmit} className='space-y-5'>
                  {/* Row 1 */}
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Your full name'
                        className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#1F2937] placeholder-[#9E9B9B] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all'
                      />
                    </div>
                    <div>
                      <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder='+91 98000 00000'
                        className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#1F2937] placeholder-[#9E9B9B] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all'
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder='your@email.com'
                      className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#1F2937] placeholder-[#9E9B9B] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all'
                    />
                  </div>

                  {/* Row 2 */}
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                        Years of Service
                      </label>
                      <select
                        name='service'
                        value={form.service}
                        onChange={handleChange}
                        className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#4B5563] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all appearance-none'
                      >
                        <option value=''>Select range</option>
                        <option value='5-10'>5 – 10 years</option>
                        <option value='10-15'>10 – 15 years</option>
                        <option value='15-20'>15 – 20 years</option>
                        <option value='20+'>20+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                        Programme of Interest
                      </label>
                      <select
                        name='programme'
                        value={form.programme}
                        onChange={handleChange}
                        className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#4B5563] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all appearance-none'
                      >
                        <option value=''>Select programme</option>
                        <option value='security-guard'>
                          Security Guard Training
                        </option>
                        <option value='access-control'>Access Control</option>
                        <option value='industrial'>Industrial Security</option>
                        <option value='fire-safety'>Fire Safety</option>
                        <option value='other'>Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className='block text-[13px] font-medium text-[#4B5563] mb-1.5 uppercase tracking-wide'>
                      Additional Message
                    </label>
                    <textarea
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder='Any specific questions or details about your service background...'
                      className='w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F6F3] text-[16px] text-[#1F2937] placeholder-[#9E9B9B] focus:outline-none focus:border-[#A32020] focus:ring-2 focus:ring-[#A32020]/15 transition-all resize-none'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={loading}
                    className='w-full py-4 bg-[#A32020] hover:bg-[#7F1818] disabled:opacity-70 text-white font-medium text-[16px] rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer'
                  >
                    {loading ? (
                      <span className='animate-pulse'>Submitting...</span>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className='text-[13px] text-[#9E9B9B] text-center leading-relaxed'>
                    We respect your privacy. Your details will only be used to
                    respond to your training enquiry.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
