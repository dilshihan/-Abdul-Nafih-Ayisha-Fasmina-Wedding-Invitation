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
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    
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
    <section className="py-24 bg-ivory flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-soft-black mb-12">Counting Down to the Big Day</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-8">
          {timerItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-gold w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-2xl shadow-xl"
            >
              <span className="text-4xl md:text-5xl font-serif text-gold mb-2">{item.value.toString().padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-soft-black/60 font-serif">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-1" />
    </section>
  );
}
