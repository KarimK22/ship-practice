# Shipping log

After each merge, add two lines: what you shipped, and what confused you.
Bring the confusing items to your next session.

<!-- Newest first. Example:
## 2026-10-23: Changed the page title
- Shipped: ...
- Confused by: ...
-->

## 2026-10-23: Pinned Yarn so Cloudflare can build (PR #1)
- Shipped: one line in package.json that makes every machine use Yarn 1.22.22, so Cloudflare installs exactly what I tested.
- Confused by: why Cloudflare runs a different command for pull requests (`wrangler preview`) than for dev/main, and which setting (production branch vs preview builds) controls that.
