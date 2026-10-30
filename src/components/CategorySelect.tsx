import { categories, type Category } from '@/data/questions';
import {
  Atom,
  Scroll,
  Globe,
  Trophy,
  Clapperboard,
  Cpu,
  Code2,
  GitBranch,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Scroll,
  Globe,
  Trophy,
  Clapperboard,
  Cpu,
  Code2,
  GitBranch,
};

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string; gradient: string }> = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    hover: 'hover:border-emerald-400 hover:shadow-emerald-100',
    gradient: 'from-emerald-400 to-teal-500',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    hover: 'hover:border-amber-400 hover:shadow-amber-100',
    gradient: 'from-amber-400 to-orange-500',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    hover: 'hover:border-blue-400 hover:shadow-blue-100',
    gradient: 'from-blue-400 to-cyan-500',
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    hover: 'hover:border-rose-400 hover:shadow-rose-100',
    gradient: 'from-rose-400 to-pink-500',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    hover: 'hover:border-purple-400 hover:shadow-purple-100',
    gradient: 'from-purple-400 to-violet-500',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-100',
    gradient: 'from-cyan-400 to-sky-500',
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    hover: 'hover:border-indigo-400 hover:shadow-indigo-100',
    gradient: 'from-indigo-400 to-blue-500',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    hover: 'hover:border-orange-400 hover:shadow-orange-100',
    gradient: 'from-orange-400 to-red-500',
  },
};

interface CategorySelectProps {
  onSelect: (category: Category) => void;
}

export default function CategorySelect({ onSelect }: CategorySelectProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-slate-200">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Quiz Master
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Choose a category and test your knowledge with 20+ questions
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Atom;
            const colors = colorMap[category.color] ?? colorMap.emerald;

            return (
              <button
                key={category.id}
                onClick={() => onSelect(category)}
                style={{ animationDelay: `${index * 60}ms` }}
                className={`group relative overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.hover} animate-[fadeInUp_0.5s_ease-out_both]`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className={`rounded-full bg-white/80 px-3 py-1 text-xs font-semibold ${colors.text}`}>
                    {category.questions.length} questions
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>
                <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${colors.text} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
                  Start Quiz
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
