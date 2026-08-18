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

test('replaces a matching static tag instead of duplicating it', async () => {
	const staticMeta = document.createElement('meta');
	staticMeta.setAttribute('name', 'description');
	staticMeta.setAttribute('content', 'STATIC DESC');
	staticMeta.setAttribute('data-rh', 'true');
	document.head.appendChild(staticMeta);

	const staticCanonical = document.createElement('link');
	staticCanonical.setAttribute('rel', 'canonical');
	staticCanonical.setAttribute('href', `${SITE_URL}/`);
	staticCanonical.setAttribute('data-rh', 'true');
	document.head.appendChild(staticCanonical);

	try {
		renderWithHelmet(
			<SeoHead title="T" description="PAGE DESC" path="/p" />
		);

		// The static tags already satisfy the length checks on their own, so the
		// content assertion must live inside waitFor too — otherwise it resolves
		// before Helmet's requestAnimationFrame-scheduled DOM commit actually runs.
		await waitFor(() => {
			// eslint-disable-next-line testing-library/no-node-access -- Helmet manages document.head directly, outside RTL's query surface
			expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
			// eslint-disable-next-line testing-library/no-node-access, testing-library/no-wait-for-multiple-assertions -- assertions are interdependent, see comment above
			expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
			// eslint-disable-next-line testing-library/no-wait-for-multiple-assertions -- assertions are interdependent, see comment above
			expect(
				// eslint-disable-next-line testing-library/no-node-access -- Helmet manages document.head directly, outside RTL's query surface
				document.querySelector('meta[name="description"]').getAttribute('content')
			).toBe('PAGE DESC');
		});
	} finally {
		staticMeta.remove();
		staticCanonical.remove();
	}
});
