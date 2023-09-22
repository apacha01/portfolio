import useText from '../../hooks/useText';
import MailIcon from '../Icons/MailIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import Title from '../Title/Title';
import './contact.css';

function Contact () {
	const text = useText();

	return (
		<section id={text.headerLinks.contact.id} className="contact-section">
			<Title title={text.headerLinks.contact.title} withCloud={true} />
			<div className="contact-container">
				<h4 className="contact-text">{text.contact.text}</h4>
				<div className="contact-links-container">
					<a
						href="https://www.linkedin.com/in/agust%C3%ADn-pacheco-estudianteit/"
						className="contact-link contact-linkedin"
						target="_blank" rel="noreferrer"
					>
						<LinkedinIcon classes="linkedin-icon"/>
						Linkedin
					</a>
					<a
						href="mailto:agustin.pacheco1901@gmail.com"
						className="contact-link contact-mail"
						target="_blank" rel="noreferrer"
					>
						<MailIcon classes="mail-icon"/>
						Email
					</a>
				</div>
				<div className="mario-tree-floor"></div>
			</div>
		</section>
	);
}

export default Contact;