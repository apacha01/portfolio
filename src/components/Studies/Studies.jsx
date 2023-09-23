import './studies.css';
import Title from '../Title/Title';
import useText from '../../hooks/useText';
import MARIO_FLAGPOLE_TOP from '../../assets/svgs/mario-flagpole-top-sprite.svg';
import MARIO_CASTLE from '../../assets/svgs/mario-big-castle-sprite.svg';
import Study from '../Study/Study';
import FlagpoleBottomSprite from '../Sprites/FlagpoleBottomSprite';
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
					<img className='flagpole-top' src={MARIO_FLAGPOLE_TOP} alt="Flagpole top" />
					<FlagpoleBottomSprite theme={theme} classes='flagpole-bottom' />
				</div>
				<img src={MARIO_CASTLE} alt="Mario Castle" className="mario-castle" />
			</div>
			<div className="studies-floor"></div>
		</section>
	);
}

export default Studies;