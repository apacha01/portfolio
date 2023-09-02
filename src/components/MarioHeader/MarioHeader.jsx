import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/svgs/mario-mistery-block.svg';
import COIN_GIF from '../../assets/imgs/coin.gif';
import useLang from '../../contexts/langStore.js';
import useOpenMenu from '../../hooks/useOpenMenu.js';

function MarioHeader() {
	const {open, toggleOpen} = useOpenMenu();
	const {toggleLang, getLangText} = useLang();

	//#8dd601, #0f9401

	return (
		<div className="header-container">
			<header className="header">
				<p className="header-name">{getLangText().headerName}</p>
				<nav id="menu" className="menu-container">
					<ul className="menu">
						{getLangText().headerLinks.map((e, i) => {
							return (
								<li className="menu-item" key={i}>
									<a
										className="menu-link"
										href={`#${e.toLowerCase().replace(' ', '-')}`}
										onClick={toggleOpen}
									>
										{e}
									</a>
								</li>
							);
						})}
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
			</header>
		</div>
	);
}

export default MarioHeader;