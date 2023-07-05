"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-8 bg-secondary" style={{  scaleX: scrollYProgress }} />
  )
}
