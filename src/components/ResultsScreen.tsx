import type { Category } from '@/data/questions';
import { Trophy, RotateCcw, Home, Check, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ResultsScreenProps {
  category: Category;
  answers: number[];
  onRetry: () => void;
  onHome: () => void;
}

export default function ResultsScreen({ category, answers, onRetry, onHome }: ResultsScreenProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const correctCount = answers.filter(
    (ans, i) => ans === category.questions[i].correctIndex
  ).length;
  const total = category.questions.length;
  const percentage = Math.round((correctCount / total) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Outstanding!', color: 'text-green-600', ring: 'from-green-400 to-emerald-500' };
    if (percentage >= 75) return { label: 'Great Job!', color: 'text-blue-600', ring: 'from-blue-400 to-cyan-500' };
    if (percentage >= 50) return { label: 'Good Effort', color: 'text-amber-600', ring: 'from-amber-400 to-orange-500' };
    return { label: 'Keep Practicing', color: 'text-rose-600', ring: 'from-rose-400 to-pink-500' };
  };

  const grade = getGrade();

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Score Card */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg">
            <Trophy className="h-8 w-8 text-white" />
          </div>

          {/* Circular Progress */}
          <div className="relative mx-auto mb-4 h-44 w-44">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                className="text-slate-100"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`[stop-color:currentColor] ${grade.color}`} />
                  <stop offset="100%" className={`[stop-color:currentColor] ${grade.color}`} />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-900">{percentage}%</span>
              <span className="text-sm font-medium text-slate-400">
                {correctCount}/{total} correct
              </span>
            </div>
          </div>

          <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.label}</h2>
          <p className="mt-1 text-slate-500">
            You completed the {category.name} quiz
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={onRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>
            <button
              onClick={onHome}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              <Home className="h-4 w-4" />
              Categories
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-900">Review Answers</h3>
          <div className="space-y-2">
            {category.questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correctIndex;
              const isExpanded = expandedIndex === i;

              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className="flex w-full items-center gap-3 px-5 py-3.5 text-left"
                  >
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {isCorrect ? (
                        <Check className="h-4 w-4 text-white" />
                      ) : (
                        <X className="h-4 w-4 text-white" />
                      )}
                    </span>
                    <span className="flex-1 truncate text-sm font-medium text-slate-700">
                      {q.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                      <div className="space-y-2 text-sm">
                        {q.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                              optIdx === q.correctIndex
                                ? 'bg-green-100 text-green-800'
                                : optIdx === userAnswer && !isCorrect
                                  ? 'bg-red-100 text-red-800'
                                  : 'text-slate-500'
                            }`}
                          >
                            <span className="font-bold">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                            {optIdx === q.correctIndex && (
                              <span className="ml-auto text-xs font-semibold uppercase">Correct</span>
                            )}
                            {optIdx === userAnswer && !isCorrect && (
                              <span className="ml-auto text-xs font-semibold uppercase">Your answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
