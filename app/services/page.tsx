'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ambulance, Stethoscope, Pill, Smartphone, Tent, ShieldPlus, 
  Brain, Leaf, School, MessageCircle, ChevronRight, X, 
  Phone, ArrowLeft, CheckCircle2, Menu, Facebook, Twitter, Youtube, Linkedin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/layout/Navbar';

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// ==========================================
// 1. DATA: SERVICES CONTENT
// ==========================================
const SERVICES_DATA = [
  {
    id: 1,
    title: "Emergency Medical Support",
    shortDesc: "24/7 ambulance coordination and rapid hospital admission support.",
    fullDesc: "One of SBBM’s most important services is emergency healthcare access. We reduce delays, confusion, and panic when a medical emergency occurs — helping families reach proper care faster.",
    features: [
      "24/7 ambulance coordination",
      "Emergency hospital admission assistance",
      "Rapid response support during medical crises",
      "Reduced delays in critical moments"
    ],
    icon: Ambulance,
  },
  {
    id: 2,
    title: "Doctor Consultations & OPD",
    shortDesc: "Guidance for OPD appointments, referrals, and expert consultations.",
    fullDesc: "SBBM helps members access medical advice efficiently. We bridge the gap between patients and specialists to ensure professional guidance without unnecessary delays.",
    features: [
      "OPD guidance and appointment scheduling",
      "Doctor referrals",
      "Basic medical consultations",
      "Health assessments during camps"
    ],
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Pharmacy & Medicine Support",
    shortDesc: "Access to affordable medicines and prescription guidance.",
    fullDesc: "SBBM assists members by connecting them with pharmacy services and ensuring they have access to the necessary medications for their treatment plans.",
    features: [
      "Pharmacy services connection",
      "Medication access support",
      "Guidance on prescriptions",
      "Treatment continuity support"
    ],
    icon: Pill,
  },
  {
    id: 4,
    title: "Telemedicine & Digital Health",
    shortDesc: "Online consultations and remote doctor guidance for rural areas.",
    fullDesc: "SBBM uses technology to reach people even in remote areas. This reduces the need for unnecessary travel and makes healthcare more accessible.",
    features: [
      "Online video consultations",
      "Remote doctor guidance",
      "Digital health communication",
      "Mobile and WhatsApp-based support"
    ],
    icon: Smartphone,
  },
  {
    id: 5,
    title: "Health Check-Up Camps",
    shortDesc: "Free screenings, diagnostics, and doctor interactions in communities.",
    fullDesc: "SBBM regularly organizes free or low-cost health camps to bring diagnostics and doctors directly to community doorsteps.",
    features: [
      "Free or low-cost health camps",
      "Screenings and basic diagnostics",
      "Doctor interaction sessions",
      "Early disease detection"
    ],
    icon: Tent,
  },
  {
    id: 6,
    title: "Preventive Healthcare",
    shortDesc: "Education on nutrition, hygiene, and disease prevention.",
    fullDesc: "SBBM believes prevention saves more lives than treatment. We focus heavily on educating families to stop diseases before they start.",
    features: [
      "Health education workshops",
      "Nutrition and hygiene awareness",
      "Vaccination awareness",
      "Disease prevention programs"
    ],
    icon: ShieldPlus,
  },
  {
    id: 7,
    title: "Mental Health Support",
    shortDesc: "Counseling awareness, stress management, and emotional wellness.",
    fullDesc: "SBBM promotes mental well-being through awareness and support programs. Mental health is treated as an essential part of overall healthcare.",
    features: [
      "Counseling awareness",
      "Stress management education",
      "Support programs",
      "Community wellness initiatives"
    ],
    icon: Brain,
  },
  {
    id: 8,
    title: "Holistic & Traditional Wellness",
    shortDesc: "Integrating Yoga, Ayurveda, and lifestyle healing practices.",
    fullDesc: "SBBM supports an integrated healthcare model that includes traditional Indian wellness practices to complement modern medicine.",
    features: [
      "Yoga sessions",
      "Ayurveda guidance",
      "Traditional Indian wellness practices",
      "Lifestyle healing"
    ],
    icon: Leaf,
  },
  {
    id: 9,
    title: "Community Health Programs",
    shortDesc: "Workshops in schools, NGOs, and local organizations.",
    fullDesc: "Through partnerships with schools, NGOs, and community organizations, SBBM provides health education to build a culture of health.",
    features: [
      "Health education workshops",
      "School health programs",
      "Parent awareness sessions",
      "Local health campaigns"
    ],
    icon: School,
  },
  {
    id: 10,
    title: "Continuous Member Support",
    shortDesc: "Regular health tips, updates, and coordinator access.",
    fullDesc: "SBBM members receive regular updates and support to keep families informed and connected to the healthcare ecosystem.",
    features: [
      "Regular health tips",
      "Updates on camps and services",
      "WhatsApp health messages",
      "Access to volunteers"
    ],
    icon: MessageCircle,
  }
];


// ==========================================
// 4. MAIN PAGE COMPONENT (Default Export)
// ==========================================
export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<typeof SERVICES_DATA[0] | null>(null);

    // --- DETAIL VIEW ---
    if (selectedService) {
        return (
            <div className="min-h-screen bg-white font-sans text-slate-800">
                <div className="pt-28 pb-10 px-6 container mx-auto">
                    <button onClick={() => setSelectedService(null)} className="flex items-center text-[#006a3d] font-bold hover:text-[#F9B233] transition-colors mb-8 group">
                        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Services
                    </button>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="p-8 rounded-3xl bg-green-50 border border-green-100 shrink-0 shadow-sm">
                            <selectedService.icon className="h-20 w-20 text-[#006a3d]" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#081221] mb-6 font-serif">{selectedService.title}</h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">{selectedService.fullDesc}</p>
                        </div>
                    </motion.div>
                </div>
                <div className="px-6 pb-20 container mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
                        <h3 className="text-2xl font-bold text-[#006a3d] mb-8 flex items-center gap-2"><ShieldPlus className="h-6 w-6" /> Key Features & Benefits</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {selectedService.features.map((feature, i) => (
                                <div key={i} className="flex items-start p-4 rounded-xl bg-slate-50 hover:bg-green-50 transition-colors">
                                    <CheckCircle2 className="h-6 w-6 text-[#F9B233] mr-4 shrink-0 mt-0.5" />
                                    <span className="text-lg text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 bg-linear-to-r from-[#006a3d] to-green-800 text-white rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <h3 className="text-3xl font-bold mb-4 relative z-10">Need {selectedService.title}?</h3>
                        <p className="mb-8 opacity-90 text-lg relative z-10">Contact our helpline or nearest center for immediate assistance.</p>
                        <a href="tel:18001025841" className="inline-flex items-center bg-white text-[#006a3d] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F9B233] hover:text-black transition-all shadow-lg relative z-10">
                            <Phone className="mr-3 h-5 w-5" /> Call Helpline
                        </a>
                    </div>
                </div>
              
            </div>
        );
    }

    // --- MAIN VIEW (Grid) ---
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
    

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/bgservices.png" alt="Services Background" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 container mx-auto text-center max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">Our <span className="text-[#F9B233]">Services</span></h1>
                        <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-md">Comprehensive healthcare solutions designed to serve every community across India.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES_DATA.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                // CARD: Compact, Rounded, White
                                className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                                // EXPAND & CHANGE COLOR ON TOUCH/HOVER
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.02 }}
                            >
                                {/* HOVER: Green/DarkGreen Gradient (Translucent) */}
                                <div className="absolute inset-0 bg-linear-to-br from-green-600/95 to-green-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                                {/* CONTENT: Z-10 to stay on top */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-green-50 text-[#006a3d] group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    
                                    {/* Text turns White on hover */}
                                    <h3 className="font-bold text-xl text-[#006a3d] mb-3 font-serif group-hover:text-white transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 grow group-hover:text-green-50 transition-colors duration-300">
                                        {service.shortDesc}
                                    </p>

                                    <button 
                                        onClick={() => { window.scrollTo(0,0); setSelectedService(service); }}
                                        className="w-full py-3 rounded-xl border-2 border-[#006a3d]/30 text-[#006a3d] font-bold text-sm flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#006a3d] transition-all duration-300 mt-auto"
                                    >
                                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why These Services Matter */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#081221] mb-12 font-serif">Why These Services Matter</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {["Reduce Emergency Delays", "Lower Healthcare Costs", "Increase Health Awareness", "Improve Early Diagnosis", "Strengthen Community Health", "Provide Peace of Mind"].map((item, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left">
                                <div className="h-3 w-3 rounded-full bg-[#F9B233] shrink-0"></div>
                                <span className="font-semibold text-slate-700 text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}