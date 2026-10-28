# VINCERE — Next.js Fragrance Catalogue

Luxury dark-purple catalogue inspired by the provided perfume menu.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

Push this folder to GitHub and import the repository into Vercel. Framework: Next.js. No environment variables required.

## Included

- 27 fragrances from the reference menu (18 men's, 9 women's)
- Five size options: 30ml RM25, 50ml RM45, 60ml RM55, 80ml RM65, 100ml RM80
- Search, category and scent-family filtering, saved favorites
- Product details with size selection and copyable enquiry text
- Responsive desktop/mobile design

## Customize

- Edit `perfumes` and `sizes` in `app/page.tsx`.
- Edit visual branding in `app/globals.css`.
- Replace the placeholder Instagram URL in `app/page.tsx`.
- The bottle illustrations are CSS-rendered placeholders (no third-party product photography).
- The product descriptions / scent notes are illustrative, not verified brand specifications.
- Product enquiry copies a message; no checkout, inventory tracking, or WhatsApp destination is configured.
