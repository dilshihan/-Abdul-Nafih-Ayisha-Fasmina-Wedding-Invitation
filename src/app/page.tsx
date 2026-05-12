"use client";

import { useState } from "react";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import Countdown from "@/components/Countdown";
import CelebrationSection from "@/components/CelebrationSection";
import VenueSection from "@/components/VenueSection";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="relative bg-ivory min-h-screen">
      <Envelope onOpen={() => setIsOpened(true)} />

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <MusicPlayer autoPlay={isOpened} />
            <Hero />
            <CoupleSection />
            <Countdown />
            <CelebrationSection />
            <VenueSection />
            <Guestbook />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
