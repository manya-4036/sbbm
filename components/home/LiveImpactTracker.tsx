'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import { Users, Heart, HandHeart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LiveImpactTracker() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const stats = [
        { label: "Families Joined", value: 12531, icon: Users, color: "from-green-500 to-green-600" },
        { label: "Lives Impacted", value: 16098, icon: Heart, color: "from-green-500 to-green-600" },
        { label: "Active Volunteers", value: 1540, icon: HandHeart, color: "from-green-500 to-green-600" },
        { label: "Health Camps Conducted", value: 85, icon: Activity, color: "from-green-500 to-green-600" },
    ];

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Government Pattern Background */}
            <div className="absolute inset-0 ashoka-pattern opacity-30"></div>
            <div className="absolute inset-0 gov-pattern-bg"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-5 gap-10 items-stretch max-w-7xl mx-auto">

                    {/* LEFT PANEL - ASHOKA CHAKRA WHEEL BACKGROUND */}
                    <div className="lg:col-span-2 relative">
                        {/* ASHOKA CHAKRA WHEEL - FULL COVERAGE, NO EDGES */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 scale-150">
                                <Image
                                    src="/ashoka-chakra-bg.jpg"
                                    alt="Ashoka Chakra"
                                    fill
                                    className="object-cover opacity-80"
                                    quality={100}
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* TRANSPARENT GLASS PANEL */}
                        <div className="relative bg-white/15 backdrop-blur-none border-2 border-white/50 p-10 lg:p-12 rounded-2xl shadow-2xl h-full flex flex-col justify-center">
                            {/* NO "IN" CIRCLE - REMOVED */}

                            <div className="relative z-10 text-center">
                                {/* SINGLE LINE, CENTER ALIGNED */}
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="font-serif font-bold text-3xl lg:text-4xl mb-6 leading-tight text-green-800"
                                    style={{
                                        fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif'
                                    }}
                                >
                                    Our Impact So Far
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-slate-800 text-base leading-relaxed mb-6 font-semibold"
                                >
                                    Real-time tracking of our mission's progress across India.
                                    Every number represents a life touched and a community strengthened.
                                </motion.p>

                                {/* Hindi Tagline */}
                                <p className="text-green-800 text-sm mt-6 italic font-bold">
                                    "स्वस्थ समाज, समृद्ध भारत"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Stats Cards */}
                    <div className="lg:col-span-3 grid grid-cols-2 gap-5">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            const isHovered = hoveredIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`
                                        relative p-8 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden
                                        ${isHovered
                                            ? 'shadow-2xl transform scale-105'
                                            : 'shadow-lg'
                                        }
                                    `}
                                    style={{
                                        background: isHovered
                                            ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                                            : '#ffffff',
                                        borderWidth: '2px',
                                        borderColor: isHovered ? 'transparent' : '#e2e8f0'
                                    }}
                                >
                                    {/* Gradient Background on Hover */}
                                    {isHovered && (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}></div>
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`
                                            w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                                            ${isHovered
                                                ? 'bg-white/25 backdrop-blur-sm'
                                                : `bg-gradient-to-br ${stat.color} shadow-md`
                                            }
                                        `}>
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>

                                        {/* Number */}
                                        <div className={`
                                            text-4xl font-bold mb-2 font-display transition-colors
                                            ${isHovered ? 'text-white' : 'text-slate-900'}
                                        `}>
                                            <CountUp end={stat.value} duration={2.5} separator="," />
                                            <span className={isHovered ? 'text-white/80' : 'text-slate-400'}>+</span>
                                        </div>

                                        {/* Label */}
                                        <p className={`
                                            text-xs font-semibold uppercase tracking-wider transition-colors
                                            ${isHovered ? 'text-white/90' : 'text-slate-600'}
                                        `}>
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Government Pattern on Hover */}
                                    {isHovered && (
                                        <div className="absolute inset-0 opacity-10 ashoka-pattern"></div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
