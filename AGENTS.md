# Repository Guidelines

## Project Structure & Module Organization
- Frontend lives in `src/` with `App.jsx` for layout, `main.jsx` for bootstrapping, and `styles.css` for theme tokens. Keep shared UI bits in `src/components/` if you add more pieces. Vite entry is `index.html`; build config is `vite.config.js`.
- Static assets can go in `src/assets/`; prefer importing them so Vite optimizes output. Avoid nesting more than two levels deep to keep imports readable.

## Build, Test, and Development Commands
- `npm install` — installs React, Vite, and plugin deps.
- `npm run dev` — start local dev server with HMR at port 5173.
- `npm run build` — production bundle (checks for import errors and type issues surfaced by Vite).
- `npm run preview` — serve the built assets locally to validate the production build.

## Coding Style & Naming Conventions
- Use modern React (function components, hooks) and keep files as ES modules. Prefer TypeScript-ready patterns even in JS (explicit props, avoid implicit any-style objects).
- Naming: components `PascalCase.jsx`, hooks `useThing.js`, utility modules `kebab-case.js`, styles `kebab-case.css`.
- Styling follows the design tokens in `styles.css`; extend via CSS variables instead of ad-hoc colors. Keep gradients purposeful and avoid default system fonts (Space Grotesk is the base).

## Clean Code & JSDoc (Robert C. Martin principles)
- Keep functions/components small and single-purpose; prefer early returns over deep nesting. Extract helpers when a block starts to do “one more thing.”
- Name things for intent (what/why) not type (`fetchProjects`, `formatCurrency`), avoid abbreviations, and remove dead/commented-out code.
- Replace magic values with well-named constants; limit boolean flags—prefer descriptive enums/strings. Pass data objects instead of long param lists.
- Comments explain intent, risks, or invariants (why), not obvious mechanics (what). Update or delete stale comments immediately.
- JSDoc for exported functions/components: short and specific. Example:
  ```
  /**
   * Renders a project card tile.
   * @param {{ title: string, summary: string, href: string }} props
   * @returns {JSX.Element}
   */
  ```
- Document side effects and expectations in JSDoc (`@returns`, `@param`, note mutations). Skip JSDoc on trivial inline callbacks; prefer it on public utilities and components.

## Testing Guidelines
- No test harness yet; favor `vitest` + `@testing-library/react` for units and `playwright` for flows. Mirror file names: `App.test.jsx` beside the component.
- Target >80% coverage on new modules; cover input validation, security-sensitive flows, and mobile-adjacent logic (e.g., responsive breakpoints).
- Run tests in CI and before PRs; gate merges on green tests and build.

## Commit & Pull Request Guidelines
- Commit messages: short imperative lines (`feat: add mobile onboarding hero`, `fix: tighten wallet rate limiter`). Squash trivial fixes before review.
- PRs should include: scope summary, screenshots/GIF for UI changes, list of test commands run, and any security considerations (auth, data handling).
- Link issues/tickets when available and note risk areas (performance, accessibility, service integrations).

## Security & Delivery Tips
- Keep secrets out of the repo; use env vars and document placeholders in `.env.example`. Lock dependencies regularly and check supply-chain alerts.
- Default to accessibility (semantic HTML, focus states) and performance budgets (audit bundle size when adding deps).
- For mobile or backend features, add traces/telemetry early to spot regressions across web and React Native clients.
