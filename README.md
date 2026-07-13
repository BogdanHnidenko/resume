# Resume Landing Page

A personal resume/portfolio landing page. React + TypeScript + SCSS, with UA/EN language switching and a light/dark theme toggle.

## Stack

- React 19 + TypeScript
- SCSS Modules (per-component styles, shared tokens in `src/styles`)
- Vite

## Editing your content

All copy lives in two files — edit these to add your own information, no component code needs to change:

- `src/i18n/ua.ts` — Ukrainian content
- `src/i18n/en.ts` — English content

Both follow the shape defined in `src/i18n/types.ts` (`Content` interface): name, role, hero text, `experience[]`, `skillGroups[]`, `projects[]`, contact copy, etc.

Contact links (email/LinkedIn/GitHub/Telegram) are in `src/components/Contact/contactLinks.ts`.

## Structure

```
src/
  assets/icons/       SVG icon data (icons.ts) + generic <Icon /> renderer
  i18n/               ua.ts / en.ts content, Content type, LanguageContext
  theme/              ThemeContext (light/dark, accent color, photo shape)
  styles/             SCSS design tokens, mixins, global styles
  components/
    ui/               Shared primitives: Button, Tag, Section, SectionHeading,
                       StatItem, RevealLink, LangSwitch, ThemeToggle, Container
    Nav/              Sticky nav + nav links
    Hero/              Hero section, badge, photo placeholder
    About/            About section + stats strip
    Experience/       Experience section + row
    Skills/           Skills section + skill group row
    Projects/         Projects section + project card
    Contact/          Contact section, form, link rows, thanks panel
    Footer/           Footer
```

Each section is broken into small, single-purpose components so pieces (e.g. `Tag`, `Button`, `ExperienceRow`) can be reused elsewhere.

## Scripts

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```
