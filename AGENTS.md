# Agent Instructions

## Source Of Truth

- Deployment and routing: `app.yaml`.
- Mermaid auth and access notes: `Mermaid/AUTH.md`.
- Web UI guidelines (when populated): `Web/guidelines/Guidelines.md`.

## Before You Start

- Read `AGENTS.md`.
- Check for nested `AGENTS.md` files in any subdirectories you touch; follow
  the most specific instructions.

## Project Layout

- `Web/`: Vite + React static site. Build output is `Web/dist/`.
- `Mermaid/`: static Mermaid diagram projects (each client is a subfolder).
- `Mermaid/nginx/`: optional Nginx basic-auth config for Mermaid.
- `app.yaml`: DigitalOcean App Platform config.

## UI + Auth Conventions

- Mermaid is file-based only; enforce auth at the edge (Cloudflare Access or
  Nginx basic auth) and do not add application-level login.
- Keep the main web placeholder lightweight; it will be replaced by a template.

## Working Style

- If something is unknown or might be outdated, say so explicitly rather than
  guessing.
- Path case corrections: when a user references a path with incorrect case,
  silently use the filesystem-correct case.
- Stay focused on the current request; ask before changing unrelated files or
  content.
- Tooling available: Mermaid CLI (`mmdc`) can be used where required.
- No destructive commands unless explicitly requested (for example, `git reset`,
  `git clean`, `git restore`, `rm`).
- Worktree safety: never discard or revert uncommitted changes, especially ones
  not created in the current task context.
- If unrelated changes are present, leave them be and do not ask about them.
- Third-party libraries: use only the latest stable release unless no stable
  release exists.
- Code files must not exceed 500 lines unless explicitly requested.
- Commits: only create commits when asked; never create empty commits; push when
  explicitly requested.

## Build + Launch

- Web build command: `npm install && npm run build` (Vite). Output: `Web/dist/`.
- Keep `app.yaml` aligned with the Web build output (`output_dir: dist`).

## Documentation Discipline

- Update `Mermaid/AUTH.md` when auth or access paths change.
- Update `README.md` if setup or run steps change (if/when added).
