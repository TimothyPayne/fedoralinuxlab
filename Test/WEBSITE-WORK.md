# Test design handoff — 7 October 2026

This record stays inside Test to honor the requested edit scope. The repository-root WEBSITE-WORK.md remains unchanged by this task; its other unfinished tasks still apply.

## To-do list

- [x] Implement “See what you can do” on the homepage and four main learning pages.
- [x] Preserve navigation, filenames, existing exercises, and resource links.
- [x] Add distinct question/reply, paragraph/checklist, and meeting/action-list examples.
- [x] Add a copyable image activity, easy variation, meaningful image alternative text, and actual generated desk drawing.
- [x] Verify two free image services against official sources and explain account/usage limits separately from temporary trials.
- [x] Check main-page local links, fragments, headings, copy-target IDs, desktop/mobile layout, and representative copying.
- [ ] Owner design assessment. Next: review the local preview and request any adjustments.

## Current handoff

Changed only Test website files: index.html, StartHere.html, Practice.html, AIAtWork.html, GeekLab.html, assets/css/practice-room.css, and images/desk-line-art.png. Existing legacy resource bodies remain intact. New examples use readable HTML, not screenshots of instructions. Cream, teal, plum, and amber styling, generous spacing, focus indicators, and mobile stacking unify the entry pages. No dependencies or animation added.

Checks: all 90 local references on the five main pages resolve, including fragments. One main and h1 per page; unique IDs and valid copy targets. git diff --check passes. Visually inspected all five entry pages at desktop and mobile widths (1440 and 390); Practice also checked for horizontal overflow at 320. Homepage, first lesson, Practice, work activity, and Geek Lab render readably; desk asset loads at its correct 1536 × 1024 ratio. Navigation between main sections works. Native browser click on the checklist copy button produced “Copied” feedback; image-prompt copy button was exercised. Clipboard-denial behavior and a full keyboard/screen-reader audit were not tested; the existing selection fallback and readable prompts remain. Shared CSS also affects other pages using practice-room.css, but legacy pages were not comprehensively visually audited.

Image: built-in imagegen tool, using the exact visible prompt in AIAtWork.html. Generated result includes the requested four objects and an extra chair; alt text reflects that. Saved in Test/images/desk-line-art.png. Other responses are labeled illustrative examples, not live AI output.

Free services checked 7 October 2026: https://www.bing.com/images/create and https://explore.microsoft.com/en-us/bing/features/bing-image-creator/; https://helpx.adobe.com/firefly/web/get-started/access-the-app/access-adobe-firefly.html and https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html. Microsoft sources disagree on 10 versus 15 free fast creations; the page discloses this. Adobe lists limited daily free generations without a fixed number. No accounts created and no paid plans or trials started.

Preview: http://127.0.0.1:8765/ (localhost only). The server was restarted in a PTY after the first process stopped. If unavailable later, run `python3 -m http.server 8765 --bind 127.0.0.1 --directory /home/mothy/LUGpages/Test` or open Test/index.html directly in a browser. No promotion to root, commit, push, publication, or deployment.

## Visual site map — 7 October 2026

- [x] Added SiteMap.html with five areas: Beginner, Everyday Practice, AI at Work, Geek Lab, and About the Lab. Each includes a one-sentence introduction and a branching list of linked pages with short descriptions. Area jump links and all destinations are ordinary readable HTML links.
- [x] Added Site Map to the primary navigation on all 32 Test HTML pages (including the map itself); existing content and links retained.
- [x] Checked six entry pages and 146 local links/assets/fragments: no missing destinations. Navigation to QuickStart and back through its new Site Map link works. Area jump link works. Desktop (1440) and phone (390) layouts inspected; phone map has no horizontal overflow. git diff --check passes.
- [ ] Owner review of the map: http://127.0.0.1:8765/SiteMap.html.

Changed only Test; no promotion, publication, or deployment. The map describes the main visitor routes rather than listing every historical or unlinked page. The existing localhost preview server was still running and was reused. Earlier owner feedback approves the page design; the new map awaits assessment.

## Young learner page — prompt builder removal

- [x] Removed the Interactive Practice Prompt Builder from Test/ProjectFor10yrs.html at the owner's request and removed that page's prompt-builder.js inclusion.
- [x] Confirmed no builder fields or controls remain; all five missions, bonus activity, readable examples, and navigation remain. Shared script and other pages' builders unchanged. git diff --check passes.

Current handoff: local Test edit complete. Review at http://127.0.0.1:8765/ProjectFor10yrs.html (refresh an already-open page). No promotion or deployment. Original preserved outside the website in this chat's work directory.
