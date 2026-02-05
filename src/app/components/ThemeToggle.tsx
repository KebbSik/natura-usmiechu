"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="m-1 rounded-full bg-primary text-white px-4 py-2 transition-colors"
    >
      Color
    </button>
  );
}
