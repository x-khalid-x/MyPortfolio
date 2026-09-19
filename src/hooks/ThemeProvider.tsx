import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  ThemeContext,
  STORAGE_KEY,
  applyTheme,
  getSystemTheme,
  readStoredTheme,
  subscribeToSystemTheme,
  type Theme,
  type ResolvedTheme,
} from "@/hooks/theme-context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme());
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    (): ResolvedTheme => "light"
  );

  const resolvedTheme: ResolvedTheme =
    theme === "system" ? systemTheme : theme;

  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
