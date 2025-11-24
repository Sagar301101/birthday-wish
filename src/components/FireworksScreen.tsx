import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface FireworksScreenProps {
  onNext: () => void;
}

const messages = [
  "Many many happy returns of the day, my princess ❣️🌏🧿",
  "You are the most important person in my life. You teach me how to live life.",
  "You have made me the person that I want to be",
];

export const FireworksScreen = ({ onNext }: FireworksScreenProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (currentMessage >= messages.length) {
      setShowButton(true);
      return;
    }

    const message = messages[currentMessage];
    let charIndex = 0;
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        setDisplayedText(message.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentMessage(currentMessage + 1);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated fireworks */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 25}, ${Math.random() * 40 + 60}%, ${Math.random() * 30 + 50}%)`,
            }}
            animate={{
              y: [1000, -100],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Messages */}
      <div className="z-10 max-w-4xl px-6 w-full">
        <AnimatePresence mode="wait">
          {currentMessage < messages.length && (
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-card/50 via-card/40 to-card/30 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-8 md:p-14 shadow-[var(--shadow-glow)] relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    "0 0 40px hsl(25 95% 80% / 0.3)",
                    "0 0 60px hsl(45 100% 75% / 0.4)",
                    "0 0 40px hsl(25 95% 80% / 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold/50 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold/50 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/50 rounded-br-3xl" />

                {/* Heading */}
                <motion.h2 
                  className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-gold to-celebration bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Words From My Heart 💝
                </motion.h2>

                {/* Typewriter text */}
                <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
                  <p className="text-2xl md:text-4xl font-semibold text-foreground leading-relaxed">
                    {displayedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 align-middle"
                    />
                  </p>
                </div>

                {/* Sparkle emoji */}
                <motion.div
                  className="mt-6 text-5xl md:text-6xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-primary via-gold to-celebration text-primary-foreground font-bold text-xl px-12 py-6 rounded-full hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
             Please Continue to Celebration 🎂
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
