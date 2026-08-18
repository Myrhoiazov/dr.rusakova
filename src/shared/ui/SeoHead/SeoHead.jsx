import {Helmet} from 'react-helmet-async';
import {SITE_URL, DEFAULT_OG_IMAGE} from 'shared/config/seo/seoConfig';

const SeoHead = ({title, description, path, image}) => {
	const canonicalUrl = `${SITE_URL}${path}`;
	const ogImage = image || DEFAULT_OG_IMAGE;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonicalUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
		</Helmet>
	);
};

export default SeoHead;
