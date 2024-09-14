import { plone } from '$lib/api';
import type { LayoutLoad } from '../$types';

export const load: LayoutLoad = async ({ params, parent }) => {
	const { queryClient } = await parent();
	const { path } = params;

	await queryClient.prefetchQuery(plone.getBreadcrumbsQuery({ path }));
	await queryClient.prefetchQuery(plone.getNavigationQuery({ path }));
	await queryClient.prefetchQuery(plone.getContextNavigationQuery({ path }));

	return { path };
};
