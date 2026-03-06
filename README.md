# Flixu Translate Website

Dieses Repository enthält den Quellcode für die Flixu Translate Website, basierend auf [Astro](https://astro.build/).

## 🚀 Entwicklung (Development)

Folge diesen Schritten, um das Projekt lokal einzurichten und zu starten.

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18 oder höher empfohlen)
- `npm` (wird normalerweise mit Node.js installiert)

### Installation

1.  Klone das Repository:

    ```bash
    git clone <DEIN_REPO_URL>
    cd flixu-translate-website
    ```

2.  Installiere die Abhängigkeiten:
    ```bash
    npm install
    ```

### Development Server starten

Starte den lokalen Entwicklungsserver mit:

```bash
npm run dev
```

Der Server läuft standardmäßig unter [http://localhost:4321](http://localhost:4321). Änderungen am Code werden automatisch neu geladen.

---

## ☁️ Deployment (Vercel)

Wir deployen dieses Projekt auf [Vercel](https://vercel.com). Das Deployment ist dank der Astro-Integration sehr einfach.

### Schritte für das Deployment

1.  **Projekt importieren:**
    - Gehe in dein [Vercel Dashboard](https://vercel.com/dashboard).
    - Klicke auf **"Add New..."** und wähle **"Project"**.
    - Importiere das Git-Repository dieses Projekts.

2.  **Konfiguration prüfen:**
    - Vercel sollte das Framework automatisch als **Astro** erkennen.
    - Standard-Einstellungen:
      - **Build Command:** `astro build`
      - **Output Directory:** `dist`
      - **Install Command:** `npm install`

3.  **Environment Variables (Umgebungsvariablen):**
    - Stelle sicher, dass alle notwendigen Umgebungsvariablen (wie in `.env` definiert) in den Vercel-Projekteinstellungen unter **Settings > Environment Variables** eingetragen sind.

4.  **Deploy:**
    - Klicke auf **"Deploy"**. Vercel baut die Seite und stellt sie bereit.

### Automatische Deployments

Nach dem ersten Deployment wird jeder Push auf den `main` Branch (oder den konfigurierten Production-Branch) automatisch ein neues Deployment auf Vercel auslösen.
# marketing-website
