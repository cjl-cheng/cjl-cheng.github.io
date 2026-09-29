# Jialin Cheng — Academic Homepage

A lightweight, single-page academic website for GitHub Pages. The site uses plain HTML, CSS, and a small amount of JavaScript for the mobile navigation; it has no build step, third-party runtime dependency, analytics, or tracking.

## Local preview

From this repository:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Updating content

- Edit biographical, research, publication, and experience content in `index.html`.
- Edit layout, color, typography, and responsive behavior in `styles.css`.
- `script.js` only controls the mobile menu and footer year.
- Add a public CV under `files/` only after its facts and privacy boundary have been reviewed, then update the CV link in `index.html`.
- Add paper, code, Scholar, or ORCID links only after confirming that public disclosure is appropriate and the exact URL is verified.

## Public-disclosure policy

Do not identify anonymous or non-public research through titles, author lists, project names, venues, review status, distinctive method descriptions, results, or collaborator combinations. Add research outputs only when author-identifying public disclosure is appropriate. Internal reviews, application strategy, private contact details, and source-workspace files must never be copied into this public repository.
