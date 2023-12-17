import {
	CHOREOGRAPHERS_ROUTE,
	DANCE_STARS_ROUTE,
	DANCE_STAR_OPTION_ROUTE,
	EVENT_ROUTE,
	FAQ_ROUTE,
	INDIVIDUAL_ROUTE,
	MAIN_ROUTE,
	NEW_ROUTE,
	PRICE_ROUTE,
	SCHEDULLE_ROUTE,
	STUDENT_ROUTE,
	STYLES_ROUTE,
	TASK_ROUTE,
	CONTACT_ROUTE,
	EXPENSE_ROUTE,
	ABONEMETS_ROUTE,
} from 'shared/utils/consts';
import {RoutePath} from './routerConfig';

export const headerMenu = [
	{
		name: 'Главная',
		to: MAIN_ROUTE,
		dropDowninks: [
			{
				title: 'Кто Мы',
				path: EVENT_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Наша история',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Наша команда',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Наши педагоги',
				path: CHOREOGRAPHERS_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Правила студии',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Проекты',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'FAQ',
				path: FAQ_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Стили/Направления',
				path: STYLES_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Партнеры/Сотрудничество',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Контакты',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
		],
	},
	{
		name: 'Услуги',
		to: TASK_ROUTE,
		dropDowninks: [
			{
				title: 'Аренда',
				path: EVENT_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Наши возможности',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Прайс',
				path: PRICE_ROUTE,
				cName: 'dropdown-link',
			},
		],
	},
	{
		name: 'Расписание',
		to: STYLES_ROUTE,
		dropDowninks: [
			{
				title: 'Мероприятия',
				path: EVENT_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Школа танцев',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
		],
	},
	{
		name: 'Магазин',
		to: DANCE_STARS_ROUTE,
	},
	{
		name: 'Галерея',
		to: DANCE_STARS_ROUTE,
		dropDowninks: [
			{
				title: 'Фото',
				path: EVENT_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Видео',
				path: SCHEDULLE_ROUTE,
				cName: 'dropdown-link',
			},
		],
	},
	{
		name: 'Dance Stars',
		to: '#',
	},
	{
		name: 'Новости',
		to: '#',
	},
];
export const choreographersMenu = [
	{
		name: 'Хореографы',
		to: MAIN_ROUTE,
		dropDowninks: [
			{
				title: 'Все хореографы',
				path: `${RoutePath.admin}/${CHOREOGRAPHERS_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Добавить хореографов',
				path: `${RoutePath.admin}/${CHOREOGRAPHERS_ROUTE}/${NEW_ROUTE}`,
				cName: 'dropdown-link',
			},
		],
	},
];
export const schedulleMenu = [
	{
		name: 'Расписание',
		to: MAIN_ROUTE,
		dropDowninks: [
			{
				title: 'Мероприятия',
				path: `${RoutePath.admin}/${EVENT_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Школа танцев',
				path: `${RoutePath.admin}/${SCHEDULLE_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Индивидуальные занятия',
				path: `${RoutePath.admin}/${SCHEDULLE_ROUTE}/${INDIVIDUAL_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Настройки расписания',
				path: `${RoutePath.admin}/${SCHEDULLE_ROUTE}/${DANCE_STAR_OPTION_ROUTE}`,
				cName: 'dropdown-link',
			},
		],
	},
];
export const contactMenu = [
	{
		name: 'Компания',
		path: `${RoutePath.admin}/${CONTACT_ROUTE}`,
		dropDowninks: [
			{
				title: 'Главная',
				path: `${RoutePath.admin}/${CONTACT_ROUTE}`,
				cName: 'dropdown-link',
				index: true,
			},
			{
				title: 'Настройки',
				path: DANCE_STAR_OPTION_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Финансы',
				path: EXPENSE_ROUTE,
				cName: 'dropdown-link',
			},
			{
				title: 'Абонементы',
				path: ABONEMETS_ROUTE,
				cName: 'dropdown-link',
			},
		],
	},
];
export const danceStarMenu = [
	{
		name: 'Dance Star',
		path: `${RoutePath.admin}/${DANCE_STARS_ROUTE}`,
		dropDowninks: [
			{
				title: 'Рейтинг учеников',
				path: `${RoutePath.admin}/${DANCE_STARS_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Настройки',
				path: `${RoutePath.admin}/${DANCE_STARS_ROUTE}/${DANCE_STAR_OPTION_ROUTE}`,
				cName: 'dropdown-link',
			},
		],
	},
];
export const studentMenu = [
	{
		name: 'Ученики',
		to: MAIN_ROUTE,
		dropDowninks: [
			{
				title: 'Все ученики',
				path: `${RoutePath.admin}/${STUDENT_ROUTE}`,
				cName: 'dropdown-link',
			},
			{
				title: 'Добавить ученика',
				path: `${RoutePath.admin}/${STUDENT_ROUTE}/${NEW_ROUTE}`,
				cName: 'dropdown-link',
			},
		],
	},
];
