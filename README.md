# NewsHub

News website built with Nuxt 4, TypeScript, and SCSS. Articles come from [NewsData.io](https://newsdata.io), pagination uses their cursor token system.

## Requirements

- Node.js 20+
- A NewsData.io API key — free tier is enough

## Getting started

```bash
npm install
cp .env.example .env
```

Edit `.env` and set your API key:

```
NUXT_PUBLIC_NEWS_API_KEY=your_key
```

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

| | |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | production build |
| `npm run preview` | preview production build |
| `npm run generate` | static generation |

## Structure

```
app/
├── assets/styles/       global styles
├── components/          AppNavbar, ArticleCard, ThePagination
├── composables/         useNewsApi.ts
├── layouts/             default.vue
├── pages/               index.vue, news/[id].vue
└── types/               news.ts
```

## Notes

- NewsData.io paginates with a cursor token (`nextPage`), not page numbers. Navigation history is kept in memory and resets on refresh.
- On the free tier, `content`, `sentiment`, and `ai_*` fields are unavailable. The detail page only shows `title`, `description`, and `image_url`.
- The API key ends up in the client bundle via `runtimeConfig.public`. Fine for development; in production it should go through a server route.
