"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Luxury Wedding Background"
          fill
          className="object-cover scale-110 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-soft-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-black/20 to-ivory" />
      </motion.div>

      {/* Floating Particles (Client Side Only) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {isMounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gold/30 rounded-full blur-[2px] animate-float"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center text-white px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-serif text-xl md:text-2xl text-gold tracking-normal mb-2 block">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </span>
          <p className="font-serif text-sm md:text-base text-ivory/80 italic mb-4">
            With Allah's Blessings
          </p>
          <div className="w-32 h-[1px] bg-gold/30 mx-auto mb-6" />
          <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
            The Wedding of
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-4xl md:text-8xl lg:text-9xl mb-8 tracking-tighter"
        >
          <span className="block">Abdul Nafih</span>
          <span className="text-gold italic font-accent text-3xl md:text-6xl block my-4">&</span>
          <span className="block">Ayisha Fasmina</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-gold/50 mb-6" />
          <p className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase">
            June 14, 2026
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center z-30 gap-6">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gold/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
