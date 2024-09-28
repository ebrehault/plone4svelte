import { browser } from '$app/environment';
import { QueryClient } from '@tanstack/svelte-query';
import { plone } from './api';

export const loadLayout = async ({ params }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
				staleTime: 60 * 1000
			}
		}
	});

	return { queryClient, path: params.path };
};

export const loadPage = async ({ params, parent }) => {
	const { queryClient } = await parent();
	const { path } = params;

	await queryClient.prefetchQuery(plone.getContentQuery({ path }));
	await queryClient.prefetchQuery(plone.getBreadcrumbsQuery({ path }));
	await queryClient.prefetchQuery(plone.getNavigationQuery({ path }));
	await queryClient.prefetchQuery(plone.getContextNavigationQuery({ path }));

	return { path };
};

const _overrides: { [id: string]: any } = {};
export const getOverride = (componentId: string) => {
	return _overrides[componentId];
};
export const overrideComponent = (id: string, comp: any) => {
	_overrides[id] = comp;
};
