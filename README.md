# UXR portfolio (full-width design)

Edit Markdown files on github.com. GitHub rebuilds the site when you commit.

## Installing this version
1. Upload everything in this folder to the root of your repo (it replaces the old files).
2. Delete the old `about.md` from your repo. The About section is now on the home page.
3. Open `_config.yml` and re-enter your name, tagline, email and LinkedIn link.
   Keep `baseurl: "/garrystein.github.io"` as it is.

## Where to edit things
| What | File |
| --- | --- |
| Name, email, LinkedIn, resume link | `_config.yml` |
| Headline, intro line, quick facts, skills, contact text | top of `index.md` (between the `---` lines) |
| "About me" paragraphs | below the `---` in `index.md` |
| Case studies | files in the `_work` folder |
| Colors, fonts, sizes | top of `assets/css/style.css` |

## Adding a case study
Copy `_work/example-study.md`, rename it (for example `_work/checkout-research.md`), and edit it. Change `year`, `order` (1 shows first) and the other details at the top. It appears on the home page automatically. Delete the two example files when you have your own.

The "On this page" menu on the left is built from your `##` headings.

## Building blocks for case studies
Put `{: .name}` on the line right after a list or quote.

- Research questions as large lines: a list, then `{: .questions}`
- Cards (methods, impact): a list where each item starts with a bold title, then `{: .cards}`
- Big numbers: a list where each item starts with a bold number, then `{: .stats}`
- Key finding box: a `>` quote, then `{: .finding}`

See `_work/example-study.md` for each one in use.

## Images
Save to `images/`, then add: `![Describe the image]({{ '/images/name.png' | relative_url }})`
Put a caption in italics on the next line: `*Caption text*`

## Resume
Upload a PDF to the `assets` folder, then in `_config.yml` remove the `#` before `resume:` and set it to `/assets/yourfile.pdf`.

## Company logo or picture on a project tile
1. Upload the picture to the `images` folder.
2. In the project file in `_work`, add these two lines at the top (between the `---` marks):
   ```
   company: Acme
   logo: /images/acme.png
   ```
