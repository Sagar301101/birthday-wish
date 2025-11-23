import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface FireworksScreenProps {
  onNext: () => void;
}

const messages = [
  "Many many happy returns of the day, my princess",
  "You are the most important person in my life. You teach me how to live life.",
  "You have made me the person that I want to be",
];

export const FireworksScreen = ({ onNext }: FireworksScreenProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentMessage < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessage(currentMessage + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
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
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-card/40 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-12 shadow-[var(--shadow-glow)]">
                <motion.p
                  className="text-3xl md:text-5xl font-bold text-foreground leading-relaxed"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {messages[currentMessage]}
                </motion.p>
                <motion.div
                  className="mt-6 text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
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
              Continue to Celebration 🎂
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
