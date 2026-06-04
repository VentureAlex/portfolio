# Portfolio

Personal project showcase — live demos and GitHub links. Built with React + Vite, deployed on [Vercel](https://vercel.com).

## Stack

- **React 19** + **Vite 8**
- **@vercel/analytics** for Web Analytics on production

## Add a project

Edit [`src/data/projects.js`](src/data/projects.js):

```js
{
  slug: 'my-app',
  title: 'My App',
  description: 'One sentence about what it does.',
  tags: ['React', 'Vite'],
  liveUrl: 'https://my-app.vercel.app',
  repoUrl: 'https://github.com/VentureAlex/my-app',
  featured: true,
}
```

Update your name, bio, and links in [`src/data/site.js`](src/data/site.js).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy on Vercel

1. Push this repo to GitHub.
2. Vercel → **Add New Project** → import the repo.
3. Framework: **Vite** · Build: `npm run build` · Output: `dist`
4. Enable **Web Analytics** in the Vercel project settings.

After deploy, set `liveUrl` for this site in `projects.js` and update Plant Planner’s URL if it differs from the default.