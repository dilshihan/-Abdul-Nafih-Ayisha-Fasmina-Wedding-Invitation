"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [isMounted, setIsMounted] = useState(false);
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-06-14T12:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
      setTimeLeft(calculateTimeLeft());
    });
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <section className="py-24 bg-ivory h-[400px]" />;

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 bg-ivory flex flex-col items-center justify-center relative overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="z-10 w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-soft-black mb-4">Counting Down to the Big Day</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto opacity-50" />
        </div>
        
        <div className="glass-gold p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gold/20 backdrop-blur-xl relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-1" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-tr-full -z-1" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {timerItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-5xl md:text-7xl font-serif text-gold relative z-10 tabular-nums">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-soft-black/40 font-serif mt-2">
                  {item.label}
                </span>
                
                {/* Separator for desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute right-[-1px] top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gold/20" 
                       style={{ left: `${(idx + 1) * 25}%` }} 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-1" />
    </section>
  );
}
