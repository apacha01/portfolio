import './socials.css';

function Socials () {
	return (
		<section className="socials-container">
			<div className="lkin-cloud">
				<a
					title="Linkedin"
					target="_blank"
					href="https://www.linkedin.com/in/agust%C3%ADn-pacheco-estudianteit/"
					className="logo lkin-logo"
					rel="noreferrer">
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
					href="../../assets/cv.pdf"
					className="logo cv-logo"
					rel="noreferrer">
				</a>
			</div>
		</section>
	);
}

export default Socials;