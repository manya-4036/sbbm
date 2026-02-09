'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ChevronRight, ChevronDown, ShieldCheck, Users, CreditCard, Stethoscope, 
  X, Send, Menu, Mail, Phone, Facebook, Twitter, Youtube, Linkedin 
} from 'lucide-react';

// --- UTILITY ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- ASSETS ---
const HEADER_BG_IMAGE = "/assets/faqbg.png"; 
const GIRL_ILLUSTRATION = "/girl.png"; 
const DECORATIVE_DOTS = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23a5d6a7' fill-rule='evenodd'%3E%3Ccircle cx='5' cy='5' r='3'/%3E%3Ccircle cx='15' cy='5' r='3'/%3E%3Ccircle cx='25' cy='5' r='3'/%3E%3Ccircle cx='5' cy='15' r='3'/%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='25' cy='15' r='3'/%3E%3Ccircle cx='5' cy='25' r='3'/%3E%3Ccircle cx='15' cy='25' r='3'/%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3C/g%3E%3C/svg%3E";


// ==========================================
// 3. OTHER COMPONENTS
// ==========================================
const QueryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-[#006a3d] p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Ask Your Query</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email / Phone</label>
            <input type="text" placeholder="Enter email or phone number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
            <textarea rows={4} placeholder="Type your question here..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"></textarea>
          </div>
          <button className="w-full bg-[#006a3d] text-white font-bold py-4 rounded-xl hover:bg-[#00522f] transition-all flex items-center justify-center gap-2 mt-2">
            <Send size={18} />
            Submit Query
          </button>
        </div>
      </div>
    </div>
  );
};

const AskQuerySection = ({ onAskClick }: { onAskClick: () => void }) => (
  <div className="max-w-5xl mx-auto py-16 px-6">
    <div className="relative flex flex-col md:flex-row items-center justify-center">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-60 hidden lg:block z-0">
        <img src={DECORATIVE_DOTS} alt="" className="w-24 h-24" />
      </div>
      <div className="relative z-20 md:-mr-12 mb-6 md:mb-0 w-48 md:w-64 shrink-0">
        <img src={GIRL_ILLUSTRATION} alt="Illustration" className="w-full h-auto drop-shadow-lg" />
      </div>
      <div className="relative z-10 bg-[#dcfce7] w-full md:pl-16 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center md:justify-between text-center md:text-left shadow-md border border-green-100">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#166534] mb-2">Didn’t find an answer?</h3>
          <p className="text-[#3f624a] text-lg font-medium">Don’t worry! Our dedicated team will help resolve your query.</p>
        </div>
        <button onClick={onAskClick} className="bg-white text-[#166534] border-2 border-[#166534] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#166534] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg whitespace-nowrap">
          ASK YOUR QUERY
        </button>
      </div>
    </div>
  </div>
);

// ==========================================
// 4. MAIN PAGE COMPONENT
// ==========================================
const SBBMFaq = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      id: 'general',
      label: 'General Questions',
      icon: ShieldCheck,
      items: [
        {
          question: "What is Swasth Bharat Bhavya Mission (SBBM)?",
          answer: "SBBM is a national healthcare initiative that works to make quality, affordable, and accessible healthcare available to people across India through a community-driven model."
        },
        {
          question: "Is SBBM a hospital or insurance company?",
          answer: "No. SBBM is not a hospital and not an insurance provider. It is a healthcare support and access network that helps members receive timely medical assistance."
        },
        {
          question: "Is SBBM a government organization?",
          answer: "No. SBBM is an independent healthcare initiative that works alongside communities, healthcare providers, and institutions."
        }
      ]
    },
    {
      id: 'membership',
      label: 'Membership & Fees',
      icon: CreditCard,
      items: [
        {
          question: "What is the membership fee?",
          answer: "The membership fee is ₹500 per family. This is currently offered as an affordable family enrollment fee to build a healthcare safety net."
        },
        {
          question: "What does the ₹500 membership cover?",
          answer: (
            <ul className="list-disc ml-5 space-y-1">
              <li>Emergency ambulance services & Hospital admission assistance</li>
              <li>Doctor and OPD access & Telemedicine</li>
              <li>Health camps & Preventive healthcare programs</li>
              <li>Community outreach support</li>
            </ul>
          )
        }
      ]
    },
    {
      id: 'services',
      label: 'Healthcare Services',
      icon: Stethoscope,
      items: [
        {
          question: "Do members get free ambulance services?",
          answer: "SBBM supports members with ambulance coordination and emergency assistance, helping them reach hospitals quickly during medical emergencies."
        },
        {
          question: "Can SBBM guarantee hospital admission?",
          answer: "SBBM assists members in facilitating hospital admissions through its network, but final admission depends on hospital policies and medical availability."
        }
      ]
    },
    {
      id: 'volunteers',
      label: 'Volunteers & Community',
      icon: Users,
      items: [
        {
          question: "How does SBBM reach people across India?",
          answer: "SBBM works through a vast network of Volunteers, NGOs, Religious institutions, Schools, ASHA workers, and digital platforms like WhatsApp."
        },
        {
          question: "Can I become a volunteer?",
          answer: "Yes. Anyone can become an SBBM volunteer and help spread health awareness and enroll families in their local communities."
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans text-slate-800 flex flex-col">
      
      {/* 1. NAVBAR */}


      {/* Modal Popup */}
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header Section */}
      <div className="relative bg-[#006a3d] pt-24 pb-10 px-6 overflow-hidden">
        <img src="/faqbg.png" alt="FAQ Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto pt-10">
          <h1 className="text-5xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-md">FAQ</h1>
          
          <p className="text-white text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-10 drop-shadow-md">
            Get answers to some of the most frequently asked questions about the Swasth Bharat Bhavya Mission.
          </p>
          
          {/* SEARCH BAR */}
          <div className="relative max-w-2xl group">
            <input 
              type="text"
              placeholder="Search for questions..."
              className="w-full py-5 pl-14 pr-6 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 shadow-2xl focus:ring-4 focus:ring-green-400/50 outline-none transition-all text-lg font-medium border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-green-600 transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-8 pb-12 px-6 grow w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              <div className="p-4 bg-slate-50 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Categories</span>
              </div>
              <nav className="flex flex-col">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
                      className={`flex items-center px-5 py-4 text-left transition-colors border-l-4 ${
                        activeTab === cat.id 
                        ? 'bg-green-50 border-green-600 text-green-800 font-semibold' 
                        : 'border-transparent text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mr-3 ${activeTab === cat.id ? 'text-green-600' : 'text-slate-400'}`} />
                      {cat.label}
                      <ChevronRight className={`ml-auto w-4 h-4 opacity-50 ${activeTab === cat.id ? 'block' : 'hidden md:block'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Questions List */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">{currentCategory.label}</h2>
              <div className="h-1 w-20 bg-green-600 mt-2 rounded-full"></div>
            </div>

            <div className="space-y-4">
              {currentCategory.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all hover:shadow-md group">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-medium text-lg pr-4 ${openIndex === idx ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                      {item.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-green-600' : ''}`} />
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="pt-4 border-t border-slate-100">{item.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AskQuerySection onAskClick={() => setIsModalOpen(true)} />
      

    </div>
  );
};

export default SBBMFaq;