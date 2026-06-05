export const projects = [
  {
    slug: 'fortune500-earnings-calendar',
    title: 'Fortune 500 Earnings Calendar',
    description:
      'Interactive earnings calendar for Fortune 500 companies — filter by quarter, industry, and ticker with color-coded events, EPS estimates, dark/light mode, and a responsive FullCalendar UI backed by FastAPI + SQLite.',
    tags: ['FastAPI', 'SQLite', 'FullCalendar.js', 'Python', 'Vercel'],
    liveUrl: 'https://fortune500-earnings-calendar.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/fortune500-earnings-calendar',
    featured: true,
  },
  {
    slug: 'plant-planner',
    title: 'Plant Planner',
    description:
      'Enter a US zip code and crop type to get a scored 7-day outlook for the best day to plant — using free weather APIs, no keys required.',
    tags: ['React', 'Vite', 'Open-Meteo'],
    liveUrl: 'https://venture-alex-plant-planner.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/plant-planner',
    featured: true,
  },
  {
    slug: 'space-invaders-dual',
    title: 'Dual Space Invaders',
    description:
      'Co-op Space Invaders on one keyboard — cyan ship uses A/D, magenta ship uses arrow keys; clear the swarm together.',
    tags: ['Canvas', 'Vite', 'JavaScript'],
    liveUrl: 'https://venture-alex-space-invaders-dual.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/space-invaders-dual',
    featured: false,
  },
]
