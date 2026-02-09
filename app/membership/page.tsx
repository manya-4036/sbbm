"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Heart,
  Shield,
  Sparkles,
  TrendingUp,
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  UserPlus,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ==========================================
// 3. MEMBERSHIP FORM MODAL
// ==========================================
const MembershipFormModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative"
      >
        <div className="bg-linear-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserPlus className="h-6 w-6" /> Membership Form
            </h3>
            <p className="text-orange-100 text-xs mt-1">
              Join the family for just ₹500
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto bg-slate-50">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91..."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  City / District
                </label>
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-white"
              />
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
              <Shield className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-xs text-orange-800 leading-relaxed">
                By proceeding, you agree to become a member of SBBM. Your ₹500
                contribution goes directly towards healthcare initiatives.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 text-lg"
          >
            <CreditCard className="h-5 w-5" /> Proceed to Pay ₹500
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 4. MAIN PAGE
// ==========================================
export default function MembershipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
   
      <MembershipFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* HERO SECTION - Reduced Spacing & Width */}
      {/* Changed pt-32/md:pt-48 to pt-28/md:pt-36 for less top space */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-linear-to-br from-green-900 via-green-800 to-green-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/membershipbg.png"
            alt="Membership Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Changed max-w-4xl to max-w-3xl for narrower text block */}
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-orange-400 font-bold tracking-[0.2em] uppercase mb-4 block text-xs md:text-sm"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              Join the Family
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // Font sizes remain large as requested
              className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white drop-shadow-2xl wrap-break-word"
            >
              A Small Contribution,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-200">
                A Lifesaving Impact.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg px-4"
            >
              Joining Swasth Bharat Bhavya Mission for just{" "}
              <span className="text-orange-400 font-bold">₹500</span> is more
              than a membership; it's a pledge to build a healthier India.
            </motion.p>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                backgroundImage: "linear-gradient(to right, #16a34a, #059669)",
                boxShadow: "0 20px 25px -5px rgba(22, 163, 74, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-orange-500 to-orange-600 text-white text-base md:text-lg px-10 py-4 font-bold rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20"
            >
              Join Now for ₹500
            </motion.button>
          </div>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-green-900 mb-8 leading-tight">
                Why This Investment Matters
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "Affordable for All",
                    desc: "At just ₹500, it's accessible for everyone—less than the price of a meal out—ensuring no financial strain.",
                  },
                  {
                    icon: Heart,
                    title: "Life-Saving Potential",
                    desc: "Funds critical services like free ambulance rides and emergency hospital admissions that save lives.",
                  },
                  {
                    icon: Shield,
                    title: "Community Impact",
                    desc: "Ensures healthcare reaches those who need it most, creating a safety net for countless individuals.",
                  },
                  {
                    icon: Sparkles,
                    title: "Collective Power",
                    desc: "Small contributions from many amplify our ability to provide advanced, compassionate care.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <h3 className="font-serif font-bold text-3xl text-green-900 mb-8 relative z-10">
                  Membership Benefits
                </h3>
                <ul className="space-y-5 mb-10 relative z-10">
                  {[
                    "Access to vital healthcare information",
                    "Participation in life-saving initiatives",
                    "Support during health crises",
                    "Holistic health workshops",
                    "Advocacy for healthcare policy",
                    "Priority access to health camps",
                  ].map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium text-lg"
                    >
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{
                    scale: 1.02,
                    backgroundImage:
                      "linear-gradient(to right, #16a34a, #059669)",
                    boxShadow: "0 15px 20px -5px rgba(22, 163, 74, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white text-lg py-5 font-bold rounded-2xl shadow-xl transition-all relative z-10 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" /> Become a Member
                </motion.button>
                <p className="text-center text-sm text-slate-400 mt-6 font-medium flex justify-center items-center gap-2">
                  <Shield className="w-4 h-4" /> Secure Payment • Tax Benefits
                  Available
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-orange-500 relative overflow-hidden">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-orange-100 font-medium mb-10">
            Join thousands of members who are building a healthier, stronger
            India.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, color: "#166534" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 font-bold px-10 py-5 text-lg rounded-full shadow-2xl flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" /> Join Membership
            </motion.button>
            <a href="tel:18001025841" className="inline-block">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold px-10 py-5 text-lg rounded-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Helpline
              </motion.button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
