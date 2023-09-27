import { THEME_OPTIONS } from '../../constants/theme.js';

function ShellSprite({ theme = 'light', classes = '' }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1008 882" className={classes}>
			<g fill={theme === THEME_OPTIONS.DARK ? '#b43120' : '#0c9300'}>
				<path d="M377.5-.5h252v63h-252v-63zM251.5 62.5h126v63h-63v63h-63v63h-63v-126h63v-63zM629.5 62.5h126v63h63v126h-63v-63h-63v-63h-63v-63z" />
				<path d="M377.5 125.5h315v63h63v126h-63v63h-63v63h-252v-63h-63v-63h-63v-63h63v-63h63v-63zM125.5 251.5h63v63h-63v-63zM818.5 251.5h63v63h-63v-63z" />
				<path d="M188.5 314.5h126v63h63v126h-63v63h-126v-63h-126v-63h63v-63h63v-63zM755.5 314.5h63v63h63v63h63v63h-126v63h-126v-63h-63v-63h63v-63h63v-63z" />
				<path d="M377.5 503.5h315v189h-63v63h-252v-63h-63v-126h63v-63z" />
			</g>
			<g fill="#e59c20">
				<path d="M314.5-.5h63v63h-63v-63zM629.5-.5h63v63h-63v-63zM377.5 62.5h252v63h-252v-63zM377.5 125.5v63h-63v-63h63zM629.5 125.5h63v63h-63v-63zM314.5 188.5v63h-63v-63h63zM692.5 188.5h63v63h-63v-63zM188.5 251.5h63v63h-63v-63zM755.5 251.5h63v63h-63v-63zM125.5 314.5h63v63h-63v-63zM251.5 314.5h63v63h-63v-63zM755.5 314.5v63h-63v-63h63zM818.5 314.5h63v63h-63v-63zM125.5 377.5v63h-63v-63h63zM314.5 377.5h63v63h-63v-63zM692.5 377.5v63h-63v-63h63zM881.5 377.5h63v63h-63v-63zM377.5 440.5h252v63h-252v-63zM377.5 503.5v63h-63v-63h63zM629.5 503.5h63v63h-63v-63zM251.5 566.5h63v63h-63v-63zM692.5 566.5h63v63h-63v-63z" />
			</g>
			<path fill="#fefffe" d="M-.5 503.5h189v63h63v63h63v63h63v63h252v-63h63v-63h63v-63h63v-63h189v126h-189v63h-63v63h-63v63h-63v63h-252v-63h-63v-63h-63v-63h-63v-63H-.5v-126z" />
		</svg>
	);
}

export default ShellSprite;