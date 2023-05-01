/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'components/container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import s from './Contact.module.scss';
import { useTranslation } from 'react-i18next';
import '../../i18next';

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section id="contact" className={s.section}>
			<Container>
				<div className={s.inner_wrapper}>
					<h1 className={s.title}>{t('contacts.title')}</h1>
					<ul className={s.items}>
						<li className={s.item}>
							<h3 className={s.subtitle}>{t('contacts.block_1')}</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a href="mailto:example@gmail.com">
										<LocalPostOfficeIcon
											className={s.icon}
										/>
										krusakov08@gmail.com
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
										M-F 9am - 21:00pm
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>{t('contacts.block_2')}</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a
										href="https://instagram.com/dr.rusakova?igshid=YmMyMTA2M2Y="
										rel="noreferrer"
										target="_blank"
									>
										<InstagramIcon className={s.icon} />
										Instagram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="#">
										<TelegramIcon className={s.icon} />
										Telegram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="#">
										<WhatsAppIcon className={s.icon} />
										WhatsApp
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>{t('contacts.block_3')}</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<p>{t('politics.text_1')}</p>
								</li>
								<li className={s.contactItem}>
									<p> {t('politics.text_2')}</p>
								</li>
								<li className={s.contactItem}>
									{t('politics.text_3')}
									<p></p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
