# GitHub'a yükleme

Bu paket README.md (İngilizce), README.de.md (Almanca), README.tr.md (Türkçe), MIT lisansı ve GitHub Actions akışını içerir.

## Depoyu oluştur

GitHub'da kendi hesabında **velora** adlı boş depo oluştur. İstersen Public seç. Başlangıçta README, .gitignore veya lisans ekleme; dosyalar pakette hazır.

Açıklama önerisi:

> Multilingual automotive marketplace with EUR-priced listings, vehicle comparison, interactive condition diagrams and persistent demo workflows. Built with TypeScript, React and Cloudflare D1.

Konu etiketleri: `automotive`, `marketplace`, `typescript`, `react`, `vinext`, `cloudflare-workers`, `sqlite`, `multilingual`.

## Temiz paketi gönder

ZIP'i Masaüstü'ne çıkar. **velora-github** klasörünü VS Code'da aç ve terminalde:

```sh
git init -b main
git add .
git commit -m "Add VELORA multilingual automotive marketplace"
git remote add origin https://github.com/cenkersule15/velora.git
git push -u origin main
```

Bu komutlar, yeni çıkarılmış ve henüz Git deposu olmayan klasör içindir. Farklı depo adı seçersen remote adresini ona göre değiştir.

Yüklemeden sonra depo sayfasını yenile. Actions sekmesinden kontrollerin sonucunu izle. Yerel kontrollerin geçmesi, GitHub Actions çalışmasının sonucunu önceden doğrulamaz.

## Neler dahil değil?

`node_modules`, derleme çıktıları, `.wrangler` veritabanı, `.env`, yerel yedekler ve Git geçmişi pakete dahil değildir. `.gitignore`, bunların yanlışlıkla gönderilmesini önler. Fotoğrafların kaynakları `docs/ASSETS.md` içinde kayıtlıdır.

## Ekran görüntüleri

Henüz eklenmiş uygulama ekran görüntüsü yoktur. README kapakları temsili otomobil fotoğrafıdır. Uygulama açıkken üç dil için kendi ekran görüntülerini alıp `docs/screenshots/` klasörüne ekleyebilirsin. Örnek dosya adları ve bağlantılar `docs/SCREENSHOTS_TR.md` içindedir.
