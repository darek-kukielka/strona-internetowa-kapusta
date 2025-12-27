# Plan implementacji strony wizytówki - Sprzedaż Kapusty

## Przegląd projektu

Prosta, jednostronicowa strona wizytówka dla działalności sprzedającej kapustę. Strona musi być:
- Schludna i przejrzysta
- Bez animacji (dla starszych użytkowników)
- W kolorystyce biało-zielonej
- Zoptymalizowana pod SEO

---

## Struktura strony

```
┌─────────────────────────────────────┐
│           NAGŁÓWEK (Header)         │
│   Logo + Nawigacja (kotwice)        │
├─────────────────────────────────────┤
│           HERO SECTION              │
│   Główne hasło + CTA                │
├─────────────────────────────────────┤
│           O NAS                     │
│   Krótki opis działalności          │
├─────────────────────────────────────┤
│           OFERTA                    │
│   Produkty z cenami                 │
├─────────────────────────────────────┤
│           KONTAKT                   │
│   Telefon, Email, Mapa Google       │
├─────────────────────────────────────┤
│           STOPKA (Footer)           │
│   Copyright + podstawowe info       │
└─────────────────────────────────────┘
```

---

## Kroki implementacji

### Krok 1: Konfiguracja SEO i struktury projektu

**Pliki do utworzenia/modyfikacji:**
- `src/layouts/Layout.astro` - rozbudowany layout z pełnym SEO
- `public/robots.txt` - instrukcje dla robotów
- `public/sitemap.xml` - mapa strony
- `astro.config.mjs` - konfiguracja Astro z sitemap

**Elementy SEO do dodania:**
- Meta title z lokalnymi słowami kluczowymi
- Meta description (150-160 znaków)
- Open Graph tags (og:title, og:description, og:image, og:type)
- Twitter Card tags
- Canonical URL
- Structured Data (JSON-LD) - LocalBusiness schema
- Hreflang (lang="pl")
- Favicon

### Krok 2: Paleta kolorów i style globalne

**Plik:** `src/styles/global.css`

```css
:root {
  /* Zielenie */
  --color-primary: #2E7D32;        /* Główny zielony */
  --color-primary-dark: #1B5E20;   /* Ciemniejszy zielony */
  --color-primary-light: #4CAF50;  /* Jaśniejszy zielony */

  /* Neutralne */
  --color-white: #FFFFFF;
  --color-light: #F5F5F5;
  --color-gray: #757575;
  --color-dark: #212121;

  /* Typografia */
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-base: 18px;          /* Większy dla starszych */
  --line-height: 1.6;
}
```

**Zasady dostępności:**
- Minimalna wielkość fontu: 18px
- Wysoki kontrast kolorów (WCAG AA)
- Czytelne linki (podkreślenie)
- Duże obszary klikalności (min. 44x44px)

### Krok 3: Komponenty Astro

**Pliki do utworzenia:**

1. **`src/components/Header.astro`**
   - Logo (tekst lub prosta grafika)
   - Nawigacja z kotwicami (#o-nas, #oferta, #kontakt)
   - Sticky header
   - Responsywne menu (hamburger na mobile)

2. **`src/components/Hero.astro`**
   - Nagłówek H1 z głównym słowem kluczowym
   - Krótki opis
   - Przycisk CTA (np. "Zobacz ofertę" lub "Zadzwoń")

3. **`src/components/About.astro`**
   - Sekcja "O nas"
   - Nagłówek H2
   - 2-3 akapity o działalności
   - Opcjonalnie: lista zalet (świeże, lokalne, itp.)

4. **`src/components/Offer.astro`** ⭐ KLUCZOWA SEKCJA
   - Nagłówek H2
   - Karty produktów:
     - Nazwa produktu
     - Cena (za kg/sztukę)
     - Krótki opis
   - Czytelna tabela lub grid
   - Informacja o minimalnym zamówieniu (opcjonalnie)

5. **`src/components/Contact.astro`** ⭐ KLUCZOWA SEKCJA
   - Nagłówek H2
   - Numer telefonu (klikalny - tel:)
   - Email (klikalny - mailto:)
   - Adres
   - Mapa Google (iframe)
   - Godziny otwarcia

6. **`src/components/Footer.astro`**
   - Copyright
   - Podstawowe dane kontaktowe
   - Linki do sekcji

### Krok 4: Główna strona

**Plik:** `src/pages/index.astro`

- Import wszystkich komponentów
- Semantyczna struktura HTML5
- Właściwa hierarchia nagłówków (H1 > H2 > H3)

### Krok 5: SEO - Dane strukturalne

**JSON-LD Schema dla LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nazwa Firmy - Sprzedaż Kapusty",
  "description": "Opis działalności",
  "telephone": "+48 XXX XXX XXX",
  "email": "email@example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ulica",
    "addressLocality": "Miasto",
    "postalCode": "00-000",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXX",
    "longitude": "XX.XXXX"
  },
  "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
  "priceRange": "$$"
}
```

**Product Schema dla oferty:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kapusta biała",
  "description": "Świeża kapusta biała",
  "offers": {
    "@type": "Offer",
    "price": "2.50",
    "priceCurrency": "PLN",
    "availability": "https://schema.org/InStock"
  }
}
```

### Krok 6: Optymalizacja wydajności

- Minimalna ilość CSS (bez frameworków)
- Brak JavaScript (lub minimalny)
- Optymalizacja obrazów (WebP, lazy loading)
- Kompresja HTML
- Odpowiednie cache headers

### Krok 7: Pliki statyczne

**Do utworzenia:**
- `public/favicon.svg` - ikona kapusty
- `public/robots.txt`
- `public/og-image.jpg` - obraz do social media (opcjonalnie)

---

## Struktura plików po implementacji

```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Offer.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css

public/
├── favicon.svg
├── robots.txt
└── og-image.jpg (opcjonalnie)
```

---

## Słowa kluczowe SEO (propozycje)

**Główne:**
- sprzedaż kapusty
- kapusta na sprzedaż
- świeża kapusta

**Lokalne (do uzupełnienia po podaniu lokalizacji):**
- kapusta [miasto]
- sprzedaż kapusty [region]
- gdzie kupić kapustę [miasto]

**Long-tail:**
- kapusta biała hurt
- kapusta kiszona domowa
- świeże warzywa prosto od rolnika

---

## Pytania do uzupełnienia przed implementacją

1. **Nazwa firmy/gospodarstwa** - do logo i SEO
2. **Lokalizacja** - miasto, adres, współrzędne GPS
3. **Numer telefonu** - do kontaktu
4. **Adres email** - do kontaktu
5. **Lista produktów z cenami** - np.:
   - Kapusta biała - X zł/kg
   - Kapusta czerwona - X zł/kg
   - Kapusta kiszona - X zł/kg
   - itp.
6. **Opis działalności** - kilka zdań o firmie
7. **Godziny otwarcia** - jeśli są
8. **Czy jest logo** - lub mam utworzyć tekstowe?
