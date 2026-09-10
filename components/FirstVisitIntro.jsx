"use client";

import { useEffect, useState } from "react";
import BrandMarkLoader from "./BrandMarkLoader";

const INTRO_STORAGE_KEY = "adesa-energy-intro-seen";

export default function FirstVisitIntro() {
  const [hidden, setHidden] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
      const hideImmediately = window.setTimeout(() => setHidden(true), 0);
      return () => window.clearTimeout(hideImmediately);
    }

    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");

    const leaveTimer = window.setTimeout(() => setLeaving(true), 850);
    const hideTimer = window.setTimeout(() => {
      document.documentElement.classList.add("adesa-intro-seen");
      setHidden(true);
    }, 1100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="brand-intro"
      data-leaving={leaving || undefined}
      aria-hidden="true"
    >
      <BrandMarkLoader label="Introducing Adesa Energy" />
    </div>
  );
}
