"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";

export default function VenueSection() {
  return (
    <section className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm mb-4 block">Find Us</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Venue</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border border-gold/10"
          >
            <Image
              src="/images/hero.png"
              alt="Kohinoor Auditorium"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-soft-black/20 group-hover:bg-soft-black/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-soft-black/80 to-transparent">
               <h3 className="text-white font-serif text-2xl md:text-3xl">Kohinoor Auditorium, Padikkal</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-soft-black mb-2">Location Address</h4>
                <p className="text-soft-black/60 font-sans leading-relaxed">
                  Kohinoor Auditorium, Padikkal, Malappuram, Kerala, India
                </p>
              </div>
            </div>

            <div className="p-8 glass-gold rounded-2xl space-y-6 border border-gold/20">
                <p className="font-sans text-soft-black/80 italic">
                  &quot;Looking forward to seeing you there. Follow the link below for precise navigation to the venue.&quot;
                </p>
               <a 
                 href="https://maps.app.goo.gl/z3KyVVWUsQW1UuBS7" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 w-full py-4 bg-soft-black text-ivory rounded-full font-serif tracking-widest hover:bg-gold transition-colors duration-500 shadow-xl"
               >
                 <Navigation size={18} />
                 OPEN IN GOOGLE MAPS
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
