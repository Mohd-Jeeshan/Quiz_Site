import { useState } from 'react';
import type { Category } from '@/data/questions';
import { Check, X, ChevronRight, ArrowLeft, Clock } from 'lucide-react';

interface QuizScreenProps {
  category: Category;
  onComplete: (answers: number[]) => void;
  onExit: () => void;
}

export default function QuizScreen({ category, onComplete, onExit }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = category.questions[currentIndex];
  const progress = ((currentIndex + (showResult ? 1 : 0)) / category.questions.length) * 100;
  const isCorrect = selected !== null && selected === question.correctIndex;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected ?? -1];
    setAnswers(newAnswers);
    setSelected(null);
    setShowResult(false);

    if (currentIndex + 1 < category.questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const getOptionClass = (index: number) => {
    const base =
      'flex w-full items-center gap-3 rounded-xl border-2 px-5 py-4 text-left text-sm font-medium transition-all duration-200 sm:text-base';

    if (!showResult) {
      return `${base} border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 cursor-pointer`;
    }

    if (index === question.correctIndex) {
      return `${base} border-green-500 bg-green-50 text-green-900`;
    }

    if (index === selected && index !== question.correctIndex) {
      return `${base} border-red-500 bg-red-50 text-red-900`;
    }

    return `${base} border-slate-200 bg-white text-slate-400`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit
          </button>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Clock className="h-4 w-4" />
            Question {currentIndex + 1} of {category.questions.length}
          </div>
        </div>

        {/* Category badge */}
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {category.name}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-8 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-slate-700 to-slate-900 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question card */}
        <div
          key={currentIndex}
          className="animate-[fadeIn_0.4s_ease-out] rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-8"
        >
          <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={showResult}
                className={getOptionClass(index)}
              >
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    showResult && index === question.correctIndex
                      ? 'border-green-500 bg-green-500 text-white'
                      : showResult && index === selected && index !== question.correctIndex
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-slate-300 text-slate-500'
                  }`}
                >
                  {showResult && index === question.correctIndex ? (
                    <Check className="h-4 w-4" />
                  ) : showResult && index === selected && index !== question.correctIndex ? (
                    <X className="h-4 w-4" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            ))}
          </div>

          {/* Result feedback */}
          {showResult && (
            <div
              className={`mt-6 flex items-center justify-between rounded-xl px-5 py-4 animate-[fadeIn_0.3s_ease-out] ${
                isCorrect ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-green-800">Correct!</span>
                  </>
                ) : (
                  <>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-red-800">
                      Wrong! Answer: {String.fromCharCode(65 + question.correctIndex)}
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
              >
                {currentIndex + 1 < category.questions.length ? 'Next' : 'See Results'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
