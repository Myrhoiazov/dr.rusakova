import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'app/App';
import './shared/config/i18n/i18next.jsx';
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css';
// import './shared/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
