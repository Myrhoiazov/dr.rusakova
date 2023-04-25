import Loader from 'components/loader';
import PortfolioReviews from 'components/PortfolioReviews';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productList } from '../Portfolio/productList';

const Project = () => {
	const [project, setProject] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();

	const projectItem = useCallback(() => {
		setIsLoading(true);
		const item = productList.filter((elem) => elem.id.toString() === id);
		setProject(item[0]);
		setIsLoading(false);
	}, [id]);

	useEffect(() => {
		projectItem();
	}, [projectItem]);

	return <>{isLoading ? <Loader /> : <PortfolioReviews item={project} />}</>;
};

export default Project;
