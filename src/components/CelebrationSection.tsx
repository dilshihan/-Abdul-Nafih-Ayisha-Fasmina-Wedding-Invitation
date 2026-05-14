"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function CelebrationSection() {
  return (
    <section className="py-16 md:py-32 bg-soft-black text-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm mb-4 block">Save The Date</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Celebrations</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-gold p-8 md:p-16 rounded-[40px] max-w-3xl w-full text-center space-y-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />

            <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif text-gold tracking-[0.2em] md:tracking-widest animate-pulse-slow">NIKKAH</h3>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Calendar className="text-gold" size={24} />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-ivory/40">Date</p>
                  <p className="font-serif text-lg">Sunday, June 14, 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-gold" size={24} />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-ivory/40">Time</p>
                  <p className="font-serif text-lg">11:00 AM – 02:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-gold" size={24} />
              <p className="font-serif text-xl md:text-2xl tracking-wide">Kohinoor Auditorium, Padikkal</p>
            </div>

            <div className="w-full h-[1px] bg-gold/20" />

            <p className="font-sans text-ivory/70 leading-relaxed max-w-xl mx-auto italic">
              &quot;Join us for the sacred Nikkah ceremony as we exchange our vows before Allah and our beloved families.&quot;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-gold/10 -m-12 opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-gold/10 -m-12 opacity-20" />
    </section>
  );
}
