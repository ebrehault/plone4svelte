import { plone } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { queryClient } = await parent();
	const { path } = params;

	await queryClient.prefetchQuery(plone.getContentQuery({ path }));

	return { path };
};
