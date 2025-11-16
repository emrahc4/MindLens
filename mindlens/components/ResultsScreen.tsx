import React, { useMemo, useState, useEffect } from 'react';
import { UserResponse, Profile, Test } from '../types';
import { calculateScores } from '../services/scoreCalculator';
import { generateDetailedAnalysis } from '../services/geminiAnalyzer';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface ResultsScreenProps {
  test: Test;
  responses: UserResponse[];
  onRetakeTest: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ test, responses, onRetakeTest }) => {
  const profile: Profile = useMemo(() => calculateScores(responses, test), [responses, test]);
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAnalysis = async () => {
      setIsLoading(true);
      const analysisResult = await generateDetailedAnalysis(test, responses, profile);
      setSummary(analysisResult);
      setIsLoading(false);
    };

    getAnalysis();
  }, [test, responses, profile]);


  const renderSummary = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center p-6 min-h-[100px]">
          <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-indigo-200">Analiziniz oluşturuluyor...</p>
        </div>
      );
    }
    return <p>{summary}</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-900/30 rounded-2xl shadow-2xl shadow-indigo-500/10 border border-indigo-800/50 backdrop-blur-sm text-center animate-fade-in-up">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-2 pb-2">
        {test.title} Sonuçları
      </h1>
      <p className="text-indigo-200 mb-8">
        Bu profil, test sırasındaki seçimlerinize ve yapay zeka analizine göre oluşturulmuştur. Kesin özellikleri değil, potansiyel eğilimleri temsil eder.
      </p>

      <div className="h-80 md:h-96 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={profile}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <PolarGrid stroke="#3e4c70" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#a5b4fc', fontSize: 14 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name="Puan" dataKey="value" stroke="#f472b6" fill="#f472b6" fillOpacity={0.6} />
            <Tooltip
                contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    borderColor: '#3730a3',
                    color: '#e0e7ff',
                    borderRadius: '0.5rem'
                }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-indigo-900/20 border border-indigo-700/50 rounded-lg p-6 mb-8 text-lg text-indigo-100 text-left">
        <h3 className="text-xl font-semibold mb-2 text-white text-center">Detaylı Analiz</h3>
        {renderSummary()}
      </div>

      <button
        onClick={onRetakeTest}
        className="group inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-full text-base hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
      >
        Ana Sayfaya Dön
      </button>

      <div className="mt-10 pt-6 border-t border-indigo-800/50 text-xs text-indigo-400">
        <p><strong>Sorumluluk Reddi:</strong> MindLens keşif amaçlı bir araçtır ve klinik teşhis için tasarlanmamıştır. Sonuçlar açıklayıcı niteliktedir ve profesyonel psikolojik tavsiye yerine geçmez. Ruh sağlığınızla ilgili endişeleriniz varsa, lütfen kalifiye bir uzmana danışın.</p>
      </div>
    </div>
  );
};

export default ResultsScreen;