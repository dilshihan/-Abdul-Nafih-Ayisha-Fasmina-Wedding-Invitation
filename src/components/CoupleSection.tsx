"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  const couple = [
    {
      role: "The Groom",
      name: "Abdul Nafih VK",
      parents: "Son of Mr. Aboobacker Vkc & Mrs. Naseera Pc",
      address: "Vallikadan House, Azad Nagar airport road",
      image: "/images/groom.jpeg",
    },
    {
      role: "The Bride",
      name: "Ayisha Fasmina",
      parents: "Daughter of Mr. Kunhi Muhammad & Mrs. Haseena",
      address: "Kattakath House, Velimukku, Alungal",
      image: "/images/bride.jpeg",
    },
  ];

  return (
    <section className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {couple.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 border-2 border-gold rounded-full scale-105 group-hover:scale-110 transition-transform duration-700 animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm block">
                  {person.role}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-soft-black leading-tight">
                  {person.name}
                </h3>
                <div className="w-12 h-[1px] bg-gold mx-auto" />
                <p className="font-serif text-gold/80 italic text-lg md:text-xl">
                  {person.parents}
                </p>
                <p className="font-sans text-soft-black/60 text-sm max-w-xs mx-auto leading-relaxed">
                  {person.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
