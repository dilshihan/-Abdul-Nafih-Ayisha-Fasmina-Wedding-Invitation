"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            // Browser blocked autoplay, will wait for user interaction
          });
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-10 right-6 md:bottom-12 md:right-10 z-[9999] w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-xl border border-gold/30 rounded-full text-gold shadow-glow-premium group hover:bg-gold/20 transition-all duration-500"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <Music2 className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
            >
              <Music className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Visualizer bars when playing */}
        {isPlaying && (
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5 md:gap-1 h-2 md:h-3 items-end">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [3, 8, 3] }}
                transition={{
                  duration: 0.5 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-0.5 bg-gold"
              />
            ))}
          </div>
        )}
      </motion.button>
    </>
  );
}
