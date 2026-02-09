'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#081221] text-white overflow-hidden font-sans border-t-4 border-[#F9B233] z-30">
            
            {/* --- BACKGROUND IMAGE SECTION --- */}
            <div className="absolute inset-0 z-0">
                {/* Ensure 'bgfooter.png' is in your public folder */}
                <Image 
                    src="/bgfooter.png" 
                    alt="Footer Background" 
                    fill 
                    className="object-cover opacity-40" 
                    priority={false}
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0b1e33]/90 to-[#050b14]/95 mix-blend-multiply"></div>
            </div>

            {/* --- MAIN CONTAINER --- */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 pb-8">
                
                {/* TOP GRID: LINKS & CONTACT */}
                {/* Changed: grid-cols-1 for mobile, 2 for tablet, 4 for desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12 text-center sm:text-left">
                    
                    {/* 1. ORGANIZATION */}
                    <div>
                        <h3 className="text-sm font-bold text-green-400 mb-5 uppercase tracking-widest">Organization</h3>
                        <ul className="space-y-3 flex flex-col items-center sm:items-start">
                            {['About Us', 'Our Guide', 'FAQs', 'Contact Support', 'Grievance'].map((item) => (
                                <li key={item} className="w-full">
                                    <Link href="#" className="group flex items-center justify-center sm:justify-start text-slate-300 hover:text-white transition-all duration-300 text-xs">
                                        <ChevronRight className="w-3 h-3 text-green-500 mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. SERVICES */}
                    <div>
                        <h3 className="text-sm font-bold text-green-400 mb-5 uppercase tracking-widest">Services</h3>
                        <ul className="space-y-3 flex flex-col items-center sm:items-start">
                            {['Central Approvals', 'State Approvals', 'Govt Schemes', 'Track Application'].map((item) => (
                                <li key={item} className="w-full">
                                    <Link href="#" className="group flex items-center justify-center sm:justify-start text-slate-300 hover:text-white transition-all duration-300 text-xs">
                                        <ChevronRight className="w-3 h-3 text-green-500 mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. LEGAL */}
                    <div>
                        <h3 className="text-sm font-bold text-green-400 mb-5 uppercase tracking-widest">Legal</h3>
                        <ul className="space-y-3 flex flex-col items-center sm:items-start">
                            {['Terms of Use', 'Privacy Policy', 'Sitemap', 'Disclaimer'].map((item) => (
                                <li key={item} className="w-full">
                                    <Link href="#" className="group flex items-center justify-center sm:justify-start text-slate-300 hover:text-white transition-all duration-300 text-xs">
                                        <ChevronRight className="w-3 h-3 text-green-500 mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. HELPLINE (Compact) */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm shadow-lg mx-auto sm:mx-0 w-full max-w-xs sm:max-w-none">
                        <p className="text-[10px] text-green-400 font-bold uppercase mb-1 tracking-wider text-center sm:text-left">Helpline (Toll Free)</p>
                        <a href="tel:18001025841" className="block text-3xl font-black text-white mb-1 hover:text-[#F9B233] transition-colors tracking-tight text-center sm:text-left">1800 102 5841</a>
                        <div className="space-y-3 mt-4">
                            <a href="mailto:contact@sbbm.org.in" className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300 hover:text-white transition-colors">
                                <Mail className="h-3 w-3" /> contact@sbbm.org.in
                            </a>
                            <a href="tel:18001025841">
                                <button className="w-full mt-2 bg-linear-to-r from-[#F9B233] to-orange-600 hover:from-orange-500 hover:to-red-600 text-white font-bold text-xs rounded px-4 py-2.5 shadow hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                    <Phone className="h-3 w-3 fill-current" /> CALL NOW
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                {/* Changed: flex-col for mobile, lg:flex-row for desktop */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                    
                    {/* 1. LEFT: SBBM Logo & Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shrink-0 text-center sm:text-left">
                        <div className="relative w-32 h-12 sm:w-40 sm:h-16 flex items-center justify-center sm:justify-start">
                            <Image 
                                src="/footerlogo.png" 
                                alt="SBBM Logo" 
                                fill
                                className="object-contain" 
                            />
                        </div>
                        
                        {/* Divider - Hidden on mobile */}
                        <div className="hidden sm:block w-px h-10 bg-white/20"></div>
                        
                        <p className="text-[11px] text-slate-400 leading-tight">
                            <span>© {new Date().getFullYear()} Swasth Bharat Bhavya Mission.<br /> All rights reserved.</span>
                        </p>
                    </div>

                    {/* 2. CENTER: Supported By */}
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold whitespace-nowrap">
                            Supported By
                        </span>
                        
                        {/* Added flex-wrap for small screens */}
                        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                             {/* MoHFW */}
                             <div className="flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 sm:h-9 w-auto invert" />
                                <span className="text-[9px] leading-tight font-bold text-white text-left block">Ministry of Health<br/>& Family Welfare</span>
                            </div>

                            {/* Digital India */}
                            <div className="flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 sm:h-9 w-auto invert" />
                                <span className="text-[9px] leading-tight font-bold text-white text-left block">Digital India<br/>Corporation</span>
                            </div>

                             {/* NHA */}
                             <div className="flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png" alt="Govt" className="h-8 sm:h-9 w-auto invert" />
                                <span className="text-[9px] leading-tight font-bold text-white text-left block">National Health<br/>Authority</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. RIGHT: Social Icons */}
                    <div className="flex gap-2 shrink-0">
                        {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                            <Link key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F9B233] hover:text-black hover:scale-110 transition-all text-slate-400 border border-white/5">
                                <Icon className="h-3.5 w-3.5" />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}