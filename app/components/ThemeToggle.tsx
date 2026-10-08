"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    const followSystem = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("neatch-theme"); } catch { /* Storage may be unavailable. */ }
      if (saved !== "dark" && saved !== "light") document.documentElement.classList.toggle("dark", media.matches);
      sync();
    };
    const onStorage = () => followSystem();
    sync();
    media.addEventListener("change", followSystem);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try { localStorage.setItem("neatch-theme", next ? "dark" : "light"); } catch { /* The toggle still works without persistence. */ }
  }

  return <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"} title={dark ? "Mode clair" : "Mode sombre"}>{dark ? <Sun /> : <Moon />}</Button>;
}
