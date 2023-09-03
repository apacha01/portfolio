import { useEffect, useRef, useState } from 'react';

const useTypewriter = (text = '', speed = 100, initialText = '') => {
	const [typewriting, setTypewriting] = useState(initialText);
	const isDone = useRef(false);

	useEffect(() => {
		if (isDone.current) {
			setTypewriting(text);
		}
		else {
			setTimeout(() => {
				setTypewriting(text?.substring(0, typewriting.length + 1));
				if (typewriting.length === text.length)
					isDone.current = true;
			}, speed);
		}
		
	}, [typewriting, text, speed]);

	return {typewriting};
};

export default useTypewriter;