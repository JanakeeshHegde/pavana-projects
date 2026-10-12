# Pavana Projects website

Company profile website for Pavana Projects, built with React, Vite, React Router, and Tailwind CSS.

## Start the site

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Run the configured static checks with `npm run lint`.

## Project structure

```text
src/
  app/                  App shell and route definitions
  components/
    layout/              Shared navigation and footer
    shared/              Reusable page-level UI such as page hero and SEO metadata
  data/                  Shared company profile and capability data
  features/              Reusable components grouped by site topic
    contact/
    home/
    process/
    projects/
  pages/                 Active route pages
    legacy/               Older page implementations kept for reference
  styles/                Global styles, brand tokens, and shared utilities
  assets/                Source assets imported by the app
public/                   Static files served as-is (logos, images, SEO files)
docs/reference/            Company profile source documents and extracted text
```

`@/` is a Vite alias for `src/`, so local imports can use stable paths rather than long relative paths.

## Where to edit the website

| To change | Edit |
| --- | --- |
| A page's text, sections, and layout | Its file in `src/pages/` |
| Company name, contact details, service and project data | `src/data/company-profile.js` |
| Main navigation or footer | `src/components/layout/` |
| Shared page heading or SEO behavior | `src/components/shared/` |
| Home, project, process, or contact interactions | The matching folder under `src/features/` |
| Colors, typography, and global styling | `src/styles/global.css` |
| Site photos, logos, favicon, sitemap, and crawler rules | `public/` |

The active routes are `/`, `/about`, `/services`, `/projects`, `/process`, and `/contact`. Route definitions and redirects from older URLs are in `src/app/AppRoutes.jsx`. The `src/pages/legacy/` files are not active routes; they remain in the repository as reference implementations.

### Active page responsibilities

- `HomePage.jsx` — Company introduction, service overview, project scope, process controls, and consultation call to action.
- `AboutPage.jsx` — Company foundation, values, organization, and delivery principles.
- `ServicesPage.jsx` — PMC service disciplines and procurement stages.
- `ProjectsPage.jsx` — IT software park reference project and integrated project scope.
- `ProcessPage.jsx` — Project lifecycle, control systems, governance, and delivery workflow.
- `ContactPage.jsx` — Office details and consultation inquiry form.

The company profile PDF and related source materials are kept under `docs/reference/`. They are not loaded into the website at runtime.
