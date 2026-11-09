# VELORA

### Ein durchdachter Automobil-Marktplatz

[English](README.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md)

![VELORA Titelbild — illustratives Porsche-Foto](public/photos/hero.jpg)

**Entdecken. Vergleichen. Das nächste Kapitel beginnen.**

VELORA ist ein mehrsprachiges Portfolio-Projekt von [Cenker Sule](https://github.com/cenkersule15). Eine redaktionell gestaltete Oberfläche verbindet Automobilfotografie, klare Typografie und einen nachvollziehbaren Weg zur Fahrzeugauswahl.

## Funktionen

| Bereich | Umsetzung |
|---|---|
| Sprachen | Türkische, englische und deutsche Oberfläche einschließlich Formularen und Statusmeldungen |
| Katalog | Acht Demo-Inserate, darunter Mercedes-Benz G 63 AMG und Land Rover Defender 110 |
| Fahrzeugsuche | Filter für Marke, Karosserie, Kraftstoff, Getriebe, Stadt, Budget, Baujahr und Kilometerstand; Preis-/Baujahr-Sortierung |
| Textsuche | Regelbasierte Erkennung von Marke, Stadt, Getriebe, SUV und EUR-Budgetangaben |
| Vergleich | Bis zu drei Fahrzeuge mit Preisen und technischen Daten nebeneinander |
| Favoriten | Im aktuellen Browser gespeicherte Fahrzeuge |
| Fahrzeugdetails | Ausstattung und interaktive Karosserieübersicht mit Beispielangaben |
| Verkäuferbereich | Kontogebundene Inseratsentwürfe und Demo-Besichtigungsanfragen mit serverseitiger Speicherung |
| Bedienung | Responsive Gestaltung, native Dialoge, Tastaturbedienung und reduzierte Bewegung |

Katalogpreise werden in **EUR** angegeben. Es handelt sich um Demonstrationswerte, nicht um Live-Währungsumrechnungen oder Marktwertschätzungen. Neue Entwürfe speichern EUR ausdrücklich; ältere Entwürfe ohne Währungsfeld behalten ihre ursprüngliche TRY-Kennzeichnung.

## Technologien

**TypeScript · React 19 · Vinext · Vite · Cloudflare Workers · D1/SQLite · Drizzle ORM · Zod · Lucide**

Vinext stellt einen Next.js-kompatiblen App Router bereit. Die Anwendung startet mit Vinext/Vite, nicht mit `next dev`. Drizzle greift auf Cloudflare D1 zu; lokal werden SQLite-Dateien verwendet. Diese Version verwendet weder PostgreSQL noch Docker.

## Lokal starten

Voraussetzungen: **Node.js 24** und npm ab Version 10.

```bash
npm ci
npm run db:setup
npm run dev
```

Anschließend **http://127.0.0.1:5173/** öffnen. Bei einer Rückfrage zur Datenbankmigration `Y` eingeben. Das Entwicklungsterminal geöffnet lassen.

Falls Node 24 auf macOS über Homebrew installiert wurde, lässt es sich für das aktuelle Terminal so auswählen:

```bash
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

Der lokale Anmeldelink erstellt eine **ausschließlich auf localhost verfügbare Demo-Sitzung** für einen simulierten Benutzer. Es werden weder ein echtes Konto noch ein Passwort benötigt. Entwürfe und Demo-Anfragen liegen in `.wrangler/state`, Favoriten im Browser. In gehosteten Umgebungen liefert die Hosting-Plattform die Identität. Den lokalen Demo-Anmeldeserver nicht öffentlich bereitstellen.

## Prüfung

```bash
npm run check
npm test
npm run db:setup
npm run test:api
npm run build
npm audit
```

Vor `npm run test:api` einen laufenden Entwicklungsserver stoppen. Der Test nutzt Port 5173 und entfernt seine temporären Einträge. Geprüft werden Seiten- und Bildauslieferung, Demo-Anmeldung, Authentifizierung, Zurückweisung gefälschter Identitätsheader, Eingabevalidierung, fremde Origins, Speicherung und geschützte Löschvorgänge.

GitHub Actions führt die Prüfungen und den Produktions-Build mit Node 24 aus. Die CI-Ergebnisse erscheinen nach dem Push. Die beigefügte Abhängigkeitsprüfung meldete am **9. November 2026 null bekannte Sicherheitsmeldungen**. Das ist ein datierter Prüfstand, keine dauerhafte Sicherheitsgarantie. Weitere Einzelheiten: [Abnahmeprotokoll](docs/ACCEPTANCE.md) und [Abhängigkeitspflege](docs/SECURITY_UPDATE.md).

## Aufbau

| Pfad | Aufgabe |
|---|---|
| `app/page.tsx` | Suche, Fahrzeugdetails, Vergleich und Garage |
| `app/api/garage/route.ts` | Authentifizierte Entwurfs-/Anfrageoperationen und Eigentumsprüfung |
| `lib/cars.ts` | Beispielkatalog, Filter und Textparser |
| `lib/words.ts` | Oberflächentexte in drei Sprachen |
| `db/` und `drizzle/` | Datenbankschema und SQL-Migrationen |
| `public/photos/` | Lokal ausgelieferte Beispielfotos |
| `tests/` | Katalog-, Übersetzungs- und API-Tests |

## Umfang

VELORA ist eine funktionsfähige **Portfolio-Demo**. Öffentliche Inseratsveröffentlichung, echte Verkäufernachrichten, Zahlungen, Uploads, Moderation, E-Mail-Versand und eine Live-LLM-Anbindung sind nicht implementiert. Die Textsuche basiert auf Regeln, nicht auf einem LLM. Besichtigungsanfragen senden keine Benachrichtigung. Fotos, Fahrzeugdaten und Zustandsangaben sind Beispiele, keine geprüften Verkaufsangebote oder Gutachten.

Das Titelbild ist eine Automobilfotografie, kein Screenshot der Anwendung. [Bildquellen](docs/ASSETS.md). Kundendaten, Umgebungsgeheimnisse, lokale Datenbanken und generierte Abhängigkeiten gehören nicht ins Repository.

## Lizenz

Der ursprüngliche Projektcode steht unter der [MIT-Lizenz](LICENSE). Übernommener Drittcode behält seine Hinweise; für Fotos gelten die ursprünglichen Lizenzen. Siehe [NOTICE.md](NOTICE.md).
