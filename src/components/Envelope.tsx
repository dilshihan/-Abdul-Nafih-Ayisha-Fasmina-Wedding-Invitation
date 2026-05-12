"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Confetti delay to match opening
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F9F9F7", "#F5F5DC", "#004036"],
      });
    }, 500);

    setTimeout(() => {
      setIsRemoved(true);
      onOpen();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {!isRemoved && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-soft-black/90 backdrop-blur-xl"
        >
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[580px] perspective-[1000px] cursor-pointer group" onClick={handleOpen}>
            
            {/* Envelope Back */}
            <div className="absolute inset-0 bg-beige rounded-xl shadow-2xl overflow-hidden border border-gold/10">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(212,175,55,0.05)_100%)]" />
            </div>

            {/* Invitation Card (Slides Up) */}
            <motion.div
              initial={{ y: 0 }}
              animate={isOpen ? { y: -300, scale: 1.05, rotateZ: -2 } : { y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-4 bg-ivory rounded-lg shadow-lg z-10 border border-gold/20 p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="absolute inset-2 border border-gold/10" />
              <div className="space-y-4 md:space-y-6 relative z-10">
                <span className="font-serif text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs">Wedding Invitation</span>
                <h2 className="font-serif text-2xl md:text-5xl text-soft-black leading-tight">Abdul Nafih <br className="hidden md:block"/> <span className="text-gold italic font-accent">&</span> <br className="hidden md:block"/> Ayisha Fasmina</h2>
                <div className="w-12 h-[1px] bg-gold mx-auto" />
                <p className="font-serif text-soft-black/60 italic text-xs md:text-sm">Save The Date</p>
                <p className="font-serif text-soft-black tracking-[0.2em] text-xs md:text-sm uppercase">14.06.2026</p>
              </div>
            </motion.div>

            {/* Envelope Flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={isOpen ? { rotateX: -160 } : { rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute top-0 left-0 w-full h-1/2 bg-beige border-b border-gold/30 rounded-t-xl z-20 shadow-xl flex items-center justify-center preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center bg-ivory/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <Heart className="text-gold w-8 h-8 fill-gold/20" />
              </div>
            </motion.div>

            {/* Envelope Front (Triangle side flaps style) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-beige/90 rounded-b-xl border-t border-gold/10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]" 
                   style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)" }} />
            </div>

            {!isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-16 left-0 w-full text-center"
              >
                <p className="font-serif text-gold tracking-[0.5em] uppercase text-xs animate-pulse">Click to open</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
