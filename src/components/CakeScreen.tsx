import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";

interface CakeScreenProps {
  onNext: () => void;
}

export const CakeScreen = ({ onNext }: CakeScreenProps) => {
  const [isCut, setIsCut] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleCutCake = () => {
    setIsCut(true);
    setShowWish(true);
    
    // Play birthday song
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Auto proceed after song
    setTimeout(() => {
      onNext();
    }, 51000); // 30 seconds for the song
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src="/kinna-chir.m4a" />

      <div className="z-10 max-w-4xl px-6 w-full text-center">
        {!isCut ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cake */}
            <motion.div
              className="mb-12 relative inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-9xl mb-4">🎂</div>
              
              {/* Candle flames */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                🕯️
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-foreground"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Cake Cutting! 🎂
            </motion.h2>

            <Button
              onClick={handleCutCake}
              size="lg"
              className="bg-gradient-to-r from-primary via-gold to-celebration text-primary-foreground font-bold text-xl px-12 py-6 rounded-full hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              <Cake className="mr-2 w-6 h-6" />
              Please Cut the Cake
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Cake pieces with celebration */}
            <motion.div
              className="mb-8 flex justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="text-7xl"
                animate={{ x: [-100, 0], rotate: [-45, 0] }}
                transition={{ duration: 1 }}
              >
                🍰
              </motion.div>
              <motion.div
                className="text-7xl"
                animate={{ x: [100, 0], rotate: [45, 0] }}
                transition={{ duration: 1 }}
              >
                🍰
              </motion.div>
            </motion.div>

            {showWish && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-card/40 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-12 shadow-[var(--shadow-glow)]"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-gold to-celebration bg-clip-text text-transparent mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Happy Birthday
                  <br />
                  My Princess! 👑
                </motion.h1>
                
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  🎉
                </motion.div>

                <motion.p
                  className="text-xl text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  May your day be filled with endless joy and love ♡
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
