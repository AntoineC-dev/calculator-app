# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Calculator app | Desktop version dark](./fullpage-desktop-dark.png)

![Calculator app | Desktop version light](./fullpage-desktop-light.png)

![Calculator app | Desktop version purple](./fullpage-desktop-purple.png)

![Calculator app | Mobile version dark](./fullpage-mobile-dark.png)

### Links

- Solution URL: [Go to solution](https://www.frontendmentor.io/solutions/ecommerce-product-page-w-sveltekit-tailwind-and-typescript-rOBF4Socjj)
- Live Site URL: [Go to live site](https://calculator-app-zeta-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Secure cookies for SSR theming (prevent flashing from client side theming).
- [SvelteKit](https://kit.svelte.dev/) - JS framework w/ SSR (Server-Side Rendering)
- [TailwindCss](https://tailwindcss.com/) - Utility-first CSS framework
- [Typescript](https://www.typescriptlang.org/) - Strongly typed JS

### What I learned

#### Svelekit Handle Hook

```ts
import type { Handle } from "@sveltejs/kit";
import { getCookieValue, isTheme } from "$lib/helpers";

const getThemeFromCookie = (cookie: string | null) => {
  const theme = getCookieValue(cookie, "theme");
  return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.request.headers.get("cookie");
  event.locals.theme = getThemeFromCookie(cookie);
  const response = await resolve(event);
  return response;
};
```

#### Svelekit new +layout.server file

The data is fetched on server side and accessible by every sub routes of the layout.

```ts
import type { ServerLoad } from "@sveltejs/kit";
export const load: ServerLoad = async ({ locals, setHeaders }) => {
  const theme = locals.theme ?? "dark";
  if (!locals.theme) setHeaders({ "Set-Cookie": `theme=${theme}; SameSite=Strict; HttpOnly; Path=/` });
  return {
    theme,
  };
};
```

#### SvelteKit new +server files (with actions)

```ts
import type { RequestHandler } from "@sveltejs/kit";
import { updateCookie } from "$lib/helpers";

export const PUT: RequestHandler = async ({ request, setHeaders }) => {
  const theme = await request.text();
  setHeaders({ "Set-Cookie": updateCookie("theme", theme) });
  return new Response(theme);
};
```

### Continued development

### Useful resources

- [KeyEvent Values](https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/#a-full-list-of-key-event-values) - List of EVENT.KEY values.
- [SvelteKit Hooks](https://kit.svelte.dev/docs/hooks#handle) - Runs everytime SveleKit receives a request.
- [SvelteKit New Routing](https://kit.svelte.dev/docs/routing) - Updated docs for Routing.

## Author

- Frontend Mentor - [@AntoineC-dev](https://www.frontendmentor.io/profile/AntoineC-dev)
