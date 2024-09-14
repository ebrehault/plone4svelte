import ploneClient from '@plone/client';

export const BACKEND = 'http://localhost:8080/Plone';

export const plone = ploneClient.initialize({
	apiPath: BACKEND
});

export function getPath(path: string): string {
	if (path === BACKEND) {
		return '/';
	}
	return path.replace(BACKEND, '');
}
