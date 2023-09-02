import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/svgs/mario-mistery-block.svg';
import EXCLAMATION_BLOCK_SVG from '../../assets/svgs/mario-exclamation-block.svg';
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
		setTimeout(() => {
			let icon =  document.getElementById('menu-icon');
			icon.src = open ? EXCLAMATION_BLOCK_SVG : MISTERY_BLOCK_SVG;
		},250);
	}, [open]);

	return (
		<header className="header-container">
			<div className="header">
				<p className="header-name">Agustin Pacheco</p>
				<nav id="menu" className="menu-container">
					<ul className="menu">
						<li className="menu-item">
							<a className="menu-link" href="#" onClick={toggleOpen}>Home</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#" onClick={toggleOpen}>Experience</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#" onClick={toggleOpen}>Skills</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#" onClick={toggleOpen}>Studies</a>
						</li>
						<li className="menu-item">
							<a className="menu-link" href="#" onClick={toggleOpen}>Contact</a>
						</li>
					</ul>
				</nav>
				<button 
					className={`header-menu-btn ${open ? 'animate' : ''}`} 
					onClick={toggleOpen}
				>
					<img
						id="menu-icon"
						className="header-menu-icon"
						src={MISTERY_BLOCK_SVG}
					/>
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