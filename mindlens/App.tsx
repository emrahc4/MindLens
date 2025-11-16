
import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TestScreen from './components/TestScreen';
import ResultsScreen from './components/ResultsScreen';
import TestSelectionScreen from './components/TestSelectionScreen';
import { UserResponse, Test } from './types';
import { TESTS } from './constants/tests';

type AppState = 'welcome' | 'test_selection' | 'test' | 'results';

// Fisher-Yates (aka Knuth) Shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userResponses, setUserResponses] = useState<UserResponse[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const showTestSelection = useCallback(() => {
    setAppState('test_selection');
  }, []);

  const startTest = useCallback((testId: string) => {
    const testToStart = TESTS.find(t => t.id === testId);
    if (testToStart) {
      // Create a deep enough copy and shuffle questions
      const testWithShuffledQuestions = {
        ...testToStart,
        questions: shuffleArray(testToStart.questions),
      };
      setSelectedTest(testWithShuffledQuestions);
      setUserResponses([]);
      setAppState('test');
    }
  }, []);

  const finishTest = useCallback((responses: UserResponse[]) => {
    setUserResponses(responses);
    setAppState('results');
  }, []);
  
  const restart = useCallback(() => {
      setSelectedTest(null);
      setUserResponses([]);
      setAppState('welcome');
  }, []);

  const exitTest = useCallback(() => {
    setSelectedTest(null);
    setUserResponses([]);
    setAppState('test_selection');
  }, []);

  const renderContent = () => {
    switch (appState) {
      case 'test_selection':
        return <TestSelectionScreen onSelectTest={startTest} />;
      case 'test':
        if (selectedTest) {
          return <TestScreen test={selectedTest} onTestComplete={finishTest} onExitTest={exitTest} />;
        }
        // Fallback in case test is not selected
        return <TestSelectionScreen onSelectTest={startTest} />;
      case 'results':
        if (selectedTest) {
          return <ResultsScreen test={selectedTest} responses={userResponses} onRetakeTest={restart} />;
        }
        // Fallback in case we somehow get here without a test
        return <WelcomeScreen onStart={showTestSelection} />;
      case 'welcome':
      default:
        return <WelcomeScreen onStart={showTestSelection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white flex flex-col items-center justify-center p-4 transition-all duration-500">
      <main className="w-full flex-grow flex items-center justify-center">
        {renderContent()}
      </main>
      <footer className="w-full text-center py-4 text-indigo-400 text-sm opacity-70">
        Tasarlayan: Emrah Çakır
      </footer>
    </div>
  );
};

export default App;