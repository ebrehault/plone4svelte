import ploneClient from '@plone/client';

export const BACKEND = import.meta.env.VITE_PLONE_BACKEND_URL as string;

export const plone = ploneClient.initialize({
	apiPath: BACKEND
});

export function getPath(path: string): string {
	if (path === BACKEND) {
		return '/';
	}
	return path.replace(BACKEND, '');
}
