import { THEMES } from '../constants/theme.js';

type Theme = typeof THEMES[keyof typeof THEMES];

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.UNDERGROUND : THEMES.OVERWORLD;

export const getTheme = () => {
	const t = localStorage.getItem('theme') || defaultTheme;

	if (Object.values(THEMES).includes(t))
		return t;
	else
		return defaultTheme;
}

export const setTheme = (theme: Theme) => {
	if (Object.values(THEMES).includes(theme))
		localStorage.setItem('theme', theme);
	else
		localStorage.setItem('theme', defaultTheme);
}