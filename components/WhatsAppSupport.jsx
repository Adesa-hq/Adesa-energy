"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const STORAGE_KEY = "adesa-whatsapp-support-position-v2";
const SUPPORT_URL =
  "https://wa.me/2348168823730?text=Hello%20Adesa%20Energy%2C%20I%20would%20like%20help%20from%20customer%20support.";

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

export default function WhatsAppSupport() {
  const controlRef = useRef(null);
  const draggedRef = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateConstraints = () => {
      const element = controlRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const next = {
        left: 0,
        right: Math.max(0, window.innerWidth - rect.width - 24),
        top: Math.min(0, -(window.innerHeight - rect.height - 132)),
        bottom: 0,
      };
      setConstraints(next);

      if (!ready) {
        try {
          const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
          if (Number.isFinite(saved?.x)) x.set(clamp(saved.x, next.left, next.right));
          if (Number.isFinite(saved?.y)) y.set(clamp(saved.y, next.top, next.bottom));
        } catch {
          localStorage.removeItem(STORAGE_KEY);
        }
        setReady(true);
      } else {
        x.set(clamp(x.get(), next.left, next.right));
        y.set(clamp(y.get(), next.top, next.bottom));
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [ready, x, y]);

  const persistPosition = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ x: x.get(), y: y.get() }));
  };

  return (
    <motion.a
      ref={controlRef}
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Adesa Energy customer support on WhatsApp"
      className="whatsapp-support group fixed z-50 inline-flex min-h-14 touch-none items-center gap-0 rounded-full border border-white/25 bg-[#14883e] p-2 text-white shadow-2xl shadow-emerald-950/30 transition-colors hover:bg-[#0f7434] sm:gap-3 sm:pr-4"
      style={{ x, y, opacity: ready ? 1 : 0 }}
      drag
      dragConstraints={constraints}
      dragElastic={reduceMotion ? 0 : 0.04}
      dragMomentum={false}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      onPointerDown={() => {
        draggedRef.current = false;
      }}
      onDragStart={() => {
        draggedRef.current = true;
      }}
      onDragEnd={persistPosition}
      onClick={(event) => {
        if (draggedRef.current) {
          event.preventDefault();
          draggedRef.current = false;
        }
      }}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#14883e]">
        <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-100">Customer support</span>
        <span className="block text-sm font-bold">Chat on WhatsApp</span>
      </span>
    </motion.a>
  );
}
