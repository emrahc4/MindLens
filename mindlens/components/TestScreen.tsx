
import React, { useState, useRef, useCallback } from 'react';
import { UserResponse, Answer, Test } from '../types';
import ProgressBar from './ProgressBar';

interface TestScreenProps {
  test: Test;
  onTestComplete: (responses: UserResponse[]) => void;
  onExitTest: () => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ test, onTestComplete, onExitTest }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isFading, setIsFading] = useState(false);
  const questionStartTime = useRef<number>(Date.now());

  const currentQuestion = test.questions[currentIndex];

  const handleChoice = useCallback((answer: Answer) => {
    if (isFading) return;

    const responseTime = Date.now() - questionStartTime.current;
    const newResponse: UserResponse = {
      questionId: currentQuestion.id,
      answer,
      responseTime,
    };
    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    
    setIsFading(true);

    setTimeout(() => {
      if (currentIndex < test.questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        questionStartTime.current = Date.now();
        setIsFading(false);
      } else {
        onTestComplete(updatedResponses);
      }
    }, 500); // Match fade duration
  }, [currentIndex, isFading, onTestComplete, responses, currentQuestion.id, test.questions.length]);
  
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col animate-fade-in-up">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-indigo-300 text-left">{test.title}</h2>
        <button 
          onClick={onExitTest}
          className="px-4 py-2 text-sm font-medium bg-red-800/50 text-red-200 rounded-lg border border-red-700/50 hover:bg-red-700/70 transition-colors duration-200"
        >
          Testten Çık
        </button>
      </div>
      <ProgressBar current={currentIndex + 1} total={test.questions.length} />
      
      <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 px-4">
            {currentQuestion.text}
          </h2>
          <div className={`grid grid-cols-1 ${currentQuestion.answers.length > 2 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-4 px-4`}>
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleChoice(answer)}
                className="w-full p-4 text-lg font-medium bg-indigo-900/30 rounded-lg border border-indigo-700/50 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md hover:shadow-cyan-500/30"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;