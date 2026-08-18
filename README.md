# Dr. Rusakova Clinic

Website for Dr. Rusakova Clinic: home page, treatment catalog, detailed treatment pages, contacts, and SEO metadata.

The project is built with Create React App, React Router, i18next, SCSS modules, GSAP, and `react-helmet-async`.

## Quick Start

```bash
npm install
npm start
```

Default local URL:

```text
http://localhost:3000
```

If the port is already in use:

```bash
PORT=3001 npm start
```

## Commands

```bash
npm start
```

Starts the development server.

```bash
npm run build
```

Builds the production version into the `build/` directory.

```bash
npm test -- --watchAll=false
```

Runs the test suite once without watch mode.

```bash
npm run lint:js
```

Runs ESLint for `src/**/*.{js,jsx}`.

## Project Structure

```text
src/
  app/                         # App, router provider, global styles
  pages/
    IntroPage/                 # Home page
    ClinicPage/                # Treatment catalog and treatment pages
    ContactPage/               # Contacts page
  shared/
    assets/                    # Shared images
    config/
      i18n/                    # i18next setup
      routerConfig/            # Treatment names and menu routes
      seo/                     # SITE_URL and default OG image
    ui/                        # Shared UI components

public/
  assets/clinics/              # Treatment images
  favicon/                     # Favicons and manifest
  locales/                     # JSON locale files
  sitemap.xml
  robots.txt
```

## Routing

Main routes are defined in:

```text
src/app/providers/router/ui/AppRouter.jsx
```

Treatment menu items and treatment page paths are defined in:

```text
src/shared/config/routerConfig/routerConfig.jsx
```

Current route structure:

```text
/                         # Home page
/clinic                   # Treatment catalog
/clinic/:id               # Detailed treatment page
/clinic/contacts          # Contacts page
```

The treatment `id` must match an object in `public/locales/ua/translation.json`.

## Editing Treatments and Prices

The main Ukrainian content is stored in:

```text
public/locales/ua/translation.json
```

There are two important sections in this file:

```text
price.list                # General price list
clinic[]                  # Detailed treatment pages
```

For most treatment price changes, update both places if the item appears in both the general price list and the detailed treatment page.

Example treatment page structure:

```json
{
  "id": "morpheus",
  "image": "morpheus.jpg",
  "title": "Morpheus 8",
  "subtitle": "...",
  "seoDescription": "...",
  "price": {
    "title": "Прайс",
    "priceList": [
      {
        "title": "",
        "list": [
          {
            "title": "Обличчя",
            "price": 12500
          }
        ]
      }
    ]
  }
}
```

Treatment images are loaded from:

```text
public/assets/clinics/<image>
```

## Adding a Treatment

1. Add the treatment image to `public/assets/clinics/`.
2. Add the treatment object to the `clinic` array in `public/locales/ua/translation.json`.
3. Add the menu item and route path in `src/shared/config/routerConfig/routerConfig.jsx`.
4. Add the URL to `public/sitemap.xml`.
5. Check the page at `/clinic/<id>`.
6. Run:

```bash
npm test -- --watchAll=false
npm run build
```

## Removing a Treatment

1. Remove the item from `routeConfig` and `RoutePath`.
2. Remove the treatment object from `public/locales/ua/translation.json`.
3. Remove the URL from `public/sitemap.xml`.
4. Remove the image from `public/assets/clinics/` if it is no longer used.
5. Check that no references remain:

```bash
rg "procedure-id|ProcedureName"
```

6. Run tests and build.

## Contacts

The contacts page is located here:

```text
src/pages/ContactPage/ui/ContactPage.jsx
src/pages/ContactPage/ui/ContactPage.module.scss
```

The schedule, phone number, and Instagram link are currently written directly in the JSX component. The page SEO description is also set in `ContactPage.jsx` through the `SeoHead` component.

## SEO

SEO component:

```text
src/shared/ui/SeoHead/SeoHead.jsx
```

Site SEO config:

```text
src/shared/config/seo/seoConfig.js
```

When adding or removing pages, update:

```text
public/sitemap.xml
public/robots.txt
```

Favicons and manifest are linked from `public/index.html` with absolute paths:

```html
<link rel="manifest" href="/favicon/site.webmanifest" />
```

This matters for nested routes such as `/clinic/contacts`.

## Localization

i18next is configured in:

```text
src/shared/config/i18n/i18next.jsx
```

Locale files:

```text
public/locales/ua/translation.json
public/locales/en/translation.json
public/locales/ru/translation.json
```

Fallback language: `ua`.

## Images

Shared images:

```text
src/shared/assets/
```

Treatment images:

```text
public/assets/clinics/
```

For treatment pages, the `image` field in JSON must reference a file from `public/assets/clinics/`.

## Pre-Deployment Check

Minimum checklist:

```bash
npm test -- --watchAll=false
npm run build
```

For visual changes, also check:

- desktop and mobile viewports;
- photos do not overlap text;
- browser console has no errors;
- `/clinic`, `/clinic/contacts`, and changed `/clinic/<id>` pages.

## Known Warnings

The build may show warnings like:

```text
Browserslist: browsers data (caniuse-lite) is old
Sass @import rules are deprecated
```

These warnings do not block the build, but they can be cleaned up separately during technical maintenance.
