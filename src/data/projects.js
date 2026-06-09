export const projects = [
  {
    slug: 'fortune500-earnings-calendar',
    year: '2025',
    title: 'Fortune 500 Earnings Calendar',
    description:
      'No free tool lets you filter Fortune 500 earnings by quarter, sector, and ticker in a single calendar view — so I built one.',
    detail:
      'FastAPI scrapes and caches earnings data in SQLite; FullCalendar.js renders it with color-coded events, EPS estimates, and dark/light mode.',
    tags: ['FastAPI', 'SQLite', 'FullCalendar.js', 'Python', 'Vercel'],
    liveUrl: 'https://fortune500-earnings-calendar.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/fortune500-earnings-calendar',
    featured: true,
  },
  {
    slug: 'plant-planner',
    year: '2025',
    title: 'Plant Planner',
    description:
      'Planting guides give you month ranges. Real weather varies by zip code. This scores the best actual day to plant based on a live 7-day forecast.',
    detail:
      'Uses Open-Meteo\'s free weather API (no key required) and a composite scoring index across temperature, precipitation, and humidity.',
    tags: ['React', 'Vite', 'Open-Meteo'],
    liveUrl: 'https://plant-planner-gules.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/plant-planner',
    featured: true,
  },
  {
    slug: 'space-invaders-dual',
    year: '2025',
    title: 'Dual Space Invaders',
    description:
      'Co-op Space Invaders on one keyboard — cyan ship on A/D, magenta ship on arrow keys. Clear the swarm together.',
    detail:
      'Built on the Canvas API with no game engine — collision detection, shared game loop, and dual control scheme written from scratch.',
    tags: ['Canvas API', 'Vite', 'JavaScript'],
    liveUrl: 'https://space-invaders-dual.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/space-invaders-dual',
    featured: true,
  },
  {
    slug: 'toolbox',
    year: '2025',
    title: 'Toolbox',
    description:
      'A collection of practical Python scripts for monitoring, data handling, and automation — each with its own README so they\'re actually reusable.',
    detail:
      'Includes a speed test logger (CSV output), JSON→CSV converter, Google Trends fetcher, and a zip-code-based planting planner.',
    tags: ['Python', 'pandas', 'requests'],
    liveUrl: null,
    repoUrl: 'https://github.com/VentureAlex/toolbox',
    featured: false,
  },
]
