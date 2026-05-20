import React, { useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

interface SplitTextAnimationProps {
  text: string;
  className?: string;
}

export default function SplitTextAnimation({ text, className }: SplitTextAnimationProps) {
  const words = text.split(" ");
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      while (isMounted) {
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, 4000)); // Hold text for 4 seconds
        if (!isMounted) break;
        await controls.start("hidden");
        await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause before restarting
      }
    };

    loopAnimation();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  const containerVariants = {
    hidden: { 
      opacity: 1,
      transition: { staggerChildren: 0.02, staggerDirection: -1 }
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { type: "tween", duration: 0.2 } 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.p
      className={`flex flex-wrap justify-center ${className || ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em] whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} className="inline-block" variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  );
}