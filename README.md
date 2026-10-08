# Agriturismo Fratelli Oddone

Website for Agriturismo Fratelli Oddone in Bardineto, Val Bormida. Built with React and Vite.

## Development

Install dependencies and start the local development server:

    pnpm install
    pnpm dev

## Production

Build the prerendered static site and preview it locally:

    pnpm build
    pnpm preview

The production output is written to dist.

## Routes

- /
- /alloggi
- /ristorante
- /bike-tour
- /attivita
- /offers
- /contatti

Route metadata is defined in src/metadata.js, and scripts/prerender.mjs generates the static HTML pages used for deployment.
