'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Users, ShieldCheck, Globe,
  Phone, CheckCircle2,
} from "lucide-react";
import Image from "next/image";

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}


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
    </div>
  );
}