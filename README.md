# Bite Me Cakes! Birmingham — React website

A multipage React (Vite + React Router) website for Bite Me Cakes! Birmingham, a luxury bespoke cake maker (Sheena) based in Netherhall Park, Birmingham. The theme follows the logo (charcoal, gold and rainbow).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. This is a single-page app, so the host must serve `index.html` for every route (`vercel.json` and a Netlify `public/_redirects` file are included).

## Pages

Home, Our Cakes (filterable gallery with lightbox), How to Order (steps, enquiry form, FAQ), About Sheena, 404.

## Notes

Concept website. The logo and photos belong to Bite Me Cakes! Birmingham; get their permission before using this as their live site. The enquiry form has no backend — submitting opens the visitor's email app addressed to the bakery. No prices are shown because every cake is bespoke.
