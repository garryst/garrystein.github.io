# UXR portfolio

A Jekyll site for GitHub Pages. You edit Markdown files; GitHub builds the site.

## First setup (5 minutes)
1. Upload everything in this folder to the root of your repo.
2. Open `_config.yml` and change the name, email, and LinkedIn link.
3. If your repo is NOT named `username.github.io`, set `baseurl: "/your-repo-name"` in `_config.yml`.
4. In the repo, go to Settings > Pages and confirm it deploys from your main branch (root folder).
5. Wait a minute or two, then visit your Pages URL.

## Everyday edits
- **Home page text:** edit `index.md`.
- **About page:** edit `about.md`.
- **Add a case study:** copy `_work/example-study.md`, rename it (e.g. `_work/checkout-research.md`), and change the top section and the text. It appears on the home page automatically. The `order:` number controls the sort (1 comes first).
- **Images:** put them in `assets/images/` and add them with `![Alt text]({{ "/assets/images/name.png" | relative_url }})`. This works whether or not you set a baseurl.
- **Key finding callout:** write `> Your finding` then on the next line `{: .finding}`.
- **Highlighter effect on a phrase:** wrap it in `<mark>like this</mark>`.
- **Colors and fonts:** the top of `assets/css/style.css`.

You can edit any file directly on github.com (pencil icon) and the site updates when you commit.
