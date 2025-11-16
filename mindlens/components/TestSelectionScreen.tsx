
import React from 'react';
import { TESTS } from '../constants/tests';
import { ChevronRightIcon } from './icons';

interface TestSelectionScreenProps {
  onSelectTest: (testId: string) => void;
}

const TestSelectionScreen: React.FC<TestSelectionScreenProps> = ({ onSelectTest }) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-4 pb-2">
          Bir Test Seçin
        </h1>
        <p className="text-lg text-indigo-200">
          Kişiliğinizin farklı yönlerini keşfetmek için aşağıdaki testlerden birini seçin.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTS.map(test => (
          <div key={test.id} className="bg-gray-900/30 rounded-2xl shadow-lg border border-indigo-800/50 p-6 flex flex-col transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">{test.title}</h2>
            <p className="text-indigo-300 mb-6 flex-grow">{test.description}</p>
            <button
              onClick={() => onSelectTest(test.id)}
              className="group mt-auto w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-full text-base hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300"
            >
              Teste Başla
              <ChevronRightIcon className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSelectionScreen;