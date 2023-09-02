import {create} from 'zustand';
import {LANGUAGE_OPTIONS} from '../constants/lang.js';

const useLang = create((set, get) => ({
	lang: LANGUAGE_OPTIONS.ENGLISH,
	toggleLang: () => get().lang === LANGUAGE_OPTIONS.ENGLISH 
		? set({lang: LANGUAGE_OPTIONS.SPANISH}) 
		: set({lang: LANGUAGE_OPTIONS.ENGLISH})
}));

export default useLang;