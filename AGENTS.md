# Agent Instructions

## Source Of Truth

- Deployment and routing: `app.yaml`.
- Web UI guidelines (when populated): `Web/guidelines/Guidelines.md`.

## Before You Start

- Read `AGENTS.md`.
- Check for nested `AGENTS.md` files in any subdirectories you touch; follow
  the most specific instructions.

## Project Layout

- `Web/`: Vite + React static site. Build output is `Web/dist/`.
- `app.yaml`: DigitalOcean App Platform config.

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
- Keep `app.yaml` aligned with the Web build output (`output_dir: dist`).

## Documentation Discipline

- Update `README.md` if setup or run steps change (if/when added).
- Always keep documentation up to date (especially `Docs/`).
