# Tayseer

Arabic learning site for the Madina Series classes taught by Mufti Saim at Masjid
Hamza — lecture archive with transcripts and quizzes, plus standalone grammar and
vocabulary challenges.

Live at [tayseer.foundation](https://tayseer.foundation).

## Stack

TanStack Start (React 19) on Vite, with Nitro producing the server bundle.
Tailwind v4 for styling, shadcn components under `src/components/ui`.

## How content works

The site is static. There is no CMS, no database, and no API that accepts
content — nothing can be published to the running site. Adding a lecture means
committing a file and redeploying.

Lecture text lives in `content/<book>/<lecture>/<lecture>.json`:

```
content/
  book-1-lectures/
    2025-10-22/
      2025-10-22.json
  book-2-lectures/
    2026-11-04/
      2026-11-04.json
```

`src/routes/arabic-with-mufti-saim/-arabic-101.server.ts` picks these up with
`import.meta.glob`, so every lecture is compiled into the server bundle at build
time and no network call is made to render a page. Files prefixed with `-` are
excluded from the route tree by TanStack Router, which is how that module stays
server-only.

### Lecture JSON

| Field | Notes |
| --- | --- |
| `id`, `date`, `title` | `date` is `YYYY-MM-DD` and drives ordering |
| `summary`, `key_points`, `tags` | rendered on the lecture page |
| `questions` | student questions, usually `"[HH:MM:SS] Q: … — A: …"` strings |
| `quiz` | each item needs `q`, four `options`, an in-range `correctIndex`, and `a` for the explanation |
| `quran_examples` | each needs `arabic` and `reference`; `transliteration`, `translation` and `note` are optional |
| `transcript` | SRT text, formatted at render time |
| `audio_file` | filename only — the URL is built from `mediaBaseUrl` |

A quiz item without four `options` and a valid `correctIndex` renders as a dead
card the reader cannot advance past, so keep that shape exact.

### Audio

Audio is **not** in this repo. It lives in the Cloudflare R2 bucket
`tayseer-lectures`, mirroring the `content/` layout:

```
book-2-lectures/2026-11-04/2026-11-04.m4a
```

`mediaBaseUrl` in `src/config/site.ts` is the bucket's public base, and each
lecture's `audio_file` is appended to it. To add audio for a new lecture, upload
it to the matching key and set `audio_file`:

```bash
wrangler r2 object put \
  tayseer-lectures/book-2-lectures/<date>/<date>.m4a \
  --file <local>.m4a --remote
```

The bucket is currently served from its `r2.dev` public URL, which Cloudflare
rate-limits and does not intend for production traffic. Putting it behind a
custom domain requires the DNS zone to be on Cloudflare; the zone is on Porkbun
today.

## Configuration

`src/config/site.ts` holds site metadata, nav, course details, class schedule,
and `mediaBaseUrl`. Schedule and location changes need no code change.

`src/config/flags.ts` holds feature flags — `themeToggle` is off, which is why
`ThemeToggle` is in the tree but not rendered.

The app needs **no environment variables or credentials** to build or serve.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> .output/
```

Vitest and Testing Library are installed and `npm run test` is wired up, but no
test files exist yet, so that command currently exits non-zero.

## Deploy

The `Dockerfile` builds the Nitro output and runs it on Node. It is deployed to
Google Cloud Run (service `tayseer`, region `europe-west1`); `PORT` is injected
by Cloud Run at runtime, which is why the Dockerfile does not set it.

```bash
gcloud run deploy tayseer --source . --region europe-west1
```

`tayseer.foundation` is a Cloud Run domain mapping on the apex;
`www.tayseer.foundation` is a CNAME to the service's `run.app` hostname.

## Repo layout

| Path | |
| --- | --- |
| `content/` | lecture JSON, the published source of truth |
| `src/routes/arabic-with-mufti-saim/` | lecture index and detail pages |
| `src/routes/challenges/` | grammar and vocabulary challenges |
| `src/data/` | cognate and vocabulary datasets |
| `docs/` | Madina Book 1 and 2 syllabus checklists |
| `claude-skills/` | prompts used to draft lecture write-ups and quizzes |
| `ai-reviewer-critiques/` | review notes on lecture content |

`book-*-lectures/`, `s3-mirror/`, `new-recordings/` and `new-lectures-work/` are
gitignored local working directories, not part of the project.
