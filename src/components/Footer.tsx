"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-24 bg-soft-black text-ivory overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <Heart className="text-gold fill-gold/20 w-8 h-8 animate-pulse" />
            <div className="absolute inset-0 border border-gold/10 rounded-full scale-125 animate-ping opacity-20" />
          </div>

          <span className="font-serif text-2xl text-gold italic block mb-6">
            &quot;And We created you in pairs&quot;
          </span>
          <p className="font-sans text-ivory/40 text-sm tracking-widest uppercase">Quran 78:8</p>
        </motion.div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tighter">Abdul Nafih & Ayisha Fasmina</h2>
          <p className="font-serif text-gold/60 tracking-[0.2em] uppercase text-sm">June 14, 2026</p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-ivory/20 text-xs tracking-widest uppercase space-y-2"
          >
            <p>Made with Love & Faith • 2026</p>
            <a
              href="https://www.instagram.com/diiilshhann._zx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center justify-center gap-2 group"
            >
              <InstagramIcon size={14} className="group-hover:scale-110 transition-transform" />
              <span>© All rights reserved</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
        <div className="absolute bottom-0 left-0 p-12 opacity-5 hidden md:block">
          <div className="w-48 h-48 border-l border-b border-gold" />
        </div>
        <div className="absolute bottom-0 right-0 p-12 opacity-5 hidden md:block">
          <div className="w-48 h-48 border-r border-b border-gold" />
        </div>
    </footer>
  );
}
