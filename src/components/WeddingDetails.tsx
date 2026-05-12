"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Shirt } from "lucide-react";

export default function WeddingDetails() {
  const details = [
    {
      icon: <Calendar className="text-gold" />,
      title: "The Date",
      content: "Sunday, June 14, 2026",
    },
    {
      icon: <Clock className="text-gold" />,
      title: "The Time",
      content: "12:00 PM onwards",
    },
    {
      icon: <MapPin className="text-gold" />,
      title: "The Venue",
      content: "Kohinoor Auditorium, Padikkal, Malappuram",
    },
    {
      icon: <Shirt className="text-gold" />,
      title: "Dress Code",
      content: "Black Tie Optional / Traditional Elegant",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm">Event Details</span>
              <h2 className="text-3xl md:text-5xl font-serif text-soft-black leading-tight">Where & When</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {details.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-lg text-soft-black">{item.title}</h4>
                  <p className="text-soft-black/60 font-sans text-sm leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-soft-black text-ivory font-serif tracking-widest hover:bg-gold transition-colors duration-500 rounded-full text-sm md:text-base">
              VIEW ON GOOGLE MAPS
            </button>
          </motion.div>

          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-gold p-8 md:p-12 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 font-serif text-4xl md:text-6xl">RSVP</div>
            <h3 className="text-2xl md:text-3xl font-serif text-soft-black mb-8 text-center">Will you join us?</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-soft-black/60 font-serif">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/50 border-b border-gold/30 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-soft-black/60 font-serif">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/50 border-b border-gold/30 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-soft-black/60 font-serif">Attendance</label>
                <select className="w-full bg-white/50 border-b border-gold/30 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-sans appearance-none">
                  <option>Joyfully Accept</option>
                  <option>Regretfully Decline</option>
                </select>
              </div>

              <button className="w-full py-4 bg-gold text-white font-serif tracking-widest hover:bg-gold/90 transition-all rounded-full shadow-lg shadow-gold/20 mt-8">
                SEND RESPONSE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
