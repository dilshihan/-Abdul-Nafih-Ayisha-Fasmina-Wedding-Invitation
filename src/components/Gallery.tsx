"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/hero.png", alt: "Wedding Venue" },
  { src: "/images/story1.png", alt: "First Meeting" },
  { src: "/images/story2.png", alt: "Proposal" },
  { src: "/images/story3.png", alt: "Engagement" },
  { src: "/images/gallery1.png", alt: "Wedding Rings" },
  { src: "/images/gallery2.png", alt: "Invitation Card" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-32 bg-soft-black text-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold font-serif tracking-[0.3em] uppercase text-sm mb-4 block">Capturing Moments</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Gallery</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-white tracking-widest border-b border-white pb-1">VIEW</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[200] bg-soft-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-auto md:h-[80vh]"
          >
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
