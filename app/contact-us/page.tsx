'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, Send, MessageCircle, Video, Users, 
  Globe, Stethoscope, Handshake, Tent, School, Building2, 
  Facebook, Twitter, Youtube, Linkedin, HelpCircle, MapPin, CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
            
            {/* 1. HERO BANNER (UPDATED: Reduced Height, Tighter Spacing) */}
            {/* Changed h-[400px] md:h-[500px] TO h-[250px] md:h-[350px] */}
            <section className="relative h-[250px] md:h-[350px] flex items-end pb-12 justify-center overflow-hidden">
                
                {/* --- BACKGROUND IMAGE SECTION --- */}
                <div className="absolute inset-0 z-0">
                    {/* REPLACE '/contact-bg.jpg' WITH YOUR ACTUAL IMAGE */}
                    <Image 
                        src="/contactbg.png" 
                        alt="Contact Banner" 
                        fill 
                        className="object-cover"
                        priority 
                        // Added object position to focus on the center-bottom as the banner is shorter now
                        style={{ objectPosition: 'center' }}
                    />
                    
                    {/* BLACK OPACITY LAYER (40%) */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                </div>

                {/* --- HERO CONTENT --- */}
                {/* Removed 'mt-10' to tighten spacing in the shorter banner */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white mb-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-orange-200 font-bold text-[10px] tracking-widest uppercase mb-3">
                            Get In Touch
                        </span>
                        {/* Slightly smaller font sizes for compact look */}
                        <h1 className="font-serif font-bold text-3xl md:text-5xl mb-3 drop-shadow-xl">
                            We’re Here to Help
                        </h1>
                        <p className="text-base md:text-lg text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                            Whether you are an individual, an organization, or a potential partner, we welcome your enquiry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. MAIN CONTENT (Split Layout) */}
            {/* Adjusted negative margin from -mt-20 to -mt-12/16 to balance the shorter banner */}
            <section className="py-12 px-6 -mt-12 md:-mt-16 relative z-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        
                        {/* LEFT: Contact Info & Categories */}
                        <div className="space-y-6">
                            
                            {/* Official Channels Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                            >
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-orange-500 pl-4">Official Contact Channels</h2>
                                
                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 text-green-600">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-800">Phone Support</h3>
                                            <p className="text-sm text-slate-500 mb-1">SBBM Coordination Desk</p>
                                            <a href="tel:+919811074616" className="text-xl font-bold text-green-700 hover:underline">+91-9811074616</a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 text-orange-600">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-800">Email Enquiries</h3>
                                            <p className="text-sm text-slate-500 mb-1">Partnerships & Investors</p>
                                            <a href="mailto:manuj@microsystemstec.com" className="text-lg font-bold text-orange-700 hover:underline break-all">manuj@microsystemstec.com</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* "How We Can Help" Grid */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-linear-to-br from-green-800 to-green-900 p-8 rounded-3xl text-white shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-orange-400" /> How We Can Help
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Membership Joining", "Volunteer Registration", "Health Camp Organizing", 
                                        "NGO Partnership", "Investor Discussions", "Media Requests"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                                            <CheckCircle2 className="h-4 w-4 text-green-300" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT: Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 h-fit"
                        >
                            <h3 className="text-2xl font-bold text-green-900 mb-2">Send us a Message</h3>
                            <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                            
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Name</label>
                                        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone</label>
                                        <input type="tel" placeholder="+91..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email</label>
                                    <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all">
                                        <option>General Enquiry</option>
                                        <option>Membership Support</option>
                                        <option>Partnership Proposal</option>
                                        <option>Volunteer Registration</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Message</label>
                                    <textarea rows={4} placeholder="How can we assist you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none"></textarea>
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" /> Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. DIGITAL CHANNELS (Cards) */}
            <section className="py-16 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-green-900 mb-4">Community & Digital Support</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">SBBM connects with members and volunteers through modern digital platforms for instant support.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "WhatsApp Groups", icon: MessageCircle, desc: "Instant community updates" },
                            { title: "Digital Health", icon: Globe, desc: "Online health platforms" },
                            { title: "Telemedicine", icon: Video, desc: "Remote doctor connect" },
                            { title: "Awareness Sessions", icon: Users, desc: "Online webinars & workshops" },
                        ].map((channel, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg hover:border-green-200 transition-all cursor-default"
                            >
                                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-green-600 shadow-sm">
                                    <channel.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">{channel.title}</h3>
                                <p className="text-sm text-slate-500">{channel.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="py-16 px-6 bg-green-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-green-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl -ml-10 -mb-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold text-green-900 mb-4">Let’s Build a Healthier India</h2>
                            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Every message matters. Whether you need medical support, want to contribute, or wish to collaborate, your connection helps strengthen India’s healthcare future.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:9811074616" className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-all">
                                    <Phone className="h-5 w-5" /> Call Now
                                </a>
                                <a href="mailto:manuj@microsystemstec.com" className="flex items-center justify-center gap-2 bg-white text-green-700 border-2 border-green-100 font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-all">
                                    <Mail className="h-5 w-5" /> Email Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}