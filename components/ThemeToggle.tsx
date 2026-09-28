"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-sage-100/50 dark:bg-slate-800/50 border border-sage-200/50 dark:border-slate-700/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full text-sage-800 dark:text-sage-200 bg-sage-100/70 dark:bg-slate-800/80 hover:bg-sage-200 dark:hover:bg-slate-700 transition-colors border border-sage-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 scale-100" />
      ) : (
        <Moon className="w-4 h-4 text-sage-700 transition-transform rotate-0 scale-100" />
      )}
    </button>
  );
}
