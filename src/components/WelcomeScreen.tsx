import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onProceed: () => void;
}

export const WelcomeScreen = ({ onProceed }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--gold))' : 'hsl(var(--peach-dark))',
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              background: i === 0 ? 'hsl(var(--primary))' : i === 1 ? 'hsl(var(--gold))' : 'hsl(var(--peach-dark))',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Birthday Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 px-6 max-w-3xl"
      >
        {/* Card Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-2"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--peach-light)), hsl(var(--primary)))',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px hsl(var(--primary) / 0.3)',
            }}
          >
            To My Princess 👑
          </motion.h1>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            ✨ 🎂 ✨
          </motion.div>
        </motion.div>

        {/* Main Card Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-10 md:p-12 mb-6 shadow-[var(--shadow-soft)] relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-gold rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold rounded-br-3xl"></div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-8"
          >
            Maybe I am not able to give you an expensive gift now, or I can't celebrate your birthday in front of you, but I have planned something special for you.
            <br />
            <span className="text-primary font-bold text-2xl md:text-3xl block mt-6">
              Please watch this... 💝
            </span>
          </motion.p>

          {/* Earphone Warning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-primary/20 via-gold/20 to-primary/20 backdrop-blur-sm border border-primary/40 rounded-2xl p-6 mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Volume2 className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">Please Use Earphones!</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              This experience is designed with special audio for you ♡
            </p>
          </motion.div>

          {/* Proceed Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              onClick={onProceed}
              size="lg"
              className="bg-gradient-to-r from-primary via-gold to-peach-dark text-primary-foreground font-bold text-lg md:text-xl px-10 py-6 rounded-full hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Begin the Celebration 🎉
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};