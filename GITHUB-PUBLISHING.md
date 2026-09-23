# GitHub Publishing Guide

## Create the repository

1. Create an empty GitHub repository, for example `radioready`.
2. Do not initialize it with another README, license, or `.gitignore`.
3. Extract this ZIP so `index.html` and `README.md` are at the repository root.
4. From the extracted directory, run:

```sh
git init
git add .
git commit -m "Release RADIOREADY v1.0.0"
git branch -M main
git remote add origin https://github.com/OWNER/radioready.git
git push -u origin main
```

Replace `OWNER` with the GitHub user or organization.

## Enable GitHub Pages

The included workflow publishes the repository root automatically.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Push to `main`, or run the **Deploy static site to GitHub Pages** workflow manually.

The deployed application remains entirely client-side. No secrets or environment variables are required.

## Recommended repository settings

- Enable Issues and Discussions only if they will be monitored.
- Enable private vulnerability reporting under **Settings → Security**.
- Protect `main` if multiple contributors will have write access.
- Require the **Validate static application** workflow before merging.
- Create a `v1.0.0` release and attach the distribution ZIP and checksum.

## Static-host alternative

Only `index.html` is required for ordinary static hosting. Upload it unchanged to the intended route.
