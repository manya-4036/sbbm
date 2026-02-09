'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
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
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-14 flex items-center">
                {/* Logo - NEW TRANSPARENT LOGO */}
                <Link href="/" className="flex items-center gap-2 flex-shri nk-0 mr-10">
                    <Image
                        src="/logoh.png"
                        alt="SBBM Logo"
                        width={220}
                        height={80}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Main Navigation - RIGHT ALIGNED */}
                <nav className="hidden md:flex items-center gap-10 ml-auto">
                    {['Home', 'About Us', 'Services', 'Partners', 'Faq','contact-us'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={cn(
                                "font-bold text-sm uppercase tracking-wider transition-all duration-200 pb-1 border-b-2 border-transparent hover:border-orange-500",
                                isScrolled ? "text-green-700 hover:text-orange-600" : "text-white hover:text-orange-300"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>



                {/* Mobile Toggle */}
                <button className="md:hidden ml-auto text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-800" : "text-white")} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 md:hidden"
                >
                    <nav className="flex flex-col gap-4">
                        {['Home', 'About Us', 'Services', 'Partners'].map((item) => (
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
        </motion.header>
    );
}
