# The Brain Battle — Event Website

A clean, modern, mobile-friendly event website for **The Brain Battle** (1-hour quiz & aptitude championship).

Registration is handled via the official Google Form (no custom backend required).

---

## Event Details (pre-filled)

| Field              | Value                                      |
|--------------------|--------------------------------------------|
| Event Name         | The Brain Battle                           |
| Tagline            | Think Fast. Compete Hard. Claim the Crown. |
| Date               | 7 November 2026                            |
| Time               | 4:00 PM – 5:00 PM IST                      |
| Duration           | 1 Hour                                     |
| Venue              | CBALC PG Building, 4th Floor               |
| Organizer          | Event Management Students                  |
| Registration       | Google Form (link in site)                 |

All content is controlled from a single file:  
`src/lib/event-config.ts`

---

## How to Deploy (Student-Friendly — No Terminal Required)

### Step 1 — Download
Download the project ZIP and extract it on your computer.

### Step 2 — Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it something like `brain-battle` or `the-brain-battle`.
4. Keep it **Public**.
5. Do **not** add a README or .gitignore (we already have them).
6. Click **Create repository**.

### Step 3 — Upload Files via GitHub Web Interface
1. On the new empty repository page, click **uploading an existing file**.
2. Drag and drop **all** the folders and files from the extracted project (including `src`, `public`, `package.json`, etc.).
3. Scroll down, add a commit message like “Initial commit – Brain Battle website”, and click **Commit changes**.

### Step 4 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New… → Project**.
3. Import the GitHub repository you just created.
4. Leave all settings as default (Framework Preset should detect Next.js).
5. Click **Deploy**.

### Step 5 — Done
After 1–2 minutes you will get a live URL (e.g. `https://brain-battle.vercel.app`).  
Share that link with participants.

---

## Customizing Content

Open `src/lib/event-config.ts` and edit any of these:

- Event name, tagline, description
- Date, time, venue
- Organizer contact details
- Google Form registration URL
- Schedule items
- Prize list
- Rules
- Social links

Save the file → push the change to GitHub → Vercel will automatically redeploy.

---

## Local Development (Optional — for advanced users)

If you have Node.js installed:

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Fully static / server-rendered — no database needed
- Registration via external Google Form

---

## Google Form Link

The Register buttons throughout the site point to:

https://docs.google.com/forms/d/e/1FAIpQLSfuRsYl8njQQ2LQf8vlm_o1---L7gWosk8O96VIoPUmq544aQ/viewform?usp=publish-editor

Change it in `src/lib/event-config.ts` → `registrationUrl` if needed.

---

Made for college event organizers who want a professional-looking site without complex setup.
