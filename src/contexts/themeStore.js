import {create} from 'zustand';
import { THEME_OPTIONS } from '../constants/theme';

const useTheme = create((set, get) => ({
	theme: THEME_OPTIONS.LIGHT,
	toggleTheme: () => get().theme === THEME_OPTIONS.LIGHT
		? set({theme: THEME_OPTIONS.DARK})
		: set({theme: THEME_OPTIONS.LIGHT})
}));

export default useTheme;