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
		setTimeout(() => document.getElementById('menu').classList.toggle('open'), 250);
		setTimeout(() => {
			let icon =  document.getElementById('menu-icon');
			icon.src = open ? EXCLAMATION_BLOCK_SVG : MISTERY_BLOCK_SVG;
		},250);
	}, [open]);

	return {open, toggleOpen};
};

export default useOpenMenu;