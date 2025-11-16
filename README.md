 🌌 MindLens
### Metin Tabanlı AI Kişilik Haritası Web Uygulaması

---

## ✨ Proje Hakkında
MindLens, kullanıcıların **metin tabanlı yanıtlarını** kullanarak kişilik ve psikolojik profillerini çıkaran **AI tabanlı web uygulamasıdır**.

- MBTI ve klasik testlerin ötesinde.
- AI, bilinçaltı eğilimler, motivasyon ve karar mekanizmalarını analiz eder.
- Video veya resim kullanılmaz; tamamen **metin odaklı**dır.

---

## 🧠 Nasıl Çalışır?
```mermaid
graph LR
A[Kullanıcı Soruları Yanıtlar] --> B[Backend Alır]
B --> C[NLP ve Duygu Analizi]
C --> D[AI Skorlama ve Profil Oluşturma]
D --> E[Kişilik Haritası ve Metin Raporu]
Kullanıcı metin tabanlı soruları cevaplar.

NLP & AI modülleri analizi yapar:

Duygusal ton & sentiment

Karar ve risk değerlendirmesi

Kreatiflik & motivasyon skoru

Kaygı ve bilinçaltı temalar

AI skorları normalize eder ve metin tabanlı rapor üretir.

📊 Kişilik Profili Başlıkları
text
Kodu kopyala
[ Duygusal Profil  ] Empati, duygu yoğunluğu, regülasyon
[ Risk Toleransı   ] Kaçınmacı / Dengeli / Agresif
[ Kreatiflik       ] Fikir çeşitliliği, yenilikçilik
[ Kaygı & Stres    ] Belirsizlik toleransı, sosyal kaygı
[ Motivasyon Tipi  ] İçsel / Dışsal / Ödül odaklı
[ Karar Mekanizması] Mantıklı / Sezgisel / Hızlı karar
[ Bilinçaltı Temalar] Tekrarlayan motifler, davranış kalıpları
⚡ Özellikler
text
Kodu kopyala
✔ Metin tabanlı AI kişilik testi
✔ Kişiye özel analiz ve puanlama
✔ Metin tabanlı detaylı raporlar
✔ Kullanıcı oturum yönetimi
✔ Skor takibi ve geçmiş veriler
✔ Modern ve responsive UI
🛠️ Teknolojiler
text
Kodu kopyala
Frontend  : React.js + TailwindCSS + Recharts
Backend   : Node.js / Express + Gemini API / Google AI Studio
Database  : MongoDB + Redis
AI        : NLP + Metin Analizi + Bilinçaltı Temalar
📦 Kurulum
bash
Kodu kopyala
# Repo'yu klonla
git clone https://github.com/kullanici/mindlens.git
cd mindlens

# Bağımlılıkları yükle
npm install

# Backend'i çalıştır
npm run server

# Frontend'i çalıştır
npm run client
.env dosyası:

text
Kodu kopyala
GEMINI_API_KEY=YOUR_KEY_HERE
🧩 Veri Mimarisi
text
Kodu kopyala
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
text
Kodu kopyala
1. Kullanıcı cevabı toplanır
2. NLP & duygu analizi yapılır
3. Skorlar hesaplanır (weighted + confidence)
4. Kişilik haritası üretilir
5. Metin tabanlı rapor kullanıcıya gösterilir
📜 Lisans
MIT License
