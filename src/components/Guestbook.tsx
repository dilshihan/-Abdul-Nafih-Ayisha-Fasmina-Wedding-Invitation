"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";

export default function Guestbook() {
  return (
    <section className="py-16 md:py-32 bg-ivory">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm mb-4 block">Leave Your Blessings</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Guestbook</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-gold p-8 md:p-12 rounded-[40px] shadow-2xl relative border border-gold/10"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <MessageSquare size={120} className="text-gold" />
          </div>

          <form className="space-y-8 relative z-10">
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.3em] text-gold font-serif block">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-white/50 border-b border-gold/20 py-4 px-2 focus:outline-none focus:border-gold transition-colors font-sans text-lg italic"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.3em] text-gold font-serif block">Your Wishes</label>
              <textarea 
                rows={4}
                placeholder="Write your beautiful message here..."
                className="w-full bg-white/50 border-b border-gold/20 py-4 px-2 focus:outline-none focus:border-gold transition-colors font-sans text-lg italic resize-none"
              />
            </div>

            <button 
              type="button"
              className="w-full py-5 bg-gold text-white font-serif tracking-[0.2em] rounded-full hover:bg-gold/90 transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              SEND BLESSINGS
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="mt-16 text-center text-soft-black/40 font-serif italic">
           &quot;Your love and prayers mean the world to us.&quot;
        </div>
      </div>
    </section>
  );
}
