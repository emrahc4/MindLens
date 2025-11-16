───────────────────────────────────────────────────────────────
                MindLens: AI-Powered Personality Engine
───────────────────────────────────────────────────────────────

🌌 Project Overview
────────────────────────────────
MindLens, kullanıcıların **metin tabanlı yanıtları** ile kişilik haritası çıkaran
bir **AI destekli web uygulamasıdır**. Video veya resim yok, tamamen metin odaklı.
MBTI ve klasik testlerin ötesinde, bilinçaltı ve motivasyon analizleri sunar.

🧠 How It Works
────────────────────────────────
1️⃣ Kullanıcı metin tabanlı soruları yanıtlar.
2️⃣ Backend, yanıtları alır ve AI analiz modüllerine yollar:
   - NLP & Sentiment Analysis
   - Risk ve Karar Mekanizması
   - Kreatiflik ve Motivasyon Skoru
   - Kaygı ve Bilinçaltı Temalar
3️⃣ AI, skorları normalize eder ve **metin tabanlı detaylı rapor** üretir.
4️⃣ Kullanıcıya rapor sunulur.

📊 Personality Profile
────────────────────────────────
┌───────────────────────────────┐
│ Duygusal Profil       : Empati, duygu yoğunluğu, regülasyon
│ Risk Toleransı        : Kaçınmacı / Dengeli / Agresif
│ Kreatiflik            : Fikir çeşitliliği, yenilikçilik
│ Kaygı & Stres         : Belirsizlik toleransı, sosyal kaygı
│ Motivasyon Tipi       : İçsel / Dışsal / Ödül odaklı
│ Karar Mekanizması     : Mantıklı / Sezgisel / Hızlı karar
│ Bilinçaltı Temalar    : Tekrarlayan motifler, davranış kalıpları
└───────────────────────────────┘

⚡ Features
────────────────────────────────
✔ Metin tabanlı AI kişilik testi
✔ Kişiye özel analiz ve puanlama
✔ Metin tabanlı detaylı raporlar
✔ Kullanıcı oturum yönetimi
✔ Skor takibi ve geçmiş veriler
✔ Modern ve responsive UI

🛠️ Tech Stack
────────────────────────────────
Frontend  : React.js + TailwindCSS + Recharts
Backend   : Node.js / Express + Gemini API / Google AI Studio
Database  : MongoDB + Redis
AI        : NLP + Metin Analizi + Bilinçaltı Temalar

📦 Installation
────────────────────────────────
# Clone the repo
git clone https://github.com/kullanici/mindlens.git
cd mindlens

# Install dependencies
npm install

# Start backend
npm run server

# Start frontend
npm run client

# Add your Gemini API key in .env
GEMINI_API_KEY=YOUR_KEY_HERE

🧩 Data Structure
────────────────────────────────
Users:
  id
  creation_date
  test_results[]
  personality_profile{}

Questions:
  id
  text
  category
  weight

Answers:
  user_id
  question_id
  answer_text
  AI_output{}

🔮 AI Pipeline
────────────────────────────────
1. Collect user response
2. NLP & sentiment analysis
3. Weighted scoring
4. Generate personality profile
5. Render text-based report

📜 License
────────────────────────────────
MIT License

💡 Developer Note
────────────────────────────────
MindLens, bilinçaltı eğilimleri, motivasyonu ve karar mekanizmalarını keşfetmeye
odaklanır. Tamamen metin tabanlı AI analizi ile kullanıcıya benzersiz bir kişilik deneyimi sunar.
