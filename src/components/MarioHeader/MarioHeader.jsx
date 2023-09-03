import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/svgs/mario-mistery-block.svg';
import FLAG_US from '../../assets/imgs/flag-us.png';
import FLAG_ARG from '../../assets/imgs/flag-arg.png';
import COIN_GIF from '../../assets/imgs/coin.gif';
import useLang from '../../contexts/langStore.js';
import useOpenMenu from '../../hooks/useOpenMenu.js';
import useText from '../../hooks/useText';

function MarioHeader() {
	const {open, toggleOpen} = useOpenMenu(false);
	const toggleLang = useLang(state => state.toggleLang);
	const text = useText();

	//#8dd601, #0f9401

	return (
		<div className="header-container">
			<header className="header">
				<p className="header-name">{text.headerName}</p>
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
				<nav id="menu" className="menu-container">
					<ul className="menu">
						{text.headerLinks.map((e, i) => {
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
						<li className="lang-container">
							<img src={FLAG_US} alt="United States flag" className="lang-flag" />
							<div className="lang-toggle-container">
								<input
									type="checkbox"
									id="lang"
									className="lang-toggle-input"
									onClick={toggleLang}
								/>
								<label htmlFor="lang" className="lang-toggle-label"></label>
							</div>
							<img src={FLAG_ARG} alt="Argentinian flag" className="lang-flag" />
						</li>
					</ul>
				</nav>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
			</header>
		</div>
	);
}

export default MarioHeader;