import './Contacts.css';
import { LiContacts } from '../../theme/styled/tags';

export function Contacts() {

	return (
		<section className="contacts__container">
			<ul className="contacts__list">
				<LiContacts className="contacts__item">
					<a href="https://instagram.com/bgdn_hndnk?igshid=MzMyNGUyNmU2YQ=="><icon className="fa-brands fa-instagram"></icon></a>
					<p>Instagram</p>
				</LiContacts>
				<LiContacts className="contacts__item">
					<a href="https://www.linkedin.com/in/bogdan-hnidenko-802a0b288"><icon className="fa-brands fa-linkedin"></icon></a>
					<p>LinkedIn</p>
				</LiContacts>
				<LiContacts className="contacts__item">
					<a href="https://t.me/Bohdan_Hnidenko"><icon className="fa-brands fa-telegram"></icon></a>
					<p>Telegram</p>
				</LiContacts>
				<LiContacts className="contacts__item">
					<a href="https://github.com/BogdanHnidenko"><icon className="fa-brands fa-github"></icon></a>
					<p>GitHub</p>
				</LiContacts>
			</ul>
		</section>
	)
}