# ISRO Lunar Ice Detection — Website

A fully static, single-file website built from your hackathon pipeline code.

## Deploy in 60 seconds

### Option A — GitHub Pages (free, permanent URL)
1. Create a new GitHub repo (e.g. `isro-lunar-ice`)
2. Drop `index.html` into the root
3. Go to **Settings → Pages → Source → main / root**
4. Your site is live at `https://<you>.github.io/isro-lunar-ice`

### Option B — Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the `isro-lunar-ice/` folder onto the page
3. Live URL in ~10 seconds

### Option C — Vercel
```bash
npm i -g vercel
cd isro-lunar-ice
vercel --prod
```

### Option D — Local preview
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## What's inside

| Section | Content |
|---------|---------|
| Hero | Key radar thresholds, mission stats |
| Overview | Four deliverable cards |
| Pipeline | 4-phase 30-hour timeline |
| Radar | CPR/DOP formulas + **live interactive classifier** |
| Terrain | Landing site criteria + procedural slope map |
| Path Planning | Cost function + simulated path metrics |
| Ice Volume | 3-scenario volume bars (animated) |
| Code | Syntax-highlighted tabs for all 3 modules |
| Rubric | Full judging rubric alignment table |
| Checklist | Clickable pre-submission checklist (state saved) |

## No build step required
Pure HTML + CSS + vanilla JS. Zero npm, zero bundler.
