# Project Conventions & Workflow Guide

This is a **monorepo** for the `anovello.com.br` portfolio site. Three top-level components share one repo: `frontend/` (Next.js), `backend/` (FastAPI + DuckDB), `infra/` (AWS CDK). Follow these conventions.

## Repository conventions

- **Branching:** one branch per phase / feature, named `<tipo>/<short-name>` per `gists/git_branch_naming.md` (`feat/`, `chore/`, `bug/`, `hotfix/`, `junk/`).
- **Never work on `main` directly.** Cut a branch, push, open a PR.
- **Commits:** small, atomic, imperative mood (`feat(blog): add markdown rendering`, `chore: bump next 15`).
- **Don't commit secrets.** Use `.env.example` to document required variables; real values live in `.env` (gitignored).

## Frontend (`frontend/`)

Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

| Task | Command | Notes |
|---|---|---|
| Install | `npm install` | |
| Dev server | `npm run dev` | port 3000, auto-opens browser |
| Build | `npm run build` | outputs to `.next/` |
| Preview prod build | `npm run preview` | |
| Lint | `npm run lint` | (TBD Phase 1) |
| Typecheck | `npm run typecheck` | uses `tsc --noEmit` |
| Clean | `npm run clean` | rm -rf node_modules + .next + dist |

App Router lives under `app/`. Pages: `/`, `/blog`, `/blog/[slug]`, `/gallery`, `/gallery/[slug]`, `/about`.

## Backend (`backend/`) — *Phase 2+*

Stack: Python 3.12 + FastAPI + DuckDB + Pillow + boto3.

| Task | Command | Notes |
|---|---|---|
| Install | `uv sync` | uses `pyproject.toml` |
| Run API | `uvicorn app.main:app --reload` | port 8000 |
| CLI: add post | `python -m cli add-post --slug ... --title ...` | writes to local DuckDB |
| CLI: add gallery | `python -m cli add-gallery --slug ...` | |
| CLI: add photo | `python -m cli add-photo --gallery ... --file ...` | resizes with Pillow, uploads to S3 |
| Tests | `pytest` | |
| Docker build | `docker build -t portfolio-backend .` | for App Runner |

**DuckDB convention:** the API opens the DB **read-only**. All writes happen via the CLI on the developer's machine, then the new `.duckdb` file is uploaded to S3, then App Runner redeploys with the new file.

## Infrastructure (`infra/`) — *Phase 3+*

Stack: AWS CDK in Python.

| Task | Command | Notes |
|---|---|---|
| Synthesize | `cdk synth` | generates CloudFormation |
| Diff | `cdk diff` | shows pending changes |
| Deploy | `cdk deploy` | applies to AWS |
| Destroy | `cdk destroy` | tears down stacks |

Stacks: `StorageStack` (S3), `BackendStack` (ECR + App Runner + IAM), `CdnStack` (CloudFront).

## AWS account setup — *Phase 0 task for the user*

Required one-time:

1. Create an AWS account at https://aws.amazon.com
2. Enable MFA on the **root** user
3. Create an **IAM admin user** (e.g. `portfolio-dev`) with `AdministratorAccess`; never use root for daily work
4. Install and configure AWS CLI: `aws configure`
5. Set up a **billing alarm** at $5 and $15 in the Billing console
6. (Later) Register `anovello.com.br` on Route 53, or transfer from existing registrar

## Verification

- **Typecheck (frontend):** `cd frontend && npm run typecheck`
- **Lint (frontend):** `cd frontend && npm run lint` (after Phase 1 setup)
- **Tests (backend):** `cd backend && pytest` (after Phase 2 setup)
- **CDK diff (infra):** `cd infra && cdk diff` (after Phase 3 setup)

## See also

- `gists/git_branch_naming.md` — branch naming convention
- `gists/group-github-guide.md` — team git workflow (still applies solo)
- `TODO.md` — phased roadmap
