# Saidul Islam — Portfolio

A clean, VS Code-ready portfolio built with Next.js, JavaScript, Framer Motion, Lucide React, and custom CSS.

## Run locally

1. Install Node.js 20.9 or newer.
2. Open this folder in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Visit [http://localhost:3000](http://localhost:3000).

## Main folders

- `src/app` — Next.js App Router entry files and global styles.
- `src/components` — every portfolio section as a separate reusable component.
- `src/data/portfolioData.js` — projects, skills, navigation, and social links.
- `src/lib/motion.js` — shared Framer Motion animation settings.
- `public` — profile image and favicon.

## Add your project images

Project image files are kept inside `public/projects`. Replace the placeholder SVG files with your own screenshots, or update each `image` path in `src/data/portfolioData.js`.

Example:

```js
{
  title: "RouteSync",
  image: "/projects/routesync.webp",
  imageAlt: "RouteSync manager dashboard preview",
}
```

For the best result, use a `1600 × 1000` WebP image. Keep the image under `500 KB` where possible. The same image automatically appears on both the project card and project details modal.

Project screenshots use `object-fit: contain`, so the complete interface remains visible without cropping in both the project card and details modal.

## Add a future project

Open `src/data/portfolioData.js` and add another object to the `projects` array. The project page automatically shows four items per page and creates pagination controls when more projects are added.

## Production build

```bash
npm run build
npm start
```

## Loader behavior

The animated intro runs once per browser tab session. Refreshing the page or triggering a development hot reload will not restart it repeatedly.

To test the intro again, run this in the browser console and refresh:

```js
sessionStorage.removeItem("saidul-portfolio-intro-seen");
```
