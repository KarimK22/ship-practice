# ship-practice

A daily streak tracker with an XP bar. It's a throwaway practice repo for learning to ship (an 8-week plan).
It copies Lingo's setup in miniature: React + Vite + TypeScript + Tailwind, yarn, Cloudflare dev/prod sites.

## Run it on your computer

```bash
yarn          # install packages (first time, or after package.json changes)
yarn dev      # start the app at http://localhost:5173
yarn build    # check it compiles and build the files that get deployed
```

## Where things live

| File | What it is |
| --- | --- |
| `src/app/app.tsx` | The page: puts the pieces together |
| `src/components/xp-bar/` | The level + XP progress bar |
| `src/components/streak-card/` | The 🔥 streak count and Check in button |
| `src/core/streak/streak.ts` | The game rules (XP, levels, streaks) |
| `src/hooks/use-streak.ts` | Remembers your progress in the browser |
| `wrangler.jsonc` | Cloudflare hosting config (dev and prod sites) |

## How changes ship

```
feat/my-change  ──PR──▶  dev  (ship-practice-dev site)  ──PR──▶  main  (ship-practice-prod site)
```

- Never commit straight to `main`. It only changes through a pull request.
- After every merge, add two lines to `SHIPPING_LOG.md`.
- No passwords, API keys or real Lingo code in this repo. It's public.
