// ─── arabic-101.server.ts ────────────────────────────────────────────────────
// Static lecture loading. All lecture JSON lives in /content/<book>/<dir>/<dir>.json
// and is bundled into the server at build time via import.meta.glob — no S3, no
// API, no runtime fetches. Audio is served from the public R2 bucket; each
// lecture JSON carries its audio filename in `audio_file`.

import { courses } from '#/config/site'
import type { Book, Lecture } from './-arabic-101.types'

const course = courses['arabic-101']

const modules = import.meta.glob('/content/*/*/*.json', { eager: true }) as Record<
  string,
  { default?: Lecture } & Lecture
>

function sortByDate(lectures: Lecture[]): Lecture[] {
  return lectures.sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
    if (a.date) return -1
    if (b.date) return 1
    return 0
  })
}

// Built once at module init: book number → lectures sorted by date.
const books: Book[] = (() => {
  const byDir = new Map<string, Lecture[]>()

  for (const [path, mod] of Object.entries(modules)) {
    // path: /content/book-2-lectures/2026-04-29/2026-04-29.json
    const parts = path.split('/')
    const bookDir = parts[2]!
    const lectureDir = parts[3]!
    const bookCfg = course.books.find((b) => b.dir === bookDir)
    if (!bookCfg) continue

    const lecture: Lecture = { ...(mod.default ?? mod) }
    lecture._bookNumber = bookCfg.number
    lecture._lectureDir = lectureDir
    if (lecture.audio_file) {
      lecture._audioUrl = `${course.mediaBaseUrl}/${bookDir}/${lectureDir}/${lecture.audio_file}`
    }

    const group = byDir.get(bookDir) ?? []
    group.push(lecture)
    byDir.set(bookDir, group)
  }

  return course.books.map((cfg) => ({
    number: cfg.number,
    name: cfg.name,
    dir: cfg.dir,
    lectures: sortByDate(byDir.get(cfg.dir) ?? []),
  }))
})()

// ─── Public API ───────────────────────────────────────────────────────────────

export async function loadAllBooks(): Promise<Book[]> {
  return books
}

export async function loadLecture(
  bookNumber: number,
  lectureDir: string,
): Promise<Lecture | null> {
  const book = books.find((b) => b.number === bookNumber)
  return book?.lectures.find((l) => l._lectureDir === lectureDir) ?? null
}
