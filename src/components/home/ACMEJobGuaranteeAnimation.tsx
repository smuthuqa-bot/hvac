// src/components/ACMEJobGuaranteeAnimation.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ACMEJobGuaranteeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Full sequence: slow entrance -> center hold -> slow exit
    const timer = setTimeout(() => setShow(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute bottom-4 left-0 w-[210px] sm:w-[250px] md:w-[280px]"
            initial={{ x: "-120%" }}
            animate={{ x: ["-120%", "0%", "0%", "120%"] }}
            transition={{
              // Slow and smooth:
              // 0–4.5s  : enter from left
              // 4.5–7.5s: hold at center
              // 7.5–12s : leave to right
              duration: 12,
              times: [0, 0.375, 0.625, 1],
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/acme-mechanic.png"
              alt=""
              width={500}
              height={500}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
