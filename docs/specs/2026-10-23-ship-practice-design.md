# ship-practice: design

**Date:** 2026-10-23
**Purpose:** a safe practice repo for the 8-week "Learning to Ship" plan. It's shaped like Lingo's front end and deploy flow, so every habit transfers to the real product.

## Goal and success
- Week 1–2 gate: a feature branch pushed and a pull request merged into `dev` without help.
- The repo is small enough to read in full, but looks like Lingo's code (same stack, folders and naming).

## The app
A daily streak tracker with an XP bar. Progress is stored in the browser (localStorage).
- Check in once per calendar day: +10 XP.
- 100 XP per level. The level starts at 1.
- Streak: consecutive days with a check-in. If the last check-in was before yesterday, the streak shows 0. XP is kept.
- The rules live in `src/core/streak/streak.ts` as pure functions (data in, data out) so Week 3 tests are simple.

## Stack (Lingo in miniature)
- React 19 + Vite + TypeScript (strict) + Tailwind v4, installed with yarn.
- Lingo conventions: kebab-case files, `src/app` / `src/components` / `src/core` / `src/hooks`, named exports, arrow-function components, `type` props, barrel `index.ts` files, the `@/` import alias.
- Left out on purpose (YAGNI): shadcn/ui, router, Zustand, TanStack Query, i18n, ESLint/Prettier. Each one gets added when a week needs it.

## Hosting and branches (Lingo's model)
- Cloudflare Workers static assets on Karim's own free Cloudflare account (never Lingo's).
- `wrangler.jsonc` has env `dev` → `ship-practice-dev` and env `prod` → `ship-practice-prod`.
- Cloudflare's GitHub connection deploys on push: `dev` → dev site, `main` → prod site.
- `main` is protected: a pull request is required and force pushes are blocked.
- Flow: `feat/…` or `fix/…` → PR into `dev` → PR from `dev` into `main`.

## Safety rules
- Public repo: no passwords, keys, tokens or real Lingo code. `.gitignore` excludes `.env*` and `.dev.vars`.
- Commits use the GitHub private email address.
- Claude explains each git command and waits for approval. No force pushes, no direct commits to `main`.

## Later weeks (not built yet)
- Week 3–4: tests for `streak.ts` plus a GitHub check that runs them on every pull request.
- Week 5–6: features and restyling, shipped dev → main.
- Week 7–8: a tiny back end that saves streaks, on `dev` only.
