# ISRO Lunar Ice Detection — Pipeline Site (embedded)

This is the original single-file website from this repository, now also served
from `frontend/public/isro-pipeline/` and linked inside LunaMatch at `/pipeline`.

| Section | Content |
|---------|---------|
| Hero | Key radar thresholds, mission stats |
| Overview | Four deliverable cards |
| Pipeline | 4-phase 30-hour timeline |
| Radar | CPR/DOP formulas + live interactive classifier |
| Terrain | Landing site criteria + procedural slope map |
| Path Planning | Cost function + simulated path metrics |
| Ice Volume | 3-scenario volume bars (animated) |
| Code | Syntax-highlighted tabs for all 3 modules |
| Rubric | Full judging rubric alignment table |
| Checklist | Clickable pre-submission checklist (state saved) |

## No build step required

Pure HTML + CSS + vanilla JS. Zero npm, zero bundler for this page alone.

Open via LunaMatch (`/pipeline`) or directly:

```bash
# from repo root
python3 -m http.server 8080
# http://localhost:8080/index.html
# http://localhost:8080/frontend/public/isro-pipeline/
```
