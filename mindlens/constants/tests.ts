
import { Test } from '../types';

export const TESTS: Test[] = [
  {
    id: 'big-five',
    title: 'Kişilik Spektrumu (Büyük Beş Modeli)',
    description: 'Beş temel kişilik özelliğindeki yerinizi keşfedin: Açıklık, Sorumluluk, Dışadönüklük, Uyumluluk ve Duygusal Denge.',
    traitBounds: {
        'Açıklık': { min: -25, max: 25 },
        'Sorumluluk': { min: -25, max: 25 },
        'Dışadönüklük': { min: -25, max: 25 },
        'Uyumluluk': { min: -25, max: 25 },
        'Duygusal Denge': { min: -25, max: 25 },
    },
    questions: [
      {
        id: 'b5-1',
        text: 'Boş bir hafta sonu sizi bekliyor. Tercihiniz hangisi olurdu?',
        answers: [
          { text: 'Arkadaşlarla büyük bir sosyal etkinlik.', trait_deltas: { 'Dışadönüklük': 5, 'Duygusal Denge': -1 } },
          { text: 'Evde tek başıma bir hobiyle uğraşmak.', trait_deltas: { 'Dışadönüklük': -5 } },
          { text: 'Yeni bir şeyler öğrenmek için müze gezisi.', trait_deltas: { 'Açıklık': 5 } },
          { text: 'Hiçbir plan yapmamak, akışına bırakmak.', trait_deltas: { 'Sorumluluk': -3, 'Açıklık': 2 } },
        ],
      },
      {
        id: 'b5-2',
        text: 'Bir grup projesinde genellikle hangi rolü üstlenirsiniz?',
        answers: [
          { text: 'Herkesin görevini yaptığından emin olan planlayıcı.', trait_deltas: { 'Sorumluluk': 5 } },
          { text: 'Yaratıcı ve alışılmadık fikirler sunan beyin fırtınacısı.', trait_deltas: { 'Açıklık': 5, 'Sorumluluk': -2 } },
          { text: 'Grup içinde uyumu sağlayan ve arabuluculuk yapan kişi.', trait_deltas: { 'Uyumluluk': 5 } },
          { text: 'Grubun moralini yüksek tutan motive edici kişi.', trait_deltas: { 'Dışadönüklük': 4, 'Uyumluluk': 2 } },
        ],
      },
      {
        id: 'b5-3',
        text: 'Beklenmedik bir sorunla karşılaştığınızda ilk tepkiniz ne olur?',
        answers: [
          { text: 'Sakin kalır ve mantıklı bir çözüm yolu ararım.', trait_deltas: { 'Duygusal Denge': 5, 'Sorumluluk': 3 } },
          { text: 'Endişelenir ve en kötü senaryoyu düşünürüm.', trait_deltas: { 'Duygusal Denge': -5 } },
          { text: 'Durumu bir macera olarak görür, yaratıcı çözümler denerim.', trait_deltas: { 'Açıklık': 4, 'Duygusal Denge': 2 } },
          { text: 'Hemen birilerinden yardım veya tavsiye isterim.', trait_deltas: { 'Dışadönüklük': 3, 'Uyumluluk': 2 } },
        ],
      },
      {
        id: 'b5-4',
        text: 'Bir arkadaşınız sizden farklı bir görüşü savunduğunda nasıl tepki verirsiniz?',
        answers: [
          { text: 'Tartışmayı sevmem, konuyu değiştiririm veya hak veririm.', trait_deltas: { 'Uyumluluk': 5 } },
          { text: 'Kendi görüşümü sert bir şekilde savunurum.', trait_deltas: { 'Uyumluluk': -5 } },
          { text: 'Onun bakış açısını anlamaya çalışır, orta yolu bulurum.', trait_deltas: { 'Uyumluluk': 3, 'Açıklık': 2 } },
        ],
      },
      {
        id: 'b5-5',
        text: 'Detaylara dikkat etmek ve işleri düzenli tutmak sizin için ne kadar önemli?',
        answers: [
          { text: 'Çok önemli. Her şeyin bir yeri olmalı.', trait_deltas: { 'Sorumluluk': 5 } },
          { text: 'Önemli ama bazen dağınıklık yaratıcılığı tetikler.', trait_deltas: { 'Sorumluluk': -2, 'Açıklık': 3 } },
          { text: 'Hiç önemli değil. Büyük resme odaklanırım.', trait_deltas: { 'Sorumluluk': -5 } },
        ],
      },
      {
        id: 'b5-6',
        text: 'Yeni ve denenmemiş bir aktiviteye (örneğin egzotik bir yemek, farklı bir rota) yaklaşımınız nedir?',
        answers: [
          { text: 'Heyecanla denerim, yenilikleri severim.', trait_deltas: { 'Açıklık': 5 } },
          { text: 'Biraz tereddüt ederim ama güvendiğim biriyle denerim.', trait_deltas: { 'Açıklık': 2, 'Dışadönüklük': 1 } },
          { text: 'Bildiğim ve sevdiğim şeylere bağlı kalmayı tercih ederim.', trait_deltas: { 'Açıklık': -5 } },
        ],
      },
      {
        id: 'b5-7',
        text: 'Bir eleştiri aldığınızda genellikle nasıl hissedersiniz?',
        answers: [
          { text: 'Kişisel algılamam, kendimi geliştirmek için bir fırsat olarak görürüm.', trait_deltas: { 'Duygusal Denge': 5 } },
          { text: 'Savunmacı hisseder ve kendimi açıklamaya çalışırım.', trait_deltas: { 'Duygusal Denge': -3, 'Uyumluluk': -2 } },
          { text: 'Üzülürüm ve moralim bozulur.', trait_deltas: { 'Duygusal Denge': -5 } },
        ],
      },
      {
        id: 'b5-8',
        text: 'Başkalarının ihtiyaçlarını kendi ihtiyaçlarınızın önüne koyma eğiliminde misiniz?',
        answers: [
          { text: 'Evet, sık sık. Yardım etmeyi severim.', trait_deltas: { 'Uyumluluk': 5 } },
          { text: 'Duruma göre değişir, bir denge kurmaya çalışırım.', trait_deltas: { 'Uyumluluk': 1 } },
          { text: 'Hayır, genellikle kendi önceliklerime odaklanırım.', trait_deltas: { 'Uyumluluk': -5 } },
        ],
      },
       {
        id: 'b5-9',
        text: 'Sıkıcı ve rutin işleri yapmanız gerektiğinde...',
        answers: [
          { text: 'Disiplinli bir şekilde bitiririm, görev görevdir.', trait_deltas: { 'Sorumluluk': 5 } },
          { text: 'Sürekli ertelerim ve son dakikaya bırakırım.', trait_deltas: { 'Sorumluluk': -5 } },
          { text: 'İşi daha eğlenceli hale getirecek yollar bulmaya çalışırım.', trait_deltas: { 'Açıklık': 3, 'Sorumluluk': 1 } },
        ],
      },
      {
        id: 'b5-10',
        text: 'Kalabalık bir partiden sonra nasıl hissedersiniz?',
        answers: [
          { text: 'Enerji dolu ve canlanmış.', trait_deltas: { 'Dışadönüklük': 5 } },
          { text: 'Tükenmiş ve yalnız kalma ihtiyacı içinde.', trait_deltas: { 'Dışadönüklük': -5 } },
          { text: 'Ne yorgun ne de enerjik, nötr.', trait_deltas: { 'Dışadönüklük': 0 } },
        ],
      },
    ],
  },
  {
    id: 'decision-style',
    title: 'Karar Verme Tarzı',
    description: 'Kararlarınızı verirken sezgilerinize mi yoksa analitik düşünceye mi daha çok güvenirsiniz?',
    traitBounds: {
        'Sezgisel': { min: -30, max: 30 },
        'Analitik': { min: -30, max: 30 },
    },
    questions: [
      {
        id: 'ds-1',
        text: 'Yeni bir telefon alırken nasıl bir yol izlersiniz?',
        answers: [
          { text: 'İçimden bir sesin "işte bu" dediği modeli alırım.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Tüm teknik özellikleri ve yorumları karşılaştıran bir tablo yaparım.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Popüler ve güvendiğim bir markanın son modelini tercih ederim.', trait_deltas: { 'Sezgisel': 2, 'Analitik': -2 } },
        ],
      },
      {
        id: 'ds-2',
        text: 'Bir iş teklifini değerlendirirken en çok neye önem verirsiniz?',
        answers: [
          { text: 'Şirket kültürü ve insanlarla olan kimya.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Maaş, yan haklar ve kariyer yolu gibi somut veriler.', trait_deltas: { 'Analitik': 5 } },
        ],
      },
      {
        id: 'ds-3',
        text: 'Bir arkadaşınız sizden tavsiye istediğinde...',
        answers: [
          { text: 'Genellikle durumu nasıl "hissettiğimi" söylerim.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Durumun artılarını ve eksilerini listelemelerini öneririm.', trait_deltas: { 'Analitik': 5 } },
        ],
      },
      {
        id: 'ds-4',
        text: 'Bilmediğiniz bir şehirde yolunuzu bulmanız gerekiyor. Ne yaparsınız?',
        answers: [
          { text: 'Haritayı detaylıca inceler, en verimli rotayı planlarım.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Genel bir yön belirler ve içgüdülerimle yolumu bulmaya çalışırım.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Hemen bir yerliye sorarım.', trait_deltas: { 'Sezgisel': 2, 'Analitik': -1 } },
        ]
      },
      {
        id: 'ds-5',
        text: 'Bir film seçerken neye güvenirsiniz?',
        answers: [
          { text: 'Puanlamalara, eleştirmen yorumlarına ve fragmana.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Afisine, ismine veya o anki ruh halime.', trait_deltas: { 'Sezgisel': 5 } },
        ]
      },
      {
        id: 'ds-6',
        text: 'Önemli bir e-posta göndermeden önce...',
        answers: [
          { text: 'Birkaç kez okur, yazım ve anlam hatalarını kontrol ederim.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Hızlıca yazar ve ana fikri ilettiğimi düşünüyorsam gönderirim.', trait_deltas: { 'Sezgisel': 5 } },
        ]
      },
      {
        id: 'ds-7',
        text: 'Bir bulmacayı çözerken...',
        answers: [
          { text: 'Sistematik bir şekilde tüm olasılıkları denerim.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Cevabın aniden aklıma gelmesini beklerim, "eureka" anını ararım.', trait_deltas: { 'Sezgisel': 5 } },
        ]
      },
      {
        id: 'ds-8',
        text: 'Yeni biriyle tanıştığınızda ilk izlenimleriniz sizin için ne kadar önemlidir?',
        answers: [
          { text: 'Çok önemlidir, genellikle ilk hislerim doğru çıkar.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Önemli değildir, kişiyi zamanla ve eylemleriyle tanımak isterim.', trait_deltas: { 'Analitik': 5 } },
        ]
      },
      {
        id: 'ds-9',
        text: 'Acil bir durumda karar vermeniz gerektiğinde...',
        answers: [
          { text: 'Hızlıca durumu analiz eder, en mantıklı olanı yaparım.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Düşünmeden, içgüdüsel olarak hareket ederim.', trait_deltas: { 'Sezgisel': 5 } },
        ]
      },
      {
        id: 'ds-10',
        text: 'Bir menüden yemek seçerken...',
        answers: [
          { text: 'Malzemeleri ve açıklamaları dikkatle okurum.', trait_deltas: { 'Analitik': 5 } },
          { text: 'Gözüme en çekici geleni veya kulağa en hoş geleni seçerim.', trait_deltas: { 'Sezgisel': 5 } },
          { text: 'Garsonun tavsiyesini isterim.', trait_deltas: { 'Sezgisel': 2 } },
        ]
      }
    ],
  },
  {
    id: 'risk-profile',
    title: 'Risk Profili Analizi',
    description: 'Hayatın farklı alanlarında risk almaya ne kadar yatkınsınız? Finansal, sosyal ve fiziksel risk eğilimlerinizi öğrenin.',
    traitBounds: {
        'Risk Alma': { min: -30, max: 30 },
        'Güvenlik Arayışı': { min: -30, max: 30 },
    },
    questions: [
        {
            id: 'rp-1',
            text: 'Size iki yatırım fırsatı sunuluyor. Hangisini seçersiniz?',
            answers: [
                { text: 'Yüksek risk, yüksek potansiyel getiri.', trait_deltas: { 'Risk Alma': 5 } },
                { text: 'Düşük risk, garantili ama mütevazı getiri.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
            ]
        },
        {
            id: 'rp-2',
            text: 'Tatilde ne yapmayı tercih edersiniz?',
            answers: [
                { text: 'Paraşütle atlama veya tehlikeli bir dağa tırmanma.', trait_deltas: { 'Risk Alma': 5 } },
                { text: 'Güzel bir kumsalda kitap okuyup dinlenme.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
                { text: 'Turistik yerleri gezip yeni kültürler tanıma.', trait_deltas: { 'Risk Alma': 1, 'Güvenlik Arayışı': 1 } },
            ]
        },
        {
            id: 'rp-3',
            text: 'Daha önce hiç denemediğiniz egzotik bir yemeği dener misiniz?',
            answers: [
                { text: 'Kesinlikle, yeni tatlara bayılırım!', trait_deltas: { 'Risk Alma': 4 } },
                { text: 'Belki, ama önce ne olduğunu bilmem gerekir.', trait_deltas: { 'Risk Alma': -1, 'Güvenlik Arayışı': 2 } },
                { text: 'Asla, bildiğim yemeklerden şaşmam.', trait_deltas: { 'Güvenlik Arayışı': 4 } },
            ]
        },
        {
            id: 'rp-4',
            text: 'Kariyerinizde bir değişiklik yapmayı düşünüyorsunuz. Hangi yolu seçersiniz?',
            answers: [
                { text: 'Mevcut şirketimde daha güvenli bir pozisyona geçmek.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
                { text: 'Tamamen yeni bir alanda kendi işimi kurmak.', trait_deltas: { 'Risk Alma': 5 } },
            ]
        },
        {
            id: 'rp-5',
            text: 'Kalabalık önünde hazırlıksız konuşma yapmanız istense...',
            answers: [
                { text: 'Heyecan duyarım, bu bir meydan okuma!', trait_deltas: { 'Risk Alma': 5 } },
                { text: 'Çok gerilirim ve reddetmeye çalışırım.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
            ]
        },
        {
            id: 'rp-6',
            text: 'Bir arkadaşınız sizi son dakika bir geziye davet ediyor. Ne yaparsınız?',
            answers: [
                { text: 'Hemen çantamı hazırlarım, macera beni bekler!', trait_deltas: { 'Risk Alma': 5 } },
                { text: 'Planlarımı ve bütçemi kontrol etmeden karar veremem.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
            ]
        },
        {
            id: 'rp-7',
            text: 'Popüler olmayan ama doğru olduğunu düşündüğünüz bir fikri savunur musunuz?',
            answers: [
                { text: 'Evet, sonuçları ne olursa olsun.', trait_deltas: { 'Risk Alma': 4 } },
                { text: 'Duruma bağlı, eğer çok fazla çatışma yaratacaksa sessiz kalabilirim.', trait_deltas: { 'Güvenlik Arayışı': 4 } },
            ]
        },
        {
            id: 'rp-8',
            text: 'Araba kullanırken hız limitine yaklaşımınız nedir?',
            answers: [
                { text: 'Genellikle limitin biraz üzerindeyimdir.', trait_deltas: { 'Risk Alma': 3 } },
                { text: 'Her zaman limite uyarım, hatta altında kalırım.', trait_deltas: { 'Güvenlik Arayışı': 3 } },
            ]
        },
        {
            id: 'rp-9',
            text: 'Tanımadığınız bir şehre taşınma fikri size nasıl geliyor?',
            answers: [
                { text: 'Harika bir başlangıç, yeni fırsatlar demek.', trait_deltas: { 'Risk Alma': 5 } },
                { text: 'Korkutucu, alıştığım düzeni bırakmak istemem.', trait_deltas: { 'Güvenlik Arayışı': 5 } },
            ]
        },
        {
            id: 'rp-10',
            text: 'Bir sırrınızı birine ne kadar kolay anlatırsınız?',
            answers: [
                { text: 'İnsanlara kolay güvenirim, oldukça çabuk.', trait_deltas: { 'Risk Alma': 4 } },
                { text: 'Çok zor, birini gerçekten tanımadan asla.', trait_deltas: { 'Güvenlik Arayışı': 4 } },
            ]
        }
    ]
  },
  {
    id: 'creativity-style',
    title: 'Yaratıcılık Pusulası',
    description: 'Yaratıcı enerjiniz nasıl çalışıyor? Fikirleri birleştiren bir "Yakınsak" mı, yoksa yeni olasılıklar yaratan bir "Iraksak" düşünür müsünüz?',
     traitBounds: {
        'Yakınsak Düşünce': { min: -30, max: 30 },
        'Iraksak Düşünce': { min: -30, max: 30 },
    },
    questions: [
        {
            id: 'cs-1',
            text: 'Size bir ataş veriliyor. Onunla kaç farklı şey yapabilirsiniz?',
            answers: [
                { text: 'Birkaç pratik kullanım alanı aklıma gelir.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Onlarca yaratıcı ve tuhaf fikir sayabilirim.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        },
        {
            id: 'cs-2',
            text: 'Bir sorunu çözerken yaklaşımınız nedir?',
            answers: [
                { text: 'Mevcut en iyi çözümü bulup onu uygulamak.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Daha önce hiç denenmemiş, tamamen yeni bir yol aramak.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        },
        {
            id: 'cs-3',
            text: 'Size "mavi" kelimesi verildiğinde aklınıza ne gelir?',
            answers: [
                { text: 'Gökyüzü, deniz gibi somut şeyler.', trait_deltas: { 'Yakınsak Düşünce': 4 } },
                { text: 'Hüzün, sonsuzluk, bir müzik notası gibi soyut kavramlar.', trait_deltas: { 'Iraksak Düşünce': 4 } },
            ]
        },
        {
            id: 'cs-4',
            text: 'Boş bir odayı dekore etmeniz istense...',
            answers: [
                { text: 'Belli bir stile (örn: minimalist, rustik) bağlı kalırım.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Farklı stilleri birleştirir, eşsiz bir alan yaratırım.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        },
        {
            id: 'cs-5',
            text: 'Bir tarifi takip ederken...',
            answers: [
                { text: 'Tarife harfiyen uyarım.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Tarifi bir başlangıç noktası olarak kullanır, kendi dokunuşlarımı eklerim.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        },
        {
            id: 'cs-6',
            text: 'Beyin fırtınası yaparken...',
            answers: [
                { text: 'Fikirleri organize etmeye ve en mantıklı olanı seçmeye odaklanırım.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Mümkün olduğunca çok, ne kadar çılgınca olursa olsun fikir üretmeye odaklanırım.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        },
        {
            id: 'cs-7',
            text: 'Size üç rastgele nesne veriliyor: bir ip, bir şişe ve bir anahtar. Bunlarla ne yaparsınız?',
            answers: [
                { text: 'Bunları bir araya getirerek pratik bir sorunu çözerim.', trait_deltas: { 'Yakınsak Düşünce': 4 } },
                { text: 'Bu nesnelerin geçtiği fantastik bir hikaye uydururum.', trait_deltas: { 'Iraksak Düşünce': 4 } },
            ]
        },
        {
            id: 'cs-8',
            text: 'Çalışma alanınız genellikle nasıl?',
            answers: [
                { text: 'Düzenli ve organize. Her şey yerli yerinde.', trait_deltas: { 'Yakınsak Düşünce': 3 } },
                { text: 'Yaratıcı bir kaos içinde. İlham kaynaklarım her yerde.', trait_deltas: { 'Iraksak Düşünce': 3 } },
            ]
        },
        {
            id: 'cs-9',
            text: 'Bir sanat galerisinde en çok ne ilginizi çeker?',
            answers: [
                { text: 'Sanatçının tekniği ve ustalığı.', trait_deltas: { 'Yakınsak Düşünce': 4 } },
                { text: 'Resmin bende uyandırdığı duygular ve hikayeler.', trait_deltas: { 'Iraksak Düşünce': 4 } },
            ]
        },
        {
            id: 'cs-10',
            text: 'Kurallara yaklaşımınız nedir?',
            answers: [
                { text: 'Kurallar düzeni sağlar ve genellikle uyulmalıdır.', trait_deltas: { 'Yakınsak Düşünce': 5 } },
                { text: 'Kurallar bazen yaratıcılığı sınırlayabilir ve esnetilmelidir.', trait_deltas: { 'Iraksak Düşünce': 5 } },
            ]
        }
    ]
  },
  {
    id: 'social-orientation',
    title: 'Sosyal Yönelim Testi',
    description: 'Sosyal enerjinizi nereden alıyorsunuz? Bu test, içedönüklük ve dışadönüklük skalanızdaki yerinizi anlamanıza yardımcı olur.',
    traitBounds: {
        'İçedönüklük': { min: -30, max: 30 },
        'Dışadönüklük': { min: -30, max: 30 },
    },
    questions: [
        {
            id: 'so-1',
            text: 'Yoğun bir haftanın ardından nasıl deşarj olursunuz?',
            answers: [
                { text: 'Evde yalnız kalarak.', trait_deltas: { 'İçedönüklük': 5 } },
                { text: 'Arkadaşlarımla dışarı çıkarak.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Bir veya iki yakın arkadaşımla sakin bir aktivite yaparak.', trait_deltas: { 'İçedönüklük': 2, 'Dışadönüklük': 2 } },
            ]
        },
        {
            id: 'so-2',
            text: 'Tanımadığınız insanlarla dolu bir odada...',
            answers: [
                { text: 'Kolayca yeni sohbetler başlatırım.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Tanıdığım birini bulana kadar kendi halimde kalırım.', trait_deltas: { 'İçedönüklük': 5 } },
                { text: 'Birisi benimle konuşursa sohbete katılırım ama ilk adımı atmam.', trait_deltas: { 'İçedönüklük': 3 } },
            ]
        },
        {
            id: 'so-3',
            text: 'Tercih ettiğiniz iletişim yöntemi nedir?',
            answers: [
                { text: 'Yüz yüze konuşmak veya telefonla aramak.', trait_deltas: { 'Dışadönüklük': 4 } },
                { text: 'Mesajlaşmak veya e-posta göndermek.', trait_deltas: { 'İçedönüklük': 4 } },
            ]
        },
        {
            id: 'so-4',
            text: 'Bir grup çalışmasında...',
            answers: [
                { text: 'Fikirleri sunmayı ve tartışmayı yönetmeyi severim.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Dinlemeyi, düşünmeyi ve sonra fikirlerimi paylaşmayı tercih ederim.', trait_deltas: { 'İçedönüklük': 5 } },
            ]
        },
        {
            id: 'so-5',
            text: 'Doğum gününüzü nasıl kutlamak istersiniz?',
            answers: [
                { text: 'Büyük bir parti ve tüm arkadaşlarımla.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Sadece en yakınlarımla küçük bir kutlama.', trait_deltas: { 'İçedönüklük': 5 } },
                { text: 'Sakin bir akşam yemeği veya evde film keyfi.', trait_deltas: { 'İçedönüklük': 6 } },
            ]
        },
        {
            id: 'so-6',
            text: 'Dikkatin merkezinde olmak size nasıl hissettirir?',
            answers: [
                { text: 'Harika! İnsanların ilgisini severim.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Rahatsız edici. Gözlerden uzak olmayı tercih ederim.', trait_deltas: { 'İçedönüklük': 5 } },
            ]
        },
        {
            id: 'so-7',
            text: 'Genellikle önce konuşur sonra mı düşünürsünüz, yoksa önce düşünüp sonra mı konuşursunuz?',
            answers: [
                { text: 'Konuşurken düşünürüm.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Söyleyeceklerimi dikkatlice tartar, sonra konuşurum.', trait_deltas: { 'İçedönüklük': 5 } },
            ]
        },
        {
            id: 'so-8',
            text: 'Ne sıklıkla yeni insanlarla tanışmak istersiniz?',
            answers: [
                { text: 'Her zaman! Yeni insanlar yeni enerjidir.', trait_deltas: { 'Dışadönüklük': 5 } },
                { text: 'Nadiren. Mevcut arkadaş çevrem bana yeter.', trait_deltas: { 'İçedönüklük': 5 } },
            ]
        },
        {
            id: 'so-9',
            text: 'Bir toplantıda fikrinizi belirtmeniz gerekiyor...',
            answers: [
                { text: 'Söz alıp hemen söylerim.', trait_deltas: { 'Dışadönüklük': 4 } },
                { text: 'Doğru anı beklerim veya biri bana sorarsa söylerim.', trait_deltas: { 'İçedönüklük': 4 } },
            ]
        },
        {
            id: 'so-10',
            text: 'Sessizlik sizin için...',
            answers: [
                { text: 'Huzur verici ve canlandırıcı.', trait_deltas: { 'İçedönüklük': 5 } },
                { text: 'Sıkıcı ve rahatsız edici.', trait_deltas: { 'Dışadönüklük': 5 } },
            ]
        }
    ]
  },
];