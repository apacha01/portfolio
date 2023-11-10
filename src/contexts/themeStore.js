import { create } from 'zustand';
import { THEME_OPTIONS } from '../constants/theme';

const initialTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT;

const useTheme = create((set, get) => ({
	theme: initialTheme,
	toggleTheme: () => get().theme === THEME_OPTIONS.LIGHT
		? set({ theme: THEME_OPTIONS.DARK })
		: set({ theme: THEME_OPTIONS.LIGHT })
}));

export default useTheme;