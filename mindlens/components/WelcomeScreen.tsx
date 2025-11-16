
import React from 'react';
import { ChevronRightIcon } from './icons';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center max-w-2xl mx-auto p-8 bg-gray-900/30 rounded-2xl shadow-2xl shadow-indigo-500/10 border border-indigo-800/50 backdrop-blur-sm animate-fade-in-up">
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-4 pb-2">
        MindLens
      </h1>
      <p className="text-lg text-indigo-200 mb-8">
        Kısa, senaryo tabanlı testler aracılığıyla kişisel özelliklerinize dair içgörü kazanın. 
        Yanıtlarınız, karar verme kalıplarınızı ve eğilimlerinizi yansıtan benzersiz profiller oluşturmaya yardımcı olacaktır.
      </p>
      <div className="bg-indigo-900/20 border border-indigo-700/50 rounded-lg p-4 mb-8 text-sm text-indigo-300">
        <p><strong>Onay ve Gizlilik:</strong> Başlayarak katılmayı kabul etmiş olursunuz. Yanıtlarınız, profilinizi oluşturmak için geçici olarak işlenir ve saklanmaz veya paylaşılmaz. Bu, klinik bir araç değildir.</p>
      </div>
      <button
        onClick={onStart}
        className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-fuchsia-500/20"
      >
        Testleri Keşfet
        <ChevronRightIcon className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default WelcomeScreen;