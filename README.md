# LunaMatch + ISRO Lunar Ice Pipeline

Combined project: the full **LunaMatch** stack from
[harmannmahna/chandrayaanonmoon](https://github.com/harmannmahna/chandrayaanonmoon)
merged with this repo’s original **ISRO Chandrayaan-2 DFSAR** pipeline briefing site.

| Piece | What you get |
|-------|----------------|
| LunaMatch app | Image registration, LUNA/ICE mission planner, Solar lab, briefing, 3D Moon |
| Hackathon Pipeline | Original static site — live CPR/DOP classifier, terrain map, path metrics, volume bars, code tabs, rubric, checklist |
| Backend | FastAPI + OpenCV (CLAHE / RANSAC / ice screening) + optional Postgres/Redis/MinIO platform |

## Quick start (local demo)

```bash
# Frontend
cd frontend && npm install && npm run dev
# → http://127.0.0.1:5173

# Backend (separate terminal; needed for Register / CLAHE upload)
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
# → http://127.0.0.1:8000
```

Open **http://127.0.0.1:5173** — Vite proxies `/api` to the backend.

| Route | Content |
|-------|---------|
| `/` | Landing + 3D Moon |
| `/register` | Image registration wizard |
| `/ice` | LUNA/ICE staged mission planner |
| `/pipeline` | Embedded ISRO hackathon pipeline site |
| `/solar` | Solar & illumination |
| `/briefing` | Mission briefing |
| `/isro-pipeline/` | Standalone copy of the original static site |

Static-only preview of the pipeline site (no build):

```bash
python3 -m http.server 8080
# open http://localhost:8080/          (root index.html)
# or   http://localhost:8080/frontend/public/isro-pipeline/
```

## Docker Compose (full platform)

```bash
cp .env.example .env
docker compose up --build
```

See [`docs/PLATFORM.md`](docs/PLATFORM.md) and [`docs/ICE_DETECTION.md`](docs/ICE_DETECTION.md).

## Honesty notes

- SIH prototype — **not official ISRO software**.
- Ice CPR/DOP / planner outputs are illustrative unless labeled otherwise.
- No confirmed ice; no operational landing certification.
- Default matcher is **AKAZE + Lowe-ratio** unless optional AI weights are installed.

## Source merge

- App & backend: adapted from `harmannmahna/chandrayaanonmoon` (LunaMatch).
- Pipeline briefing UI: original `index.html` from this repository, also served at
  `frontend/public/isro-pipeline/` and routed at `/pipeline`.
