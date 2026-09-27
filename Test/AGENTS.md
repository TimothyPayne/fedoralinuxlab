# Working Rules

- Ask before making major assumptions.
- Keep language simple and practical.
- Flag unknown or conflicting facts.
- Do not publish, deploy, send, purchase, or connect external accounts without approval.
- Protect privacy and check factual claims against reliable sources.
- Keep changes accessible, focused, and affordable to maintain.

# Project Guide for AI Assistants

## Start here

- Read `START_HERE.md` for the project map.
- Read `current-project.md` for the current priorities and unresolved questions.
- Read `about-me.md` before drafting public-facing copy.
- Follow the working rules above. Treat uncertain facts and conflicting source material as unresolved until verified.

## Repository layout

- The site is a collection of static HTML pages in the repository root, with shared styles in `styles.css` and `assets/css/`, scripts in `js/`, and images in `images/`.
- Root pages and assets are the live site source. `Test/` is a separate, non-live working copy; do not edit it unless asked.
- `sources/` contains reference material and `outputs/` contains drafts. Do not treat either folder as live site content.
- Keep existing filenames and relative links stable. Ask before renaming pages or changing URL structure.

## Editing and release

- Make small, focused changes and preserve the existing page structure and style where practical.
- Check nearby pages and shared assets before introducing new patterns or dependencies.
- The workflow in `.github/workflows/ftp-deploy.yml` uploads the repository root when changes are pushed to `main`. Never push or deploy without the owner's explicit approval.
- Do not expose credentials, visitor data, or private information in files or output.
