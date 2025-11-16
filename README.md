🧠 MindLens
Metin Tabanlı AI Kişilik Haritası Web Uygulaması
📌 Proje Hakkında

MindLens, kullanıcıların metin tabanlı yanıtlarını kullanarak psikolojik profillerini çıkaran web tabanlı bir uygulamadır. Kullanıcıların cevapları, seçimleri ve kısa yazılı tepkileri üzerinden AI, kişinin duygusal durumu, motivasyon yapısı, risk toleransı, kreatifliği ve bilinçaltı eğilimlerini analiz eder.

Dünya üzerinde MBTI veya klasik online testlerden farklı olarak, MindLens AI destekli, dinamik ve kişiye özel analiz sunar.

🧩 Nasıl Çalışır?

Kullanıcı metin tabanlı soruları yanıtlar.

Sorular kısa, vibe odaklı ve psikolojik yönelim içerir.

AI analiz modülleri devreye girer:

NLP (Natural Language Processing)

Duygu analizi (emotional tone, sentiment)

Karar ve risk değerlendirmesi

Kreatiflik skoru

Kaygı ve stres belirleme

Bilinçaltı motif çıkarımı

Kişilik haritası üretilir:

Her metrik için skorlar (0–100)

Görsel olmayan, metin tabanlı raporlar

Tavsiye ve yorumlar kullanıcıya sunulur

📊 Kişilik Profili Başlıkları
1. Duygusal Profil

Empati, duygu yoğunluğu, duygu-regülasyonu

2. Risk Toleransı

Kaçınmacı, dengeli veya agresif risk eğilimi

3. Kreatiflik

Fikir çeşitliliği, yenilikçilik, düşünce akışı hızı

4. Kaygı ve Stres

Belirsizlik toleransı, sosyal kaygı, iç stres seviyesi

5. Motivasyon Tipi

İçsel, dışsal veya ödül odaklı motivasyon

6. Karar Mekanizması

Mantıklı / sezgisel / duygusal / hızlı karar profili

7. Bilinçaltı Temalar

Tekrarlayan davranış ve düşünce motifleri

🛠️ Teknolojiler
Frontend

React.js

TailwindCSS

Recharts / Chart.js (grafikler metin + bar/line plot)

Backend

Node.js (Express) veya NestJS

Gemini API / Google AI Studio

Webhook tabanlı AI analiz pipeline

Veritabanı

MongoDB (esnek yapılar için)

Redis (session & caching)

AI Kullanımı

Prompt engineering ile metin tabanlı analiz

Duygusal ve kişilik skorlarını çıkarma

Profil skorlarını normalize etme

📑 Veri Mimarisi
Koleksiyon: Users

id (uuid)

creation_date (timestamp)

test_results[]

personality_profile{}

Koleksiyon: Questions

id

text

category (risk, motivasyon, kreativite vb.)

weight (scoring ağırlığı)

Koleksiyon: Answers

user_id

question_id

answer_text

AI_output{}

🔮 AI Pipeline (Özet)

Kullanıcı cevabı → backend

NLP & duygu analizi → JSON çıktısı

Skor hesaplama (weighted average + confidence)

Profili normalize et → metin tabanlı rapor üret

Kullanıcıya gösterim

📦 Kurulum

Repo’yu klonla:

git clone https://github.com/kullanici/mindlens.git


Bağımlılıkları yükle:

npm install


Backend’i başlat:

npm run server


Frontend’i başlat:

npm run client


.env içerisine Gemini API anahtarını ekle:

GEMINI_API_KEY=YOUR_KEY_HERE

📜 Lisans

MIT Lisansı
