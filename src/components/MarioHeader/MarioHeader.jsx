import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/svgs/mario-mistery-block.svg';
import COIN_GIF from '../../assets/imgs/coin.gif';
import useOpenMenu from '../../hooks/useOpenMenu.js';
import useText from '../../hooks/useText';

function MarioHeader() {
	const { open, toggleOpen } = useOpenMenu(false);
	const text = useText();

	return (
		<header className="header-container">
			<div className="header">
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
						{Object.entries(text.headerLinks).map((e, i) => {
							return (
								<li className="menu-item" key={i}>
									<a
										className="menu-link"
										href={`#${e[1].id}`}
										onClick={toggleOpen}
									>
										{e[1].title}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
				<span className="header-screw"></span>
			</div>
		</header>
	);
}

export default MarioHeader;