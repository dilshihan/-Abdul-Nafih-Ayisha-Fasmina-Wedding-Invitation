"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";

export default function VenueSection() {
  return (
    <section className="py-12 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-24"
        >
          <span className="text-gold font-serif tracking-[0.3em] uppercase text-[10px] mb-2 block">Find Us</span>
          <h2 className="text-3xl md:text-6xl font-serif mb-4">Venue</h2>
          <div className="w-16 md:w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-[16/10] md:aspect-video rounded-3xl overflow-hidden shadow-2xl group border border-gold/10"
          >
            <Image
              src="/images/hero.png"
              alt="Kohinoor Auditorium"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-soft-black/20 group-hover:bg-soft-black/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-soft-black/90 to-transparent">
               <h3 className="text-white font-serif text-lg md:text-3xl leading-tight">Kohinoor Auditorium, Padikkal</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-gold/5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-soft-black mb-1">Location Address</h4>
                <p className="text-soft-black/60 font-sans text-sm leading-relaxed">
                  Kohinoor Auditorium, Padikkal, Malappuram, Kerala, India
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 glass-gold rounded-3xl space-y-6 border border-gold/20 shadow-xl">
                <p className="font-sans text-soft-black/80 italic text-sm md:text-base leading-relaxed">
                  &quot;Looking forward to seeing you there. Follow the link below for precise navigation to the venue.&quot;
                </p>
               <a 
                 href="https://maps.app.goo.gl/z3KyVVWUsQW1UuBS7" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 w-full py-4 bg-soft-black text-ivory rounded-full font-serif tracking-[0.2em] hover:bg-gold transition-colors duration-500 shadow-xl text-sm"
               >
                 <Navigation size={16} />
                 OPEN IN GOOGLE MAPS
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
