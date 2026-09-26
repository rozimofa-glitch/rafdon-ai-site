# RAFDON AI System Architecture

## Core rule
Data first. Never infer unavailable metrics as zero. Every metric carries source and capture time.

## Pipeline
1. Ingest official platform/Drive data.
2. Validate and mark missing data as `not_available`.
3. Store immutable account/content snapshots.
4. Calculate 7/30/90 day baselines.
5. Analyze content attributes and performance.
6. Run controlled experiments.
7. Store evidence-backed AI learnings.
8. Generate recommendations and revenue opportunities.

## Production layers
- Google Drive: creator video inbox.
- Supabase: database, queue, auth, secrets, scheduled workers.
- TikTok official APIs: authorized account/content data.
- AI/video worker: transcription, frames, OCR, content attributes.
- Dashboard: account, content, trends, experiments, revenue, system health.

## Safety and reliability
- No fake engagement or artificial traffic.
- No secrets in source control.
- Idempotent ingestion.
- Retry with backoff for transient failures.
- Audit every agent action.
- Human approval for external publishing until official publishing access is verified.
