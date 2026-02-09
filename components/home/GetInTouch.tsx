'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* PARLIAMENT BUILDING WITH WAVES BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/parliament-waves-bg.png"
                    alt="Parliament Building with Tricolor Waves"
                    fill
                    className="object-cover opacity-70"
                    quality={100}
                    unoptimized
                    priority
                />
                {/* Light overlay for text readability */}
                <div className="absolute inset-0 bg-white/35"></div>
            </div>

            {/* Abstract Government Graphic on Left - Subtle */}
            <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 500 Q 100 450, 200 480 T 400 500 L 400 600 L 0 600 Z" fill="#15803d" opacity="0.3" />
                    <path d="M0 450 Q 120 400, 240 430 T 480 460 L 500 600 L 0 600 Z" fill="#16a34a" opacity="0.25" />
                    <path d="M0 400 Q 100 350, 200 380 T 400 420 L 450 600 L 0 600 Z" fill="#22c55e" opacity="0.2" />
                    <path d="M0 350 Q 80 320, 160 340 T 320 360 L 350 400 Q 270 370, 190 390 T 30 410 Z" fill="#ea580c" opacity="0.4" />
                    <path d="M0 300 Q 100 250, 200 280 T 400 320 L 420 380 Q 320 330, 220 360 T 20 380 Z" fill="#ffffff" opacity="0.6" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Title - ELEGANT SERIF FONT - NO EMBLEM */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 pt-4"
                >
                    <h2
                        className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-green-800 mb-5 tracking-wide"
                        style={{
                            fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
                            letterSpacing: '0.03em',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        Get in Touch
                    </h2>
                    <p className="text-green-800 text-lg md:text-xl max-w-2xl mx-auto font-semibold drop-shadow-md" style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                        Reach out to us for more information or assistance.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Side - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg shrink-0">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-lg">+91 12345 67890</p>
                                <p className="text-slate-500 text-sm">Mon-Fri 9AM-6PM</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg shrink-0">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-lg">contact@sbbm.gov.in</p>
                                <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-lg">SBBM Headquarters</p>
                                <p className="text-slate-500 text-sm">New Delhi, India</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-6">
                            <p className="text-slate-700 font-semibold mb-4 text-lg">Follow Us</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                                    <Facebook className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border-2 border-green-100"
                    >
                        <h3 className="font-display font-bold text-2xl lg:text-3xl text-green-800 mb-8">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none bg-slate-50"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                            >
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
