'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Users, ShieldCheck, Activity, Globe, User, 
  Phone, Handshake, Target, CheckCircle2, Stethoscope, 
  Leaf, TrendingUp, Lightbulb, Menu, X, Facebook, Twitter, Youtube, Linkedin, Mail, ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logoh.png" alt="SBBM Logo" className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'About Us', 'Services', 'Partners', 'Faq'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={cn(
                                "font-bold text-sm uppercase tracking-wider transition-colors hover:text-[#F9B233]",
                                isScrolled ? "text-slate-800" : "text-white"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className={cn("h-6 w-6", isScrolled ? "text-slate-800" : "text-white")} /> : <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-800" : "text-white")} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 md:hidden"
                >
                    <nav className="flex flex-col gap-4">
                        {['Home', 'About Us', 'Services', 'Partners', 'Faq'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-slate-800 font-medium py-2 border-b border-slate-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.header>
    );
};

// ==========================================
// 2. FOOTER COMPONENT
// ==========================================
const Footer = () => {
    return (
        <footer className="relative bg-[#081221] text-white overflow-hidden font-sans border-t-4 border-[#F9B233] z-30">
            <div className="absolute inset-0 z-0">
                <Image src="/bgfooter.png" alt="Footer Background" fill className="object-cover opacity-40" priority={false} />
                <div className="absolute inset-0 bg-linear-to-b from-[#0b1e33]/90 to-[#050b14]/95 mix-blend-multiply"></div>
            </div>
            <div className="overflow-x-auto w-full">
                <div className="relative z-10 container mx-auto px-6 pt-10 pb-6 min-w-[1024px]">
                    <div className="grid grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
                        <div>
                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Organization</h3>
                            <ul className="space-y-2">
                                {['About Us', 'Our Guide', 'FAQs', 'Contact Support'].map((item) => (
                                    <li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1"/>{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Services</h3>
                            <ul className="space-y-2">
                                {['Central Approvals', 'State Approvals', 'Govt Schemes', 'Track Application'].map((item) => (
                                    <li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1"/>{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Legal</h3>
                            <ul className="space-y-2">
                                {['Terms of Use', 'Privacy Policy', 'Sitemap', 'Disclaimer'].map((item) => (
                                    <li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1"/>{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <p className="text-[10px] text-green-400 font-bold uppercase mb-1">Helpline (Toll Free)</p>
                            <a href="tel:18001025841" className="block text-2xl font-black text-white hover:text-[#F9B233]">1800 102 5841</a>
                            <div className="mt-3"><button className="w-full bg-linear-to-r from-[#F9B233] to-orange-600 text-white font-bold text-xs rounded px-4 py-2 flex items-center justify-center gap-2"><Phone className="h-3 w-3 fill-current" /> CALL NOW</button></div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-6 w-full text-left">
                        <div className="flex flex-row items-center gap-4 shrink-0 h-12">
                            <div className="relative w-32 h-12"><Image src="/footerlogo.png" alt="SBBM Logo" fill className="object-contain object-left" /></div>
                            <div className="block w-px h-8 bg-white/20"></div>
                            <p className="text-[10px] text-slate-400 leading-tight">© {new Date().getFullYear()} Swasth Bharat Bhavya Mission.<br />All rights reserved.</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <span className="text-[9px] text-slate-500 uppercase font-bold">Supported By</span>
                            <div className="flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
                                <div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div>
                                <div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div>
                                <div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div>
                            </div>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F9B233] hover:text-black transition-all text-slate-400 border border-white/5"><Icon className="h-3 w-3" /></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// ==========================================
// 3. MAIN PAGE CONTENT
// ==========================================

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardHover = {
  hover: { y: -5, scale: 1.02, transition: { duration: 0.2 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      <Navbar />

      {/* 1. HERO SECTION (Only this has the background image) */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image restricted to header */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/aboutbg.png"  
            alt="About Header Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif tracking-wide drop-shadow-md">
 <span className="text-[#F9B233]">SBBM</span>
            </h1>
            <p className="text-base md:text-lg text-gray-100 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Building India’s People-Powered Healthcare Network. Quality, affordable, and accessible healthcare for every Indian family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Clean White Background) */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#006a3d] mb-4">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Swasth Bharat Bhavya Mission Abhiyan (SBBM) is a national healthcare movement dedicated to making quality healthcare available to every Indian, especially those in rural communities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Rather than relying only on hospitals, SBBM builds a <strong>people-powered network</strong> that ensures timely medical help, emergency response, and preventive care reach communities where they are needed most.
              </p>
            </div>
            {/* Visual Stats */}
            <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
                    <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="block font-bold text-[#006a3d]">Trusted</span>
                    <span className="text-xs text-slate-500">By Families</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100">
                    <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <span className="block font-bold text-orange-700">Community</span>
                    <span className="text-xs text-slate-500">First Model</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CHAIRMAN SECTION (Compact & Aligned) */}
      <section className="py-12 bg-slate-50 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
          >
            <div className="flex flex-col md:flex-row">
              {/* IMAGE: Perfectly sized/aligned on the left */}
              <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
                <Image 
                  src="/manoj.png" // Rename your image to chairman.png in public folder
                  alt="Dr. Manuj Mittal" 
                  fill 
                  className="object-cover object-top"
                />
              </div>

              {/* CONTENT: Compact text on the right */}
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#081221]">Dr. Manuj Mittal</h3>
                  <p className="text-[#006a3d] font-semibold text-sm uppercase tracking-wide">Founder & Chairman</p>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  A renowned healthcare reformer with over <strong>28 years of experience</strong>, Dr. Mittal is a trailblazer in India’s healthcare transformation. As Chairman of SBBM, he leads a national initiative to strengthen healthcare delivery—from emergency services to compassionate treatment for all.
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  He is also the Founder of the <strong>International Chamber of Healthcare and Medical Tourism (ICHMT)</strong>, promoting India as a global hub for ethical medical care.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 italic">"Healthcare is a human right, not a privilege."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT MAKES SBBM DIFFERENT (Animated Cards) */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006a3d] mb-2">Our Approach</h2>
            <p className="text-slate-500 text-sm">Holistic healthcare combining emergency support and wellness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Emergency Ready", icon: Phone, color: "bg-red-50 text-red-600", desc: "Ambulance & Hospital Access" },
              { title: "Preventive Care", icon: Heart, color: "bg-green-50 text-green-600", desc: "Health Camps & Checkups" },
              { title: "Affordable", icon: ShieldCheck, color: "bg-blue-50 text-blue-600", desc: "Collective Member Funding" },
              { title: "Accessible", icon: Globe, color: "bg-orange-50 text-orange-600", desc: "Volunteers & Digital Tools" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover="hover"
                variants={cardHover}
                className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-default"
              >
                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUES (Grid) */}
      <section className="py-12 bg-[#006a3d] px-6 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Compassion", "Access", "Affordability", "Trust", "Community", "Innovation"].map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="h-5 w-5 text-[#F9B233]" />
                <span className="font-semibold text-sm">{val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}