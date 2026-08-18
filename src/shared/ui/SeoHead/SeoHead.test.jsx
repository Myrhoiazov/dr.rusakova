import {render, waitFor} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import SeoHead from './SeoHead';
import {SITE_URL, DEFAULT_OG_IMAGE} from 'shared/config/seo/seoConfig';

const renderWithHelmet = (ui) => render(<HelmetProvider>{ui}</HelmetProvider>);

test('sets title, description and canonical for the given path', async () => {
	renderWithHelmet(
		<SeoHead
			title="Test Title"
			description="Test description"
			path="/test-path"
		/>
	);

	await waitFor(() => expect(document.title).toBe('Test Title'));

	expect(
		document.querySelector('meta[name="description"]').getAttribute('content')
	).toBe('Test description');
	expect(
		document.querySelector('link[rel="canonical"]').getAttribute('href')
	).toBe(`${SITE_URL}/test-path`);
	expect(
		document.querySelector('meta[property="og:url"]').getAttribute('content')
	).toBe(`${SITE_URL}/test-path`);
});

test('falls back to the default OG image when none is provided', async () => {
	renderWithHelmet(
		<SeoHead title="T" description="D" path="/p" />
	);

	await waitFor(() =>
		expect(
			document.querySelector('meta[property="og:image"]').getAttribute('content')
		).toBe(DEFAULT_OG_IMAGE)
	);
});

test('uses a provided image over the default OG image', async () => {
	const customImage = `${SITE_URL}/assets/clinics/botulinotherapy.jpg`;

	renderWithHelmet(
		<SeoHead title="T" description="D" path="/p" image={customImage} />
	);

	await waitFor(() =>
		expect(
			document.querySelector('meta[property="og:image"]').getAttribute('content')
		).toBe(customImage)
	);
});
