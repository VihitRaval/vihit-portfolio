Vihit Raval — Portfolio

This is a simple static portfolio site built with plain HTML, CSS, and JavaScript. It contains the following files:

- index.html
- about.html
- services.html
- portfolio.html
- contact.html
- assets/css/styles.css
- assets/js/main.js

Hosting recommendations

1) GitHub Pages (recommended for a single-branch static site)
   - Create a Git repository in this folder:
     git init
     git add .
     git commit -m "Initial commit: portfolio site"
   - Create a GitHub repository (on github.com) named `vihitraval.github.io` (for a user site) or any name for a project site.
   - Add the remote and push:
     git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
     git branch -M main
     git push -u origin main
   - On GitHub: Repository > Settings > Pages and enable deployment from the `main` branch (root). The site will be available at `https://YOUR_USERNAME.github.io/REPO` or `https://YOUR_USERNAME.github.io/` for a user repo.

   Notes: A blank `.nojekyll` file is included to ensure GitHub Pages serves files correctly.

2) Netlify (recommended for easy continuous deploys)
   - Create a Git repo and push it to GitHub, GitLab, or Bitbucket.
   - Sign in to Netlify and connect your repository.
   - Set build command: (none) and publish directory: `/`.
   - Deploy — Netlify will host the static site and provide a free TLS domain.

3) Vercel (also great for static sites)
   - Similar to Netlify: connect your repo and deploy. Set build output directory to `/` and no build command.

Local preview

- Use any static file server to preview locally. Examples:

  Python 3:
  python3 -m http.server 8080

  Node (http-server):
  npx http-server -p 8080

Files added by me

- README.md — this file
- .nojekyll — blank file to prevent Jekyll processing on GitHub Pages

If you want, I can:
- Initialize a git repo here and push to a new GitHub repo (you'll need to provide the repo URL or grant access)
- Deploy this site to Netlify or Vercel for you (you'll need to connect your account)
- Add a simple GitHub Actions workflow to auto-deploy on push

Tell me which option you prefer and I'll proceed with the setup steps.

GitHub Actions automatic deploy (included)

This repository includes a GitHub Actions workflow that runs on pushes to the `main` branch and deploys the repository contents to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

How it works:

- Push to `main`.
- The workflow checks out the repository and publishes the repository root to the `gh-pages` branch.
- GitHub Pages serves content from the `gh-pages` branch (this repo uses the `gh-pages` branch for Pages).

Quick setup (one-time, on your machine):

1. Create a GitHub repository (name it `vihitraval.github.io` for a user site, or any name for a project site).
2. Run the helper script included here to initialize git and push:

```bash
cd "/Users/vihitraval/Desktop/Professional Website"
./push-and-deploy.sh git@github.com:YOUR_USERNAME/YOUR_REPO.git
```

3. After the push completes, go to GitHub > Repository > Settings > Pages and ensure "Branch: gh-pages" (or the default Pages setting) is selected as the source. If the Pages source is already set to the `gh-pages` branch, the site will be published automatically.

Notes & alternatives:
- If you prefer to keep GitHub Pages serving from the `main` branch, I can update the workflow to push there instead. That is a trivial change — tell me which branch you prefer.
- If you want a user site (https://YOUR_USERNAME.github.io), name the repository `YOUR_USERNAME.github.io`. For project sites, Pages will be at `https://YOUR_USERNAME.github.io/REPO`.

Permissions & tokens:
- The workflow uses the built-in `GITHUB_TOKEN` so you don't need to add extra secrets.

Need me to run it for you?
- If you provide the repository URL I will run the helper script here and push the code. If you prefer to run locally, copy the two commands above and replace `YOUR_USERNAME/YOUR_REPO` with your repo.
