// ─── arabic-101.types.ts ─────────────────────────────────────────────────────
// Client-safe types and pure helpers only — no Node.js APIs.
// Imported by both client (route components) and server (arabic-101.server.ts).

export interface QuizItem {
  q: string
  a: string               // explanation shown after answering
  options?: string[]
  correctIndex?: number
}

export interface QuranExample {
  arabic: string
  transliteration?: string
  translation: string
  reference?: string      // e.g. "Al-Baqarah 2:255"
  note?: string
}

// Mirrors the JSON shape in content/. Fields prefixed with `_` are NOT in the
// file — they are injected by the server loading functions at build time.
export interface Lecture {
  id: string
  date?: string           // ISO date string e.g. "2024-11-04"
  title?: string
  summary?: string
  key_points?: string[]
  tags?: string[]
  transcript?: string     // raw SRT-style text, formatted on render
  questions?: Array<{ q?: string; a?: string } | string>
  quiz?: QuizItem[]
  quran_examples?: QuranExample[]
  platform?: string
  ts?: number
  media_id?: string
  source?: Record<string, string | number | boolean | null>
  audio_file?: string       // audio filename within the lecture's content dir (served from R2)
  // Runtime-injected by the server — not present in the content JSON:
  _audioUrl?: string
  _bookNumber?: number
  _lectureDir?: string
}

export interface Book {
  number: number
  name: string
  dir: string             // content/ directory name e.g. "book-1-lectures"
  lectures: Lecture[]
}

// ─── URL param helpers ────────────────────────────────────────────────────────
// TanStack Router route params must be a single string. We encode
// bookNumber + lectureDir into one param so the lecture URL stays clean:
//   /arabic-with-mufti-saim/lecture/1_lesson-01
//
// The first underscore is the delimiter — lectureDir may itself contain
// underscores, so we split on indexOf rather than split('_').

export function encodeLectureId(bookNumber: number, lectureDir: string): string {
  return `${bookNumber}_${lectureDir}`
}

export function decodeLectureId(lectureId: string): {
  bookNumber: number
  lectureDir: string
} {
  const underscoreIdx = lectureId.indexOf('_')
  const bookNumber = parseInt(lectureId.slice(0, underscoreIdx), 10)
  const lectureDir = lectureId.slice(underscoreIdx + 1)
  return { bookNumber, lectureDir }
}
