# TierStack — MVP static site prototype

A plain HTML/CSS/JS prototype. No build step, no npm installs, no external images or fonts.

## How to open it

Just open `index.html` in a browser:

- Double-click `index.html`, or
- From this folder: `python3 -m http.server 8000` then visit `http://localhost:8000` (optional — plain file open also works, because data is loaded via a script tag, not fetch)

Pages:

| File | What it is |
|---|---|
| `index.html` | Homepage: hero, the 6 launch categories, Patch Notes preview, newsletter placeholder |
| `rankings.html` | Tier lists per category (tab / `?cat=` switching) + tick-two-tools side-by-side comparison |
| `releases.html` | Full "New releases / Patch Notes" feed |
| `how-we-rank.html` | The 6 criteria, same-task testing, retest cadence, stale badge, "paying never changes rank" |
| `data.js` | **Single data file** — all categories, tools, tiers, releases, and criteria (`window.TIERSTACK_DATA`) |
| `app.js` | Renderer for all pages; reads `data.js` only |
| `styles.css` | Dark, gaming-adjacent responsive styling; no external assets |

The 6 launch categories (from `../blueprint.md`): AI Coding Agents/IDEs, Prompt-to-App Builders, Vibe-Coder Backend & Deploy Stack, General Chat Assistants, Agent Frameworks & Automation, AI for Game Dev. 38 real tools, 5–8 per category.

## What is real vs placeholder

**Real:**
- Tool names, category structure, ranking criteria/weights, test tasks, and trust rules — taken from the blueprint.
- Official-site links (root/homepage URLs only, e.g. `cursor.com`, `lovable.dev`; no guessed deep paths — where a deep path was not certain, the tool links to its official root domain).
- The comparison interaction, category filtering, and responsive layout — fully working in the browser.

**Placeholder / explicitly not claimed:**
- **All tier placements are "Editorial v0 — hands-on testing in progress."** They are a starting editorial view, not test results. There are no scores, no prices, no review-site ratings, and no fake stats anywhere on the site.
- **Patch Notes entries are example feed entries** describing real category-level directions in generic terms. No specific release dates or version numbers are asserted.
- **Newsletter forms are non-functional** (inputs disabled, submit shows a prototype notice). Nothing is saved or sent.
- No affiliate links, analytics, accounts, submissions portal, or search.

## Porting path to Astro / Vercel

1. Move `window.TIERSTACK_DATA` from `data.js` into JSON or an Astro content collection, one file/entry per tool, keeping the same fields (`name, category, tier, bestFor, verdict, url`) — the templates only depend on that schema.
2. Turn each page into an Astro route: `/` (index), `/rankings/[category]` (or keep the tabbed single page), `/new`, `/how-we-rank`, plus `/tools/[tool]` and `/compare/[a]-vs-[b]` from the blueprint.
3. Keep `styles.css` as global CSS or port selectors to Tailwind utilities; no markup depends on a framework.
4. Replace the newsletter placeholder with Beehiiv/Kit embed, add Plausible/PostHog, `/go/<tool>` affiliate redirects with click logging, Pagefind search, and per-tier-list OG images per the blueprint.
5. Deploy as a static site on Vercel or Netlify; content changes stay as data-file PRs that Max approves by merging.

## Trust rules baked into the copy (do not remove when porting)

- Tiers stay labelled "Editorial v0" until published same-task test logs exist for that category.
- Every page shows/notes last-tested state; tools untested for 90 days get a Stale badge.
- Paying never changes rank; sponsored slots, if ever added, must be visually separate and labelled.
- Never add prices, third-party ratings, or stats that were not measured in a published test log.

## Monetization (added 2026-10-18 — sponsor/affiliate-ready, NOT live)

Workpapers live in `../monetization/`:

| File | What it is |
|---|---|
| `../monetization/affiliate-research.md` | Verified affiliate/partner/referral research for all 38 tools, with official URLs found via search/fetch, rates quoted only from fetched official pages, and a “Max signup order” top 10 |
| `../monetization/affiliate-tracker.csv` | 38-row tracker (`tool,category,program_url,status,affiliate_link,date_joined,notes`). All rows start `not joined`; `affiliate_link` is blank for Max to paste after personal approval |
| `../monetization/sponsor-outreach.md` | 15 sponsor-fit companies from `data.js` + DM/email drafts. **Drafts only — nothing sent** |

Site changes:

- **Affiliate disclosure footer on every page** (incl. `releases.html`/`how-we-rank.html`): “Links may become affiliate links; rankings are never for sale.” This prototype wording is deliberate — no link *is* an affiliate link until Max joins a programme and swaps a real link in.
- **Featured / Partner slot** on `index.html` + `rankings.html`: dashed, outside every tier list, labelled `Sponsored`, empty-state copy inviting sponsors. Contact shown is `partners@tierstack.example` — **placeholder (.example), not a live inbox**; replace before publishing.
- **`sponsors.html`** (new, linked in every nav): media-kit one-pager — target audience (vibe coders/builders, agent builders, game devs), sponsor inventory (Featured slot, one Meta Report newsletter slot, Patch Notes New-Release Spotlight), trust rules (no paid rank changes, labelled always, publish who paid), and **“rates on request / TBD by Max”**. No traffic/subscriber/pricing numbers are claimed anywhere.
- No affiliate links, analytics, or payment wiring added. Tool links still go to official sites from `data.js`.

### What Max must do personally to turn revenue on

1. Join programmes in the signup order in `affiliate-research.md` (legal name, tax, banking/PayPal/Wise/Stripe Connect details — agent cannot do this).
2. After each approval, paste the real link into `affiliate-tracker.csv` (`status` → `joined`/`active`, `date_joined`), then swap that tool's `url` in `data.js` (or build the blueprint's `/go/<tool>` redirect) and update the disclosure wording from “may become” to “some links are”.
3. Replace `partners@tierstack.example` with a real inbox, set sponsor rates, and approve/send any outreach from `sponsor-outreach.md` himself.
4. Approve any sponsor deal/contract/payment personally (blueprint: money always needs Max).

Verification: `node --check data.js && node --check app.js` passes; static serve test returns 200 for all five pages (2026-10-18).
