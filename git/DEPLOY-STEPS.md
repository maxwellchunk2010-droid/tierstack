# TierStack — Deploy to GitHub Pages (free, beginner steps)

You do **not** need to use Terminal / command line. Everything below is done by clicking in your web browser on github.com.

**Time:** about 5–10 minutes, plus 1–5 minutes waiting for GitHub to publish the site.

**What you will end up with:** a free live copy of TierStack at an address like:

```
https://USERNAME.github.io/tierstack/
```

Replace `USERNAME` everywhere in this guide with **your own GitHub username** (the name on your GitHub profile). Do not copy the word `USERNAME` literally.

> That live URL — with your real username in it — is the one to paste into the **Netlify partner “Website URL” field**. See Step 6.

---

## Before you start

1. Unzip `tierstack-github-pages.zip` if you received this folder as a zip.
2. Open the unzipped `github-pages` folder. You should see these files **directly inside it** (not inside another folder inside it):
   - `index.html`
   - `rankings.html`
   - `releases.html`
   - `how-we-rank.html`
   - `sponsors.html`
   - `styles.css`
   - `app.js`
   - `data.js`
   - `README.md`
   - `DEPLOY-STEPS.md` (this file — it is fine to upload it too)
   - `.nojekyll` (hidden — may not be visible, see Step 3)
3. Log in to your own GitHub account at <https://github.com>. Never share your password or login code with anyone.

**Important shape to remember:** the HTML files must end up at the **top level (root)** of the GitHub repo. Do **not** upload the zip itself, and do **not** drag the whole `github-pages` folder in a way that creates a `github-pages` folder inside the repo. Upload the *files inside* the folder, so the repo root shows `index.html`.

---

## Which repo name? (read this first — pick Option A unless you have a reason not to)

### Option A — RECOMMENDED for TierStack: a repo named `tierstack`

- Repo name: `tierstack`
- Your live site will be: `https://USERNAME.github.io/tierstack/`
- This is the URL described in the rest of this guide, and the one to give Netlify.

### Option B — the special `username.github.io` repo (optional, only if you want the shortest address)

- Instead of naming the repo `tierstack`, name it **exactly** `USERNAME.github.io` — i.e. your real GitHub username, then `.github.io`. Example: if your username is `maxcodes`, the repo must be `maxcodes.github.io`.
- Your live site will then be: `https://USERNAME.github.io/` (no `/tierstack/` at the end).
- Only choose this if you specifically want that root address and do not already have a repo with that name. If in doubt, use **Option A (`tierstack`)** — you can decide on a custom site later.

---

## Step 1 — Create the new public repo

1. Go to <https://github.com> and make sure you are logged in.
2. Click the **`+`** icon in the top-right corner, then click **New repository**.
   - Or go directly to <https://github.com/new>.
3. Fill in the form:
   - **Owner:** your account (should already be selected).
   - **Repository name:** type `tierstack`
     - For Option B only, type `USERNAME.github.io` instead (your real username).
   - **Description (optional):** e.g. `TierStack — AI tool rankings`
   - **Public / Private:** choose **Public**. (GitHub Pages on a free account needs a public repo.)
   - **Do NOT tick** “Add a README file”, “Add .gitignore”, or “Choose a license”. Leave those unticked — this folder already contains a README, and ticking them makes the first upload harder.
4. Click the green **Create repository** button.
5. GitHub will show an empty-repo page with lots of instructions. **Ignore all the code/terminal instructions.** You only need the upload link in the next step.

## Step 2 — Upload all files from this folder (drag-and-drop)

1. On that empty-repo page, click the link that says **“uploading an existing file”**.
   - If you have navigated away: open your new `tierstack` repo, click **Add file** (near the green **Code** button), then **Upload files**.
2. On your computer, open the unzipped `github-pages` folder so you can see the files inside it.
3. Select **all** the files in that folder:
   - Windows: click inside the folder, then **Ctrl + A**
   - Mac: click inside the folder, then **Command (⌘) + A**
4. Drag the selected files into the grey drag-and-drop box on the GitHub upload page. Or click **choose your files** on that page and select them all in the file picker.
5. Check the list on the GitHub page before moving on. You should see at least:
   `index.html`, `rankings.html`, `releases.html`, `how-we-rank.html`, `sponsors.html`, `styles.css`, `app.js`, `data.js`, `README.md`
   (`DEPLOY-STEPS.md` uploading too is fine and expected.)
6. Wait until every file shows as fully uploaded (no spinning / progress bars left).

### About the hidden `.nojekyll` file — do not worry if it is missing

- `.nojekyll` is an empty, hidden file whose name starts with a dot. Windows Explorer and macOS Finder hide files like that by default, so it **may not show up, and may not drag across**.
- **That is OK — it is optional for this site.** TierStack is plain HTML/CSS/JS with no Jekyll features, so the site works fine without it. `.nojekyll` just tells GitHub Pages “serve these files exactly as-is” as a belt-and-braces measure.
- If you *can* see it and include it, great. If you cannot see it or the upload misses it, **do not get stuck on it** — carry on. Do not rename or invent a replacement file.

## Step 3 — Commit the upload

1. Scroll down on the same upload page to the **Commit changes** box.
2. In the first commit box you can leave the default text, or type: `First deploy`
3. Make sure **Commit directly to the `main` branch** is selected (it is by default).
4. Click the green **Commit changes** button.
5. GitHub returns you to the repo home page. **Check the shape:** you should see `index.html` and the other files listed at the top level of the repo.
   - If instead you see only a single folder (e.g. `github-pages`) and have to click into it to find `index.html`, the folder got uploaded instead of its contents. Fix: delete that repo (repo **Settings** → bottom **Danger Zone** → **Delete this repository**) and repeat Steps 1–3, this time dragging the *files inside* the folder.

## Step 4 — Turn on GitHub Pages

1. In your `tierstack` repo, click **Settings** (top tab of the repo, next to Insights — not your profile settings).
2. In the left-hand sidebar of repo Settings, click **Pages** (under “Code and automation”).
3. Under **Build and deployment**:
   - **Source:** choose **Deploy from a branch**
   - **Branch:** choose **`main`**
   - **Folder:** choose **`/(root)`**
4. Click **Save**.
5. Nothing else on that page needs changing. Do not add a custom domain.

## Step 5 — Wait, then get your live URL

1. Wait **1–5 minutes**. GitHub needs a short while to build and publish the site.
2. Refresh the **Settings → Pages** page. A banner should appear near the top saying words to the effect of:
   > “Your site is live at `https://USERNAME.github.io/tierstack/`”
3. Your live site URL is:
   ```
   https://USERNAME.github.io/tierstack/
   ```
   with your real GitHub username in place of `USERNAME`.
   - For Option B (`USERNAME.github.io` repo), it is instead: `https://USERNAME.github.io/`
4. If the banner is not there yet, wait another couple of minutes and refresh again. A first publish taking up to ~10 minutes is not unusual.

## Step 6 — Paste this URL into Netlify

Copy your full live URL from Step 5 — e.g. `https://USERNAME.github.io/tierstack/` with your real username — and paste it into the **Netlify partner “Website URL” field**.

Use the GitHub Pages URL (the `github.io` address), **not** the repo address. The repo address looks like `https://github.com/USERNAME/tierstack` and is *not* the website — do not paste that one into Netlify.

## Step 7 — Post-deploy check (do this before you finish)

1. Open your live URL in the browser: `https://USERNAME.github.io/tierstack/`
   - The TierStack homepage should load, styled (dark theme), not plain unstyled text. If it looks unstyled, wait 2 minutes and hard-refresh (Windows: **Ctrl + F5**, Mac: **Command (⌘) + Shift + R**).
2. Click **Rankings** in the top navigation. The Rankings page should load and show the tier lists / categories.
3. On Rankings, open the **“Vibe-Coder Backend & Deploy Stack”** category if it is not already shown, find **Railway**, and click its link.
   - It should take you to **Railway** (`railway.com`). That confirms the Railway referral link survived the deploy and works.
4. Also click through **Patch Notes**, **How We Rank**, and **Sponsors** in the top navigation once, to confirm every page loads.

If a page shows “404”, first wait a few minutes and refresh — then double-check in **Settings → Pages** that the branch is `main` and the folder is `/(root)`, and that `index.html` sits at the top level of the repo (Step 3 check).

---

## Updating the site later

1. On your computer, replace the old file(s) in your copy of this folder with the new file(s).
2. In the GitHub repo, click **Add file → Upload files**, drag in the changed file(s), and **Commit changes** to `main` again. Uploading a file with the same name replaces the old one.
3. Wait 1–5 minutes and refresh the live URL. GitHub Pages republishes automatically on every commit to `main`.

## Notes

- **Cost:** GitHub Pages hosting for a public repo like this is free.
- **No build step:** do not add Jekyll, npm, GitHub Actions workflows, or a custom “build” — this is a plain static site and GitHub Pages should just serve the files.
- The affiliate disclosure in the footer of every page, and the Railway referral link, are intentional — please keep them as they are when copying or updating files.
