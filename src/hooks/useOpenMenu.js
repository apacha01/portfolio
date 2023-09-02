import { useEffect, useState } from 'react';
import MISTERY_BLOCK_SVG from '../assets/svgs/mario-mistery-block.svg';
import EXCLAMATION_BLOCK_SVG from '../assets/svgs/mario-exclamation-block.svg';

const useOpenMenu = (initialValue = false) => {
	const [open, setOpen] = useState(initialValue);

	const toggleOpen = () => {
		setOpen(!open);
	};

	useEffect(() => {
		// dealy to let the coin out of the '?' block
		if (open) {
			setTimeout(() => document.getElementById('menu').classList.add('open'), 250);
			setTimeout(() => {
				document.getElementById('menu-icon').src = EXCLAMATION_BLOCK_SVG;
			},250);
		}
		else {
			document.getElementById('menu').classList.remove('open');
			setTimeout(() => {
				document.getElementById('menu-icon').src = MISTERY_BLOCK_SVG;
			},250);
		}
	}, [open]);

	return {open, toggleOpen};
};

export default useOpenMenu;