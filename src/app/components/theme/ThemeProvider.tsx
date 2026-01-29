'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/** Available theme values */
type Theme = 'light' | 'dark';

/**
 * Shape of the theme context value.
 */
interface ThemeContextType {
  /** Current theme */
  theme: Theme;
  /** Function to change the current theme */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook to access the theme context.
 *
 * @returns Theme context value with current theme and setters.
 * @throws Error if used outside of ThemeProvider.
 *
 * @example
 * ```tsx
 * const { theme, toggleTheme } = useTheme();
 * ```
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  /** Child components */
  children: ReactNode;
  /** Default theme (defaults to 'light') */
  defaultTheme?: Theme;
}

/**
 * Theme provider component.
 *
 * Provides theme context to the application. Supports light and dark modes.
 * Theme preference is persisted in localStorage.
 *
 * @example
 * ```tsx
 * <ThemeProvider defaultTheme="light">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export default function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    const savedTheme = localStorage.getItem('ne-theme') as Theme | null;
    return savedTheme && (savedTheme === 'light' || savedTheme === 'dark')
      ? savedTheme
      : defaultTheme;
  });
  const [mounted, setMounted] = useState(false);

  // Mark as mounted after hydration (valid pattern for SSR)
  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('ne-theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
