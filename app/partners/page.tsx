'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Heart, Users, School, Cross, Stethoscope, 
  TrendingUp, Globe, ShieldCheck, ArrowRight, X, CheckCircle2, 
  Menu, Phone, Mail, ChevronRight, Handshake, Landmark, Briefcase,
  Facebook, Twitter, Youtube, Linkedin 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// ==========================================
// 1. DATA
// ==========================================
const PARTNER_CATEGORIES = [
  {
    title: "Hospitals & Clinics",
    desc: "Providing OPD consultations, emergency admissions, and referrals.",
    icon: Building2,
    // Using lighter gradients for the hover background so black text stays visible
    gradient: "from-emerald-100 to-green-200" 
  },
  {
    title: "Pharmacies",
    desc: "Ensuring medicine access and prescription guidance.",
    icon: Cross,
    gradient: "from-teal-100 to-emerald-200"
  },
  {
    title: "NGOs & Communities",
    desc: "Reaching underserved families and organizing health camps.",
    icon: Users,
    gradient: "from-green-100 to-teal-200"
  },
  {
    title: "Religious Institutions",
    desc: "Trusted partners hosting camps and spreading awareness.",
    icon: Heart,
    gradient: "from-emerald-100 to-green-200"
  },
  {
    title: "Schools & Education",
    desc: "Engaging student volunteers and parent-teacher associations.",
    icon: School,
    gradient: "from-teal-100 to-emerald-200"
  },
  {
    title: "ASHA & Health Workers",
    desc: "The backbone of rural outreach connecting households.",
    icon: Stethoscope,
    gradient: "from-green-100 to-teal-200"
  }
];

const MARKET_STATS = [
  { value: "1.4B+", label: "People in India" },
  { value: "5 Cr", label: "Target Families" },
  { value: "100k+", label: "Volunteers" },
  { value: "24/7", label: "Emergency Support" }
];


// ==========================================
// 3. FOOTER COMPONENT
// ==========================================
function Footer() {
    return (
        <footer className="relative bg-[#081221] text-white overflow-hidden font-sans border-t-4 border-[#F9B233] z-30">
            <div className="absolute inset-0 z-0">
                <Image src="/bgfooter.png" alt="Footer Background" fill className="object-cover opacity-40" priority={false} />
                <div className="absolute inset-0 bg-linear-to-b from-[#0b1e33]/90 to-[#050b14]/95 mix-blend-multiply"></div>
            </div>
            <div className="overflow-x-auto w-full">
                <div className="relative z-10 container mx-auto px-6 pt-10 pb-6 min-w-[1024px]">
                    <div className="grid grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
                        <div><h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Organization</h3><ul className="space-y-2">{['About Us', 'Our Guide', 'FAQs', 'Contact Support'].map((item) => (<li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1" />{item}</Link></li>))}</ul></div>
                        <div><h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Services</h3><ul className="space-y-2">{['Central Approvals', 'State Approvals', 'Govt Schemes', 'Track Application'].map((item) => (<li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1" />{item}</Link></li>))}</ul></div>
                        <div><h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">Legal</h3><ul className="space-y-2">{['Terms of Use', 'Privacy Policy', 'Sitemap', 'Disclaimer'].map((item) => (<li key={item}><Link href="#" className="text-slate-300 hover:text-white text-xs flex items-center"><ChevronRight className="w-3 h-3 text-green-500 mr-1" />{item}</Link></li>))}</ul></div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10"><p className="text-[10px] text-green-400 font-bold uppercase mb-1">Helpline (Toll Free)</p><a href="tel:18001025841" className="block text-2xl font-black text-white hover:text-[#F9B233]">1800 102 5841</a><div className="mt-3"><button className="w-full bg-linear-to-r from-[#F9B233] to-orange-600 text-white font-bold text-xs rounded px-4 py-2 flex items-center justify-center gap-2"><Phone className="h-3 w-3 fill-current" /> CALL NOW</button></div></div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-6 w-full text-left">
                        <div className="flex flex-row items-center gap-4 shrink-0 h-12"><div className="relative w-32 h-12"><Image src="/footerlogo.png" alt="SBBM Logo" fill className="object-contain object-left" /></div><div className="block w-px h-8 bg-white/20"></div><p className="text-[10px] text-slate-400 leading-tight">© {new Date().getFullYear()} Swasth Bharat Bhavya Mission.<br />All rights reserved.</p></div>
                        <div className="flex flex-row items-center gap-4"><span className="text-[9px] text-slate-500 uppercase font-bold">Supported By</span><div className="flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all"><div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div><div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div><div className="flex items-center gap-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 w-auto invert" /></div></div></div>
                        <div className="flex gap-2 shrink-0">{[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (<Link key={i} href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F9B233] hover:text-black transition-all text-slate-400 border border-white/5"><Icon className="h-3 w-3" /></Link>))}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ==========================================
// 4. PARTNER FORM MODAL (Responsive)
// ==========================================
const PartnerFormModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
            >
                <div className="bg-linear-to-r from-green-600 to-teal-600 p-5 md:p-6 text-white flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2"><Handshake className="h-5 w-5"/> Become a Partner</h3>
                    <button onClick={onClose} className="hover:bg-white/20 p-1.5 rounded-full transition-colors"><X size={20} /></button>
                </div>
                <form className="p-5 md:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                            <input type="text" placeholder="e.g. Apollo Clinic" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Type</label>
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white">
                                <option>Hospital / Clinic</option>
                                <option>NGO / Trust</option>
                                <option>Corporate / CSR</option>
                                <option>School / University</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                        <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" placeholder="+91..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" placeholder="email@org.com" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={3} placeholder="How would you like to partner with us?" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none resize-none"></textarea>
                    </div>
                    <button className="w-full bg-linear-to-r from-green-600 to-teal-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all text-sm md:text-base">Submit Application</button>
                </form>
            </motion.div>
        </div>
    );
};

// ==========================================
// 5. MAIN PAGE
// ==========================================
export default function PartnersPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <PartnerFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden bg-[#004d2c]">
                <div className="absolute inset-0 z-0">
                    <Image src="/partnersbg.png" alt="Background" fill className="object-cover opacity-30" priority />
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-green-900/80 to-teal-900/90 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 container mx-auto text-center max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-2xl leading-tight">
                            Partners & <span className="text-[#F9B233]">Investors</span>
                        </h1>
                        <p className="text-lg md:text-xl text-green-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                            Join us in revolutionizing healthcare delivery in India. Together, we are building a nation where quality care is accessible, affordable, and holistic for every citizen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PARTNER ECOSYSTEM (Responsive Grid) */}
            <section className="py-16 md:py-20 px-6 bg-white relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#006a3d] mb-4">Our Partner Ecosystem</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                            SBBM works through strategic alliances with organizations across India to create a robust healthcare support system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PARTNER_CATEGORIES.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default relative overflow-hidden flex flex-col"
                            >
                                {/* Hover Gradient Overlay (LIGHTER to keep text visible) */}
                                <div className={`absolute inset-0 bg-linear-to-br ${partner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${partner.gradient} flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform group-hover:bg-white`}>
                                        {/* Icon changes color on hover for contrast against light BG */}
                                        <partner.icon className="h-7 w-7 group-hover:text-[#006a3d] transition-colors" />
                                    </div>
                                    {/* Text stays DARK SLATE for readability on light gradient */}
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">{partner.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">{partner.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTOR RELATIONS SECTION */}
            <section className="py-16 md:py-20 px-6 bg-slate-50 relative overflow-hidden">
                {/* Decorative BG Elements */}
                <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-green-200/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left: Content */}
                        <div>
                            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">Investor Relations</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Invest in India’s <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-600">Healthcare Future</span>
                            </h2>
                            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                                SBBM is building a scalable healthcare infrastructure layer connecting 5 crore families. We address massive gaps in rural access, emergency response, and preventive care through a low-cost, high-trust model.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                {[
                                    "Recurring engagement via membership model",
                                    "Data-driven healthcare delivery platform",
                                    "Massive scale via 100,000+ volunteers",
                                    "Infrastructure for Telemedicine & AI Tools"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                        <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {MARKET_STATS.map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-5 md:p-6 rounded-2xl shadow-lg border border-green-50 flex flex-col items-center justify-center text-center h-32 md:h-40"
                                >
                                    <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-slate-500 font-medium uppercase">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & FORM TRIGGER */}
            <section className="py-16 md:py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-r from-emerald-800 to-green-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
                            <p className="text-green-100 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
                                Whether you are a hospital, NGO, investor, or volunteer organization, your partnership strengthens the safety net for millions.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => setIsFormOpen(true)}
                                    className="bg-[#F9B233] text-black font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-green-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <Handshake className="h-5 w-5" /> Become a Partner
                                </button>
                                <a 
                                    href="mailto:manuj@microsystemstec.com"
                                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2"
                                >
                                    <Mail className="h-5 w-5" /> Email Investors
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 text-xs md:text-sm text-green-200/60">
                                Strategic Partnerships: +91-9811074616
                            </div>
                        </div>
                        
                        {/* Background Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </motion.div>
                </div>
            </section>

            
        </main>
    );
}