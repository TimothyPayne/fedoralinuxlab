<!-- .github/copilot-instructions.md -->
# Copilot / AI assistant instructions for this repo

Purpose: give an AI coding agent the minimal, actionable context to be productive editing this repository.

Repository snapshot (discoverable):
- Main entry: `index.html` at the repo root — this is the primary page to edit for content changes.
- No other AI/agent docs (AGENT.md/AGENTS.md/CLAUDE.md) or README detected. If you add one, prefer the repo root or `.github/`.

Immediate big-picture:
- This repository appears to be a small static site (single-page) where source HTML is served directly. There is no detected `package.json`, build config, or static-site generator config in the repo root.
- Primary workflows are manual edits to `index.html` and adding assets (place CSS in `css/` or `assets/css/`, JS in `js/` or `assets/js/`). Seek existing folders before creating new ones.

How to be useful (high-value tasks):
- Content edits: change `index.html` text and markup. Preserve inline comments and existing structure.
- Add assets: put images under `images/` or `assets/images/` and reference them with relative paths from `index.html`.
- Preview changes locally: if no build tool is present, run a simple static server from the project root:
  - Example: `python3 -m http.server 8000` (open http://localhost:8000).
  - If you find a `package.json` with scripts, prefer `npm start` / `npm run dev` instead.

What to look for before making edits:
- Check for `package.json`, `Makefile`, `_config.yml`, `eleventy.config.js`, `hugo`/`jekyll` folders — presence changes the workflow.
- Check `.github/workflows/` for CI or deploy flows (GitHub Pages, deploy scripts). If a workflow exists, follow its conventions (branch names, build steps).
- Look for `CNAME` or `gh-pages` branch references if making changes that affect URLs.

Project-specific conventions discovered here:
- Single-file site: prefer making lightweight, incremental edits to `index.html` rather than introducing a complex build step.
- Asset placement: use an `assets/` or top-level `css/`, `js/`, `images/` directory; match existing casing and pluralization.

When to ask the human owner:
- Before introducing a build system (npm, webpack, Eleventy, etc.).
- If a content restructure will change URLs (add redirects or rename files) — ask to avoid breaking published links.

Examples from this repo:
- Edit the page title and hero text in `index.html` for content updates.
- Add `assets/css/site.css` and link it from `index.html` rather than editing many inline styles (ask if preferred).

Quality gates and PR hints:
- Keep PRs small and focused: content or asset-only PRs are easiest to review.
- Include a short preview note in the PR body (e.g., "Previewed locally at http://localhost:8000").

Assumptions and limits:
- There were no build scripts or test suites discovered automatically — if you know a build exists elsewhere, tell the agent where it lives.
- Document only changes that can be validated by previewing `index.html` locally or by checking for CI workflows in `.github/workflows/`.

If any of the above is incorrect (you have a build step, a deploy flow, or CI), update this file or add `README.md` with the missing workflow and re-run the agent.

Next steps for the AI agent: inspect the repo root for `package.json`, `.github/workflows/`, and any top-level `assets/` or `css/` directories; then propose a one-line change and preview locally.
