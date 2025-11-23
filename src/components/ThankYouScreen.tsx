import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const ThankYouScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [1000, -100],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            ♡
          </motion.div>
        ))}
      </div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-3xl mx-6"
      >
        <div className="bg-card/60 backdrop-blur-lg border-2 border-primary/40 rounded-3xl p-12 shadow-[var(--shadow-glow)]">
          {/* Header with icon */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-primary/20 p-6 rounded-full">
              <Heart className="w-16 h-16 text-primary fill-primary" />
            </div>
          </motion.div>

          {/* Thank you message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-gold to-peach-dark bg-clip-text text-transparent"
          >
            Thank You! ✨
          </motion.h1>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 text-center"
          >
            <p className="text-2xl md:text-3xl text-foreground font-semibold leading-relaxed">
              Thank you so much for coming into my life...
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Teaching me everything
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-border/50 mt-8"
            >
              <p className="text-2xl md:text-3xl text-foreground font-bold leading-relaxed">
                I am praying to stay with you
                <br />
                for my whole life
              </p>
              <motion.p
                className="text-4xl mt-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👑 My Princess 👑
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center gap-4 mt-12 text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>💝</span>
            <span>✨</span>
            <span>💝</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
