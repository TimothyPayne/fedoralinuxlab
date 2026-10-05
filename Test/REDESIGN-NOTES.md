# Test-site first pass

Open `index.html` directly in a browser. No build or server is required.

## New files

- `StartHere.html`: five-minute packing-list exercise and a sample answer.
- `Practice.html`: dinner and plain-language explanation exercises.
- `AIAtWork.html`: fictional office-email practice.
- `GeekLab.html`: links to existing technical and enthusiast resources.
- `assets/css/practice-room.css`: responsive beginner-page styles.
- `js/practice-room.js`: optional copy buttons with manual selection fallback.
- `REDESIGN-NOTES.md`: this implementation record.

## Design and preservation

The homepage offers three paths and an obvious default starting point. Four shared navigation links connect the sections. System fonts, large targets, visible keyboard focus, flexible layouts, and short exercises keep the pages simple. No dependencies, accounts, tracking, or AI integration were added. Exercises happen in the visitor's separate AI chat.

All existing resource pages and filenames are retained. Their main content and original question builders remain unchanged. The data-center image is reused in Geek Lab. Practice links to the existing exercise, family, and learning pages; AI at Work links to office and job resources; Geek Lab links to Linux, coding, robots, and technology articles. The original ProjectLinks collection remains available through the robot-video link.

## Checks and limits

Checked 89 local links/assets on the five entry pages, fragment destinations, copy-target IDs, main landmarks, single page headings, and navigation. Verified main content of the 27 resource pages is unchanged. `git diff --check` passes. The external Microsoft Copilot destination was opened successfully during implementation.

A browser is not installed in this environment. Visual checks at mobile widths and 200% text enlargement, keyboard walkthroughs, and clipboard success/denial checks remain for browser review. With JavaScript disabled, questions remain visible and can be selected or typed manually.

## Later pass

- Review and simplify the original long resource pages and builders.
- Fact-check dated technology/work articles and audit their external links.
- Resolve the existing contact-information conflict before rewriting contact copy.
- Extend the beginner-page visual treatment to legacy page bodies.

Nothing outside Test was edited. Nothing was pushed or deployed.

## Existing files changed

- `1PageExample.html`
- `4truths.html`
- `BackupWindows.html`
- `ChatGPTexp.html`
- `Contact.html`
- `EducationLinks.html`
- `FastFoodRobots.html`
- `FedoraLinks.html`
- `GitHubAI.html`
- `GradeInflation.html`
- `InfoLinks.html`
- `LUGreasons.html`
- `NMatTeachngSkills.html`
- `NmJobs.html`
- `OfficeAI.html`
- `PhoneBU.html`
- `PracticeAI.html`
- `PracticeExercise.html`
- `ProjectFor10yrs.html`
- `ProjectLinks.html`
- `QuickStart.html`
- `RiverRouge.html`
- `SkillsLinks.html`
- `TaxPayers.html`
- `TheWhy.html`
- `assets/css/theme.css`
- `index.html`

## Single beginner conversation example

GitHubAI.html now contains the short adapted conversation lesson. The duplicate coding example was preserved outside the website checkout and removed from Test. Its navigation and sitemap entry were removed; the general practice builder remains in ProjectLinks.html.
