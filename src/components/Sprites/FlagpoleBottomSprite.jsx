import { THEME_OPTIONS } from '../../constants/theme';

function FlagpoleBottomSprite({ theme = 'light', classes = '' }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={classes}>
			<path fill={theme === THEME_OPTIONS.DARK ? '#b5efef' : '#ffcec5'} d="M0 0h16v16H0z" />
			<path fill="#000000" d="M15 0h1v16h-1zM14 1h1v15h-1zM13 2h1v14h-1zM12 3h1v13h-1z" />
			<path fill="#000000" d="M0 15h16v1H0zM1 14h15v1H1zM2 13h14v1H2zM3 12h13v1H3z" />
			<g fill={theme === THEME_OPTIONS.DARK ? '#007b8c' : '#9c4a00'}>
				<path d="M4 4h8v8H4zM0 0h1v1H0zM1 1h1v1H1zM2 2h1v1H2zM3 3h1v1H3z" />
				<path d="M4 4h1v1H4zM12 12h1v1h-1zM13 13h1v1h-1zM14 14h1v1h-1zM15 15h1v1h-1z" />
			</g>
		</svg>
	);
}

export default FlagpoleBottomSprite;