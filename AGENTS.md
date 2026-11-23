## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project rules

This is a personal Korean dev blog built on the AstroPaper theme (v7.2.1).

- Use pnpm 11.3.0. Do not install with npm or yarn; `pnpm-lock.yaml` pins the tested versions.
- Before finishing any change, `pnpm lint`, `pnpm format:check`, and `pnpm build` must pass.

### Writing posts

- Posts live in `src/content/posts/<slug>.md`. The file name becomes the URL, so use English kebab-case.
- Frontmatter: `pubDatetime` (with `+09:00`), `title`, `description`, `tags`. Start new posts with `draft: true`.
- Write the body in Korean. Resize images before committing them.

### Changing the site

- Prefer `astro-paper.config.ts` and `src/custom/` (theme updates never touch these).
- Edit theme code (`src/components`, `src/layouts`, `src/pages`) only when necessary, and say why in the commit message. These files conflict when pulling theme updates.

### Deploying

- Pushing to `main` publishes the site via GitHub Actions. Push only when the user asks.
