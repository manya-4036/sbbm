"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus, Users } from "lucide-react";
import Image from "next/image";

export default function VideoHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yText = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-dvh min-h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/bghero.png"
          alt="Swasth Bharat Mission Background"
          fill
          quality={95}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* --- HERO CONTENT LAYER --- */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center will-change-transform h-full flex flex-col justify-center"
        style={{ y: yText, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl leading-tight"
            style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
          >
            <span className="text-white block mb-2 tracking-tight">
              Swasth Bharat
            </span>
            <span className="text-[#F9B233] inline-block relative">
              Bhavya Mission
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-1 left-0 h-1 bg-[#F9B233]/30 blur-sm rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-100 font-medium max-w-xl md:max-w-3xl mx-auto mb-10 sm:mb-12 drop-shadow-lg leading-relaxed text-opacity-95"
          >
            Empowering healthier communities across India through volunteerism,
            innovation, and accessible healthcare for all.
          </motion.p>

          {/* CTA Buttons - Vertical on Mobile, Horizontal on Desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 w-full max-w-md sm:max-w-none"
          >
            {/* JOIN AS MEMBER BUTTON (Gradient Restored) */}
            <Link href="/membership" className="w-full sm:w-auto group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl shadow-lg shadow-green-900/20"
              >
                <Button className="w-full sm:w-auto h-auto text-base sm:text-lg font-bold px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white border-none flex items-center justify-center gap-2 transition-all duration-300">
                  <UserPlus className="h-5 w-5" />
                  Join as Member
                </Button>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none"></div>
              </motion.div>
            </Link>

            {/* BECOME A VOLUNTEER BUTTON (Gradient Restored) */}
            <Link href="/volunteers" className="w-full sm:w-auto group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl shadow-lg shadow-blue-900/20"
              >
                <Button className="w-full sm:w-auto h-auto text-base sm:text-lg font-bold px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none flex items-center justify-center gap-2 transition-all duration-300">
                  <Users className="h-5 w-5" />
                  Become a Volunteer
                </Button>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none"></div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Hindi Tagline - Box Removed */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-2 mt-4"
          >
            <p className="text-white/90 text-sm sm:text-lg italic font-semibold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              "सबका साथ, सबका स्वास्थ्य" - Healthcare for All
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
