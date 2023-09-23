import './studies.css';
import Title from '../Title/Title';
import useText from '../../hooks/useText';
import MARIO_CASTLE from '../../assets/svgs/mario-big-castle-sprite.svg';
import Study from '../Study/Study';
import FlagpoleBottomSprite from '../Sprites/FlagpoleBottomSprite';
import FlagpoleTopSprite from '../Sprites/FlagpoleTopSprite';
import useTheme from '../../contexts/themeStore';

function Studies() {
	const text = useText();
	const theme = useTheme(s => s.theme);

	return (
		<section id={text.headerLinks.studies.id} className="studies-section">
			<Title title={text.headerLinks.studies.title} withCloud={true} />
			<div className="studies-container">
				{
					text.studies.map((e,i) => {
						return (<Study key={i} study={e} withFlag={true} />);
					})
				}
				<div className="mario-flagpole">
					<FlagpoleTopSprite theme={theme} classes='flagpole-top' />
					<FlagpoleBottomSprite theme={theme} classes='flagpole-bottom' />
				</div>
				<img src={MARIO_CASTLE} alt="Mario Castle" className="mario-castle" />
			</div>
			<div className="studies-floor"></div>
		</section>
	);
}

export default Studies;