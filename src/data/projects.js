export const projects = [
  {
    slug: 'fortune500-earnings-calendar',
    year: '2025',
    title: 'Fortune 500 Earnings Calendar',
    description:
      'No free tool lets you filter Fortune 500 earnings by quarter, sector, and ticker in a single calendar view — so I built one.',
    detail:
      'FastAPI scrapes and caches earnings data in SQLite; FullCalendar.js renders it with color-coded events, EPS estimates, and dark/light mode.',
    platforms: ['FastAPI', 'SQLite', 'FullCalendar.js', 'Vercel'],
    skills: ['REST API Design', 'Data Pipeline'],
    liveUrl: 'https://fortune500-earnings-calendar.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/fortune500-earnings-calendar',
    featured: true,
  },
  {
    slug: 'etsy-order-automation',
    year: '2025',
    title: 'Etsy Order Automation',
    description:
      'Local Express app that connects to the Etsy Open API v3, fetches shop orders, and maps product variations to local asset folders — one-click Finder integration for fulfillment.',
    detail:
      'Implements OAuth 2.0 + PKCE from scratch, automatic token refresh, session-based path security, and a CSV-driven variation-to-folder mapping engine.',
    platforms: ['Node.js', 'Express', 'Etsy API'],
    skills: ['OAuth 2.0', 'API Integration', 'Automation'],
    liveUrl: null,
    repoUrl: 'https://github.com/VentureAlex/etsy-order-automation',
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
    platforms: ['React', 'Vite', 'Open-Meteo'],
    skills: ['Frontend Development', 'Scoring Algorithm'],
    liveUrl: 'https://plant-planner-gules.vercel.app',
    repoUrl: 'https://github.com/VentureAlex/plant-planner',
    featured: true,
  },
  {
    slug: 'toolbox',
    year: '2024',
    title: 'Toolbox',
    description:
      'A collection of practical Python scripts for monitoring, data handling, and automation — each with its own README so they\'re actually reusable.',
    detail:
      'Includes a speed test logger (CSV output), JSON→CSV converter, Google Trends fetcher, and a zip-code-based planting planner.',
    platforms: ['Python', 'pandas'],
    skills: ['Scripting', 'Automation', 'Data Processing'],
    liveUrl: null,
    repoUrl: 'https://github.com/VentureAlex/toolbox',
    featured: false,
  },
]
