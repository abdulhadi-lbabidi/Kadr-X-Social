# Kadr X Social

## Visitor tracking

The page calls the existing Laravel `POST /api/visits` endpoint with
`{ "visitor_id": "<UUID>", "site": "social" }` once per document load. The UUID
is kept in localStorage, so refreshes increase views without adding visitors.
The call runs outside React effects to avoid StrictMode counting twice. Tracking
failures do not prevent the page from rendering.

During `npm run dev`, the API defaults to `http://127.0.0.1:8000/api`. Start the
Laravel API with `php artisan serve` in `form-api` after applying its migrations.
For a different API, copy `.env.example` to `.env.local` and set
`VITE_API_BASE_URL` (include `/api`, without `/visits`). Restart Vite after
changing this setting.

Before publishing, apply the backend migration
`2026_11_03_120000_add_site_to_site_visitors_table.php`, set
`VITE_API_BASE_URL` to your deployed HTTPS API, and rebuild. Production tracking
is disabled when this variable is missing; it never defaults to a visitor's
localhost. Add the deployed social site's exact origin to `SOCIAL_FRONTEND_URL`
in the API environment, then clear the Laravel configuration cache. Localhost
origins are already allowed.

The admin page **إحصائيات المواقع** shows separate visitors and views for the
main website and this social links page. Counts represent browser profiles;
clearing storage, private browsing or another device can create a new visitor.
Changing the site's origin also starts new localStorage identities. No visits
from before this integration are recorded.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
