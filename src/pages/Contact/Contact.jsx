import { useState } from 'react';
import Container from 'components/container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import s from './Contact.module.scss';
import Modal from 'components/modal';

const Contact = () => {
	const [isOpenModal, setIasOpenModal] = useState(false);

	const handleOpenModal = () => {
		setIasOpenModal(!isOpenModal);
	};

	return (
		<section id="contact" className={s.section}>
			<Container>
				<div className={s.inner_wrapper}>
					<h1 className={s.title}>Contacts</h1>
					<ul className={s.items}>
						<li className={s.item}>
							<h3 className={s.subtitle}>Need Help?</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a href="mailto:example@gmail.com">
										<LocalPostOfficeIcon
											className={s.icon}
										/>
										example@gmail.com
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+380997438404">
										<PermPhoneMsgIcon className={s.icon} />
										+380 (99) 743 84 04
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										<AccessTimeIcon className={s.icon} />
										M-F 9am - 5:30pm EST
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>Social links</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a href="/">
										
										<InstagramIcon
											className={s.icon}
										/>
										Instagram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										
										<TelegramIcon className={s.icon} />
										Telegram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										<WhatsAppIcon className={s.icon} />
										WhatsApp
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>Politics</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a href="/">Policy</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">Condition</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">Example</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				{isOpenModal && (
					<Modal onClose={handleOpenModal}>
						<h1>Sorry soon i do it ...</h1>
					</Modal>
				)}
			</Container>
		</section>
	);
};

export default Contact;
