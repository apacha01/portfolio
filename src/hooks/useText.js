import useLang from '../contexts/langStore';
import pageText from '../assets/web-text.json';

const useText = () => {
	const lang = useLang(state => state.lang);
	return pageText[lang];
};

export default useText;