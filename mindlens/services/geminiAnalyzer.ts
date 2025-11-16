import { GoogleGenAI } from "@google/genai";
import { Test, UserResponse, Profile } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

// Helper to find the question object from an ID
const getQuestionById = (test: Test, questionId: string) => {
    return test.questions.find(q => q.id === questionId);
}

export const generateDetailedAnalysis = async (test: Test, responses: UserResponse[], profile: Profile): Promise<string> => {
    try {
        const profileSummary = profile.map(p => `${p.name}: ${Math.round(p.value)}`).join(', ');

        // Select a few impactful responses to give context to the AI
        const impactfulResponses = responses.slice(0, 4).map(res => {
            const question = getQuestionById(test, res.questionId);
            return `- Soru: "${question?.text}"\n- Cevap: "${res.answer.text}"`;
        }).join('\n');

        const prompt = `
            Bir kişilik analizi uzmanı olarak hareket et. Aşağıdaki test sonuçlarına dayanarak, kullanıcı için sıcak, yapıcı ve detaylı bir analiz yaz. Analizin Türkçe olmalı.

            Test Adı: ${test.title}
            Test Açıklaması: ${test.description}

            Kullanıcının Puan Profili (0-100 arası):
            ${profileSummary}

            Kullanıcının Verdiği Bazı Cevaplar:
            ${impactfulResponses}

            LÜTFEN AŞAĞIDAKİLERİ YAP:
            1.  Kullanıcının en yüksek ve en düşük puanlı özelliklerini yorumlayarak başla.
            2.  Verilen cevap örneklerini kullanarak, bu puanların arkasındaki "nedeni" açıkla. Örneğin, "Yüksek dışadönüklük puanınız, bir etkinlik planlamayı seçmenizle uyumlu görünüyor..." gibi bağlantılar kur.
            3.  Analizi 2-3 paragraf uzunluğunda, akıcı bir dille yaz.
            4.  Klinik veya tıbbi bir dil kullanmaktan kaçın. Bu bir keşif aracı, teşhis değil.
            5.  Sonucu pozitif ve güçlendirici bir tonda bitir.
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });
        
        return response.text;

    } catch (error) {
        console.error("Gemini analysis failed:", error);
        return "Analiz oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
    }
};
