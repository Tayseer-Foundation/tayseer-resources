import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/alaamaat-tarqeem/')({
  head: () => ({ meta: [{ title: 'Punctuation — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: فاصلة بين الجمل القصيرة أو عناصر القائمة؟\nWhich expression matches this description: A comma between short clauses or list items?",
    "options": [
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "؟\nquestion mark",
      "!\nexclamation mark"
    ],
    "correctIndex": 0,
    "a": "،: فاصلة بين الجمل القصيرة أو عناصر القائمة.\nArabic comma: A comma between short clauses or list items."
  },
  {
    "q": "أيُّ مثالٍ يستعمل ،؟\nWhich example uses Arabic comma?",
    "options": [
      "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down.",
      "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort.",
      "أينَ كتابُكَ؟\nWhere is your book?",
      "ما أجملَ السماءَ!\nHow beautiful the sky is!"
    ],
    "correctIndex": 0,
    "a": "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down."
  },
  {
    "q": "أكمل بالنمط المناسب: جاء زيدٌ____ ثم جلسَ..\nComplete with the appropriate form: Zayd came, then he sat down.",
    "options": [
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "؟\nquestion mark",
      "!\nexclamation mark"
    ],
    "correctIndex": 0,
    "a": "، هو اللفظ المناسب في هذا المثال.\nArabic comma is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ ،؟\nWhat is the best description of Arabic comma?",
    "options": [
      "فاصلة بين الجمل القصيرة أو عناصر القائمة\nA comma between short clauses or list items",
      "فاصلة منقوطة قبل بيان السبب أو النتيجة\nA semicolon before an explanation of cause or result",
      "علامة استفهام في نهاية السؤال المباشر\nA question mark at the end of a direct question",
      "علامة تعجب بعد التعجب أو الانفعال\nAn exclamation mark after wonder or strong feeling"
    ],
    "correctIndex": 0,
    "a": "،: فاصلة بين الجمل القصيرة أو عناصر القائمة.\nArabic comma: A comma between short clauses or list items."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: فاصلة منقوطة قبل بيان السبب أو النتيجة؟\nWhich expression matches this description: A semicolon before an explanation of cause or result?",
    "options": [
      "؛\nArabic semicolon",
      "،\nArabic comma",
      "؟\nquestion mark",
      "!\nexclamation mark"
    ],
    "correctIndex": 0,
    "a": "؛: فاصلة منقوطة قبل بيان السبب أو النتيجة.\nArabic semicolon: A semicolon before an explanation of cause or result."
  },
  {
    "q": "أيُّ مثالٍ يستعمل ؛؟\nWhich example uses Arabic semicolon?",
    "options": [
      "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort.",
      "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down.",
      "أينَ كتابُكَ؟\nWhere is your book?",
      "ما أجملَ السماءَ!\nHow beautiful the sky is!"
    ],
    "correctIndex": 0,
    "a": "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort."
  },
  {
    "q": "أكمل بالنمط المناسب: اجتهدْ____ فإنَّ النجاحَ ثمرةُ العملِ..\nComplete with the appropriate form: Work hard; success is the fruit of effort.",
    "options": [
      "؛\nArabic semicolon",
      "؟\nquestion mark",
      "!\nexclamation mark",
      ":\ncolon"
    ],
    "correctIndex": 0,
    "a": "؛ هو اللفظ المناسب في هذا المثال.\nArabic semicolon is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ ؛؟\nWhat is the best description of Arabic semicolon?",
    "options": [
      "فاصلة منقوطة قبل بيان السبب أو النتيجة\nA semicolon before an explanation of cause or result",
      "فاصلة بين الجمل القصيرة أو عناصر القائمة\nA comma between short clauses or list items",
      "علامة استفهام في نهاية السؤال المباشر\nA question mark at the end of a direct question",
      "علامة تعجب بعد التعجب أو الانفعال\nAn exclamation mark after wonder or strong feeling"
    ],
    "correctIndex": 0,
    "a": "؛: فاصلة منقوطة قبل بيان السبب أو النتيجة.\nArabic semicolon: A semicolon before an explanation of cause or result."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: علامة استفهام في نهاية السؤال المباشر؟\nWhich expression matches this description: A question mark at the end of a direct question?",
    "options": [
      "؟\nquestion mark",
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "!\nexclamation mark"
    ],
    "correctIndex": 0,
    "a": "؟: علامة استفهام في نهاية السؤال المباشر.\nquestion mark: A question mark at the end of a direct question."
  },
  {
    "q": "أيُّ مثالٍ يستعمل ؟؟\nWhich example uses question mark?",
    "options": [
      "أينَ كتابُكَ؟\nWhere is your book?",
      "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down.",
      "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort.",
      "ما أجملَ السماءَ!\nHow beautiful the sky is!"
    ],
    "correctIndex": 0,
    "a": "أينَ كتابُكَ؟\nWhere is your book?"
  },
  {
    "q": "أكمل بالنمط المناسب: أينَ كتابُكَ____.\nComplete with the appropriate form: Where is your book?",
    "options": [
      "؟\nquestion mark",
      "!\nexclamation mark",
      ":\ncolon",
      "،\nArabic comma"
    ],
    "correctIndex": 0,
    "a": "؟ هو اللفظ المناسب في هذا المثال.\nquestion mark is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ ؟؟\nWhat is the best description of question mark?",
    "options": [
      "علامة استفهام في نهاية السؤال المباشر\nA question mark at the end of a direct question",
      "فاصلة بين الجمل القصيرة أو عناصر القائمة\nA comma between short clauses or list items",
      "فاصلة منقوطة قبل بيان السبب أو النتيجة\nA semicolon before an explanation of cause or result",
      "علامة تعجب بعد التعجب أو الانفعال\nAn exclamation mark after wonder or strong feeling"
    ],
    "correctIndex": 0,
    "a": "؟: علامة استفهام في نهاية السؤال المباشر.\nquestion mark: A question mark at the end of a direct question."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: علامة تعجب بعد التعجب أو الانفعال؟\nWhich expression matches this description: An exclamation mark after wonder or strong feeling?",
    "options": [
      "!\nexclamation mark",
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "؟\nquestion mark"
    ],
    "correctIndex": 0,
    "a": "!: علامة تعجب بعد التعجب أو الانفعال.\nexclamation mark: An exclamation mark after wonder or strong feeling."
  },
  {
    "q": "أيُّ مثالٍ يستعمل !؟\nWhich example uses exclamation mark?",
    "options": [
      "ما أجملَ السماءَ!\nHow beautiful the sky is!",
      "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down.",
      "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort.",
      "أينَ كتابُكَ؟\nWhere is your book?"
    ],
    "correctIndex": 0,
    "a": "ما أجملَ السماءَ!\nHow beautiful the sky is!"
  },
  {
    "q": "أكمل بالنمط المناسب: ما أجملَ السماءَ____.\nComplete with the appropriate form: How beautiful the sky is!",
    "options": [
      "!\nexclamation mark",
      ":\ncolon",
      "،\nArabic comma",
      "؛\nArabic semicolon"
    ],
    "correctIndex": 0,
    "a": "! هو اللفظ المناسب في هذا المثال.\nexclamation mark is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ !؟\nWhat is the best description of exclamation mark?",
    "options": [
      "علامة تعجب بعد التعجب أو الانفعال\nAn exclamation mark after wonder or strong feeling",
      "فاصلة بين الجمل القصيرة أو عناصر القائمة\nA comma between short clauses or list items",
      "فاصلة منقوطة قبل بيان السبب أو النتيجة\nA semicolon before an explanation of cause or result",
      "علامة استفهام في نهاية السؤال المباشر\nA question mark at the end of a direct question"
    ],
    "correctIndex": 0,
    "a": "!: علامة تعجب بعد التعجب أو الانفعال.\nexclamation mark: An exclamation mark after wonder or strong feeling."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: نقطتان قبل القول أو المثال أو القائمة؟\nWhich expression matches this description: A colon before a quotation, example, or list?",
    "options": [
      ":\ncolon",
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "؟\nquestion mark"
    ],
    "correctIndex": 0,
    "a": ":: نقطتان قبل القول أو المثال أو القائمة.\ncolon: A colon before a quotation, example, or list."
  },
  {
    "q": "أيُّ مثالٍ يستعمل :؟\nWhich example uses colon?",
    "options": [
      "قال المدرسُ: «افتحوا الكتبَ».\nThe teacher said: “Open the books.”",
      "جاء زيدٌ، ثم جلسَ.\nZayd came, then he sat down.",
      "اجتهدْ؛ فإنَّ النجاحَ ثمرةُ العملِ.\nWork hard; success is the fruit of effort.",
      "أينَ كتابُكَ؟\nWhere is your book?"
    ],
    "correctIndex": 0,
    "a": "قال المدرسُ: «افتحوا الكتبَ».\nThe teacher said: “Open the books.”"
  },
  {
    "q": "أكمل بالنمط المناسب: قال المدرسُ____ «افتحوا الكتبَ»..\nComplete with the appropriate form: The teacher said: “Open the books.”",
    "options": [
      ":\ncolon",
      "،\nArabic comma",
      "؛\nArabic semicolon",
      "؟\nquestion mark"
    ],
    "correctIndex": 0,
    "a": ": هو اللفظ المناسب في هذا المثال.\ncolon is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ :؟\nWhat is the best description of colon?",
    "options": [
      "نقطتان قبل القول أو المثال أو القائمة\nA colon before a quotation, example, or list",
      "فاصلة بين الجمل القصيرة أو عناصر القائمة\nA comma between short clauses or list items",
      "فاصلة منقوطة قبل بيان السبب أو النتيجة\nA semicolon before an explanation of cause or result",
      "علامة استفهام في نهاية السؤال المباشر\nA question mark at the end of a direct question"
    ],
    "correctIndex": 0,
    "a": ":: نقطتان قبل القول أو المثال أو القائمة.\ncolon: A colon before a quotation, example, or list."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="علامات الترقيم" title="Punctuation" description="Use Arabic punctuation marks to make statements, questions, explanations, and exclamations clear." items={quizItems} />
}





