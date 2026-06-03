# OPERATOR — Deploy to APK

## What you have
A full Progressive Web App (PWA) ready to become an Android APK.

---

## PHASE 1 — Deploy (5 min)

### Option A: GitHub Pages (free, fastest)
1. Create repo on github.com (e.g. `operator-app`)
2. Upload all files (index.html, manifest.json, sw.js, icons/)
3. Go to Settings → Pages → Deploy from main branch
4. Your URL: `https://yourusername.github.io/operator-app`

### Option B: Netlify (free, drag-and-drop)
1. Go to netlify.com
2. Drag the entire `operator-pwa` folder onto the deploy zone
3. Get instant HTTPS URL

### Option C: Vercel
1. `npm i -g vercel`
2. Run `vercel` inside the folder
3. Done — instant URL

---

## PHASE 2 — Generate APK via PWABuilder (10 min)

1. Go to **pwabuilder.com**
2. Enter your deployed HTTPS URL
3. Click **Start** — it'll validate your manifest + service worker
4. Choose **Android** → **Generate Package**
5. Select **"Android (Trusted Web Activity)"** — best option for modern Android
6. Download the `.zip`

---

## PHASE 3 — Sign & Install APK

### Quick install (no Play Store)
The zip from PWABuilder contains:
- `app-release-unsigned.apk` — install directly after signing
- Or `app-release.aab` — for Play Store upload

### Sign with PWABuilder key (easiest)
PWABuilder lets you sign in-browser with a generated key.
**Save the key file** — you'll need it for future updates.

### Enable Unknown Sources on Android
Settings → Apps → Special app access → Install unknown apps → Allow your browser/file manager

### Install
1. Transfer APK to phone (AirDrop, USB, or download link)
2. Tap the APK file → Install

---

## PHASE 4 — Nothing Phone Glyph (future)

The glyph integration requires the Nothing Glyph SDK (Android Native).
For now: the visual urgency system (white → red → crimson → black) IS the glyph metaphor, built directly into the UI.

When ready for native glyph:
- Wrap this PWA in a WebView inside an Android app
- Add Glyph SDK calls in the native layer
- Mirror urgency state (JS → Native bridge → Glyph API)

---

## App features built

- ✅ Onboarding profile (5 questions, stored locally)
- ✅ Night-before commitment screen
- ✅ Morning activation with timestamp
- ✅ Live countdown with urgency escalation
- ✅ Personalised override messages from your profile
- ✅ Color system: white → amber → orange → red → crimson → black
- ✅ Completion + reflection flow
- ✅ Missed day with drift anchor surfaced
- ✅ Streak tracking (90-day history)
- ✅ Full offline support (service worker)
- ✅ Installable PWA (manifest + icons)

---

## File structure
```
operator-pwa/
├── index.html      ← entire app
├── manifest.json   ← PWA config
├── sw.js           ← offline service worker
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md       ← this file
```
