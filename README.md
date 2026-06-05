# Portfolio — anovello.com.br

Personal portfolio site (blog + photo gallery) for **arthurnovello**.

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 |
| Backend | Python 3.12 + FastAPI + DuckDB (read-only) |
| Auth | (none — public site) |
| Storage | AWS S3 (photos + DuckDB file) |
| CDN | AWS CloudFront (in front of S3 for images) |
| Frontend host | Vercel (free tier) |
| Backend host | AWS App Runner (container from ECR) |
| IaC | AWS CDK (Python) |
| CI/CD | GitHub Actions |
| Content authoring | Python CLI script (updates local DuckDB → uploads to S3 → triggers App Runner redeploy) |
| Language | pt-BR (URL slugs in English: `/blog`, `/gallery`) |
| Domain | anovello.com.br (Route 53) |

## Repo layout

```
.
├── frontend/                 # Next.js 15 (App Router)
├── backend/                  # FastAPI + DuckDB + CLI  (created in Phase 2)
├── infra/                    # AWS CDK (Python)        (created in Phase 3)
├── docs/                     # design + diagrams
│   ├── design/
│   │   ├── skeleton.pdf
│   │   └── skeleton.png
│   └── diagrams/
│       └── portfolio-diagram.drawio
├── gists/                    # workflow references
├── .github/workflows/        # CI/CD
├── README.md
└── AGENTS.md
```

## Data model (DuckDB)

- `blog_posts(id, slug, title, summary, content_md, cover_image, tags[], published_at, status)`
- `galleries(id, slug, title, description, location, date, cover_photo, sort_order, created_at)`
- `photos(id, gallery_id, s3_key_thumb, s3_key_web, s3_key_full, caption, location, date, camera, lens, film_stock, sort_order, taken_at)`

Image variants: thumbnail (400px), web (2000px), full (original).

## Development

| Command | Purpose |
|---|---|
| `cd frontend && npm install` | install frontend deps |
| `cd frontend && npm run dev` | start Next.js dev server (port 3000) |
| `cd frontend && npm run build` | production build |
| `cd backend && uv sync` | install Python deps (Phase 2+) |
| `cd backend && uvicorn app.main:app --reload` | run API locally (Phase 2+) |
| `cd backend && python -m cli add-post ...` | add a blog post via CLI (Phase 4+) |
| `cd infra && cdk deploy` | deploy AWS infrastructure (Phase 3+) |

See [AGENTS.md](./AGENTS.md) for the full agent workflow guide and [TODO.md](./TODO.md) for the roadmap.

## Roadmap (phases)

See [TODO.md](./TODO.md) for the full phased plan. Current phase: **0 — Monorepo bootstrap** (complete).

## License

Private — © arthurnovello
