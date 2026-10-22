# Chez Clarisse Mama Africa — independent website concept

Uncommissioned React website for a technology content series. **Not affiliated with or endorsed by Chez Clarisse Mama Africa.** No orders, bookings or payments are accepted.

## Run and deploy

Node 22+: `npm ci`, `npm run dev`. Build: `npm run build`. Output: `dist`. Vercel Vite preset or GitHub Pages static hosting; relative base supports both.

## Business problem and working features

Visitors unfamiliar with Ivorian dishes need understandable descriptions and a structured way to discuss group meals, rather than assembling the details across social posts and directories.

- Searchable, filterable the food story and working shortlist.
- Domain-specific gathering brief builder collecting Number of guests, Meal arrangement, Preferred date, Preferred time.
- Plain-text download, persistent local records, editable status, search and filter dashboard, JSON export.
- Original true WebGL the attiéké platter, scroll rotation, drag interaction, lazy loading, offscreen render suspension, reduced-motion support and image fallback.
- Responsive, keyboard accessible interface; semantic forms and native modal focus handling.

## Dashboard limits

The local planner uses browser localStorage. The separate shared concept inbox uses authenticated Supabase access. No real business transactions or automatic business notifications occur. Do not store confidential information. Back up using export. Counts use actual saved records and start at zero. A saved plan is not a confirmed order or reservation.

Before official business use: obtain business approval and asset rights, confirm current details, replace illustrative content, configure operational notifications, configure owner access, and verify operational policies.

## Research and media

Checked 21 October 2026. Website status: No official standalone website found in this research. Condé Nast Traveler points to Facebook; other guides identify an Instagram account. This is not proof of absence.

- https://ofadaa.com/accra/restaurants/chez-clarisse-mama-africa
- https://www.cntraveler.com/restaurants/accra/chez-clarisse
- https://restaurantguru.com/Chez-Clarisse-Mama-Africa-Accra
- https://www.instagram.com/chez_clarisse_mama_africa/

Primary linked presence: https://www.instagram.com/chez_clarisse_mama_africa/

`public/social.webp`: Business source imagery · see source credits. Source: https://ofadaa.com/accra/restaurants/chez-clarisse-mama-africa. Rights remain with their owners; permission for reuse is not established.

`public/hero.webp`: generated using the built-in imagegen tool. Premium editorial photo of grilled whole tilapia, attieke, alloco, tomatoes and onions on an emerald green platter over cream linen, golden sunlight, no logos or text; an illustrative concept, not a photographed restaurant dish.

All generated imagery and procedural 3D models are illustrative, not evidence of actual products, completed work or food served. No fabricated testimonials, sales or live availability. Business claims are sourced; proposed workflows are design inferences.

## Checks

Production build and dependency audit. Browser QA results and deployment URLs are recorded in the series content document. A passing build does not establish production backend readiness.

## Shared concept inbox

The public planner can optionally send a copy to the creator’s demonstration inbox after an explicit consent checkbox. This does not send anything to the real business. A shared Supabase backend provides bounded, validated submissions; anonymous users cannot read private records. Approved verified accounts can read their assigned sites, update statuses and internal notes, search, paginate and export records. Database policies enforce site membership; browser filtering alone is not trusted. The frontend includes only a publishable key. No service-role key is present.

Creator onboarding: open Dashboard, choose Register, create a password yourself, verify the account email, then sign in. The specifically approved creator email has been allowlisted privately. Other accounts receive no access by registering. The database isolation checks passed, but the creator’s email/password onboarding cannot be completed or verified until the user performs it. All sites remain uncommissioned concepts pending owner approval and operational handover.

Schema and rollback-based security tests are retained in the main workspace backend folder. The backend project was quoted at $0/month; no paid plan was selected. Usage limits and provider policies still apply.


## Multi-page redesign — 22 October 2026

Seven pages: home, food guide, gallery, story, gathering planner, visit and workspace. Charcoal/orange full-bleed restaurant interior, oversized condensed type, three credited gallery visuals (two public references and one labelled generated food illustration), rotating illustrative platter. Shortlists persist between pages. The Instagram profile links an older Google business.site page; no working standalone official domain was verified.

Direct HTML entrypoints are included in Vite’s production build, supporting direct navigation on static hosting. Source credits and image dimensions are retained in src/gallery.json. Public source images may include business marketing renders; publication by the business does not independently verify completed work. The workspace route offers both local drafts and the authenticated shared creator inbox. Creator email/password onboarding still requires the user to register, verify email and sign in.
