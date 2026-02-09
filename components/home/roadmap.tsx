"use client";

import React, { useRef } from "react";
import {
  Target,
  Eye,
  Users,
  Handshake,
  HeartPulse,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const MissionVisionRoadmap = () => {
  // Scroll animation logic for the Line
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative py-20 md:py-36 w-full font-sans overflow-hidden bg-linear-to-b from-slate-50 via-white to-emerald-50/30">
      {/* --- BACKGROUND GRAPHICS --- */}

      {/* 1. TOP RIGHT: Rotating Ashoka Chakra */}
      <div className="absolute -top-20 -right-20 md:-right-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] opacity-[0.08] z-0 pointer-events-none">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1200px-Ashoka_Chakra.svg.png"
          alt="Ashoka Chakra"
          className="w-full h-full grayscale contrast-125"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 2. Medical Cross Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#059669 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* 3. BOTTOM LEFT: Moving & Growing Heartbeat Pulse */}
      {/* Positioned absolute bottom-left, behind content (z-0) */}
      <div className="absolute bottom-0 -left-10 md:left-0 w-[300px] md:w-[500px] h-[300px] md:h-[400px] z-0 pointer-events-none overflow-visible">
        <motion.div
          className="w-full h-full flex items-end justify-start opacity-20 text-emerald-600"
          animate={{
            scale: [1, 1.05, 1], // Grow and shrink
            opacity: [0.15, 0.25, 0.15], // Pulse visibility
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Thicker, clearer Pulse SVG */}
          <svg
            viewBox="0 0 500 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 100H100L130 10L160 190L190 50L220 150L250 100H500"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER (Fade Up Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left md:ml-16"
        >
          <h1 className="text-3xl md:text-6xl font-bold font-serif text-emerald-900 mb-3 drop-shadow-sm">
            Our Mission & Vision
          </h1>
          <div className="w-24 md:w-32 h-1.5 bg-linear-to-r from-orange-400 via-white to-green-600 rounded-full mb-4 mx-auto md:mx-0 border border-slate-200"></div>
          <p className="text-lg md:text-xl tracking-widest text-emerald-700 font-medium uppercase">
            Building a Healthier, Self-Reliant India
          </p>
        </motion.div>

        {/* MISSION & VISION CARDS (Fade Up with Delay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-40 px-2 md:px-12">
          <MissionVisionCard
            title="Mission"
            icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
            desc="To ensure accessible, affordable, and preventive healthcare for every Indian family through community participation, innovation, and compassion."
            delay={0.2}
          />
          <MissionVisionCard
            title="Vision"
            icon={<Eye className="w-6 h-6 md:w-8 md:h-8" />}
            desc="A Swasth Bharat where no family delays care due to cost, distance, or lack of awareness. Healthcare for all, by all."
            delay={0.4}
          />
        </div>

        {/* ROADMAP HEADER (Fade Up) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 relative px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-emerald-900 mb-4">
            Roadmap to a Swasth Bharat
          </h2>
          <p className="text-slate-600 italic text-base md:text-lg max-w-2xl mx-auto">
            Reaching{" "}
            <span className="font-bold text-emerald-800">100,000 families</span>{" "}
            through a structured, phase-wise approach.
          </p>
        </motion.div>

        {/* --- RESPONSIVE TIMELINE CONTAINER --- */}
        <div className="relative" ref={containerRef}>
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-emerald-100 rounded-full"></div>

          {/* Animated Fill Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1.5 bg-emerald-600 rounded-full z-0 origin-top shadow-[0_0_10px_rgba(5,150,105,0.4)]"
          />

          <div className="pb-12 space-y-12 md:space-y-0">
            {/* PHASE 1 */}
            <TimelineRow
              phase="Phase 1"
              title="Community Foundation"
              icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
              items={[
                "Recruit college volunteers",
                "Family-first membership",
                "Targets and recognition",
              ]}
              tags={["Volunteers", "Membership"]}
              position="left"
            />

            {/* PHASE 2 */}
            <TimelineRow
              phase="Phase 2"
              title="Strategic Partnerships"
              icon={<Handshake className="w-5 h-5 md:w-6 md:h-6" />}
              items={[
                "NGOs & grassroots orgs",
                "Panchayat & local leaders",
                "Religious institutions",
              ]}
              tags={["NGOs", "Panchayats"]}
              position="right"
            />

            {/* PHASE 3 */}
            <TimelineRow
              phase="Phase 3"
              title="Health Action on Ground"
              icon={<HeartPulse className="w-5 h-5 md:w-6 md:h-6" />}
              items={[
                "Free check-ups",
                "Nutrition & hygiene sessions",
                "Festival outreach booths",
              ]}
              tags={["Camps", "Awareness"]}
              position="left"
            />

            {/* PHASE 4 */}
            <TimelineRow
              phase="Phase 4"
              title="Word of Mouth & Digital"
              icon={<Megaphone className="w-5 h-5 md:w-6 md:h-6" />}
              items={[
                "Referral recognition",
                "WhatsApp community groups",
                "Digital health education",
              ]}
              tags={["Digital India", "Community"]}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: MISSION/VISION CARD ---
const MissionVisionCard = ({
  title,
  icon,
  desc,
  delay,
}: {
  title: string;
  icon: React.ReactNode;
  desc: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay }}
    className="group relative bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-emerald-100/60 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-emerald-400 hover:bg-emerald-50/50"
  >
    <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-200/40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
        <div className="p-3 md:p-4 bg-emerald-50 rounded-2xl text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-900 group-hover:text-emerald-800 transition-colors">
          {title}
        </h2>
      </div>
      <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium group-hover:text-slate-900">
        {desc}
      </p>
    </div>
  </motion.div>
);

// --- COMPONENT: TIMELINE ROW (RESPONSIVE ZIGZAG + ANIMATION) ---
const TimelineRow = ({
  phase,
  title,
  icon,
  items,
  tags,
  position,
}: {
  phase: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  tags: string[];
  position: "left" | "right";
}) => {
  // Animation Logic:
  const slideVariant: Variants = {
    hidden: {
      opacity: 0,
      x: position === "left" ? -50 : 50,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mobileVariant: Variants = {
    hidden: { opacity: 0, y: 50, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full md:my-24 group">
      {/* CENTRAL DOT */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20 top-0 md:top-1/2 md:-translate-y-1/2"
      >
        <div className="w-6 h-6 bg-white rounded-full border-[3px] border-emerald-200 shadow-md flex items-center justify-center group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full group-hover:bg-emerald-600"></div>
        </div>
      </motion.div>

      {/* --- LEFT SIDE (Desktop) --- */}
      <div className={`hidden md:block w-1/2 pr-16 text-right`}>
        {position === "left" && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideVariant}
          >
            <PhaseCardContent
              phase={phase}
              title={title}
              icon={icon}
              items={items}
              tags={tags}
              align="right"
            />
          </motion.div>
        )}
      </div>

      {/* --- RIGHT SIDE (Desktop & Mobile) --- */}
      <div className={`w-full pl-20 md:pl-16 md:w-1/2`}>
        {/* Mobile View (Always Visible here) */}
        <motion.div
          className="md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={mobileVariant}
        >
          <PhaseCardContent
            phase={phase}
            title={title}
            icon={icon}
            items={items}
            tags={tags}
            align="left"
          />
        </motion.div>

        {/* Desktop View (Only if position is right) */}
        <div className="hidden md:block">
          {position === "right" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideVariant}
            >
              <PhaseCardContent
                phase={phase}
                title={title}
                icon={icon}
                items={items}
                tags={tags}
                align="left"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: PHASE CARD CONTENT ---
const PhaseCardContent = ({
  phase,
  title,
  icon,
  items,
  tags,
  align,
}: {
  phase: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  tags: string[];
  align: "left" | "right";
}) => (
  <div
    className={`
        relative bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100/50
        transition-all duration-300 cursor-default
        hover:scale-105 hover:bg-emerald-50 hover:shadow-xl hover:border-emerald-400 z-10
        ${align === "right" ? "md:flex md:flex-col md:items-end" : ""}
    `}
  >
    {/* Title Row */}
    <div
      className={`flex items-center gap-4 mb-4 md:mb-6 ${align === "right" ? "md:flex-row-reverse" : ""}`}
    >
      <div className="p-2.5 md:p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div className={align === "right" ? "md:text-right" : ""}>
        <span className="block text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-600 mb-0.5 md:mb-1">
          {phase}
        </span>
        <h3 className="text-xl md:text-2xl font-bold font-serif text-emerald-900 group-hover:text-emerald-950 transition-colors">
          {title}
        </h3>
      </div>
    </div>

    {/* List Items */}
    <ul
      className={`space-y-2 md:space-y-3 mb-4 md:mb-6 ${align === "right" ? "md:text-right" : ""}`}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`flex items-start gap-2.5 text-slate-700 text-sm md:text-base font-medium ${align === "right" ? "md:flex-row-reverse" : ""}`}
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:text-emerald-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* Tags */}
    <div
      className={`flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : ""}`}
    >
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-2.5 py-1 md:py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide group-hover:bg-white group-hover:text-emerald-700 group-hover:border-emerald-300 transition-colors shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default MissionVisionRoadmap;
