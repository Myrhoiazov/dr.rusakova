// import HomePage from 'pages/HomePage';
// import BotoxPage from 'pages/BotoxPage';
// import ContourPlasticPage from 'pages/ContourPlasticPage';
// import CollagenStimulationPage from 'pages/CollagenStimulationPage';
// import BiorevitalizationPage from 'pages/BiorevitalizationPage';
// import SmasLiftingPage from 'pages/SmasLiftingPage';
// import MorpheusPage from 'pages/MorpheusPage';
// import EndoliftPage from 'pages/EndoliftPage';
// import LightskinPage from 'pages/LightskinPage';
// import LumeccaPage from 'pages/LumeccaPage';
// import ContactPage from 'pages/ContactPage';
// import ConsultationPage from 'pages/ConsultationPage';
// import NotFoundPage from 'pages/NotFoundPage';

export const AppRouth = {
	MAIN: '/',
	BOTULINOTHERAPY: 'Ботулінотерапія',
	CONTOURPLASTIC: 'Контурна пластика',
	COLLAGENSTIMULATION: 'Колагенстимуляція',
	BIOREVITALIZATION: 'Біоревіталізація',
	SMASLIFTING: 'Smas lifting',
	MORPHEUS: 'Мorpheus 8',
	ENDOLIFT: 'Endolift',
	LIGHTSKIN: 'LightSkan',
	LUMECCA: 'Lumecca',
	CONSULTATION: 'Консультація',
	CONTACTS: 'Контакти',
	NOTFOUND: '*',
};

export const RoutePath = {
	main: '/',
	botulinotherapy: '/botulinotherapy',
	contourPlastic: '/contour-plastic',
	collagenStimulation: '/collagen-stimulation',
	biorevitalization: '/biorevitalization',
	smasLifting: '/smas-lifting',
	morpheus: '/morpheus',
	endolift: '/endolift',
	lightskin: '/lightskin',
	lumecca: '/lumecca',
	consultation: '/consultation',
	contacts: '/contacts',
	notFound: '*',
};

export const routeConfig = {
	main: {
		name: AppRouth.MAIN,
		path: RoutePath.main,
		element: '',
	},
	botulinotherapy: {
		name: AppRouth.BOTULINOTHERAPY,
		path: RoutePath.botulinotherapy,
		element: '',
	},
	contourPlastic: {
		name: AppRouth.CONTOURPLASTIC,
		path: RoutePath.contourPlastic,
		element: '',
	},
	collagenStimulation: {
		name: AppRouth.COLLAGENSTIMULATION,
		path: RoutePath.collagenStimulation,
		element: '',
	},
	biorevitalization: {
		name: AppRouth.BIOREVITALIZATION,
		path: RoutePath.biorevitalization,
		element: '',
	},
	smasLifting: {
		name: AppRouth.SMASLIFTING,
		path: RoutePath.smasLifting,
		element: '',
	},
	morpheus: {
		name: AppRouth.MORPHEUS,
		path: RoutePath.morpheus,
		element: '',
	},
	endolift: {
		name: AppRouth.ENDOLIFT,
		path: RoutePath.endolift,
		element: '',
	},
	lightskin: {
		name: AppRouth.LIGHTSKIN,
		path: RoutePath.lightskin,
		element: '',
	},
	lumecca: {
		name: AppRouth.LUMECCA,
		path: RoutePath.lumecca,
		element: '',
	},
	consultation: {
		name: AppRouth.CONSULTATION,
		path: RoutePath.consultation,
		element: '',
	},
	contacts: {
		name: AppRouth.CONTACTS,
		path: RoutePath.contacts,
		element: '',
	},
	notFound: {
		name: AppRouth.NOTFOUND,
		path: RoutePath.notFound,
		element: '',
	},
};
