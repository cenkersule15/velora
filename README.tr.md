# VELORA

### Özenle tasarlanmış otomobil ilan deneyimi

[English](README.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md)

![VELORA otomobil kapağı — temsili Porsche fotoğrafı](public/photos/hero.jpg)

**Keşfet. Karşılaştır. Bir sonraki hikâyeni seç.**

VELORA, [Cenker Sule](https://github.com/cenkersule15) tarafından geliştirilen çok dilli bir portföy projesidir. Otomobil fotoğrafçılığını, sade tipografiyi ve işlevsel araç keşfini dergi tarzında bir arayüzde birleştirir.

## Özellikler

| Alan | Uygulanan işlev |
|---|---|
| Diller | Form ve durum mesajlarıyla birlikte Türkçe, İngilizce ve Almanca arayüz |
| Katalog | Mercedes-Benz G 63 AMG ve Land Rover Defender 110 dahil sekiz demo ilan |
| Araç keşfi | Marka, gövde, yakıt, vites, şehir, bütçe, model yılı ve kilometre filtreleri; fiyat/yıl sıralaması |
| Metinle arama | Marka, şehir, vites, SUV ve euro bütçesini kurallarla filtrelere dönüştürme |
| Karşılaştırma | En fazla üç aracın fiyat ve özelliklerini yan yana inceleme |
| Favoriler | Kullanılan tarayıcıda saklanan araçlar |
| Araç detayları | Donanımlar ve interaktif kaporta beyanı şeması |
| Satıcı akışı | Tarayıcı oturumuna bağlı ilan taslakları ve sunucuda saklanan demo randevu talepleri |
| Kullanım | Duyarlı tasarım, native diyaloglar, klavye desteği ve azaltılmış hareket seçenekleri |

Katalog fiyatları **EUR** cinsindedir. Tutarlar örnektir; canlı kur dönüşümü veya piyasa değerlemesi yapılmaz. Yeni taslaklar EUR bilgisiyle kaydedilir. Eski sürümlerde para birimi alanı olmadan oluşturulmuş TL taslakları, kendi TRY etiketiyle korunur.

## Teknolojiler

**TypeScript · React 19 · Vinext · Vite · Cloudflare Workers · D1/SQLite · Drizzle ORM · Zod · Lucide**

Vinext, Next.js uyumlu App Router sağlar. Uygulama `next dev` yerine Vinext/Vite ile çalışır. Drizzle üzerinden Cloudflare D1 kullanılır; yerel geliştirmede veriler SQLite dosyalarında tutulur. Bu sürüm PostgreSQL veya Docker kullanmaz.

## Kurulum

Gereksinimler: **Node.js 24** ve npm 10 veya üzeri.

```bash
npm ci
npm run db:setup
npm run dev
```

Tarayıcıda **http://127.0.0.1:5173/** adresini açın. Veritabanı onayı istenirse `Y` girin. Geliştirme terminalini açık tutun.

macOS üzerinde Homebrew ile kurulu Node 24'ü mevcut terminalde seçmek için:

```bash
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

Yerel demo, tarayıcıya özel imzalı HttpOnly oturum çerezi kullanır. Demo oturumu düğmesiyle başlatılır; her tarayıcının kayıtları ayrıdır. Oturumlar 24 saat sonra veya sunucu yeniden başlayınca sona erer. Bu yalnızca localhost üzerinde çalışan bir portföy demosudur; üretim hesabı sistemi değildir. Taslaklar `.wrangler/state` içinde, favoriler tarayıcıda saklanır.

## Kontroller

```bash
npm run check
npm test
npm run db:setup
npm run test:api
npm run build
npm audit
```

`npm run test:api` öncesinde çalışan geliştirme sunucusunu durdurun. Test port 5173'ü kullanır ve oluşturduğu örnek kayıtları temizler. Ana sayfa ve görsel sunumu, demo giriş, oturum kontrolü, sahte kimlik başlıklarının reddi, veri doğrulama, farklı origin isteklerinin reddi, kayıt işlemleri ve yetkili silme test edilir.

GitHub Actions, Node 24 ile kontrolleri ve üretim derlemesini çalıştırır. CI sonuçları GitHub'a yükledikten sonra görünür. Paketteki bağımlılık denetimi **9 Kasım 2026 tarihinde 0 bilinen güvenlik açığı** bildirmiştir. Bu sonuç kalıcı güvenlik garantisi değildir. Ayrıntılar: [kabul notları](docs/ACCEPTANCE.md) ve [bağımlılık güncellemesi](docs/SECURITY_UPDATE.md).

## Dosya yapısı

| Yol | Görev |
|---|---|
| `app/page.tsx` | Keşif, araç detayları, karşılaştırma ve garaj arayüzü |
| `app/api/garage/route.ts` | Oturum doğrulanan taslak/talep işlemleri ve kayıt sahipliği kontrolü |
| `lib/cars.ts` | Örnek katalog, filtreler ve metin çözümleme |
| `lib/words.ts` | Üç dilde arayüz metinleri |
| `db/` ve `drizzle/` | Veritabanı şeması ve SQL migration dosyaları |
| `public/photos/` | Yerel olarak sunulan temsili fotoğraflar |
| `tests/` | Katalog, çeviri ve API testleri |

## Kapsam

Bu proje çalışan bir **portföy demosudur**. Herkese açık ilan yayımlama, gerçek satıcı mesajlaşması, ödeme, dosya yükleme, moderasyon, e-posta ve canlı LLM bağlantısı henüz yoktur. Metinle arama kurallıdır; LLM kullanmaz. Randevu kaydetmek satıcıya bildirim göndermez. Fotoğraflar, teknik bilgiler ve kaporta beyanları örnektir; doğrulanmış satış ilanı veya ekspertiz raporu değildir.

Üstteki kapak görseli bir otomobil fotoğrafıdır; uygulama ekran görüntüsü değildir. [Görsel kaynakları](docs/ASSETS.md). Müşteri verileri, ortam sırları, yerel veritabanları ve kurulan bağımlılıklar GitHub'a eklenmez.

## Lisans

Özgün proje kodu [MIT Lisansı](LICENSE) kapsamındadır. Üçüncü taraf kodların mevcut lisans bildirimleri korunur; fotoğraflar kendi lisanslarına tabidir. Ayrıntılar: [NOTICE.md](NOTICE.md).
