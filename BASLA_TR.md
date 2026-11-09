# VELORA — VS Code üzerinden çalıştırma

## 1. Klasörü aç

ZIP dosyasını Masaüstü’ne çıkar. VS Code → File → Open Folder ile içindeki **velora** klasörünü aç. Terminal → New Terminal seç.

## 2. Kurulum

Node.js 24 gereklidir. Node 23 desteklenmez. Terminalde:

```sh
npm install
npm run db:setup
npm run dev
```

Tarayıcıda **http://localhost:5173** adresini aç. Terminali açık tut; durdurmak için Control+C.

## 3. Yerel giriş

Garajım veya İlan ver ekranındaki giriş bağlantısı, yalnızca localhost üzerinde çalışan bir **demo oturumu** açar. Gerçek hesap oluşturmaz ve ChatGPT şifreni istemez. Taslaklar ve demo randevu talepleri bilgisayarındaki `.wrangler/state` içinde saklanır. Favoriler bu tarayıcıda tutulur.

## Docker

Bu sürüm Docker kullanmaz. Node.js ile doğrudan çalışır. Docker Desktop kurman gerekmez.

## Komutlar

```sh
npm test
npx tsc --noEmit
npm run build
```

## Kapsam

Üç dil, filtreler, favoriler, karşılaştırma, kaporta şeması, yerel ilan taslakları ve demo randevu kayıtları bulunur. Gerçek ilan yayını, satıcı mesajlaşması, ödeme, fotoğraf yükleme ve LLM bağlantısı henüz yoktur. Örnek fiyatlar ve teknik bilgiler gerçek piyasa verisi değildir.

Bu paket yerel geliştirme içindir; canlı sitedeki hesaplar veya veritabanı kayıtları pakete dahil değildir. Yerel giriş emülasyonunu herkese açık bir sunucuda kullanma.
