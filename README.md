# StayFinder — Booking Search Experience

live demo: http://64.188.63.171:3230  
repo: https://github.com/pskudarnov/stayfinder-booking

## stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- lucide-react
- clsx
- ESLint
- Prettier

## features

- Search form with React Hook Form + Zod validation
- Listing filters (destination, type, amenities, price range, rating)
- Sorting (recommended, price asc/desc, rating)
- Responsive stay cards and detail pages
- Booking panel with mock totals
- Mobile filters toggle panel
- SEO metadata, robots and sitemap

## pages

- `/`
- `/search`
- `/stays/[slug]`

## architecture

- `src/data/*`: typed mock stays and destinations
- `src/lib/*`: format/search/validation/utils helpers
- `src/components/*`: layout, landing, search, stay details and shared UI
- `src/app/*`: routes + metadata + robots + sitemap

## mock data

- 10 listings with type, amenities, ratings, review counts, guest limits and visual themes

## how to run

```bash
npm install
npm run dev
```

## scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run format`
- `npm run format:check`

## deployment notes

- PM2 name: `stayfinder-booking`
- Port: `3230`
- Start command:

```bash
PORT=3230 pm2 start npm --name stayfinder-booking -- start
```

## what this project demonstrates

- Search form composition
- Filtering and sorting UX
- React Hook Form + Zod validation
- Listing/detail page composition
- Responsive booking interface
- TypeScript data modeling
- Accessibility and SEO basics
