# Jialin Cheng — Academic Homepage

A lightweight, single-page academic website for GitHub Pages. The site uses plain HTML, CSS, and a small amount of JavaScript for the footer year; it has no build step, third-party runtime dependency, analytics, or tracking.

## Local preview

From this repository:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Updating content

- Edit the introduction, research projects, engineering experience and education in `index.html`.
- Edit layout, color, typography, and responsive behavior in `styles.css`.
- The profile photo is `assets/Jialin_Cheng_Portrait.jpg`; preserve its original aspect ratio on desktop and mobile.
- `script.js` only updates the footer year. All navigation and content work without JavaScript.
- `files/Jialin_Cheng_CV.pdf` is the applicant-authorized public two-page CV. Replace it with the reviewed current two-page PDF when updating the CV; keep both download links working. Do not restore the former email-request link.
- Standing instruction (13 November 2026): every CV revision must also synchronize this public PDF from `/home/silver/projects/PhD_Application_2026/01_CV/CV_PhD_2pages.pdf`. After publication, verify the live download matches that canonical file by SHA-256 and confirm the latest-successful-deployment cleanup completes. No separate publishing confirmation is needed for these CV updates. If the PDF is unchanged, verify the existing live copy without creating a redundant deployment. Never copy the private application workspace or evidence files here.
- Add paper, code, Scholar, or ORCID links only after confirming that public disclosure is appropriate and the exact URL is verified.

## Public-disclosure policy

On 13 November 2026, the applicant requested public research-experience descriptions and a direct download of the current two-page CV. The page therefore uses CV-level project descriptions and verified personal contributions. Distinguish ongoing thesis goals from completed work, and research experience from formal publications.

Keep unpublished manuscript titles, acronyms, submission/review history, distinctive method details and unpublished numerical results off the page unless separately authorized. Internal reviews, application strategy, private source files and identifiers must never be copied into this public repository. The public CV contains only the specific application document authorized for publication.

## Design and accessibility

Use concise visitor-facing link labels: both CV links should read simply `CV`. Keep file format, page count and editing/validation notes out of the link text.

The homepage uses a compact academic profile: an identity/navigation rail on desktop and a single reading column on mobile. Research experience follows the introduction, with the question, contribution and scope of each project. Keep research questions distinct from demonstrated outcomes, use clear headings and readable line lengths, and retain the dates and scope of verified background records. The mathematics B.Sc. is a minor degree; UGA exchange studies are non-degree (January–July 2026).

Use native anchor navigation, a visible keyboard-focus state and skip link. Check narrow screens, keyboard use, direct section links, reduced motion, no-JavaScript rendering and printing when changing the layout. Keep the page free of runtime dependencies, analytics and remote font requests. Font stacks prefer locally available Lato (also used in the application CV) for body text and a restrained serif for the name, with system fallbacks.
