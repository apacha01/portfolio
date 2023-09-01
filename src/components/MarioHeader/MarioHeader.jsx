import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/svgs/mario-mistery-block.svg';
import PLAY_BUTTON_SVG from '../../assets/svgs/play.svg';
import COIN_GIF from '../../assets/imgs/coin.gif';
import { useState } from 'react';
import { useEffect } from 'react';

function MarioHeader() {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	useEffect(() => {
		// dealy to let the coin out of the '?' block
		setTimeout(() => document.getElementById('menu').classList.toggle('open'), 250);
	}, [open]);

	return (
		<header className="header-container">
			<div className="header">
				<img className="header-play-icon" src={PLAY_BUTTON_SVG} />
				<p className="header-name">Agustin Pacheco</p>
				<nav id="menu" className="menu-container">
					<ul className="menu">
						<li className="menu-link">Home</li>
						<li className="menu-link">Experience</li>
						<li className="menu-link">Skills</li>
						<li className="menu-link">Studies</li>
						<li className="menu-link">Contact</li>
					</ul>
				</nav>
				<button 
					className={`header-menu-btn ${open ? 'animate' : ''}`} 
					onClick={toggleOpen}
				>
					<img className="header-menu-icon" src={MISTERY_BLOCK_SVG} />
					<img className={`header-coin ${open ? 'animate' : ''}`} src={COIN_GIF} />
				</button>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
			</div>
		</header>
	);
}

export default MarioHeader;