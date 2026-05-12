"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stories = [
  {
    title: "First Meeting",
    date: "June 12, 2021",
    description: "In the quiet corner of an elegant cafe, our journey began with a simple conversation that felt like a lifetime.",
    image: "/images/story1.png",
  },
  {
    title: "The Proposal",
    date: "February 14, 2023",
    description: "Under the canopy of golden lights and soft whispers of the evening breeze, he asked, and she said yes.",
    image: "/images/story2.png",
  },
  {
    title: "The Engagement",
    date: "August 24, 2023",
    description: "A celebration of love and commitment, surrounded by the warmth of family and the promise of a beautiful future.",
    image: "/images/story3.png",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-soft-black mb-6 italic">Our Love Story</h2>
          <p className="max-w-2xl mx-auto text-soft-black/70 font-sans leading-relaxed mb-8">
            Two souls, one journey. We invite you to celebrate the union of our hearts as we begin our forever together.
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold hidden md:block"
          />

          <div className="space-y-32">
            {stories.map((story, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-gold/10 group">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-soft-black/20 group-hover:bg-soft-black/10 transition-colors duration-500" />
                  </div>
                </motion.div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full z-10 items-center justify-center">
                   <div className="w-8 h-8 border border-gold/30 rounded-full animate-ping absolute" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-1 text-center md:text-left"
                >
                  <span className="text-gold font-serif tracking-[0.2em] uppercase text-sm mb-2 block">{story.date}</span>
                  <h3 className="text-3xl font-serif text-soft-black mb-4">{story.title}</h3>
                  <p className="text-soft-black/70 font-sans leading-relaxed max-w-md mx-auto md:mx-0">
                    {story.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
