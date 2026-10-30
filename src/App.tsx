import { useState } from 'react';
import type { Category } from '@/data/questions';
import CategorySelect from '@/components/CategorySelect';
import QuizScreen from '@/components/QuizScreen';
import ResultsScreen from '@/components/ResultsScreen';

type Screen = 'home' | 'quiz' | 'results';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [category, setCategory] = useState<Category | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelectCategory = (cat: Category) => {
    setCategory(cat);
    setAnswers([]);
    setScreen('quiz');
  };

  const handleQuizComplete = (userAnswers: number[]) => {
    setAnswers(userAnswers);
    setScreen('results');
  };

  const handleExit = () => {
    setCategory(null);
    setAnswers([]);
    setScreen('home');
  };

  const handleRetry = () => {
    setAnswers([]);
    setScreen('quiz');
  };

  if (screen === 'home') {
    return <CategorySelect onSelect={handleSelectCategory} />;
  }

  if (screen === 'quiz' && category) {
    return (
      <QuizScreen
        category={category}
        onComplete={handleQuizComplete}
        onExit={handleExit}
      />
    );
  }

  if (screen === 'results' && category) {
    return (
      <ResultsScreen
        category={category}
        answers={answers}
        onRetry={handleRetry}
        onHome={handleExit}
      />
    );
  }

  return <CategorySelect onSelect={handleSelectCategory} />;
}

export default App;
