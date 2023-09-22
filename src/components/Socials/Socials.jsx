import './socials.css';
import CV_ES from '../../assets/cv-es.pdf';
import CV_EN from '../../assets/cv-en.pdf';
import useLang from '../../contexts/langStore';
import LinkedinIcon from '../Icons/LinkedinIcon';
import { LANGUAGE_OPTIONS } from '../../constants/lang';

function Socials () {
	const lang = useLang(state => state.lang);

	return (
		<div className="socials-container">
			<div className="lkin-cloud">
				<a
					title="Linkedin"
					target="_blank"
					href="https://www.linkedin.com/in/agust%C3%ADn-pacheco-estudianteit/"
					className="logo lkin-logo"
					rel="noreferrer">
					<LinkedinIcon />
				</a>
			</div>
			<div className="gh-cloud">
				<a
					title="Github"
					target="_blank"
					href="https://github.com/apacha01"
					className="logo gh-logo"
					rel="noreferrer">
				</a>
			</div>
			<div className="cv-cloud">
				<a
					title="Resume / CV"
					target="_blank"
					href={lang === LANGUAGE_OPTIONS.ENGLISH ? CV_EN : CV_ES}
					className="logo cv-logo"
					rel="noreferrer">
				</a>
			</div>
		</div>
	);
}

export default Socials;