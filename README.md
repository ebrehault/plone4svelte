# Plone4Svelte

Plone4Svelte allows you to render contents managed by the (Plone CMS)[https://plone.org] in a (SvelteKit)[https://kit.svelte.dev/] site.

Content management is hard but is very useful when non-technical people are meant to maintain a website.
As a frontend developer, you might not love the idea of working with WordPress.

Plone is great because:

- It is fast and easy to use. A modern editing experience your content editor will love.
- That’s the most secure CMS on the market. Security built-in with a track record of over 20 years.
- It is 100% open source and free, forever.

Thanks to the Plone REST API, Svelte4Plone allows you to use Plone as a headless CMS. You won't need to worry about the backend, you can focus on the frontend.

## Setup

Run the Plone server:

```bash
docker run --name plone6-backend -e SITE=Plone -e CORS_ALLOW_ORIGIN='*' -d -p 8080:8080 plone/plone-backend:6.0
```

Create a SvelteKit project:

```bash
npm create svelte@latest my-app
# choose the "skeleton" template
cd my-app
npm install
```

Add the Plone4Svelte package:

```bash
npm install plone4svelte
```

Remove `./my-app/src/routes/+page.svelte` and copy the `./src/routes` folder content from this repository in
`./my-app/src/routes`.

Copy `./static/global.css` from this repository to `./my-app/static/global.css`.

Create a `.env` file in the root of the project with the following content:

```bash
VITE_PLONE_BACKEND_URL=http://localhost:8080/Plone
```

Run the SvelteKit project:

```bash
npm run dev -- --port 3001 --open
```

You can now see the default home page.

## Editing contents in Plone

To create or edit contents, run the Plone user interface:

```bash
docker run --name plone6-frontend --link plone6-backend:backend -e RAZZLE_API_PATH=http://localhost:8080/Plone -e RAZZLE_INTERNAL_API_PATH=http://backend:8080/Plone -d -p 3000:3000 plone/plone-frontend:latest
```

Go to `http://localhost:3000` and log in with the default credentials (the default user is `admin` and the password is `admin`).

You can now create new pages or edit the default home page and see the changes in the SvelteKit side on http://localhost:3001.

## Customizing the theme

### Styles

You can customize the theme by editing the `./my-app/static/global.css` file.

The same Svelte component (`./src/routes/[...path]/+page.svelte`) is used to render all the contents, buthe main `<div>` element has specific classes that will allow you to style the content differently based on the content type and the section/sub-section the content belongs to:

- `type-<the content type>`, for example `type-Document` for a Document content type.
- `section-<the section id>` for each section/sub-section the page belongs to, for example a page with a path like `http://localhost:3001/news/2024/flowers` will have the following classes: `section-news section-2024 section-flowers`.

### Overriding the components

You can override any default component using the `overrideComponent` function. For example, to override the breadcrumbs component, create a new Svelte component in the `./src/overrides` folder and use the `overrideComponent` function in the `./src/+layout.svelte` file:

```js
import { overrideComponent } from 'svelet4plone';
import CustomBreadcrumbs from '../overrides/CustomBreadcrumbs.svelte';

overrideComponent('breadcrumbs', CustomBreadcrumbs);
```
