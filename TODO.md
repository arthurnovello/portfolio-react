# Roadmap (Phased Plan)

~3h/week budget. ~5 months to "shipped".

## Phase 0 — Monorepo bootstrap ✅
- Move `.git` from `portfolio-react/` to repo root
- Lift all `portfolio-react/` contents up
- Move design artifacts to `docs/`
- Track `gists/` and `docs/`
- Update `.gitignore`, `README.md`, `AGENTS.md`, `TODO.md`

## Phase 1 — Next.js + Tailwind scaffold
- [ ] Replace Vite with Next.js 15 (App Router)
- [ ] Install + configure Tailwind CSS v4
- [ ] Build `app/layout.tsx` with Header + Footer
- [ ] Build home page matching `docs/design/skeleton.png` (mock data):
  - [ ] Carousel placeholder
  - [ ] BlogList with 3 mock cards
  - [ ] GalleryPreview slideshow placeholder
- [ ] Mobile responsive from the start
- [ ] Cut branch: `feat/phase-1-nextjs-scaffold`

## Phase 2 — Backend foundation
- [ ] Create `backend/` folder
- [ ] `pyproject.toml` with FastAPI, duckdb, boto3, pydantic, pillow
- [ ] DuckDB schema (blog_posts, galleries, photos) + migration script
- [ ] `GET /api/health` returning DB row count
- [ ] Dockerfile for App Runner
- [ ] Local dev works: `uvicorn` + local `.duckdb` file
- [ ] Cut branch: `feat/phase-2-backend-foundation`

## Phase 3 — AWS CDK infrastructure
- [ ] Create `infra/` with CDK app in Python
- [ ] `StorageStack`: S3 bucket (versioned, block public access)
- [ ] `BackendStack`: ECR repo, App Runner service, IAM roles
- [ ] `CdnStack`: CloudFront distribution in front of S3
- [ ] One-command deploy: `cdk deploy`
- [ ] Cut branch: `feat/phase-3-cdk-infra`

## Phase 4 — Blog feature
- [ ] FastAPI: `GET /api/posts`, `GET /api/posts/{slug}`
- [ ] Next.js: `BlogList` (homepage preview) + `/blog/[slug]` page
- [ ] Markdown rendering with `react-markdown` + `remark-gfm`
- [ ] CLI: `python -m cli add-post` (inserts to local DuckDB, uploads to S3, triggers redeploy)
- [ ] Cut branch: `feat/phase-4-blog`

## Phase 5 — Gallery + image pipeline
- [ ] S3 bucket structure: `s3://anovello-photos/{gallery-id}/{photo}.jpg`
- [ ] CLI: `add-gallery`, `add-photo` (Pillow generates thumb/web/full)
- [ ] FastAPI: `GET /api/galleries`, `GET /api/galleries/{slug}`
- [ ] Signed S3 URLs (or public CloudFront URLs) for high-res viewing
- [ ] Next.js: `PhotoGallery` + Carousel
- [ ] `next/image` with custom CloudFront loader
- [ ] Cut branch: `feat/phase-5-gallery`

## Phase 6 — Deploy + domain
- [ ] Connect anovello.com.br on Vercel
- [ ] App Runner custom domain for API (or Vercel rewrites → API)
- [ ] CloudFront custom domain
- [ ] GitHub Actions: lint + test + CDK deploy on push to `main`
- [ ] Cut branch: `feat/phase-6-deploy`

## Phase 7 — SEO + polish
- [ ] Per-page `metadata` (title, description, OG image) in pt-BR
- [ ] `sitemap.xml` + `robots.txt` (Next.js auto-generates)
- [ ] OpenGraph dynamic image per post
- [ ] `feed.xml` (RSS)
- [ ] Google Search Console + Plausible/Umami analytics
- [ ] Cut branch: `feat/phase-7-seo`

## Phase 8 — (Optional) Admin UI
- Simple admin page (FastAPI + auth) → write to DuckDB
- Or stay with CLI only

---

## Reference

- **Stack decisions:** see README.md
- **Workflow:** see AGENTS.md
- **Branch naming:** see gists/git_branch_naming.md
