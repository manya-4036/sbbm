"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Users,
  GraduationCap,
  Briefcase,
  User,
  HandHeart,
  Home,
  Megaphone,
  Stethoscope,
  BookOpen,
  Award,
  Target,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  Plus,
  Activity,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VolunteerFormModal from "@/components/volunteers/VolunteerFormModal";

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ==========================================
// 1. DATA
// ==========================================
const VOLUNTEER_PROFILES = [
  {
    title: "Students",
    icon: GraduationCap,
    desc: "College & University youth.",
  },
  { title: "Professionals", icon: Briefcase, desc: "Working individuals." },
  { title: "Social Workers", icon: Heart, desc: "Community servers." },
  { title: "Retired", icon: User, desc: "Experienced seniors." },
  { title: "Healthcare", icon: Stethoscope, desc: "Nurses & doctors." },
  { title: "Community Leaders", icon: Users, desc: "Local influencers." },
];

const RESPONSIBILITIES = [
  "Visiting homes & neighborhoods",
  "Explaining SBBM benefits",
  "Helping families enroll",
  "Distributing health info",
  "Promoting preventive care",
  "Supporting health camps",
  "School & temple awareness",
  "Emergency support connection",
];

// ==========================================
// 5. MAIN PAGE
// ==========================================
export default function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // FIX: Function to handle scroll for "Learn More"
  const scrollToDetails = () => {
    const section = document.getElementById("who-can-join");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <VolunteerFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* 1. HERO SECTION (With Background Image & Full Screen) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        
        {/* --- HERO BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 z-0">
            {/* REPLACE THIS SRC WITH YOUR IMAGE */}
            <Image 
                src="/volunteerbg.png" 
                alt="Volunteer Background" 
                fill 
                className="object-cover" 
                priority 
            />
            {/* White Overlay (70% Opacity) to keep dark text readable */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 font-bold text-xs tracking-widest uppercase mb-6 border border-orange-200">
              Join the Movement
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-green-400 to-emerald-500 mb-6 leading-tight-sm">
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">
                Volunteer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Be the force that builds a healthier India. Connect SBBM with
              families, spread awareness, and ensure lifesaving healthcare
              reaches every corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-green-600 to-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <HandHeart className="h-5 w-5" /> Join Now
              </motion.button>
              {/* Fixed Learn More Button Action */}
              <motion.button
                onClick={scrollToDetails}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 border-2 border-green-100 font-bold px-8 py-4 rounded-full shadow-sm hover:border-green-600 hover:bg-green-50 flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO CAN JOIN (Target Section for Learn More) */}
      <section id="who-can-join" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4 font-serif">
              Who Can Become a Volunteer?
            </h2>
            <p className="text-slate-500">
              You do not need a medical background — just a desire to help
              people.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {VOLUNTEER_PROFILES.map((profile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "#16a34a" }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center cursor-default transition-colors hover:bg-white hover:shadow-md"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-green-600">
                  <profile.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">
                  {profile.title}
                </h3>
                <p className="text-xs text-slate-500">{profile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT VOLUNTEERS DO (Split Section) */}
      <section className="py-20 px-6 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                Responsibilities
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Health Ambassadors in Action
              </h2>
              <p className="text-green-100 mb-8 leading-relaxed">
                As a volunteer, you act as the bridge between healthcare
                services and the community. Your primary role is to connect,
                educate, and empower families.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RESPONSIBILITIES.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Training Card */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-500 p-3 rounded-xl text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Training & Support</h3>
                  <p className="text-xs text-green-200">
                    We equip you for success
                  </p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-green-100 border-b border-white/10 pb-3">
                  <span className="font-bold text-white">01.</span> Health
                  awareness training
                </li>
                <li className="flex gap-3 text-sm text-green-100 border-b border-white/10 pb-3">
                  <span className="font-bold text-white">02.</span> Guidance on
                  communication
                </li>
                <li className="flex gap-3 text-sm text-green-100">
                  <span className="font-bold text-white">03.</span> Direct
                  support from coordinators
                </li>
              </ul>
              <div className="bg-green-800/50 p-4 rounded-xl flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-orange-400" />
                <p className="text-xs italic">
                  "Speak confidently and accurately about healthcare."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARGETS & RECOGNITION (Gradient Card) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slnomate-100 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 p-8 md:p-12 bg-linear-to-br from-green-50 to-green-100 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-green-700 font-bold mb-4">
                <Target className="h-5 w-5" /> Our Goal
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Make a Real Impact
              </h3>
              <p className="text-slate-600 mb-6">
                To help SBBM grow effectively, each volunteer is encouraged to
                reach a specific milestone.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-green-200">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                  Monthly Target
                </p>
                <p className="text-xl font-bold text-green-700">
                  Enroll 30 Families
                </p>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4">
                <Award className="h-5 w-5" /> Recognition
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Rewards for Service
              </h3>
              <ul className="space-y-4">
                {[
                  "Official Certificates from SBBM",
                  "Public Recognition on Platforms",
                  "Health Advocate Titles",
                  "Leadership Opportunities",
                ].map((reward, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                    {reward}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">
            Why Volunteer with SBBM?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {[
              "Help Save Lives",
              "Gain Skills",
              "Official Recognition",
              "Support Families",
              "Lead Change",
              "National Movement",
            ].map((reason, i) => (
              <div
                key={i}
                className="bg-slate-50 p-3 rounded-lg text-sm font-semibold text-slate-700 border border-slate-100"
              >
                {reason}
              </div>
            ))}
          </div>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Register as a Volunteer
          </motion.button>
        </div>
      </section>
    </main>
  );
}