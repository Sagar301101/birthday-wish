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
      {/* Background fireworks/pataka */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`firework-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="w-3 h-3 bg-gold rounded-full absolute"
                animate={{
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() * 2 }}
              />
              <motion.div
                className="w-3 h-3 bg-primary rounded-full absolute"
                animate={{
                  x: [0, Math.random() * -40 + 20],
                  y: [0, Math.random() * -40 + 20],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() * 2 }}
              />
              <motion.div
                className="w-3 h-3 bg-celebration rounded-full absolute"
                animate={{
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * -40 + 20],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() * 2 }}
              />
            </div>
          </motion.div>
        ))}
        
        {/* Additional sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
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
            className="bg-card/40 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-glow)] relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-2xl" />

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-gold to-celebration bg-clip-text text-transparent mb-4"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              A Virtual Celebration 🎂
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I can't order a cake for now... But cut this virtual one for me please....
            </motion.p>
            
            {/* Cake with multiple candles */}
            <motion.div
              className="mb-12 relative inline-block mt-14 flex flex-col"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-9xl mb-4">🎂</div>
              
              {/* Multiple animated candle flames */}
              <motion.div
                className="absolute -top-10 left-[30%] md:left-[40%] transform -translate-x-1/2 flex gap-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    🕯️
                  </motion.div>
                ))}
              </motion.div>

              {/* Candle glow effect */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gold/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <Button
              onClick={handleCutCake}
              size="lg"
              className="bg-gradient-to-r from-primary via-gold to-celebration text-primary-foreground font-bold text-xl px-12 py-6 rounded-full hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              <Cake className="mr-2 w-6 h-6" />
              Cut the Cake
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
