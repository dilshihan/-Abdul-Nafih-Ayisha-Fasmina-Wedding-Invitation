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

  const [particles, setParticles] = useState<{id: number, width: string, height: string, left: string, top: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
      setParticles([...Array(20)].map((_, i) => ({
        id: i,
        width: Math.random() * 6 + 2 + "px",
        height: Math.random() * 6 + 2 + "px",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        delay: Math.random() * 5 + "s",
        duration: Math.random() * 10 + 10 + "s",
      })));
    });
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
        {isMounted && particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-gold/30 rounded-full blur-[2px] animate-float"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center text-white px-6 flex flex-col items-center w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <span className="font-serif text-lg md:text-2xl text-gold tracking-widest mb-2 block">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </span>
          <p className="font-serif text-xs md:text-base text-ivory/80 italic mb-4">
            With Allah&apos;s Blessings
          </p>
          <div className="w-24 md:w-32 h-[1px] bg-gold/30 mx-auto mb-6" />
          <p className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase opacity-80">
            The Wedding of
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-5xl md:text-8xl lg:text-9xl mb-6 md:mb-8 tracking-tighter leading-tight"
        >
          <span className="block">Abdul Nafih</span>
          <span className="text-gold italic font-accent text-2xl md:text-6xl block my-2 md:my-4">&</span>
          <span className="block">Ayisha Fasmina</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 md:w-16 h-[1px] bg-gold/50 mb-4 md:mb-6" />
          <p className="font-serif text-base md:text-xl tracking-[0.2em] uppercase">
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
