// Admin Page
import {AllStylePage as AdminAllStylePage} from 'pages/Admin/StylePage';
import {AllCardPage as AdminAllCardPage} from 'pages/Admin/CardPage';
import {ChoreographersPage as AdminChoreographersPage} from 'pages/Admin/Choreographers';
import {OneChoreographer as AdminOneChoreographer} from 'pages/Admin/Choreographers';
import {NewChoreographer as AdminNewChoreographer} from 'pages/Admin/Choreographers';
import {DanceStarOption as AdminDanceStarOption} from 'pages/Admin/DanceStar';
import {DanceStar as AdminDanceStar} from 'pages/Admin/DanceStar';
import {FaqPage as AdminFaqPage} from 'pages/Admin/FaqPage';
import {StudentsPage as AdminStudentsPage} from 'pages/Admin/Students';
import {NewStudent as AdminNewStudentPage} from 'pages/Admin/Students';
import {SchoolPage as AdminSchoolPage} from 'pages/Admin/Schedulle';
import {IndividualPage as AdminIndividualPage} from 'pages/Admin/Schedulle';
import {OptionsPage as AdminOptionsPage} from 'pages/Admin/Schedulle';
import {EventPage as AdminEventPage} from 'pages/Admin/Schedulle';
import {Contacts as AdminContactsPage} from 'pages/Admin/Contacts';
import {FinancePage as AdminFinancePage} from 'pages/Admin/Contacts';
import {AbonementPage as AdminAbonementPage} from 'pages/Admin/Contacts';
import {OptionsPage as AdminContactOptionsPage} from 'pages/Admin/Contacts';
import AdminPage from 'pages/Admin/AdminPage';
import {LoginPage, RegistrationPage} from 'pages/Admin/AuthPages';

// Client Page
import {AllStylePage, StylePage} from 'pages/Client/DanceStyles';
import DanceStars from 'pages/Client/DanceStars';
import {HomePage} from 'pages/Client/HomePage';
import Policy from 'pages/Client/Policy';
import Rules from 'pages/Client/Rules';
import SchedulePage from 'pages/Client/SchedulePage';
import TaskPage from 'pages/Client/TaskPage';
import {PricePage} from 'pages/Client/PricePage';
import FAQPage from 'pages/Client/FAQPage';
import {AllChoreographersPage} from 'pages/Client/OurTeam';

import {
	CHOREOGRAPHERS_ROUTE,
	EVENT_ROUTE,
	MAIN_ROUTE,
	SCHEDULLE_ROUTE,
	STYLES_ROUTE,
	TASK_ROUTE,
	DANCE_STARS_ROUTE,
	POLICY_ROUTE,
	RULES_ROUTE,
	ADMIN_ROUTE,
	LOGIN_ROUTE,
	NOT_FOUND,
	REGISTRATION_ROUTE,
	PRICE_ROUTE,
	FAQ_ROUTE,
	NEW_ROUTE,
	STUDENT_ROUTE,
	DANCE_STAR_OPTION_ROUTE,
	INDIVIDUAL_ROUTE,
	CONTACT_ROUTE,
	EXPENSE_ROUTE,
	ABONEMETS_ROUTE,
} from 'shared/utils/consts';

export const RoutePath = {
	admin: ADMIN_ROUTE,
	login: LOGIN_ROUTE,
	styles: STYLES_ROUTE,
	choreographers: CHOREOGRAPHERS_ROUTE,
	students: STUDENT_ROUTE,
	contacts: CONTACT_ROUTE,
	dance_star: DANCE_STARS_ROUTE,
	expense: EXPENSE_ROUTE,

	// Last router
	not_found: NOT_FOUND,
};

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: <AdminPage />,
		index: true,
	},
	{
		path: STYLES_ROUTE,
		Component: <AdminAllStylePage />,
	},
	{
		path: PRICE_ROUTE,
		Component: <AdminAllCardPage />,
	},
	{
		path: FAQ_ROUTE,
		Component: <AdminFaqPage />,
	},
	{
		path: CHOREOGRAPHERS_ROUTE,
		Component: <AdminChoreographersPage />,
	},
	{
		path: CHOREOGRAPHERS_ROUTE + '/:id',
		Component: <AdminOneChoreographer />,
	},
	{
		path: CHOREOGRAPHERS_ROUTE + '/' + NEW_ROUTE,
		Component: <AdminNewChoreographer />,
	},
	{
		path: STUDENT_ROUTE,
		Component: <AdminStudentsPage />,
	},
	{
		path: STUDENT_ROUTE + '/' + NEW_ROUTE,
		Component: <AdminNewStudentPage />,
	},
	{
		path: DANCE_STARS_ROUTE,
		Component: <AdminDanceStar />,
	},
	{
		path: DANCE_STARS_ROUTE + '/' + DANCE_STAR_OPTION_ROUTE,
		Component: <AdminDanceStarOption />,
	},
	{
		path: STUDENT_ROUTE + '/' + NEW_ROUTE,
		Component: <AdminNewStudentPage />,
	},
	{
		path: EVENT_ROUTE,
		Component: <AdminEventPage />,
	},
	{
		path: SCHEDULLE_ROUTE,
		Component: <AdminSchoolPage />,
	},
	{
		path: SCHEDULLE_ROUTE + '/' + INDIVIDUAL_ROUTE,
		Component: <AdminIndividualPage />,
	},
	{
		path: SCHEDULLE_ROUTE + '/' + DANCE_STAR_OPTION_ROUTE,
		Component: <AdminOptionsPage />,
	},
	{
		path: CONTACT_ROUTE,
		Component: <AdminContactsPage />,
		list: [
			{
				path: EXPENSE_ROUTE,
				Component: <AdminFinancePage />,
			},
			{
				path: DANCE_STAR_OPTION_ROUTE,
				Component: <AdminContactOptionsPage />,
			},
			{
				path: ABONEMETS_ROUTE,
				Component: <AdminAbonementPage />,
			},
		],
	},
	{
		path: CONTACT_ROUTE + '/' + EXPENSE_ROUTE,
		Component: <AdminFinancePage />,
	},
	{
		path: CONTACT_ROUTE + '/' + DANCE_STAR_OPTION_ROUTE,
		Component: <AdminContactOptionsPage />,
	},
];

export const publicRoutes = [
	{
		path: POLICY_ROUTE,
		Component: <Rules />,
	},
	{
		path: RULES_ROUTE,
		Component: <Policy />,
	},
	{
		path: DANCE_STARS_ROUTE,
		Component: <DanceStars />,
	},
	{
		path: TASK_ROUTE,
		Component: <TaskPage />,
	},
	{
		path: MAIN_ROUTE,
		Component: <HomePage />,
	},
	{
		path: SCHEDULLE_ROUTE,
		Component: <SchedulePage />,
	},
	{
		path: LOGIN_ROUTE,
		Component: <LoginPage />,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: <RegistrationPage />,
	},
	{
		path: CHOREOGRAPHERS_ROUTE,
		Component: <AllChoreographersPage />,
	},
	// {
	// 	path: CHOREOGRAPHERS_ROUTE + '/:id',
	// 	Component: <TeacherPage />,
	// },
	{
		path: STYLES_ROUTE,
		Component: <AllStylePage />,
	},
	{
		path: FAQ_ROUTE,
		Component: <FAQPage />,
	},
	{
		path: PRICE_ROUTE,
		Component: <PricePage />,
	},
	{
		path: STYLES_ROUTE + '/:id',
		Component: <StylePage />,
	},
	{
		path: EVENT_ROUTE,
		Component: '',
	},
	{
		path: EVENT_ROUTE + '/:id',
		Component: '',
	},
];
