# Agent Instructions

## Source Of Truth

- Deployment: `.github/workflows/deploy.yml` (push to `main` builds `Web/` and
  rsyncs `Web/dist` to the shared server). `app.yaml` is the legacy DigitalOcean
  App Platform spec and no longer serves the domain.
- Web UI guidelines (when populated): `Web/guidelines/Guidelines.md`.

## Before You Start

- Read `AGENTS.md`.
- Check for nested `AGENTS.md` files in any subdirectories you touch; follow
  the most specific instructions.

## Project Layout

- `Web/`: Vite + React static site. Build output is `Web/dist/`.
- `.github/workflows/deploy.yml`: production deploy on push to `main`.
- `app.yaml`: legacy DigitalOcean App Platform config (not live).

## Hosting

- `www.unlikeotherai.com` and `unlikeotherai.com` resolve (Cloudflare, DNS only)
  to the shared server `178.105.82.46`, which also hosts nessie.works.
- The Caddy edge (`/srv/infra/caddy/Caddyfile`) proxies both names to the
  `unlikeother-web` container: `nginx:alpine` from
  `/srv/unlikeother-web/docker-compose.yml`, serving `/srv/unlikeother-web/dist`.
- The workflow's `DEPLOY_SSH_KEY` is restricted on the server to
  `rrsync /srv/unlikeother-web/dist`. Secrets: `DEPLOY_SSH_KEY`,
  `DEPLOY_KNOWN_HOSTS`, `DEPLOY_HOST`.

## UI + Auth Conventions

- Keep the main web placeholder lightweight; it will be replaced by a template.

## Working Style

- If something is unknown or might be outdated, say so explicitly rather than
  guessing.
- Path case corrections: when a user references a path with incorrect case,
  silently use the filesystem-correct case.
- Stay focused on the current request; ask before changing unrelated files or
  content.
- Tooling available: Mermaid CLI (`mmdc`) can be used where required.
- Always commit all changes and push after each turn.
- Deploy if there was a change to the code.
- No destructive commands unless explicitly requested (for example, `git reset`,
  `git clean`, `git restore`, `rm`).
- Worktree safety: never discard or revert uncommitted changes, especially ones
  not created in the current task context.
- If unrelated changes are present, leave them be and do not ask about them.
- Third-party libraries: use only the latest stable release unless no stable
  release exists.
- Code files must not exceed 500 lines unless explicitly requested.
- Commits: always create commits; never create empty commits; always push.

## Build + Launch

- Web build command: `npm install && npm run build` (Vite). Output: `Web/dist/`.
- Keep the deploy workflow aligned with the Web build output (`Web/dist`).
- Deploying is pushing to `main`; do not upload to the server by hand.

## Documentation Discipline

- Update `README.md` if setup or run steps change (if/when added).
- Always keep documentation up to date (especially `Docs/`).
