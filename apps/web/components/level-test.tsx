"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button, Card } from "@/components/ui";

type Option = {
  id: string;
  label: string;
  points: number;
};

type Question = {
  id: string;
  prompt: string;
  options: Option[];
};

type Level = "A1" | "A2" | "B1";

type LevelResult = {
  level: Level;
  score: number;
  summary: string;
  nextStep: string;
  recommendedCourses: { title: string; href: string; reason: string }[];
};

const questions: Question[] = [
  {
    id: "q1",
    prompt: "Choose the best translation for \"I am at home\".",
    options: [
      { id: "a", label: "Sono a casa", points: 2 },
      { id: "b", label: "Io casa sono", points: 0 },
      { id: "c", label: "Sono casa", points: 1 },
    ],
  },
  {
    id: "q2",
    prompt: "Which phrase means \"How much is it?\"",
    options: [
      { id: "a", label: "Quanto costa?", points: 2 },
      { id: "b", label: "Dove costa?", points: 0 },
      { id: "c", label: "Perche costa?", points: 0 },
    ],
  },
  {
    id: "q3",
    prompt: "Pick the correct form: Noi ___ in Italia.",
    options: [
      { id: "a", label: "abitiamo", points: 2 },
      { id: "b", label: "abita", points: 1 },
      { id: "c", label: "abitano", points: 0 },
    ],
  },
  {
    id: "q4",
    prompt: "Choose the natural response to \"Come stai?\"",
    options: [
      { id: "a", label: "Sto bene, grazie", points: 2 },
      { id: "b", label: "Io bene grazie tu", points: 1 },
      { id: "c", label: "Sono stai", points: 0 },
    ],
  },
  {
    id: "q5",
    prompt: "Which one is past tense for \"I ate\"?",
    options: [
      { id: "a", label: "Ho mangiato", points: 2 },
      { id: "b", label: "Mangio", points: 0 },
      { id: "c", label: "Mangiavo", points: 1 },
    ],
  },
  {
    id: "q6",
    prompt: "Pick the best sentence for ordering politely.",
    options: [
      { id: "a", label: "Vorrei un caffe, per favore", points: 2 },
      { id: "b", label: "Io volere caffe", points: 0 },
      { id: "c", label: "Dammi caffe", points: 1 },
    ],
  },
  {
    id: "q7",
    prompt: "What does \"Che bello!\" mean?",
    options: [
      { id: "a", label: "How nice!", points: 2 },
      { id: "b", label: "How difficult!", points: 0 },
      { id: "c", label: "I am tired", points: 0 },
    ],
  },
  {
    id: "q8",
    prompt: "Choose the best connector: Studio italiano ___ amo la cultura.",
    options: [
      { id: "a", label: "perche", points: 2 },
      { id: "b", label: "ma", points: 1 },
      { id: "c", label: "quando", points: 0 },
    ],
  },
  {
    id: "q9",
    prompt: "Which sentence sounds most natural?",
    options: [
      { id: "a", label: "Ci vediamo domani mattina", points: 2 },
      { id: "b", label: "Noi vedere domani", points: 0 },
      { id: "c", label: "Vedo io domani", points: 1 },
    ],
  },
  {
    id: "q10",
    prompt: "Pick the best translation for \"I have been studying for two months\".",
    options: [
      { id: "a", label: "Studio da due mesi", points: 2 },
      { id: "b", label: "Ho studiato in due mesi", points: 1 },
      { id: "c", label: "Sono studio due mesi", points: 0 },
    ],
  },
];

const recommendationsByLevel: Record<Level, LevelResult["recommendedCourses"]> = {
  A1: [
    {
      title: "Italian A1 Starter",
      href: "/courses/italian-a1-starter",
      reason: "Start with essential structure and daily speaking patterns.",
    },
    {
      title: "Travel Italian Pack",
      href: "/shop/50-essential-phrases",
      reason: "Use practical phrases in real situations from day one.",
    },
  ],
  A2: [
    {
      title: "Italian A2 Next Step",
      href: "/courses/italian-a2-next-step",
      reason: "Build longer sentences and improve listening confidence.",
    },
    {
      title: "Weekly Live Classroom",
      href: "/membership",
      reason: "Practice speaking with guided corrections every week.",
    },
  ],
  B1: [
    {
      title: "Pronunciation Mini-Course",
      href: "/courses/italian-pronunciation-mini",
      reason: "Refine rhythm and sound more natural in conversation.",
    },
    {
      title: "1:1 Coaching",
      href: "/bookings",
      reason: "Get personalized speaking feedback and advanced guidance.",
    },
  ],
};

function buildResult(score: number): LevelResult {
  if (score <= 10) {
    return {
      level: "A1",
      score,
      summary: "You have a beginner foundation. Focus on core patterns and useful daily phrases.",
      nextStep: "Start with A1 essentials and short speaking drills each week.",
      recommendedCourses: recommendationsByLevel.A1,
    };
  }
  if (score <= 16) {
    return {
      level: "A2",
      score,
      summary: "You are moving beyond basics. You can communicate, and now you need more fluency and range.",
      nextStep: "Train listening speed and conversation flow with structured A2 practice.",
      recommendedCourses: recommendationsByLevel.A2,
    };
  }
  return {
    level: "B1",
    score,
    summary: "You can already use Italian in many contexts. The next gain is natural delivery and confident spontaneity.",
    nextStep: "Focus on pronunciation, rhythm, and advanced speaking scenarios.",
    recommendedCourses: recommendationsByLevel.B1,
  };
}

export function LevelTest() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [showGate, setShowGate] = useState(false);
  const [pendingResult, setPendingResult] = useState<LevelResult | null>(null);
  const [result, setResult] = useState<LevelResult | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gateError, setGateError] = useState("");

  const unansweredCount = useMemo(
    () => questions.filter((question) => !answers[question.id]).length,
    [answers]
  );

  function handleQuizSubmit(event: FormEvent) {
    event.preventDefault();
    setAttemptedSubmit(true);
    if (unansweredCount > 0) {
      return;
    }

    const score = questions.reduce((total, question) => {
      const selected = question.options.find((option) => option.id === answers[question.id]);
      return total + (selected?.points || 0);
    }, 0);

    setPendingResult(buildResult(score));
    setResult(null);
    setShowGate(true);
  }

  function handleRevealResults(event: FormEvent) {
    event.preventDefault();
    setGateError("");
    if (!name.trim() || !email.trim()) {
      setGateError("Please enter your name and email to view your results.");
      return;
    }

    if (!pendingResult) {
      setGateError("Please submit the test first.");
      return;
    }

    setResult(pendingResult);
    setPendingResult(null);
    setShowGate(false);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleQuizSubmit} className="space-y-4" aria-label="Italian level test">
        {questions.map((question, index) => (
          <Card key={question.id}>
            <fieldset className="space-y-3">
              <legend className="text-base font-semibold">
                {index + 1}. {question.prompt}
              </legend>
              {question.options.map((option) => (
                <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-3 py-2 text-sm">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.id}
                    checked={answers[question.id] === option.id}
                    onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.id }))}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </fieldset>
          </Card>
        ))}
        {attemptedSubmit && unansweredCount > 0 ? (
          <p className="text-sm text-red-600">Please answer all questions before submitting.</p>
        ) : null}
        <Button>Submit test</Button>
      </form>

      {showGate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4">
          <Card className="w-full max-w-md bg-white">
            <h3 className="text-2xl font-semibold">Almost done</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Enter your details to unlock your test result and recommended course path.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleRevealResults}>
              <div>
                <label htmlFor="gate-name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foreground/60">Name</label>
                <input
                  id="gate-name"
                  type="text"
                  className="h-11 w-full rounded-xl border border-border px-3"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gate-email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foreground/60">Email</label>
                <input
                  id="gate-email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-border px-3"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {gateError ? <p className="text-sm text-red-600">{gateError}</p> : null}
              <Button className="w-full">Show my results</Button>
            </form>
          </Card>
        </div>
      ) : null}

      {result && !showGate ? (
        <section className="space-y-4" aria-live="polite">
          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Your result</p>
            <h2 className="text-3xl font-semibold">Estimated level: {result.level}</h2>
            <p className="text-sm text-foreground/75">Score: {result.score} / 20</p>
            <p className="text-sm text-foreground/80">{result.summary}</p>
            <p className="text-sm font-semibold text-foreground/85">Next step: {result.nextStep}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Recommended courses for you</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {result.recommendedCourses.map((course) => (
                <a key={course.title} href={course.href} className="rounded-2xl border border-border bg-white px-4 py-3 hover:bg-muted">
                  <p className="font-semibold">{course.title}</p>
                  <p className="text-sm text-foreground/70">{course.reason}</p>
                </a>
              ))}
            </div>
          </Card>
        </section>
      ) : null}
    </div>
  );
}
