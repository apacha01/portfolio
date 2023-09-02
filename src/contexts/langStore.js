import {create} from 'zustand';
import {LANGUAGE_OPTIONS} from '../constants/lang.js';
import text from '../assets/web-text.json';

const useLang = create((set, get) => ({
	lang: LANGUAGE_OPTIONS.ENGLISH,
	toggleLang: 
	() => get().lang === LANGUAGE_OPTIONS.ENGLISH 
		? set(LANGUAGE_OPTIONS.SPANISH) 
		: set(LANGUAGE_OPTIONS.ENGLISH)
	,
	getLangText: () => text[get().lang],
}));

export default useLang;