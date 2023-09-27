import { THEME_OPTIONS } from '../../constants/theme.js';

function MailIcon({ theme = 'light', classes = '' }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={classes} viewBox="0 0 24 24" strokeWidth="2" stroke={theme === THEME_OPTIONS.DARK ? '#ffffff' : '#000000'} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" fill="none" d="M0 0h24v24H0z" />
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
			<path d="M3 7l9 6l9 -6" />
		</svg>

	);
}

export default MailIcon;
