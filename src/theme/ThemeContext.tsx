import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Theme = 'light' | 'dark';
export type PhotoShape = 'square' | 'circle';

export const ACCENT_COLORS = ['#B5502E', '#3D5A6C', '#5B6B4C', '#141414'] as const;
export type AccentColor = (typeof ACCENT_COLORS)[number];

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  photoShape: PhotoShape;
  setPhotoShape: (shape: PhotoShape) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'theme';

function detectTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultAccentColor?: AccentColor;
  defaultPhotoShape?: PhotoShape;
}

export function ThemeProvider({
  children,
  defaultAccentColor = ACCENT_COLORS[0],
  defaultPhotoShape = 'square',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(detectTheme);
  const [accentColor, setAccentColor] = useState<AccentColor>(defaultAccentColor);
  const [photoShape, setPhotoShape] = useState<PhotoShape>(defaultPhotoShape);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
  }, [accentColor]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, toggleTheme, accentColor, setAccentColor, photoShape, setPhotoShape }),
    [theme, accentColor, photoShape],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
